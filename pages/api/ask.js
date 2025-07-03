import { getAnswerFromPrompt } from "../../lib/prompt";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "No question provided" });
  }

  const answer = await getAnswerFromPrompt(question);
  res.status(200).json({ answer });
}
