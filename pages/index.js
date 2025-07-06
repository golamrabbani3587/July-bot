import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const recognitionRef = useRef(null);
  const [userInput, setUserInput] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
      requestSpeechPermission();
    }
  }, []);

  const requestSpeechPermission = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(
        "Please allow speech synthesis to work."
      );
      window.speechSynthesis.speak(utterance);
    }
  };
  const speakText = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);

      utterance.onstart = () => {
        setIsSpeaking(true);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
      };
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech not supported in your browser.");
    }
  };

  const getOpenAIResponse = async (question) => {
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    return data.answer || "Sorry, I couldn't understand that.";
  };

  const typeMessage = async (fullText) => {
    setTyping(true);
    let currentText = "";
    speakText(fullText);
    for (let i = 0; i < fullText.length; i++) {
      currentText += fullText[i];
      setChatMessages((prev) => [...prev.slice(0, -1), `🤖 ${currentText}_`]);
      await new Promise((r) => setTimeout(r, 25));
    }

    setChatMessages((prev) => [...prev.slice(0, -1), `🤖 ${fullText}`]);
    setTyping(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.lang = "en-US";

        recognitionRef.current.onstart = () => setIsListening(true);
        recognitionRef.current.onend = () => setIsListening(false);

        recognitionRef.current.onresult = async (event) => {
          const text = event.results[0][0].transcript;
          setTranscript(text);
          setChatMessages((prev) => [...prev, text]);

          const answer = await getOpenAIResponse(text);
          setChatMessages((prev) => [...prev, "🤖"]);
          await typeMessage(answer);
        };
      }
    }
  }, []);
  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setTranscript("");
      recognitionRef.current.start();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userInput.trim()) {
      setChatMessages([...chatMessages, userInput]);
      setUserInput("");
      const answer = await getOpenAIResponse(userInput);
      setChatMessages((prev) => [...prev, "🤖"]);
      await typeMessage(answer);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-sky-100">
      {/* Header */}
      <header className="w-full text-center py-6 bg-white shadow-sm border-b border-gray-100">
        <h1 className="text-3xl font-bold text-indigo-600">
          🤖 Welcome to <span className="text-sky-600">July BOT</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Ask anything about the July Revolution
        </p>
      </header>

      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto p-4 gap-6">
        {/* Microphone Section */}
        <div className="w-full md:w-1/3 flex items-start">
          <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center border border-blue-100 w-full">
            <button
              onClick={toggleListening}
              disabled={isSpeaking}
              className={`w-24 h-24 flex items-center justify-center rounded-full text-white text-4xl font-bold transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed
              ${
                isListening
                  ? "animate-pulse bg-gradient-to-r from-red-400 to-pink-500 ring-4 ring-red-300"
                  : "bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
              }`}
            >
              {/* Microphone SVG Icon with Animation */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v4m4 4v4a4 4 0 01-8 0V12m4-4a4 4 0 014 4v4a4 4 0 01-8 0V8a4 4 0 014-4z"
                />
              </svg>
            </button>

            <p className="mt-4 text-gray-600 text-sm transition-all duration-300">
              {isListening
                ? "Listening... Speak now"
                : transcript
                ? `🗣️ "${transcript}"`
                : isSpeaking
                ? "🔊 Speaking response..."
                : "Tap to start speaking"}
            </p>

            {isSpeaking && (
              <div className="mt-4 flex items-end gap-1 h-6">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 rounded bg-blue-500"
                    style={{
                      height: `${Math.random() * 20 + 10}px`,
                      animation: `bounce ${
                        0.5 + i * 0.1
                      }s infinite ease-in-out alternate`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Chat Section */}
        <div className="w-full md:w-2/3 flex flex-col bg-white rounded-2xl shadow-xl border border-slate-200 max-h-[calc(100vh-180px)]">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {chatMessages.map((msg, idx) => {
              const isBot = msg.startsWith("🤖");
              return (
                <div
                  key={idx}
                  className={`max-w-[80%] px-4 py-2 rounded-xl shadow-md text-sm ${
                    isBot
                      ? "ml-auto bg-yellow-100 text-yellow-900 text-right"
                      : "bg-blue-100 text-blue-900"
                  }`}
                >
                  {msg.replace("🤖 ", "")}
                </div>
              );
            })}
          </div>
          <div className="p-4 border-t border-gray-200">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask me something..."
                className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                disabled={typing}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 focus:outline-none"
              >
                {/* Microphone Icon for Submit */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v4m4 4v4a4 4 0 01-8 0V12m4-4a4 4 0 014 4v4a4 4 0 01-8 0V8a4 4 0 014-4z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
