// lib/prompt.js

import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY2,
});

const baseContext = `
You are a helpful assistant. Use ONLY the context provided below to answer the question. answer for basic question like hi hello how are you.

---BEGIN CONTEXT---.
The July Revolution,[a] also known as the Student-People's Uprising,[b] was a pro-democracy mass uprising in Bangladesh in 2024.[c] It began as a quota reform movement in early June 2024, led by the Students Against Discrimination, after the Bangladesh Supreme Court invalidated the government's 2018 circular regarding job quotas in the public sector.

The movement escalated into a full-fledged mass uprising after the government carried out mass killings of protesters, known as the July massacre, by late July.[13] By early August, the movement evolved into a non-cooperation movement, ultimately leading to the ouster of the then-prime minister, Sheikh Hasina, who fled to India.[10] Hasina's ouster triggered a constitutional crisis, leading to the formation of an interim government led by the country's only Nobel laureate, Muhammad Yunus, as the chief adviser.

Names
July Revolution and Student-People's Uprising are the two most widely used names of the movement. On 3 August, one of the coordinators of the anti-discrimination student movement, Nahid Islam said, "We haven't gone to August yet. We will go to August only after this July killings are judged."[14] As a result, the movement is known as the "July Revolution".[15] On the other hand, on 11 September, in an address to the nation, the chief adviser Muhammad Yunus referred to the events as the "July Revolution" and the "Student–Worker–People's uprising" against fascism.[16]

Other names of the protests include July Uprising, Monsoon Revolution,[17][18][19][20] 2024 Bangladesh Revolution,[21] and Gen Z Revolution.[22][23][24]

Background
See also: Democracy in Bangladesh
After the Awami League was elected in the 2008 elections, they abolished the caretaker government system.[25] After that, it won three more consecutive national elections. There were allegations of massive rigging in the national elections held in 2014, 2018 and 2024. Meanwhile, except for the 2018 election, the remaining two elections were boycotted by most political parties in Bangladesh. During this time, the government carried out massive torture and arrests on their opponents, the top leaders of the opposition parties were sidelined by sentencing them in various cases.[26] At this time, dissemination of information in all media in Bangladesh was strictly regulated and freedom of public expression was strictly regulated through laws such as the Digital Security Act, 2018.[27][28] Since taking office in 2009, Sheikh Hasina's Awami League has largely failed to fulfill job creation promises. While the public sector has expanded with better pay and benefits, political influence determined access to these jobs.[29]

During this period, the government was reported to have used law enforcement forces and Awami League affiliates, particularly the Chhatra League, to manage and suppress various movements, including non-political ones.[30] Allegations of violence and repression involving the Chhatra League were reported on multiple institutions and university campuses.[31] Over the last three terms, allegations of corruption, money laundering, declining reserves,[32] and irregularities in the banking sector were raised against Awami League leaders at various levels of government.[33] These issues were associated with rising living costs and growing public dissatisfaction.[34]

History
Main article: Timeline of Student–People's uprising
Quota reform movement
Further information: 2024 Bangladesh quota reform movement
In 2018, a mass movement was held in Bangladesh demanding quota reform in government jobs, led by the General Students' Rights Protection Council. The main objective of this movement was to reform the ongoing quota system in Class I and II government jobs. Following the continuation of the agitation and pressure from the students, the government announced the abolition of the 46-year-old quota system.

However, in 2021, seven children of freedom fighters, including Ahidul Islam, filed a writ petition in the High Court challenging this decision. Finally, on 5 June 2024, a High Court bench of Justice KM Kamrul Quader and Justice Khizir Hayat declared the decision to scrap the quota system invalid. Immediately after the announcement of the verdict, students started protesting against this verdict in various universities of the country.

The movement became more intense in July, with students staging blockades including the "Bangla Blockade". During this time, police used excessive force to quell the agitation led to clashes and a student named Abu Sayed was shot dead by the police in Rangpur. This incident intensified the movement and increased tension across the country.[35]

After that, the movement across the country including Dhaka became violent and many casualties were caused by the attacks of law enforcement agencies, Chhatra League and Jubo League in various places.[36] At this time, curfew was imposed across the country and the internet was shut down. The hearing date of the Appellate Division was later brought forward due to the agitation.[37]

The anti-discrimination student movement gained momentum when private university students joined on 16 July. In response to the escalating quota reform movement, the government mandated the closure of all educational institutions on 16 July 2024. Subsequently, on 17 July, students residing in dormitories at public universities across the nation, including Dhaka University, were compelled to vacate their accommodations. However, due to the permanent residency of a significant portion of private university students in Dhaka, their presence within the city noticeably increased on 18 July.[38]

On this date, a substantial confrontation occurred between law enforcement and students affiliated with Primeasia University Brac University and East West University in the Rampura area. Simultaneously, students from AIUB, North South University, Independent University, Bangladesh, Dhaka International University and UIU staged demonstrations along Kuril Bishwa Road and Pragati Sarani. Concurrently, protests were initiated by students from Ahsanullah University of Science and Technology, Bangladesh University of Textiles, Southeast University in Mohakhali area and Northern University in the Uttara region.[39][40][41][42]

Razakar slogans
Main article: Razakar slogans

Students of the University of Rajshahi using the Razakar slogans on 14 July 2024 at 11:30 p.m. (BST)
On 14 July, during a press conference, Sheikh Hasina responded to a question about the protests stating,

If the grandchildren of freedom fighters don't get quota benefits, will those then go to the grandchildren of the Razakars? That's my question to the countrymen.[43]
In response to Sheikh Hasina's comment, in the early hours of 15 July,[44] students began using slogans such as,

তুমি কে? আমি কে?
রাজাকার, রাজাকার।
কে বলেছে? কে বলেছে?
স্বৈরাচার, স্বৈরাচার!
lit. 'Who are you? Who am I?
Razakar, Razakar.
Who said it? Who said it?
Autocrat, Autocrat!'.
Protesters argued that Hasina's statement indirectly labelled them as "Razakars" and demeaned them for advocating for quota reform, which led them to adopt the slogan.

Razakar slogans
Main article: Razakar slogans

Students of the University of Rajshahi using the Razakar slogans on 14 July 2024 at 11:30 p.m. (BST)
On 14 July, during a press conference, Sheikh Hasina responded to a question about the protests stating,

If the grandchildren of freedom fighters don't get quota benefits, will those then go to the grandchildren of the Razakars? That's my question to the countrymen.[43]
In response to Sheikh Hasina's comment, in the early hours of 15 July,[44] students began using slogans such as,

তুমি কে? আমি কে?
রাজাকার, রাজাকার।
কে বলেছে? কে বলেছে?
স্বৈরাচার, স্বৈরাচার!
lit. 'Who are you? Who am I?
Razakar, Razakar.
Who said it? Who said it?
Autocrat, Autocrat!'.[45]
Protesters argued that Hasina's statement indirectly labelled them as "Razakars" and demeaned them for advocating for quota reform, which led them to adopt the slogan.[46]


Judgment of the Appellate Division on the case
Further information: Ohidul Islam and others v. The Government of Bangladesh and others
On 4 July, the Appellate Division, on 9 June declared the government's decision to cancel the Muktijoddha quota system in the first and second category of government jobs invalid without hearing the state party's application seeking a stay of the High Court's judgment. And upheld the verdict of the High Court for the time being. The state party is asked to file 'leave to appeal'. At that time, the then Chief Justice Obaidul Hasan said, the movement is happening, so be it. Do you change the verdict of the High Court by protesting on the streets?[49]

Later on 10 July, the Appellate Division issued a four-week status quo order on the High Court verdict along with some observations and directions in view of the petition filed by the state party and two students.[50] 7 August had been fixed for the next hearing.[51]

When the full judgment of the High Court was published on 14 July, leave to appeal was filed by the state and two students.[52] Based on the application of Attorney General AM Amin Uddin on 18 July, the Chamber Court of the Appellate Division of the Supreme Court, Justice M Inayetur Rahim fixed the date of hearing the case on Sunday, 21 July.[53]

On 21 July, the Appellate Division reinstated the quota and quashed the judgment given by the High Court. At the same time, even though it is a policy-making matter for the government, in the interest of complete justice according to the constitution, the court ordered 93 percent merit-based recruitment in government jobs. On this day, for the first time in the history of Bangladesh, the proceedings of the Supreme Court were held under curfew.[54]

Massacre
Further information: July massacre
By early August 2024, the unrest resulted in a significant death toll. Initial official reports claimed 215 deaths,[55] but a United Nations investigation later confirmed that at least 650 people were killed.[56] In August, the Interim Government's Health and Welfare Adviser, Nurjahan Begum, reported that over 1,000 individuals had been killed in the uprising and more than 400 students had lost their eyesight. Additionally, more than 20,000 were injured, and over 11,000 were arrested nationwide. Among the deceased were at least 32 children, according to UNICEF.[57] The exact number of casualties remains uncertain due to government restrictions on information, including reports that hospitals were barred from sharing data, CCTV footage was confiscated, and some victims were buried without identification. As of September the death toll is over one thousand.[58][59]

The massacre, which have been referred to as the July massacre prompted significant criticism and calls for accountability. The University Teachers Network held a demonstration at the University of Dhaka, expressing concern over the violence.[60]

Protibadi Nagorik Somaj condemned the killings during the movement, describing them as a massacre and expressing doubts about the judiciary's ability to deliver impartial justice, as the inquiry commission was formed by the fifth Hasina government, which is also accused of involvement in the massacre. Some academics rejected the government-established public inquiry commission, calling for intervention from the United Nations.[61]

In Sylhet, Nagorik Alem Somaj organized a protest criticizing the killings.[62]

Sheikh Hasina, in her first public statement published through his son Sajeeb Wazed, since being ousted from power, called for an investigation into the deaths during the protests, while also asserting that the police and the Awami League were victims of "terrorist aggression."[63]

Govinda Pramanik, president of the Bangladesh National Hindu Grand Alliance, alleged that the government had killed over 500 innocent people to maintain power, urging that the events be prosecuted at the International Crimes Tribunal in Bangladesh.[64]

Several labor unions and organizations also criticized the killings, demanding justice for those who lost their lives during the July massacre.[65]

A protest march under the banner of Chittagong University Chhatra Dal in Chattogram demanded prosecution against Sheikh Hasina for the massacre.[66]

The Left Democratic Alliance, Jatiya Samajtantrik Dal and the Anti-Fascist Left Front criticized the Awami League government rule, urging financial compensation for the families of those killed in the protests and free medical care for the injured.[67] Similarly, the National Democratic Party demanded ৳10 million in compensation for the families of those who died during the massacre, along with a government job for at least one member of each affected family.[68]

Islami Andolan Bangladesh called for an independent tribunal to ensure justice for the victims of the massacre.[69] In addition, the People's Rights Party called for all political parties within the Grand Alliance, including Awami League, to be barred from future elections.[70]


Non-cooperation movement
Main article: Non-cooperation movement (2024)
On 4 August, thousands of protesters gathered at the Shahbag intersection in the morning, obstructing it as a form of civil disobedience to demand the government's resignation.[71]

Following the start of the Non-cooperation movement, various left-wing organisations in Bangladesh took part in protests. The Proletarian Party of East Bengal for example began a graffiti campaign within the city following the fall of Hasina and the Awami League aimed at criticising the army and calling for an end to military rule.[72] Other far-left student groups also took part in the revolution, such as the Revolutionary Student-Youth Movement, a Marxist–Leninist-Maoist organisation.[73]

At least 97 people died nationwide in confrontations, shootings, and pursuits related to the Non-cooperation movement. Fourteen police officers were killed across the country, with 13 deaths occurring at the Enayetpur police station in Sirajganj. Another officer was killed in Eliotganj, Comilla.[74] Twenty-seven police facilities were attacked and vandalized, and a hundred policemen were injured in these incidents, according to an official statement by the Bangladesh Police.[75]

In Dhaka, unidentified individuals set fire to and damaged various vehicles, including cars, ambulances, motorcycles, and buses, at the Bangabandhu Sheikh Mujib Medical University during the protests.[76] Around 4.30 pm, eleventh-grade student Golam Nafiz was shot by the police in Dhaka Farmgate area, whose photo of being taken to the hospital on rickshaw went viral on internet, creating high outrage by netizens.[77] By 12:00 pm, users across the country reported internet inaccessibility.[78] The government ordered the closure of Facebook, Messenger, WhatsApp, Instagram, and all other Meta-owned services, directing internet service providers to comply after 1:00 pm.[79]

The government declared a three-day general holiday starting from 5 August, during which banks will also remain closed.[80] The Anti-Discrimination Students Movement confirmed their intention to march towards Dhaka on 6 August to demand the Prime Minister's resignation.[81] The Bangladesh University Teachers' Network proposed a framework for an interim government, suggesting it be composed of teachers, judges, lawyers, and representatives from civil society, reflecting the views of various civil and political groups for a democratic transition.[82]

Asif Mahmud, a coordinator of the Anti-Discrimination Students Movement, announced that their march to Dhaka had been rescheduled to 5 August, instead of 6 August. He called on protesters and civilians nationwide to march toward the capital and participate in civil disobedience.[83] Several former Bangladesh Army officers, including former chief of staff Iqbal Karim Bhuiyan, held a press briefing urging soldiers to return to camps and refrain from getting involved in the political crisis or being used against civilians.[84][85]

Retired Brig. Gen. M. Sakhawat Hossain stated that there was significant unease among the troops, which likely pressured the chief of army staff as soldiers were deployed and witnessing the events. Retired officers, including Brig. Gen. Mohammad Shahedul Anam Khan, defied the curfew on Monday and took to the streets, with Khan noting that the army did not intervene. In response to calls for a march to Dhaka, DMP Commissioner Habibur Rahman warned of zero tolerance, stating that legal action would be taken against curfew violators.[86]

The Anti-discrimination Students Movement rejected the curfew and encouraged everyone to march towards the Ganabhaban and Prime minister's office.[87]

In the morning of 5 August 2024,[88] units of the Dhaka Metropolitan Police and Armed Police Battalion would be sent to hold the Chankharpul area of Dhaka and disperse the approaching participants of the Long March to Dhaka, at first the police were firing tear gas, sound grenades, and rubber bullets.[88] However, some like Md. Sujon Hossain, constable[89][90] of the Armed Police Battalion, would fire live bullets indiscriminately at the protestors,[88][89] leading to the deaths of seven people.[89]

Reports indicated Sheikh Hasina had been moved to a secure location.[91] On the same day, up to 135 people, including 24 police officers, were killed during protests.[92]

Resignation of Sheikh Hasina
Main article: Resignation of Sheikh Hasina
Hasina resigned on 5 August 2024, as large crowds of demonstrators surrounded the prime minister's residence.[93] Her resignation was announced by General Waker-uz-Zaman, the Chief of the Army Staff.[d] Later that day, Hasina fled to India in a chaotic departure, first by car, then by helicopter, and finally by plane.[93] She left with no resignation speech.[93]

Hasina reportedly flew in a Bangladesh Air Force C-130 transport to Hindon Air Force base in Ghaziabad, India, where she was received by the Indian national security advisor Ajit Doval along with other senior military officials.[e] Indian foreign minister S. Jaishankar told the Parliament, "At very short notice, she requested approval to come for the moment to India."[93] Her son, Sajeeb Wazed, initially said that she would not return to politics and planned to "stay in Delhi for a little while" before her next destination, but subsequently said on 7 August that she and the Awami League would remain active in the Bangladeshi political scene[102][103] and that she would return to the country once elections were declared.[104] He also insisted that Sheikh Hasina was still the prime minister, saying that she was unable to formally submit her resignation after being forced to flee from the protesters.[105] Hasina had hoped to go to London, but the United Kingdom reportedly rebuffed initial overtures seeking political asylum. She reportedly considered seeking temporary residence in the United Arab Emirates, Saudi Arabia, Belarus, or Qatar. Because her nephew lives in Finland, that country was speculated as a possible destination. Although Sajeeb Wazed lives in the U.S., she is considered unlikely to seek asylum there, as the U.S. government criticized her rule in Bangladesh.[106]

Hasina was living in a secret location in India under tight security as of August 2024.[107] Sajeeb Wazed said that the protests which led to her resignation had support from a foreign intelligence agency, without naming any country.[108] In a statement published in the Indian media on 11 August, she accused the United States of influencing her resignation, and previously accused the United States of conspiring to oust her in the Jatiya Sangsad.[109] However, Wazed called the statement "false and fabricated" and said Hasina "did not give any statement before or after leaving Dhaka".[110] The White House also denied allegations of any US involvement.[111] On 13 August, Hasina released her first confirmed statements since her overthrow published by Wazed Joy calling for an investigation into the killings made during the protests, while insisting that police and the Awami League were also victims of "terrorist aggression".[112]

Outside Bangladesh

Bangladeshis in Ancona, Italy protesting in support of the movement.
In India, the All India Democratic Students Organisation staged a protest in Kolkata in support of the Bangladeshi students.[f]

In Nepal, on 20 July, the All Nepal National Free Students Union held a rally in solidarity with the quota reform movement in Bangladesh and to protest the killing of students.[116]

The Bangladeshi diaspora in Italy,[117] Canada,[118] France,[119] Qatar,[120] the United Arab Emirates, the Maldives, the United Kingdom and Malta[121] protested in solidarity with the protesters in Bangladesh.[122]

In the UAE, a demonstration by Bangladeshi labourers also opposed the suppression of protesters, however, several of them were charged with holding protests and violating the UAE's laws against public demonstrations.[123] Following a trial on 21 July, three defendants were sentenced to life imprisonment for "rioting", while 54 others received sentences ranging from 10 to 11 years and were ordered to be deported upon release.[124][125] Human Rights Watch condemned their arrest, citing the country's restrictive laws and labour conditions as violations of human rights.[126] A Bangladeshi lawyer, Wolora Afrin Rasna was hired by the country's interim government to secure the release of those imprisoned. Md. Touhid Hossain stated that Muhammad Yunus vowed that he would personally approach senior Emirati authorities to seek the release of those detained, and would also contact the "concerned government", if necessary.[127] The detainees were later pardoned by UAE president Mohamed bin Zayed Al Nahyan on 3 September.[128]

The Ministry's Spokesperson Fathimath Rifath said that expatriate workers in the Maldives are barred from political involvement in such an act, which amounted to a visa violation.[129]

Fall of the government
Further information: Resignation of Sheikh Hasina
On 4 August, thousands of protesters convened at Dhaka's Shahbag intersection in the morning, obstructing it as a form of civil disobedience to demand the resignation of the government.[130] This was followed by hundreds of casualties.[131] The following day, the protesters called for the Long March to Dhaka in defiance of a nationwide curfew to press Sheikh Hasina to resign.[132] The long march of crowded people to Ganabhaban forced her to resign. She, along with her sister Sheikh Rehana, then fled the country to India via military on 5 August 2024.[133][134]

Following the overthrow of the Awami League, the Revolutionary Workers Party of Bangladesh organised a student assembly to meet with the interim government and consult on the policies of said government, meeting with parties like the BNP.[135] While the Left Democratic Alliance held a conference on 11 August calling for the reconstitution of the Election Commission to initiate national parliamentary elections.[136] The LDA called for "an immediate overhaul of the electoral system, including the introduction of a “no" vote option, recall of elected representatives failing to meet public expectations, and the adoption of a proportional representation electoral system."[136] In addition, as the interim government was formed in Bangladesh, it sat with various political parties on 5 October meeting with the BNP, Jamaat, Gantantra Mancha, Left Democratic Alliance, Hefazat-e-Islam, and Islami Andolan attending.[137]

Death toll
Main articles: July massacre and List of people who died in the July massacre
By early August 2024, the unrest resulted in a significant death toll. Initial official reports claimed 215 deaths,[138] but a United Nations investigation later confirmed that at least 650 people were killed.[56] In August, the Interim Government's Health and Welfare Adviser, Nurjahan Begum, reported that over 1,000 individuals had been killed in the uprising and more than 400 students had lost their eyesight. Additionally, more than 20,000 were injured, and over 11,000 were arrested nationwide. Among the deceased were at least 32 children, according to UNICEF.[57] In January 2025, the interim government of Bangladesh published a gazette containing the initial finalized list of 834 recorded deaths.[139] However, the actual number of casualties may be higher due to restrictions imposed by the previous government, which included barring hospitals from sharing data, confiscating CCTV footage, and burying some victims without proper identification.[58][59]

On 12 February 2025, the United Nations Office of the High Commissioner for Human Rights published a thorough report on the events that took place from 1 July to 5 August 2024, which suggested a death toll of 1,400.

Selected individual deaths
Abu Sayed
Abu Sayed (Bengali: আবু সাঈদ; c. 1999 – 16 July 2024) was a Bangladeshi student activist and revolutionary who was shot dead by the Bangladesh Police on 16 July 2024,[140][141][142] while participating in the 2024 Bangladesh quota reform movement. Abu Sayed was a student of Begum Rokeya University and was involved in the protest in front of the university when the police engaged in lathi charges and opened fire on the students.[143][144]

Mir Mugdho
Mir Mahfuzur Rahman Mugdho (Bengali: মীর মাহফুজুর রহমান মুগ্ধ; 9 October 1998 – 18 July 2024) was a Bangladeshi student, freelancer,[145] and activist in the 2024 quota reform movement,[146][147][148] who was shot dead while distributing food, water and biscuits during the protest.[149][150] His death is widely recognised as a pivotal point in the July Revolution.[151][152]

Golam Nafiz
Md. Golam Nafiz (Bengali: মো. গোলাম নাফিজ; 22 May 2008 – 4 August 2024), was a Bangladeshi student activist who died in the non-cooperation movement on 4 August 2024. He was photographed on a rickshaw on the way to the hospital, the image of which was well-publicized among the many fatalities of the July Revolution.[153]

Aftermath
Main article: Aftermath of July Revolution (Bangladesh)
Violence
Further information: 2024 Bangladesh post-resignation violence, 2024 Bangladesh anti-Hindu violence, and Sheikh Mujibur Rahman statue destruction
Formation of interim government
Main article: 2024 Bangladesh interim government
Bangladesh's army chief Waker-uz-Zaman, announced on 5 August 2024, that an interim government would be formed in the country after Prime Minister Sheikh Hasina resigned and fled to India.[154]

On 8 August 2024, Muhammad Yunus took oath as the Chief Advisor of the Interim Government of Bangladesh in Bangabhaban, Dhaka in the presence of President Mohammed Shahabuddin.[155][156]

Constitutional crisis
Main article: 2024 Bangladesh constitutional crisis
A constitutional crisis emerged on 5 August 2024, following Sheikh Hasina's resignation, because the existing constitution has no provisions for an interim government or any other form of government in the event that the prime minister resigns and the parliament is dissolved. Although Article 123 of the constitution mandates general elections within 90 days following the dissolution of parliament, no clear guidelines exist for the powers and structure of an interim government. Following the oath-taking of the interim government, student leader and ICT adviser Nahid Islam announced that a constituent assembly election would be held to draft and adopt a new constitution to resolve the crisis. The interim government also established a Constitutional Reform Commission to prepare a roadmap for the constituent assembly election.

Alleged judicial coup attempt
On 10 August 2024, a plenary meeting of the Appellate Division judges was scheduled,[157][158] a move considered irregular and unconstitutional by many observers, including LDP Secretary-general Redwan Ahmed.[159] This meeting was perceived as a prelude to issuing a ruling that could undermine the interim government and potentially pave the way for Hasina's return.[160]

Hasnat Abdullah, one of the coordinators of the Anti-discrimination Students Movement, called for protests to be held at the Supreme Court premise.[161] Mass protests erupted outside the Supreme Court, with hundreds of students under the banner of Anti-discrimination Students Movement, lawyers, and civil society members demanding Hassan's resignation.[162] They accused him of attempting to use the judiciary to restore Hasina to power, calling him a "puppet" of the former regime. Asif Mahmud, one of the Adviser to the interim government, criticized Chief Justice Obaidul Hassan for convening a full court meeting of the court's Appellate Division without consulting the government and demanded his resignation. The judges including Chief Justice Obaidul Hassan resigned following the protests.

Formation of a political party by activists
Main article: National Citizen Party
Subsequent protests
Police strike
On 6 August, the Bangladesh Police Service Association initiated a strike, demanding enhanced security measures for its members. The association expressed regret for the role of the police force in the recent unrest and violence. It stated that its officers were "forced to open fire", subsequently being portrayed as the "villain."[163] Students and several paramilitary personnel were subsequently seen directing traffic and maintaining law and order functions in Dhaka,[164] while Bangladesh Air Force personnel were deployed to secure Hazrat Shahjalal International Airport.[165] The newly appointed Inspector-General of Police, Md. Moinul Islam, issued an order for all officers to report for duty by the evening of 8 August.[166] On 11 August, retired Brigadier General M Sakhawat Hossain, serving as the adviser for home affairs in the interim government, appealed to police officers to resume their duties at their respective stations. He provided assurances that their grievances would be addressed and their demands fulfilled.[167] The strike ended on 11 August following a meeting between the association and the interim government.[168] By 15 August, regular operations at all 639 police stations nationwide had resumed.[169]

Bangladesh Bank protest
On 7 August, several officials from the Bangladesh Bank initiated a protest near the governor's office. Their objective was to compel the resignation of certain high-ranking officials due to their alleged involvement in corruption.[170] That same day, one of the bank's deputy governors resigned, with three others expressing their intention to follow suit. On 9 August, the bank's governor, Abdur Rouf Talukder, resigned from his position, citing personal reasons.[171]

Hindu rights protest
Main article: 2024 Bangladesh anti-Hindu violence

Hindu community demonstrating in Kurigram
On 9 August, the Bangladesh Hindu Jagran Mancha organized a protest in Dhaka condemning the attacks on Hindus.[172] The group called for the establishment of a Ministry of Minorities and a Minority Protection Commission, the implementation of strict laws against attacks on minorities, and a 10% quota in parliament for minority groups.[173] Protests against anti-Hindu attacks were also held in Tangail and Khulna.[174][175]

Awami League demonstration
On 9 August, thousands of Awami League supporters staged a two-hour blockade on a section of the Dhaka–Khulna highway in Gopalganj, demanding Sheikh Hasina's return.[176] The next day, an intervention by the army to disperse the protestors escalated into a confrontation. The clash resulted in 15 individuals being injured and an army vehicle being set ablaze.[177]

Resistance Week
On 13 August, the Students Against Discrimination announced a campaign called Resistance Week, centred around four key demands. These demands included the creation of a special tribunal for the speedy trials of the massacre during the quota reform and non-cooperation movements; justice for the attacks on minorities following Sheikh Hasina's resignation; the removal of government officials who supported the government, opposed the movement and suppressed the activists; and ensuring equality for discriminated officials in government sectors.[178]

Occupation of Dhanmondi 32
On 15 August, protesters occupied the Dhanmondi 32 area of Dhaka to prevent Awami League supporters from marching to Sheikh Mujibur Rahman's residence to commemorate the anniversary of his assassination in 1975, a day designated by the Hasina administration as a National Day of Mourning.[179] Thirty people were held by protesters on suspicion of association with the Awami League, particularly those who were found to be carrying images of Sheikh Mujibur or other information relating to the Awami League in their possession or on mobile phones.[180] Protesters were also accused of harassing journalists filming the event following complaints by correspondents from Reuters, The New York Times, and other media outlets.[181] An Awami League activist was injured in the incident and later succumbed of his injuries on 30 August.[182]

The BNP also called for a nationwide sit-in on 15 and 16 August, demanding that Sheikh Hasina be put on trial for genocide in connection with the killings of protesters.[183]

Ansar protest
Main article: 2024 Bangladesh Ansar protest
On 25 August 2024, a faction of the Bangladesh Ansar, a paramilitary force responsible for securing government installations and assisting law enforcement, protested at the Bangladesh Secretariat.[184] They demanded the nationalisation of their jobs and the abolition of the six-month "rest system", a mandatory leave period after three consecutive years of work.[185][186] Jahangir Alam Chowdhury, Home Affairs Advisor of the interim government, met with the protesters, announcing a preliminary decision to abolish the rest system. He also assured them that a forthcoming committee would review their demand for job nationalisation.[187] Despite this, the Ansar members were dissatisfied due to the lack of immediate guarantees regarding job nationalisation.[188] Later that day, a clash between Ansar members and a group of students resulted in 50 injuries.[189] On 26 August 303 Ansar members were arrested for unlawful assembly,[190] and nine Deputy Directors and ten Directors of Ansar were transferred from their posts.[191] The DMP prohibited any rallies, meetings, or demonstrations in the vicinity of the Bangladesh Secretariat and the Chief Adviser's residence.[192] One person later died of injuries they sustained after being caught in the clashes on 4 September.[193]

Jumma protest
On 20 September, a protest march was organized by a Jumma students' body, starting from the Raju Sculpture and ending at Shahbag, to protest against the recent violence targeting Jummas in Khagrachhari.[194]

Gender-based violence and public backlash
On 24 February 2025, a protest march was organised, starting from the Shahid Minar to the Secretariat, demanding among many things the resignation of Adviser of Home Affairs, Jahangir Alam Choudhury, for his perceived failure to quell crimes against women in the aftermath of the revolution. Although, the march was stopped by the police before reaching secretariat premise, the agitators issued a 24-hour ultimatum to meet their demands.[195]

On 13 March 2025, a torch march was organised at the Raju Sculpture to protest the death of an 8-year-old girl who died from injuries after being brutally gangraped by her 20-year-old brother-in-law and his father, while visiting the house of her elder sister six days prior at Sreepur upazila of Magura District. Thus incident sparked widespread public outrage in the country, with the house of the accused being burnt down by an angry mob. Bangladesh Ganatantrik Chhatra Sangsad general secretary Fahid Ahmed Chaudhury demanded resignation of the Home Advisor for this incident. The BNP has also criticised the inability of the interim government in quelling crimes against women, especially minors, in the country.[196][197][198]

Impacts
Geopolitical
The ouster of Sheikh Hasina's regime marked a significant shift in Bangladesh's national politics. Democratic advocates have been reinvigorated, though they face ongoing instability. Geopolitically, both India and China had supported Hasina due to their security and economic interests, while the United States, despite strained relations, considered her government a strategic partner. With her removal, international observers are cautiously monitoring the potential emergence of a more democratic Bangladesh, propelled by the momentum of the movement.[199] China may find opportunities to expand its influence amid the upheaval. However, China's potential gains are moderated by Bangladesh's political uncertainty, economic challenges, and the involvement of other international actors, such as the United States.[200] Post-revolution, Pakistan and Bangladesh have taken steps to improve their bilateral relationship, with the Pakistani Foreign Office releasing a statement of solidarity and Prime Minister Shehbaz Sharif hoping to "settle outstanding issues".[201][202]

Financial
On 6 August, the Dhaka Stock Exchange (DSE) saw a positive reaction from investors during its first opening following the resignation of Sheikh Hasina. The broad-based index of the DSE, known as DSEX, experienced its largest increase since 3 January. A total of twelve stocks reached their upper circuits, which permit a maximum daily price increase of 10%. This marked a significant improvement from the previous few weeks of student protests, during which most stocks were hitting their lower circuits, restricting the daily price fall to no more than 3%. The indices began with a substantial upward gap, which is considered the strongest opening in the last three to four years.[203][204]

Prosecutions
Further information: International Crimes Tribunal (Bangladesh) § Sheikh Hasina
On 13 August, a murder complaint was filed at a court in Dhaka against Sheikh Hasina and six other government officials, including former Home Minister Asaduzzaman Khan and former Transport and Bridges Minister and concurrent Awami League secretary-general Obaidul Quader, regarding the killing of a grocer during the protests on 19 July.[205][206] That same day, the Bangladesh Nationalist Party also submitted a formal request to the United Nations requesting for it to conduct an international investigation into the killings during the protests.[207] In a phone call with chief adviser Muhammad Yunus on 14 August, UN human rights chief Volker Türk said that such an investigation would come "very soon".[208]

On 14 August, a petition was filed by the father of a student killed during the protests at the International Crimes Tribunal calling for an investigation on charges of genocide and crimes against humanity against Sheikh Hasina and nine other individuals, including Obaidul Quader and Asaduzzaman Khan over their role in the crackdown on the protests. The Awami League itself and its associated organisations were also named as accused in the petition, which was formally investigated on by the court later that day.[209] The court began legal proceedings to have Sheikh Hasina extradited on 8 September.[210] On 15 August, two additional murder charges were filed against Sheikh Hasina and several of her associates over the deaths of two people during the protests.[211][212] On 16 August, another murder charge was filed against Sheikh Hasina, former education minister Mohibul Hasan Chowdhury and several others over the death of a college student during the protests in Chittagong on 18 July.[213]

On 17 August, former shipping minister Khalid Mahmud Chowdhury was charged over an attack on a student protest on 18 July.[214]

On 27 August, the interim government dissolved a committee created under Sheikh Hasina's government to investigate the deaths of students during the protests.[215]

The Chief Prosecutor of the International Criminal Tribunal, Tajul Islam, said that he had received preliminary evidence of the presence of citizens of other countries in police uniforms during the protest.[216]

Role of women

A group of women protesting at Shahbagh

A group of female protesters, with one protester carrying a sign চেয়েছিলাম অধিকার, হয়ে গেলাম রাজাকার ("Sought for rights, became a Razakar")
The movement saw an unprecedented level of participation by women, a rarity in the political history of Bangladesh. Traditionally, women in the country have been less involved in political demonstrations. Experts attribute this heightened involvement to the significant presence of young female university and high-school students.[217] Notably, two prominent figures in the Students Against Discrimination, Nusrat Tabassum, serving as a coordinator, and Umama Fatema, acting as the organization's spokesperson were also women.[218][219]

Despite their substantial contributions, many female activists reported facing marginalization in the post-uprising political landscape. Interviews revealed that women encountered challenges such as lack of recognition, discriminatory attitudes, limited space in organizations, and patriarchal practices, which hindered their continued participation in the rebuilding process.[220]

Legacy

A rickshaw puller in Dhaka's Uttara sings a song he wrote about the student uprising.
36 July
Main article: July 36
On 3 August, Nahid Islam said, "We haven't gone to August yet. We will go to August only after this July killings are judged.".[14] So Young protesters used the non-standard date July 36 to commemorate 5 August, in memory of those who lost their lives during the quota reform movement in July 2024. The term "July 36" appeared in various graffiti and murals made by the students around the country.[221] Al Jazeera also called 4 August as "35 July".[222]


Graffiti of a calendar of July 2024 consisting 36 days
Reception
The movement has been dubbed the world's first successful "Gen Z revolution" by several international media, as it was organized and led by Generation Z leaders.[g] John Reed of the Financial Times called it the "Monsoon Revolution".[227] Bangladeshi political analyst Nazmul Ahsan Kalimullah called it "Bangla Spring" saying people refer the movement by it.[228]

Paintings and graffiti
The quota reform movement and its sequel the non-cooperation movement was a spontaneous movement in the history of Bangladesh. All parties, religions, castes, castes, men and women took the movement to a new level. In this movement, many painters from the country and abroad gave courage to the agitators by painting various paintings.

Hundreds of satirical cartoons and paintings were produced in just three weeks of the movement in July–August. Political cartoons and slogans encouraged the movement. Ahsan Habib, the legendary cartoonist of Bangladesh published a cartoon on 3 August 2024. It can be seen that an hourglass has been painted on red. Above the clock and then there is nominal sand to go down, it says 'count down'. In addition, Nazmus Sadat's cartoons of the hand pulling the barrel of the gun towards him; Asif Mahbub's drawing of the bloody phone; Risham Shahab Tirtha's drawing of the democracy by the security forces; and the Chhatra League's brutal forces or the student group's cartoons holding the soles of the police boots have clarified the situation with the message of the incident during the movement.[229]


A graffiti of Gen Z drawn by the students, showing various media which played a key role organising the movement, including Jamuna TV[citation needed]
Music
The song "Awaaz Utha" released during the quota reform movement in Bangladesh. The song's composer, Hannan, was arrested by the police on 25 July from Narayanganj, a week after the release of the song.[230] New York City-based non-profit organisation Artist at Risk Connection (ARC) condemned the arrest.[231]

The song became very popular with the audience around the quota reform movement.[230][232] In just 13 days, it received over six million views on YouTube, making it the fifth most trending song on YouTube in Bangladesh at that time period.[231]

Media coverage
[icon]	
This section is empty. You can help by adding to it. (January 2025)
July Shaheed Smrity Foundation
Main article: July Shaheed Smrity Foundation
On 20 August, the interim government announced the establishment of a foundation to be headed by Chief Advisor. Muhammad Yunus dedicated to the welfare of participants of the quota reform and non-cooperation movement who were killed and injured during the protests as well as that of their families.[233]

July Revolution Memorial Museum
Main article: Ganabhaban
On 5 September, the interim government revealed plans to open Ganabhaban to the public, transforming it into the "July Revolution Memorial Museum" while preserving its original state as it was left after the storming.[234] On the same day, the Students Against Discrimination organized a procession called the "Shahidi March (lit. 'Martyrs March')" to commemorate the one-month anniversary of the movement.[235]

July Mass Uprising Day
Main article: July Mass Uprising Day
Disinformation in India
Sensationalist Indian media outlets, especially those closely associated with the ruling party in India, the Bharatiya Janata Party, portrayed the mass uprising as an Islamist-backed military takeover of the country[236][237] purportedly orchestrated by India's rivals, Pakistan (through its intelligence agency) and China. Following Hasina's resignation, Indian media outlets discredited the student protestors by overemphasising on a solitary incident of one of the many protestors who vandalised the Ganabhaban flashing Hasina's underwear in public.[238][239][240][241]

---END CONTEXT---

If the answer is not present in the context, say "Sorry, I couldn't find the answer in the provided text."
`;

export async function getAnswerFromPrompt(question) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or gpt-4
      messages: [
        { role: "system", content: baseContext },
        { role: "user", content: question },
      ],
      temperature: 0.5,
    });

    return response.choices[0].message.content.trim();
  } catch (err) {
    console.error("OpenAI Error:", err);
    return "❌ Failed to fetch response.";
  }
}
