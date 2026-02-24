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
var l_background = "freddyrp.webm";
var l_background = "freddyrp.webm";

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
	"image87.jpg",

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
var l_bgDarkening = 60;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = false;

// Music playlist
// Add as many youtube ids/URLs or ogg files as you want
// (Place the Ogg files in the music folder)
// (You can also use an external URL for the Ogg files)
var l_musicPlaylist = [
	{ogg: "davesmusicmate.ogg", name: "Installation Music"},
	{ogg: "webuiltthiscitystarship.ogg", name: "Installation Music"},
	{ogg: "tuckedup.ogg", name: "Installation Music"},
	{ogg: "musiboxharrystylesastwas.ogg", name: "Installation Music"},
	{ogg: "dsaflipsidetheme.ogg", name: "Installation Music"},
	{ogg: "daycarethememusicbox.ogg", name: "Installation Music"},
	{ogg: "thepizzeriashitmusicai.ogg", name: "Installation Music"},
	{ogg: "joehenrysomethings.ogg", name: "Installation Music"},
	{ogg: "dsaftrumpetending.ogg", name: "Installation Music"},
	{ogg: "dsafrealgoodending.ogg", name: "Installation Music"},
	{ogg: "moonlianaflores.ogg", name: "Installation Music"},
	{ogg: "youfeelthelove.ogg", name: "Installation Music"},
	{ogg: "dayshiftfpizza.ogg", name: "Installation Music"}, 
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 15;

// Enable custom messages?
// 'true' or 'true'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"Text signs must not include GIFs or offensive content and should remain relevant to role-playing. Random, unrelated signs are not allowed. Racist, pornographic, or religiously offensive material is strictly prohibited!",
	"The most important thing is not to offend the server participants, especially moderators, testers, administrators, and even more so the server representatives, otherwise you may be kicked out and, in the most extreme case, even banned Therefore, we ask you to respect the server participants equally!",
	"No Powergaming. You cannot control another player’s actions or force outcomes. Always give others a fair chance to react by using /me attempts!",
	"Vehicles must be driven in a realistic, roleplay-appropriate manner at all times. Driving recklessly, unrealistically, or in a disruptive way will result in immediate vehicle deletion and may result in a vehicle ban for the remainder of the session!",
	"We believe in privacy real privacy. We do not collect your personal data. We do not store it. We do not sell it. And we will never, ever use it against you!",
	"Please refrain from infringing on the enjoyment of fellow community members. Do not chastise, alienate, or harass another community member. If you are notified or asked to stop behaviour that is deemed, toxic, rude or indignant, then cease and desist immediately. Overall play nice, resolve any issues in DM's (Less drama the better!",
	"Advertising is prohibited. This includes invasive promotion of other communities, servers, or livestreams. Content may be posted in the media channel only when it is relevant and offers meaningful value to the community!",
	"Sharing personal information is prohibited. This includes your own or another user’s personal details without their consent, such as phone numbers, addresses, or any other sensitive information!",
	"Flooding chat with unnecessary or excessive messages with a bad intent is prohibited!",
	"Advertising yourself, your business, other projects or anything of that sort without direct permission from the development team is not allowed. The exception is your S&SMP server!",
	"Any attempt to impersonate an employee or executive of [AN] will result in an immediate and permanent ban from all [AN] services, including Discord and Garry’s Mod etc!",
	"Any username that is deemed offensive toward an individual, group, or any other party will be requested for immediate customization. If this request is not met, necessary actions will be taken. This also includes names similar or pertaining to Lost1nPlace!",
	"The F4 menu can be accessed as you might have guessed it,by pressing the F4 button ingame. Remember this, as it will be a menu that you will use alot in other darkRP servers. The menu is split up into 4 tabs!",
	"Report any bullying, harassment, or rule violations to a staff member or moderator. More details help us respond faster!",
	"Accidentally killing someone (crossfire) is not RDM unless on purpose, if someone does walk in the way that is allowed as long as you repay them. ( This rule also applies to Accidentally running someone over with cars!",
	"Any conduct that is in breach of the following rules will be considered misuse of wiremod, and may result in an immediate removal of your wiremod access or a permanent ban from the server without warning. This includes use of wiremod for non or invalid RP reasons, using E2 to render images, AI, Apply Force, etc!",
	"The F4 menu can be opened by pressing F4 while in-game. This is an important menu that you’ll use frequently on this and many other DarkRP servers. The menu is divided into four tabs!",
	"Powergaming is prohibited. Forcing actions, reactions, or outcomes onto other players without consent or opportunity to respond is not allowed. All actions must be attempted using /me!",
	"You may not force actions or outcomes onto other players without their consent or a fair chance to react. Use /me attempts instead of forcing results!",
	"No advertisements No invasive advertising, whether it be for other communities or streams. You can post your content in the media channel if it’s relevant and provides actual value for the Community!",
	"Under the New Life Rule (NLR), you may not return to the location of your death for 3 minutes. This restriction remains in effect even if the conflict is still ongoing!",
	"For everyone’s safety and well-being, please do not post about self-harm or severe personal struggles in this public server. Our community and staff are not equipped to provide professional mental health support. If you’re struggling, we encourage you to reach out to close friends, family, or a medical professional in a private setting. These topics are better handled outside of a public Discord environment!",
	"The sharing or distribution of hacks, cheats, or any unauthorized tools or services is strictly prohibited on this server!",
	"Do not Fading Door Abuse - using the keybind or other owner/gang/player exclusive methods to open/close doors when involved in a roleplay situation. Example: using your keybind to open/close a door during a base raid or a wiremod trigger that only opens the door for the owner & doesn't hold for the minimum 4 seconds!",
	"Be friendly with other users. Keep unnecessary drama out of the Server. Discussions are allowed as long as all members participate in a respectful and productive manner. Emotional or intentionally provocative discussions should be avoided. Homophobia, transphobia, racism, extremism, and similar behavior are not tolerated in any form and will result in an instant ban!",
	"You cannot suicide raid. Your intention behind raiding should be to gain an RP advantage, which isn't possible when you've killed yourself in the process!",
	"No invasive advertising, whether it be for other communities or streams. You can post your content in the media channel if it’s relevant and provides actual value for the community!",
	"No doxxing or leaking personal information. Posting or sharing real names, addresses, emails, passwords, bank or credit card details, or similar private information is forbidden!",
	"Only the Mayor may authorize or create a KOS sign for the Police Department. If there is no Mayor, this authority passes to the Police Chief. If neither a Mayor nor a Police Chief is present, a KOS sign may not be used!",
	"Sneaking into the PD is allowed without advert as long you do not attack police or raid to PD Bank. You are not allowed to defend yourself. Ex: Hobo is allowed to sneak in to jailbreak his friend. Once he's spotted, he can run but not attack the officer, even if attacked!",
	"Threats against any member will not be tolerated. This includes death threats, scamming, blackmail, and suspicious links or websites claiming to offer free items. Ensure that everything you post complies with the law!",
	"All users within this community are expected to adhere and are subject to the following rules of conduct. These rules will be enforced at all times, including instances where a user is communicating with someone who is not a part of this community; In-Character gameplay is not subject to the Basic Conduct Rules, with the exception of any rules explicitly stated to apply during In-Character gameplay!",
	"Please use common sense when chatting and interacting on the server. Avoid encouraging rule-breaking, spamming staff, or causing disruptions. Take a moment to think before you act thank you!",
    "No Overstepping Abilities: Only use abilities that are explicitly assigned to your animatronic. Do not use mechanics belonging to other animatronics (e.g., Golden Freddy’s teleportation cannot be used by Foxy!",
	"You may grant yourself the very weapon you trade on the black market. However, per section 6.3, should you acquire firearms and refrain from selling them altogether—choosing instead to keep them for yourself you shall face an appropriate punishment!",
	"We do not offer refunds for donations or packages, including VIP, PAC3 access, and similar items. Refunds for sale items due to a change of mind are not available. AN holds no contractual obligation to provide donation packages, which may be revoked at any time. Additionally, art subjects may be altered as necessary!",
	"Please do not abuse your VIP rank, this includes false votebanning/kicking, and calling votebans and votekicks while staff members are online. Abuse can result in your VIP being revoked!",
	"DO listen to staff. Even if something isn't explicitly mentioned in the MOTD, does not mean it's okay. If you have an issue with a staff ruling, take it up on the forums instead of in-game!",
	"Staff members may take action against any activities regardless of their presence on this list. Use common sense to avoid such situations! If in doubt, ask one of our team!",
	"All server participants must be treated with respect, including moderators, testers, administrators, and server representatives. Offensive behavior may lead to a kick or, in extreme cases, a ban. Respect for all members is required!",
	"Any use of exploits, clientside lua scripts, cheats, circumventing measures put in place to protect the server, use of server scripts or addons against the intended purpose or macros/autoclickers, BHOPing in RP, etc, will not be tolerated. Permanent bans will be issued at the discretion of staff for these offenses. All exploits and bugs must be reported to server staff immediately!",
	"Permanent bans should be reserved for players who pose a serious threat to server stability such as spamming, prop pushing, or blocking train routes. In most other cases, warnings or kicks are more appropriate. However, permanent bans may also be issued for severe misconduct, including explicit harassment (e.g., 4chan-style trolling or hate speech) and excessive chat or microphone spam. In short, perma-bans are for those who join with the clear intent to break the rules!",
	"No RDM (Random Deathmatch) Attacking or killing other players without a valid roleplay reason is strictly prohibited. All combat must have in-character justification!",
	"No RDM (Random Deathmatch): All violence must have valid RP justification. Examples of RDM include: shooting someone for no reason, killing AFKs, attacking without interaction!",
	"Please refrain from posting nudity in this Discord server, as it's disgusting, and there are minors in this Discord-gmod!",
	"Kidnap bases may have 5 total fading doors. 2 leading to the main room, and 3 cells. Kidnap bases are bases that ONLY store kidnapped victims. If you have any other raid-able entities, then you must follow standard basing rules!",
	"Any racism, sexism, transphobia, homophobia, fake news, leaks, sharing of sensitive/personal messages or information, sharing of images or videos without an individual’s consent, discussion of abusive or suicidal topics etc are prohibited on this server!",
	"Impersonating an employee or executive of [AN] is strictly prohibited. Anyone found doing so will be permanently banned from both our Discord and Garry’s Mod server!",
	"You must operate vehicles in a realistic and roleplay-appropriate manner. Reckless or unrealistic driving may result in your vehicle being removed and/or a vehicle ban for the remainder of the session!",
	"DDoS or the publicizing of other members’ private information (DOX) will result in a permanent ban. (This includes all/any hacking threats!",
	"Use common sense when chatting and interacting on the server. Encouraging rule-breaking, spamming staff, or disrupting gameplay will not be tolerated. Please think before you act!",
	"Plase No sharing or distributing hacks, cheats, or other unauthorized tools or services Sharing or distributing hacks, cheats, or other unauthorized tools or services is strictly prohibited on the server!",
	"Impersonating an employee or executive of [AN] is strictly prohibited, and if found doing so you will be permanently banned from our Discord & Gmod Server!",
	"No publishing of personal information. This includes real names, home addresses, email addresses, passwords, bank account details, credit card information, or any other private data!",
	"No metagaming or trying to take advantage of it in roleplay. It ruins the fun for those who take roleplaying seriously!",
	"No RDM: You may not attack or kill other players unless you have a legitimate, roleplay-appropriate reason. Violations will result in punishment!",
	"The most important rule is to treat all server participants with respect. This includes moderators, testers, administrators, and server representatives. Offensive behavior may result in a kick, and in severe cases, a ban. We ask that you respect all members equally!",
	"No RDM (Random Deathmatch): Attacking or killing other players without a valid in-roleplay reason is strictly prohibited!",
	"Erotic Roleplay is strictly prohibited! Participating in ERP violates server rules and will lead to a ban. Please adhere to the community guidelines and show respect for others!",
	"If you experience bullying, harassment, or see any server rule violations, report it to a staff member or moderator. The more information you provide, the quicker we can take action!",
	"Collaborative Effort: The safety and well-being of our members, particularly minors, is a shared responsibility. We encourage all members to actively participate in maintaining a safe community by adhering to these rules and reporting any violations they may witness!",
	"Within our community, discussing or taking part in raids on other servers is not allowed. Participation in such activities may result in a permanent ban from our server!",
	"No Camping: The Animatronics should not be camping in one location, such as the office, for extended periods unless it aligns with RP or game mechanics!",
	"Our community enforces a strict zero-tolerance policy towards any form of paedophilia, child exploitation, or grooming. Any individual found engaging in, promoting, or supporting such activities will be immediately blacklisted and banned from our platforms!",
	"Props will and shell not be abused in any way. This includes, but is not limited to, prop blocking, prop killing, prop bridging, and prop spamming!",
	"The display of swastikas, Nazi salutes, or any other form of Nazi glorification is strictly prohibited, including within roleplay. This rule applies to all server activities without exception!",
	"please NO Publishing personal information is strictly prohibited. This includes real names, addresses, emails, passwords, banking details, credit card information, or any other sensitive data!",
	"No Powergaming. Do not force actions or outcomes on other characters. All interactions must allow a reasonable chance to react. Use /me attempts rather than declaring success!",
	"This server is not a space for discussions about self-harm or deeply personal mental health struggles. While we care about our members, moderators and users here are not therapists and cannot offer proper support. If you’re having a hard time, please speak privately with someone you trust or contact a qualified professional. Public Discord servers are not suited for handling these situations!",
	"Admins and moderators have the discretion to mute, kick, or ban players as necessary. If you believe you have been treated unfairly, please contact an admin via forms ban appeal, and we will work to resolve the issue!",
	"Do not attempt/say you are going to DDOS/crash the server Don't walk up to somebody and say I'm going to DDOS this fucking stupid server as a joke, it will be taken seriously and you will be permabanned!",
	"Ensuring a Safe Environment: We are committed to maintaining a safe and inclusive environment for all members. As such, we will continue to monitor and enforce these rules and regularly review and update them as needed!",
	"All vehicles must be driven in a reasonable and roleplay-appropriate way. Reckless, unrealistic, or disruptive driving will result in your vehicle being deleted and may lead to a vehicle ban for the rest of the session!",
	"Mic Spamming/Chat Spamming: Refrain from creating excessive noise or sending repetitive messages that disrupt the gameplay experience for others!",
	"While disagreements are a natural part of communication, persistent negative behavior or efforts to evade a block or ban constitute harassment and are strictly prohibited!",
	"You may not act as a security guard for the PD. You work at Freddy’s Pizzeria, and your role and jurisdiction are limited strictly to that location!",
	"Personal information must remain private. Sharing your own or another user’s personal details without consent is not permitted. This includes phone numbers, home addresses, and any sensitive information that could cause harm!",
	"No Griefing or Raiding: Respect other players' builds and property. Griefing, raiding, or stealing without valid roleplay justification is strictly Prohibited!",
	"Do not publish or share personal or sensitive information. This includes real names, home addresses, email addresses, passwords, banking details, credit card information, or any other private data!",
	"DDoS or the publicizing of other members’ private information (DOX) will result in a permanent ban. (This includes all/any hacking threats!",
	"All members are expected to treat others with respect and kindness. Rude, hurtful, or disrespectful behavior will not be tolerated, as everyone deserves a comfortable and welcoming environment!",
	"Offensive slurs, antisemitism, racism, homophobia, whiteshaming, absolutely any promotion of extremist views/political ideologies are not allowed. Breaking this rule either leads to 4 days of isolation, or immediate ban!",
	"We uphold a strict zero-tolerance policy regarding sensitive content, including—but not limited to—pornography, pedophilia, and graphic violence. Posting such material will lead to immediate consequences, such as a mute, kick, or ban!",
	"Hate Content & Explicit Material: Posting adult content, graphic images, or any form of hate content on our Discord services is strictly prohibited. Violators will be banned. This rule also applies to offensive reactions, profile pictures, and bios!",
	"We don’t collect your personal information, we don’t store it, and we don’t sell it ever!",
	"Advertising any external products, services, or servers is strictly forbidden, including via private messages to members. This server is not a platform for self-promotion or solicitation. Violations may result in warnings or bans!",
	"No publishing of personal information (including real names, addresses, emails, passwords, bank account and credit card information, etc!",
	"We uphold a strict zero-tolerance policy regarding sensitive content, including but not limited to pornography, pedophilia, and graphic violence. Any violation will result in immediate action, which may include a mute, kick, or ban!",
	"Do not join voice chat channels without permission of the people already in there If you see that they have a free spot it is alright to join and ask whether they have an open spot, but leave if your presence is not wanted by whoever was there first!",
	"No condone of racism, homophobia, transphobia, or sexism in any form. No targeted harassment in general. Get that shit outta here. For the love of god no rape jokes and no hateful language or jokes. Use of hateful imagery (such as swastikas, black sun, confederate flag etc.) will also be punished!",
	"We are committed to ensuring that everyone enjoys a pleasant experience here. If you have any questions or need assistance, please feel free to reach out to our staff they are always ready to help!",
	"The use of slurs, such as the N-word, is strictly prohibited. Violations will result in a one-hour timeout as a warning. You will receive up to two warnings; any further violations will lead to removal from the platform!",
	"Your donation status does not change the fact that you are a valued member of our community. However, it does not place you above our rules or any other expectations. You are still required to follow our guidelines!",
	"Sharing personal information is strictly prohibited. This includes real names, addresses, emails, passwords, and any financial or account details!",
	"Acting as PD security is not permitted. Your position is at Freddy’s Pizzeria, and your authority applies only within that setting!",
	"Attacking with splash damage through props, walls, or beyond the pizzeria's territory is strictly forbidden. Intentionally attacking animatronics and plush toys outside the pizzeria's territory is also prohibited. Climbing stairs is not allowed (except for Purple Guy in the guise of a security guard). Punishment: Warning / 10-20 minute ban!",
	"Metagaming and exploiting in-roleplay situations are strictly prohibited, as these actions undermine the immersive experience and detract from the enjoyment of those who approach roleplay with sincerity and dedication!",
	"Attempting to loophole any rule is not allowed. Just because something isn’t explicitly written does not make it acceptable. Staff have the final say during sits; if you disagree, you must appeal on the forums not in-game!",
	"It's forbidden to stay in the back rooms of the pizzeria during the day (excl. Broken animatronics and plush toys in the basement) Punishment: warn / Ban 10-20min!",
	"KOS signs must be clearly placed at the entrance of a KOS area and should be appropriately sized and colored for visibility. Any attempts to bait players into areas with unclear or obscure KOS signs will result in staff-issued punishment!",
	"You are not allowed to take control of locations. If you raid a place, you must leave once your objective is achieved. Do NOT remain to obstruct others from returning for an extended period!",
	"The staff is responsible for maintaining the rules. Arguing with them over their decisions is discouraged. If you believe you were treated unfairly, you may submit a ticket for review in our dsicord server!",
	"Promoting your company or organization outside the server is prohibited unless you obtain explicit permission from the founders. However, promoting in-game businesses is permitted!",
	"Within our community, the discussion or active involvement in raids on other servers is not endorsed. Participation in such activities may result in a permanent ban from our server!",
	"Restricted Ability Usage: Players must only use abilities designated to their current animatronic. Using abilities from other animatronics (such as Golden Freddy’s teleport) is strictly Prohibited!",
	"I the player respectfully disagree with the actions taken by the administration, If you find yourself in disagreement with the reason for a kick or ban, you are always free to explore and play on other servers. Please remember that all Garry's Mod servers are community-hosted, and access to them is ultimately at the discretion of their respective administrations!",
	"No sharing or distributing counterfeit or fraudulent items Sharing or distributing counterfeit or fraudulent items, such as fake IDs or fraudulent financial documents, is strictly prohibited on the server!",
	"Reminder: The use or portrayal of Nazi symbols, salutes, or ideology is strictly prohibited, even for roleplay purposes. This policy applies to all areas of the server!",
	"Do not interfere with the enjoyment of other members. Harassment, hostility, or targeting others will not be tolerated. If staff or another member asks you to stop toxic or disruptive behavior, you must cease immediately. Handle personal conflicts privately in DMs — public drama will not be entertained!",
	"Posting personal or sensitive information is not allowed. This includes, but is not limited to, real names, addresses, email addresses, passwords, bank account details, and credit card information!",
	"Do not engage in arguments or introduce controversial topics in public chats. Any disputes should be resolved privately, either through direct messages or by contacting a staff member. Failure to comply will result in disciplinary action!",
	"Be Respectful Discrimination, slurs, or offensive remarks about race, gender, sexuality, religion, or any personal characteristics are prohibited. While light swearing is acceptable, excessive use should be avoided. Harassment in any form will not be tolerated!",
	"Users with the exiled status have earned it by repeatedly violating our community rules, resulting in multiple bans, or by attempting to dispute or charge back payments (which is against our refund policy). Being exiled marks you as an outcast. Exiled users should not be mentioned or discussed within the community!",
	"It’s unacceptable to attack a person or a community based on attributes such as their race, ethnicity, caste, national origin, sex, gender identity, gender presentation, sexual orientation, religious affiliation, age, serious illness, disabilities, or other protected classifications!",
	"Do threats of violence or harm toward others. This includes indirect, implied, or suggestive threats, as well as sharing or threatening to share another person’s personally identifiable information (commonly known as doxxing!",
	"Disagreements are normal and expected; however, repeatedly making negative remarks or attempting to bypass a block or ban will be considered harassment and will not be tolerated!",
	"Advertising your own products, services, or servers is strictly prohibited, including through private messages. Do not use this server to spam or promote content to other Discord members!",
	"Lastly, we hope you have a fantastic time! Our goal is for you to enjoy this wonderful community, connect with other members, and make the most of your experience here. Thank you for taking the time to read through these rules—by following them, you’re helping us maintain a welcoming and enjoyable space for everyone. We truly appreciate it, and we’re excited to have you here. Enjoy your stay!",
	"Treat everyone here with respect and kindness. Avoid any behavior or remarks that could be perceived as rude or hurtful, as everyone deserves to feel comfortable and welcome!",
	"Please treat all server participants with respect, including moderators, testers, administrators, and server representatives. Offensive behavior can lead to a kick or, in serious cases, a ban. We ask that everyone show equal respect!",
	"It is your responsibility to read and follow our server rules, which may change over time. Failure to comply will result in punishment. This is a simple list—follow it, and you’ll do great!",
	"No Display of swastikas, the Nazi salute, or any other form of glorifying Nazism is strictly forbidden, even in the context of roleplay. This rule applies to all server activities!",
	"Please do not talk about killing yourself, being worthless, venting your struggles, etc. on this public server. Moderators and other members of the server are not therapists and may not offer the best advice. If you're struggling, we recommend talking to close friends and/or family in a private setting or reaching out for professional medical help. A public discord is not best suited to discussing these issues!",
	"Fail RP is defined as performing an action or behaving in a way which breaks or inhibits roleplay in any manner. This can include, but is not limited to, bunnyhopping, using /advert OOCly, having an invalid name, necksnapping EOD/OSS, making callouts after you die, prop killing with anything other than rollermines/manhacks, acting conversely to the implied role of a specialized class (such as not attempting to blend in as a disguised SU or kill farming as a pushback class), and/or disrupting the gameplay of others (such as by micspamming!",
	"If what you're doing or are about to do isn't listed here and you're curious, ask a staff member. If one is not available, use common sense. If you can't find an answer, contact a Head Admin+. Server management has the final say over IC situations!",
	"Exploiting bugs, glitches, map features (such as going out of bounds or standing on the very edges of a map), or loopholes in the rules is prohibited. Abusing an exploit for any reason is punishable!",
	"If someone is bullying, harassing you, or breaking server rules, please report them to a staff member or moderator. Providing as much information as possible will help us respond faster!",
	"Animatronics are permitted to KOS (Kill on Sight) from 12:00 AM to 5:00 AM in-game time. During these hours, as the restaurant is closed, they are allowed to eliminate you if you're inside!",
        "This Community enforces a strict zero-tolerance policy towards any form of paedophilia, child exploitation, or grooming. Any individual found engaging in, promoting, or supporting such activities will be immediately blacklisted and banned from our platforms!",
	"It Is forbidden to attack with a splash through props, walls, or outside the territory of the pizzeria. It is also forbidden to intentionally attack animatronics and plush toys while outside the territory of the pizzeria. It is forbidden to climb stairs (excl. Purple Guy in the guise of a security guard. Punishment: warn / Ban 10-20min!",
        "Do not share personal information. This means no phone numbers, addresses, or private details—yours or anyone else’s unless you have clear permission!",
        "Unless the voice channel owner specifically allows it, There is to be no use of soundboards in the voice channels. If you have been given permission, please don't spam noises, as others may not want to hear them all the time!",
	"Any violations within these rules will have our loyal fellow mods give you a warning, if you continue to violate the rules it will result in a kick out or if major, banned. So pls, try not to cause trouble. Have a good day!",
        "Breaking the NLR (New Life Rule) involves returning to the location of your death within five minutes or interacting with the player who killed you. Violating this rule may result in a verbal warning, a written warning, or a ban for repeat offenders. Additionally, returning near your base to observe raiders, even without interaction, is also considered breaking NLR. Avoid doing so!"

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
