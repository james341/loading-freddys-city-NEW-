//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use an external URL)
var l_serverImage = "logo.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display the current map and game mode.
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for the automatic server name
var l_serverName = "sleekLoad 2";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "bluefall.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
        "image13.jpg",
        "image14.jpg",
        "image15.jpg",
        "image16.jpg",
        "image17.jpg",
        "image18.jpg",
        "image19.jpg",
        "image20.jpg",
        "image21.jpg",
        "image22.jpg",
        "image23.jpg",
        "image24.jpg",
        "image25.jpg",
        "image26.jpg",
        "image27.jpg",
        "image28.jpg",
        "image29.jpg",
        "image30.jpg",
        "image31.jpg",
        "image32.jpg",
        "image33.jpg",
        "image34.jpg",
        "image35.jpg",
        "image36.jpg",
        "image37.jpg",
        "image38.jpg",
        "image39.jpg",
        "image40.jpg",
        "image41.jpg",
	"image42.jpg",
	"image43.jpg",
	"image44.jpg",
	"image45.jpg",
	"image46.jpg",
	"image47.jpg",
	"image48.jpg",
	"image49.jpg",
	"image50.jpg",
	"image51.jpg",
	"image52.jpg",
	"image53.jpg",
	"image54.jpg",
	"image55.jpg",
	"image56.jpg",
	"image57.jpg",
	"image58.jpg",
	"image59.jpg",
	"image60.jpg",
	"image61.jpg",
	"image62.jpg",
	"image63.jpg",
	"image64.jpg",
	"image65.jpg",
	"image66.jpg",
	"image67.jpg",
	"image68.jpg",
	"image69.jpg",
	"image70.jpg",
	"image71.jpg",
	"image72.jpg",
	"image73.jpg",
	"image74.jpg",
	"image75.jpg",
	"image76.jpg",
	"image77.jpg",
	"image78.jpg",
	"image79.jpg",
	"image80.jpg",
	"image81.jpg",
	"image82.jpg",
	"image83.jpg",
	"image84.jpg",
	"image85.jpg",
	"image86.jpg",

];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 5000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/URLs or ogg files as you want
// (Place the Ogg files in the music folder)
// (You can also use an external URL for the Ogg files)
var l_musicPlaylist = [
	{ogg: "moonlianaflores.ogg", name: "【AN】 - Installation Music"},
	{ogg: "smokindsafmusic.ogg", name: "【AN】 - Installation Music"},
	{ogg: "ryeryeintro.ogg", name: "【AN】 - Installation Music"},
	{ogg: "imbeliever.ogg", name: "【AN】 - Installation Music"},
	{ogg: "youfeelthelove.ogg", name: "【AN】 - Installation Music"},
	{ogg: "schnuffelkuschelsong.ogg", name: "【AN】 - Installation Music"},
	{ogg: "Idrathersleepinstrumental.ogg", name: "【AN】 - Installation Music"},  
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 15;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"In the pursuit of maintaining an atmosphere of elegance and respect, we kindly request refraining from sharing GIFs or any offensive material through text signs. Furthermore, we encourage the adherence to the role-playing context, ensuring that your signs align with the thematic essence. Please be mindful that any expressions of racism, pornography, or derogatory remarks towards religions are strictly prohibited and will not be tolerated!",
	"Please make every effort to refrain from killing a player who has been snatched while still roped to the snatcher. Doing so may be construed as Random Deathmatch (RDM)!",
	"No discussions about religion are permitted. Religious matters are best suited for real-life contexts, as conflicts arising from differing beliefs tend to foster toxicity. Therefore, extensive conversations about religion are not allowed!",
	"Refrain from making any sexual jokes, innuendos, or engaging in any form of sexual or inappropriate role play scenarios. If any member expresses discomfort with the situation, please cease immediately. This directive also extends to the exchange of sexual or erotic messages through Discord relay!",
	"Chat flooding is strictly prohibited: This entails the repetitive transmission of the same message at a rapid pace. Such messages can be extensive and offensive, though occasionally they may contain only a single character!",
	"Please note that all forms of advertising, including but not limited to forum posts, promotion of other Gmod servers, Twitch streams/channels, YouTube channels, and similar platforms, are strictly prohibited!",
	"It is strictly prohibited to abuse administrative privileges, including inciting unrest, disrupting channels unnecessarily, or assigning roles that are not within your authority. Violations will result in disciplinary action ranging from a warning to removal of admin rights or a ban lasting 15 to 45 days!",
	"Remarkable revelation indeed. It appears that displaying swastikas, performing the Nazi salute, or glorifying Nazism are unequivocally prohibited. We appreciate this enlightening update, dear community members!",
	"Ah, here's a groundbreaking rule: No Nazi symbols, salutes, or glorification. Because apparently, we needed to clarify that celebrating genocide isn't the vibe we're going for, even if you're just 'roleplaying' a dictator!",
	"According to our guidelines, utterances of racial slurs, homophobic language, or any form of offensive discourse are strictly prohibited. The staff holds the ultimate authority in adjudicating what falls within the boundaries of acceptability!",
	"Ah, the golden rule: no pestering the staff to reverse a punishment for you or your buddies! Because obviously, they have nothing better to do than entertain your appeals all day long, right? Just a heads-up, if you dare to ask, your appeal will be met with an automatic decline. So, let's all sit back and enjoy the consequences of our actions, shall we!",
	"Well, isn't this just a groundbreaking revelation: Make sure you exclusively use English for all in-game communications. Because, you know, we're all linguists here just dying to decode your secret messages in Klingon or something!",
	"No Blatant RDM is if you blatantly RDM someone on their T round (like walk up and Juan Deag them in the face at the start of the round when they’re afk), you may be slain an extra time at the discretion of the staff online. Same goes for blatantly RDMing a D. (except Pao, fuck that guy, always RDM Pao when you see him!",
	"Absolutely refrain from any suggestion or mention of DDoSing the server under any circumstances. We are actively monitoring and prepared to enforce permanent bans without hesitation, regardless of intent or humor!",
	"The paramount principle is to avoid offending any participants on the server, especially moderators, testers, administrators, and notably the server representatives. Failure to uphold this standard may result in expulsion from the server and, in severe cases, a ban. Hence, we kindly request that you treat all server participants with equal respect!",
	"Please maintain a drama-free environment in this server. While someone might express opinions or comments you disagree with, let's avoid prolonging conflicts. Instead, strive to set a positive example. If necessary, address issues through direct messages, or in more serious cases, allow the moderators or administrators to handle the situation!",
	"Ah, yes, because who doesn't love a good old-fashioned rulebook, right? Be sure to meticulously adhere to all those server-specific rules, and don't you dare forget about those additional guidelines established by the all-powerful server administrators. After all, their word is law in this digital paradise!",
	"No arguing with Staff. Their role is to ensure everyone adheres to the rules, and they have the authority to enforce punishments as they see fit. If you believe you were unjustly muted or didn't violate any rules, be sure to bring it to the attention of a higher-ranking member of the team!",
	"Well, folks, here's a gem for you: apparently, accidentally offing someone in a good ol' crossfire isn't considered RDM... unless, of course, you had some nefarious intent. Oh, and if someone decides to waltz into your line of fire, no worries! Just toss 'em a couple of coins, and all's forgiven! Oh, and hey, same goes for accidentally turning someone into roadkill, too! Just your typical day in the rulebook!",
	"No behaviour or language which can be considered but not limited to; Harassment, Defamatory, Homophobic, Sexually Explicit, Encouragement of Self-Harm, Racially, Ethnically or otherwise offensive!",
	"Using derogatory language or offensive terms to refer to fellow players is not tolerated on this platform. Such behavior, including calling players 'retarded,' is a violation of our community guidelines and will result in a ban from the game. We encourage a positive and inclusive gaming environment for everyone!",
	"Raiding the server violates our terms of service. Any attempt to evade or disregard these terms may lead to a permanent ban. Additionally, individuals caught raiding will be immediately banned and may be placed in separate chats exclusively with trusted members!",
	"Let's maintain a harmonious environment by refraining from initiating public confrontations or disputes. Should any issues arise, I encourage you to address them privately via direct messages. In the event that resolution cannot be achieved amicably, our staff members are available to assist!",
	"Kindly refrain from deliberately causing lag or disrupting server performance. Please adhere to any specific regulations regarding props, vehicles, or other server resources!",
	"Oh, and here's a brilliant idea: Make sure you stay in character while you're here. Because obviously, the meticulously crafted lore of the Day shift at Freddy's universe is sacred ground that must never be defiled by your mere presence!",
	"Recording is a Choice, Not an Entitlement: While individuals may opt to record conversations or events within the server, it's crucial to understand that this action is a matter of personal discretion and not an automatic privilege!",
	"Oh, by the way, just a little reminder: disrespecting any of our players or staff members, for whatever reason, is like, totally off-limits. Yeah, we're big on that!",
	"No NSFW (Not Safe For Work) content, including gore, pornographic material, or any other content considered distasteful by staff, is permitted in any channel. Additionally, spoilers for movies, TV shows, etc., are prohibited for one month following their release. If you intend to share a spoiler, it must be properly concealed and clearly marked as such!",
	"Please note that any content deemed 18+ is strictly prohibited. This includes explicit material such as adult content, gore, and discussions on mature topics. We aim to maintain a safe and respectful environment for all members, so we appreciate your cooperation in adhering to this guideline!",
	"Harassment is strictly prohibited. If you witness harassment directed towards anyone in the server or observe persistent harassment between individuals, please inform us immediately. Violating this rule will result in a 5-10 minute timeout. Continued harassment may escalate to a 1-hour timeout, a one-week timeout, or even a ban in extreme cases!",
	"Kindly limit the sharing of the FNAF movie musical Springbonnie clip to once per person per day. Failure to adhere to this guideline may lead to a temporary 10-minute timeout!",
	"Racism, offensive language, and slurs are absolutely unacceptable. Violation of this rule will lead to a warning or a one-minute timeout. In severe cases, such behavior may result in a one-week timeout, a kick, or a ban from the server!",
	"Our Policy Against Harassment: We maintain a zero-tolerance stance on harassment. Should you witness any form of harassment targeting individuals within the server or detect recurring instances between members, kindly bring it to our attention promptly. Breaching this guideline will prompt a 5-10 minute timeout. Persistent misconduct may lead to escalating consequences such as a 1-hour timeout, a one-week timeout, or, in severe circumstances, a ban!",
	"Where can I ask questions regarding technical help, gameplay, etc.? A: Feel free to ask in the appropriate channels in the discord our staff can still help you with that!",
	"Be kind and keep things polite. Harassment, sexism, racism, homophobia, transphobia, or hate speech of any kind will not be tolerated (username and pfp included). If you are being harassed or feel unsafe, direct message the Moderators or ModMail!",
	"Within our community, the discussion or active involvement in raids on other servers is not endorsed. Participation in such activities may result in a permanent ban from our server!",
	"Maintain integrity: Refrain from exploiting bugs or resorting to cheating tactics. Should you encounter any glitches or concerns, kindly report them to our server staff for prompt resolution!",
	"Inappropriate or illegible usernames are not permitted. If such usernames are detected, the staff reserves the right to change them to a suitable alternative and may issue a warning accordingly!",
	"Ah, what a preposterous notion! Let us envision a realm where real-world knowledge inexplicably vanishes. After all, who requires common sense or a semblance of realism in roleplay, am I right!",
	"Oh, how delightful, we have to remind everyone not to use inappropriate or offensive names! Because clearly, nothing screams 'classy' like a vulgar username, right? But don't worry, we'll politely ask you to change it, or if you're feeling lazy, we'll do it for you. And just a friendly heads-up, persisting with your creative naming choices might earn you a swift kick followed by a ban. Cheers to keeping it classy, folks!",
	"Embrace inclusivity and respect within the community, refraining from discrimination based on factors such as race, gender, religion, or sexual orientation, and abstain from using derogatory language. Let us uphold the noble values of tolerance and civility, resisting the lamentable trends of discrimination and verbal abuse!",
	"No behaviour or language which can be considered but not limited to; Harassment, Defamatory, Homophobic, Sexually Explicit, Encouragement of Self-Harm, Racially, Ethnically or otherwise offensive!",
	"Please gracefully report any breaches of the established rules to the designated staff team. It is kindly advised to refrain from tagging moderators unless under valid circumstances necessitating their attention!",
	"Fear Roleplay (FearRP) is an event during which your character experiences a genuine fear for their life, refraining from any actions that contradict this fear. The rationale behind this principle extends to various scenarios and contexts!",
	"Well, I'm sure you're all aware of this revolutionary concept: Please refrain from flooding the chat or voice channels with your endless banter. Because, you know, we're all just dying to hear your life story while we're trying to play!",
	"Allow me to gently remind you: In this environment, we uphold a strict policy against harassment or bullying. It is our belief that treating others with respect should stand as a foundational expectation, regardless of the circumstances in today's world!",
	"Well, isn't this just a thrilling announcement: Everyone's invited to join the conversation! But hey, let's make sure we don't drown out the profound intellectual discourse with a flood of GIFs, images, and videos. Because who needs meaningful dialogue when you can just spam the chat with cat memes, right!",
	"Oh, how delightful! Let's all play dress-up with our usernames and profile pictures like it's a kindergarten costume party. And don't forget, one strike and you're out! Because heaven forbid we have any fun around here!",
	"Accidentally killing someone (crossfire) is not RDM unless on purpose, if someone does walk in the way that is allowed as long as you repay them. ( This rule also applies to Accidentally running someone over!",
	"In upholding the principles of dignity and respect within our community, we unequivocally prohibit the display of swastikas, the performance of the Nazi salute, or any form of glorification of Nazism, regardless of the context, including roleplay scenarios. This rule applies universally to all users on the server!",
	"Disrespect, and discrimination will not be tolerated. Be civilised and do not target other players with actions in the game or in chat. This game is meant to be fun; anyone coming on with the intent of disrupting people's experiences will be treated harshly!",
	"Violations within these rules will have our loyal fellow mods give you a warning, if you continue to violate the rules it will result in a kick out or if major, banned. So pls, try not to cause trouble. Have a good day!",
	"Oh, but what fun is there in not abusing props? Remember, folks, absolutely no prop-blocking, prop-killing, prop-bridging, or even the classic prop-spamming! We wouldn't want to upset the delicate balance of virtual prop harmony, now would we!",
	"I am a player, and I disagree with the actions of administration on AN. If you do not agree with a kick or ban reason, you can play on a different server. All Garry's Mod servers are hosted by the community. Your access to the community server(s) is at the discretion of their administration!",
	"A most well known threat to any gaming community, and all of Garry's Mod, and really all of video games, is the sexual abuse of children. We want to make sure AN is always a safe area for everyone to have fun and enjoy each other's company. We will be doing a few things to make this community safer for everyone. First, we will be adding additional rules to our site to prevent some instances of this. Secondly, we will be adding a dedicated report system for this type of abuse to ensure it gets the full attention it deserves. Thirdly, we will be partnering with CyberTip.org to properly investigate all reports we receive and make sure that law enforcement is properly informed of the situation!",
	"It is illegal to discharge any weapon other than a licenced pistol (only when used in self-defense) at all times. It is not illegal to possess weapons unless you have been caught by law enforcement brandishing them in public and/or discharging or using them with intent to commit a crime. However, it is illegal to enter or attempt to enter a government facility and/or bank with any weapons unless you are a member of law enforcement or bank security under the respective ban!",
	"Treat everyone on the server with respect, including other server members, moderators, and creators, regardless of whether they are present at the time or not. If someone asks you to stop talking or joking about a certain topic, it is your responsibility to drop it!",
	"FearRP refers to when your character perceives their life to be in danger and consequently refrains from actions that would contradict that fear. This principle can be applied to a variety of situations for consistency and immersion!",
	"All sprays containing NSFW or other derogatory content are not allowed. Decisions based on this are up to staff interpretation. Admins, while they must follow server rules, have the final say on decisions!",
	"Please do Not contact staff about your application. Rejected Applications may be resubmitted with changes the staff team has requested in one week. If your application has not been responded to within 3 days, please contact us via Discord, Master Doge#0192 , QWERTY#8219 , Cookie12#5485 , 1noahdavid07#0418, Connor3462#3260!",
	"Proceeding beyond the police department lobby constitutes an act of AOS (Arrest On Sight), while attempting to release prisoners or exhibiting hostile behavior while armed beyond the lobby is deemed KOS (Kill On Sight)",
	"Well, isn't it just delightful that we have to remind everyone not to spam? Because clearly, flooding the chat with nonsense is the epitome of productive conversation! Remember folks, no disrupting the peace by spamming. That means no excessive text, voice, or even soundboards! And just in case you missed the memo, after a gentle warning, you'll be bestowed with the gift of silence - a lovely mute awaits you!",
	"Animatronics are confined to the premises of the restaurant and are prohibited from pursuing players beyond its boundaries. However, they may engage in actions such as '/me grabs the child' before they depart!",
	"Any breaches of these rules will prompt our dedicated fellow moderators to issue a warning. Continued violations may result in removal from the community or, in severe cases, a ban. Please endeavor to avoid causing any disruptions. Have a pleasant day!",
	"Oh, heaven forbid we start drama! We wouldn't want anyone to express their opinions or engage in healthy debate, would we? Remember folks, no arguing with others in the server! Let's keep it all sunshine and rainbows. And if you dare to have an issue, please, take it to DMs or contact a Moderator, because we certainly can't handle any drama here!",
	"Oh, but cheating with third-party software or exploits to gain an unfair edge is so much more fun, isn't it? Remember, if you stumble upon any pesky bugs or glitches, be sure to let the server staff know. They just love dealing with those!",
	"Oh, by all means, let's not demand anything from our hardworking developers, shall we? Because clearly, they're just lounging around, sipping cocktails, and twiddling their thumbs while we eagerly await updates. Let's all take a moment to appreciate their leisurely pace and remember, patience is a virtue. But hey, if you dare to be impatient, consider yourself warned!",
	"Because who doesn't love being restricted to roleplaying within the narrow confines of their in-game job or character background? Don't forget to meticulously follow all those exciting guidelines for each role or faction. It's the epitome of creativity!",
	"Do not encourage, or endorse the rule-breaking of others. Tricking, baiting, facilitating, inciting, or encouraging other players to violate the rules will result in a punishment equal to the offender!",
	"Create a character of depth and authenticity, weaving together a narrative that resonates with credibility. Strive for a balance of traits and backstory that captivates without venturing into the realms of overpowered or implausible personas!",
	"Do not exacerbate problems and do not succumb to provocations; do not make a scandal in any server chat because of a dispute or something else; instead, go to private messages and resolve all issues personally among yourself. If there are any problems, report them to the moderators!",
	"Please honor the rich lore and setting of our server by adhering to its established narrative framework. Kindly refrain from introducing elements that deviate from or contradict the meticulously crafted storylines already in place!",
	"Kindly refrain from spamming by sending consecutive short messages, as this disrupts the natural flow of conversation and creates challenges for others in navigating the server. Let's strive to maintain the integrity of our channels by avoiding the inundation of excessive messages!",
	"Because clearly, we all want to see your personal websites, social media, and promotional material without any permission whatsoever. But hey, just a heads-up: No self-promotion allowed without explicit permission from the server administrators. Thanks for understanding!",
	"Please ensure strict adherence to the server-specific rules. Familiarize yourself with any additional guidelines particular to the server, including character creation protocols or faction regulations!",
	"No impersonating staff within the discord or server. Tier 2 Offence: (These offences can result in a variaty of punishments, whether they be warn, kick, mute, or ban. This is determined in the context of the infraction. 1. Harassment of any form!",
	"Breaking rules outside of AN and having it reported to us may result in equal punishment here. You are responsible for your own actions. Examples: Excessive racism, excessive harassment, excessive bullying, causing harm to other community members or communities!",
	"Please understand that while we value each member of our community, our server isn't equipped to address personal issues of a heavy psychological nature. It's not a reflection of our lack of concern for you, but rather our limitations in providing appropriate support. We encourage you to seek help from a qualified professional who can offer the expertise and resources needed to address your concerns effectively. Let's focus on creating a positive and enjoyable environment for everyone here!",
	"In an atmosphere of dignity and respect, it is essential to refrain from deliberate delays, including repeated exits or self-inflicted harm to evade encounters, or intentionally spawning in an undesired role. Such conduct disrupts the natural progression of the game and detrimentally impacts the experiences of others!",
	"We sometimes may interpret the rules abit to ensure a fair outcome for all involved. If you have a complaint or feel you were treated unreasonably by a member of staff, please make a staff report on the forums. Please do not backseat, try to administrate, or attempt to take matters into your own hands. Furthermore, the member of staff has the final say, and any decision is absolute unless appealed on the forums!",
	"To maintain the integrity and fairness of the gaming experience, we respectfully ask that you refrain from exploiting, hacking, or circumventing the game's intended limitations. Any utilization of external cheats or game exploits, such as prop surfing, is strictly prohibited!",
	"Raiding the server is against our terms of service. Any attempt to circumvent or bypass them can result in a permanent ban. As well as putting everyone in different chats with only trusted people, if you get cought raiding, that's an insta ban!",
	"In a manner befitting decency, it is imperative to refrain from resorting to discriminatory acts such as targeting individuals based on their race, sexual orientation, gender, and other similar characteristics. Any such behavior will be deemed as a severe form of Random Deathmatch (RDM), warranting an immediate ban!",
	"Promote engagement among members by inviting their active participation in server events and storylines. Such events may encompass a variety of in-game activities, quests, or contests, fostering a dynamic and enriching experience for all!",
	"Prohibition of Offensive Language: The use of homophobic, transphobic, racist, or any other generally offensive language is strictly prohibited. :mt: :ro: While swearing is permitted, it is expected to be utilized in a non-destructive and respectful manner!",
	"Maintain Harmony: We kindly request refraining from instigating or circulating drama, including avoiding political discussions. It's advisable to steer clear of topics that may incite unnecessary debates or disruptive behavior. In the event of such occurrences, it is preferred to address them privately or agree to respectfully disagree!",
	"Do not disclose the personal information of another person, such as an address, phone number, geographical location, photos, or other personally identifying information, without explicit consent from the person. In the event of a player or staff member breaking a rule associated with our Discord server, we will operate according to the guidelines set below when it comes to resolution and infraction consequences based on the severity of the infraction. The consequences below are in order of severity, and the staff has sole discretion to skip a lesser punishment if they deem the infraction to be more severe than what the consequence calls for. The individual(s) must be issued a written or verbal warning!",
	"You cannot steal work vehicles. You must drive vehicles in a reasonably roleplaying manner. Driving like an idiot will result in your car being deleted and/or you receiving a car ban for the rest of the session. Intentionally damaging or blowing up vehicles to annoy, injure, or kill other players without a valid RP reason is not allowed!",
	"We do not tolerate Illegal Activities Engaging in phishing, scamming, or any other illegal activities within the game or community is strictly prohibited. We maintain a zero-tolerance policy for such behaviour!",
	"Make sure to adhere to the extra rules tailored for our server community. This could cover lore regulations, roleplay themes, or unique server functionalities. Oh, and by the way, spamming is a big no-no!",
	"May I kindly request that all players maintain a demeanor of respect towards one another at all times. Acts such as harassment, toxicity, and unfounded out-of-game allegations are firmly forbidden. Additionally, any form of cheating or exploitation within the game is strictly prohibited!",
	"Manifest Respect Towards Others: This involves abstaining from discrimination or harassment. We kindly request that you respect the opinions, identities, and boundaries of your fellow members!",
	"Establish guidelines for player versus player (PvP) engagements, taking into account the setting of designated areas or events for such interactions, and ensuring equitable combat. Additionally, please refrain from meta-gaming practices!",
	"Ah, yes, because we all know the primary purpose of vehicles in roleplay is to follow those oh-so-crucial traffic rules! Because nothing screams excitement like obeying virtual traffic signals while pretending to be someone else!",
	"No pornographic, adult, or other NSFW material The idea behind the server is to provide a safe place for us to share art, videos, and other kinds of creative material—not  the aforementioned NSFW material!",
	"We, reserves the right, at any  specific time without any notice, to revise these rules and guidelines by updating this posting. Players and staff agree to be bound by such revisions and should periodically revisit this post to review the current rules and guidelines listed herein!",
	"Participating in phishing, scamming, or any other illicit activities within the game or community is strictly prohibited. We enforce a zero-tolerance policy against such behavior!",
	"Do not distribute or provide access to content involving the hacking, cracking, or distribution of stolen goods, pirated content, or accounts. This includes sharing or selling game cheats or hacks!",
	"Do not use this community to spam, manipulate engagement, or disrupt other people’s experiences, including trying to influence or disrupt conversations using bots, fake accounts, multiple accounts, or other automation. This includes purchasing or selling methods of artificially increasing membership, such as via advertisements or botting!",
	"Do not harass others or organize, promote, or participate in harassment. Disagreements happen and are normal, but making continuous, repetitive, or severe negative comments or circumventing a block or ban can cross the line into harassment and is not okay!",
	"we have a strict zero-tolerance policy towards racism, homophobia, offensive slurs, sexism, and any form of discrimination or hate speech. Engaging in such behavior will result in an immediate and permanent ban from the server. We are committed to fostering a welcoming and inclusive community where all individuals feel respected and valued. Let's work together to maintain a positive and respectful environment for everyone!",
	"Well, isn't that just splendid? Because nothing enhances the gaming experience like being slapped with a hefty fine for trying to automate the money-grabbing process. Ah, the joy of manual labor in the digital age!",
	"Users with exiled status earn it for going above and beyond to receive multiple permanent bans or if it's applied automatically via the Paypal IPN for lodging a dispute or chargeback on a transaction on this server. Exiled status is exclusively for users who have presented no redeemable qualities to deserve to participate on this server. To be exiled is to be an outcast never to return!",
	"Permission for All Kill on Sight (KOS) Rules will be granted, strictly adhering to the default KOS regulations applicable to the respective area. You have the option to utilize this default setting, or alternatively, manually configure your own KOS Rules!",
	"Please refrain from requesting moderator status. Periodically, we will open applications for moderation roles. However, meeting these criteria does not guarantee selection. We kindly ask for your understanding and patience. Thank you for your cooperation!",
	"Anyone with the exiled status has earned it for going above and beyond to receive multiple bans within our communities and/or have tried to lodge a dispute or even try to chargeback (as it's against our policy of refunds). Being exiled makes you an outcast Users who were exiled are not to be mentioned within the community!",
	"Animatronics are confined to the premises of the restaurant and are not permitted to pursue players beyond its boundaries. However, they are authorized to intercept and apprehend the child before their departure from the establishment!",
        "In the game, animatronics reserve the right to enact 'KOS' (kill on sight) protocols from 12:00 am to 5:00 am in-game time. During these hours, they possess full authority to eliminate players found within the restaurant premises, as it coincides with the establishment's closing hours!",
        "We do not provide refunds for donations or packages such as VIP, PAC3 Access, etc. There are no change-of-mind refunds on sale items. AN does not have a contractual obligation to provide donation packages. Donation packages can be revoked, and art subjects can be changed!",
	"We maintain a zero-tolerance policy regarding harassment or discrimination. Any instances of such behavior, including hate speech, personal attacks, or discriminatory acts, will not be tolerated and will be promptly and appropriately addressed!",
	"This community maintains a stringent zero-tolerance stance against any instances of paedophilia, child exploitation, or grooming. Any person discovered participating in, endorsing, or facilitating such behaviors will promptly face blacklisting and permanent banishment from our platforms!",
	"It Is forbidden to attack with a splash through props, walls, or outside the territory of the pizzeria. It is also forbidden to intentionally attack animatronics and plush toys while outside the territory of the pizzeria. It is forbidden to climb stairs (excl. Purple Guy in the guise of a security guard. Punishment: warn / Ban 10-20min!",
        "Oh, offensive humor? Absolutely not okay. Because, you know, in a world filled with racism and other delightful problems, we just love tightening the reins and being the fun police. You're welcome!",
        "Unless you've been granted the golden ticket by the voice channel owner, please refrain from using soundboards. And even if you do have permission, let's exercise moderation to avoid excessive noise pollution. We aim to maintain a tranquil atmosphere amidst the continuous!",
	"Should any transgressions occur within these regulations, our esteemed moderators will extend a cordial warning. Persistent disregard for the rules may warrant expulsion or, in severe cases, a ban. We kindly implore you to avoid disruption. Wishing you a pleasant day ahead!",
        "Breaking the NLR constitutes returning to the place of your death within or before five minutes of your death. This can also mean returning to and/or interacting with the player that killed you. If you are found breaking this rule, it’ll be dealt with by a verbal warning, a written warning, or a ban for repeat offenders. Returning to the vicinity of your base to watch the raiders (even if you aren’t interacting with them) counts as breaking NLR. Don’t do it!"

];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 5000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};
