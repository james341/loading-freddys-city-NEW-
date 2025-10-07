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
	{ogg: "fnafsbdayecareshit.ogg", name: "Installation Music"},
	{ogg: "dsafrealgoodending.ogg", name: "Installation Music"},
	{ogg: "twobirdsregina.ogg", name: "Installation Music"},
	{ogg: "realfredbearmusic.ogg", name: "Installation Music"},
	{ogg: "superidomusicbox.ogg", name: "Installation Music"},
	{ogg: "davesbattletheme.ogg", name: "Installation Music"},
	{ogg: "dsafsuperidol.ogg", name: "Installation Music"},
	{ogg: "dsaflifemar.ogg", name: "Installation Music"},
	{ogg: "comesthesunInstrumental.ogg", name: "Installation Music"},
	{ogg: "thepizzeriashitmusicai.ogg", name: "Installation Music"}, 
	{ogg: "austinrobertssevendaysweek.ogg", name: "Installation Music"},
	{ogg: "newdsafmusiccoolrightxd.ogg", name: "Installation Music"},
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
	"Keep all text signs appropriate and in-character. GIFs, unrelated content, and anything racist, pornographic, or religiously offensive will not be tolerated!",
	"Staff members, including admins and moderators, have the discretion to mute, kick, or ban players when necessary. If you believe you were treated unfairly, please submit a ban appeal through the appropriate form, and we will review your case fairly!",
	"No Erotic Roleplay (ERP): All forms of ERP or sexual content are strictly prohibited, even if meant humorously. This includes suggestive language, emotes, or text-based interactions!",
	"Prop abuse of any kind is not allowed including blocking, killing, bridging, or spamming props!",
	"No Doxxing or Sharing Personal Information This is absolutely forbidden. This includes  but is not limited to addresses, full names, credit card details, passwords, and any other private information. Stalking is also strictly prohibited. Violations will result in severe punishment!",
	"Regardless of personal opinions, the rules are in place to be followed. If you have concerns, you're welcome to share them respectfully but adherence is mandatory. Failure to comply may result in serious consequences!",
	"Automation in any form for the purpose of collecting any cash is strictly forbidden and may result in a severe deduction from your account!",
	"Do not Powergame. You cannot force actions upon others without their consent or a fair chance to react. Use /me attempts to instead of forcing outcomes!",
	"Donations and packages (e.g., VIP, PAC3) are non-refundable. AN reserves the right to revoke or alter any perks at any time. No refunds will be given for changes of mind!",
	"Please do not attempt chargebacks. If you experience any issues, contact staff directly we're here to help. Chargebacks will result in a permanent ban!",
	"For most minor offences like holding an illegal weapon out, discharging a weapon in public, illegal parking, or possession of contraband, PD might choose to ticket a user rather than arrest them!",
	"It Is forbidden to attack with a splash through props, walls, outside the territory of the pizzeria. It is also forbidden to intentionally attack animatronics and plush toys while outside the territory of the pizzeria. It is forbidden to climb stairs (excl. Purple Guy in the guise of a security guard. Punishment: warn / Ban 10-20min!"
	"You're not allowed to ask someone if they can put a hit on a specific player; this also counts when you ask someone, Can you please place a hit!"
	"Please do not attempt chargebacks. If you experience any issues, contact staff directly we're here to help. Chargebacks will result in a permanent ban!",
	"All donations are final. No refunds for VIP, PAC3, or any other perks. We may modify or revoke perks at any time. Change-of-mind refunds will not be honored!",
	"Please don’t attempt chargebacks. If there’s an issue, reach out to staff we’re happy to help, but chargebacks will get you banned!",
	"Do not engage in arguments or introduce controversial topics in public chats. Any disputes should be resolved privately, either through direct messages or by contacting a staff member. Failure to comply will result in disciplinary action!",
	"Common Sense Applies: Not every scenario is covered by the rules. If your actions harm roleplay or negatively impact others, it’s not allowed!",
	"Our admins and moderators are trusted to take action when needed. If you think something was handled unfairly, you’re welcome to file a ban appeal—we’ll make sure it’s reviewed properly!",
	"From 12:00 AM to 5:00 AM (in-game), animatronics have full KOS rights. The restaurant is considered closed during these hours—anyone who enters does so at their own risk and may be eliminated on sight!",
	"Whether you agree with them or not, the regulations exist for a reason and must be followed. Concerns can be raised appropriately, but ignoring the rules will lead to severe punishment!",
	"Threats against any member will not be tolerated. This includes death threats, scamming, blackmail, and suspicious links or websites claiming to offer free items. Ensure that everything you post complies with the law!",
	"No ERP (Erotic Roleplay) Absolutely no ERP or sexual content, even if intended as a joke. This includes suggestive emotes or text!",
	"On a lower tier, permanent bans may still be issued for explicit harassment including things like extreme trolling (e.g., spamming slurs) and persistent chat or microphone spam. In short, this applies to players who are clearly here just to break the rules on purpose!",
	"As a general rule, permanent bans should be reserved for players who pose a serious threat to server stability — such as spamming, prop pushing, or blocking train routes. In most other cases, warnings or kicks are more appropriate. However, permanent bans may also be issued for severe misconduct, including explicit harassment (e.g., 4chan-style trolling or hate speech) and excessive chat or microphone spam. In short, perma-bans are for those who join with the clear intent to break the rules!",
	"You may grant yourself the very weapon you trade on the black market. However, per section 6.3, should you acquire firearms and refrain from selling them altogether—choosing instead to keep them for yourself you shall face an appropriate punishment!",
	"We do not offer refunds for donations or packages, including VIP, PAC3 access, or similar items. Refunds will not be granted for sale items due to change of mind. Authoritarian Nation (AN) holds no contractual obligation to provide donation packages, which may be modified or revoked at any time. Additionally, art subjects or content may be adjusted as needed!",
	"Staff Have Final Say: If a staff member makes a decision, respect it. You may appeal it later, but do not argue excessively in the moment!",
	"Staff members are there to help whenever there is an issue in chat or in any other situation. So please, for God's sake, just listen to them!",
	"Do not engage in arguments or introduce controversial topics in public chats. Any disputes should be resolved privately, either through direct messages or by contacting a staff member. Failure to comply will result in disciplinary action!",
	"Users marked with the 'Exiled' status have earned it by repeatedly violating community rules, receiving multiple bans, or attempting to dispute punishments or issue chargebacks — actions that go against our refund and conduct policies. Being exiled designates you as an outcast from the community. As such, exiled individuals are not to be discussed or referenced within the community!",
	"Please remain in the office. Night guards must stay in the office at all times, unless specific rules allow exploration during designated events!",
	"Any racism, sexism, transphobia, homophobia, fake news, leaks, sharing of sensitive/personal messages or information, sharing of images or videos without an individual’s consent, discussion of abusive or suicidal topics etc are prohibited on this server!",
	"Erotic Roleplay is strictly prohibited! Participating in ERP violates server rules and will lead to a ban. Please adhere to the community guidelines and show respect for others!",
	"No RDM, MRDM, VDM basically, don’t go around killing people for no reason. Or a middle ground!",
	"Attempting to charge back a donation or purchase is a serious violation of our terms and may result in a permanent ban!",
	"Chargeback attempts are treated as fraud and will result in immediate loss of access to any associated services or perks!",
	"Any violations within these rules will have our loyal fellow mods give you a warning, if you continue to violate the rules it will result in a kick out or if major, banned. So pls, try not to cause trouble. Have a good day!",
	"Be kind, friendly and respectful to one another! Any intentional harassment, bad behaviour and bullying will not be tolerated. All Discord usernames, statuses and profile pictures should also be kept respectful and you shouldn’t be saying anything you think is inappropriate!",
	"The safety and well-being of our members, particularly minors, is a shared responsibility. We encourage all members to actively participate in maintaining a safe community by adhering to these rules and reporting any violations they may witness!",
	"Like it or not, the rules aren’t optional. You’re expected to follow them — and breaking them can result in serious consequences!",
	"Do Not Exploit or Glitch Any exploitation of bugs, glitches, map issues, or unintended mechanics will result in punishment!",
	"We expect everyone to treat each other with respect. Harmful or rude comments aren't welcome here let’s keep things positive and inclusive!",
	"Any form of prop abuse is strictly prohibited. This includes, but is not limited to, prop-blocking, prop-killing, prop-bridging, or using an excessive number of props!",
	"Please No Camping The Animatronics should not be camping in one location, such as the office, for extended periods unless it aligns with RP or game mechanics!",
	"Between 12 AM and 5 AM in-game, the animatronics enter night mode and are allowed to KOS. The restaurant is closed — any humans caught inside may be terminated immediately!",
	"Uh, ok so just a quick heads up no saying slurs, like, uh, the N-word. If you do, you'll get timed out for an hour as a warning. Uh, you get two warnings, and if you still don't listen, well… uh, you’ll be kicked. So, uh, yeah—just keep it clean, alright? Thanks!",
	"Admins and moderators have the discretion to mute, kick, or ban players when necessary. If you believe a decision was unfair, please submit a ban appeal via the forms, and we will review the situation fairly!",
	"Do not attempt/say you are going to DDOS/crash the server. - Don't walk up to somebody and say I'm going to DDOS this fucking stupid server as a joke, it will be taken seriously and you will be permabanned!",
	"We are committed to maintaining a safe and inclusive space for all members. These rules will be actively monitored and enforced, and we’ll continue to review and update them as needed!",
	"Mic Spamming/Chat Spamming: Refrain from creating excessive noise or sending repetitive messages that disrupt the gameplay experience for others!",
	"Let me be very clear — props? Should NOT be abused. Not in any way. Not in any form. We don't want prop-blocking, we don't want prop-killing, no prop-bridging, no spamming it's a disaster, folks. Total disaster. Keep it clean, keep it fair. Only good props. The best props. Believe me!",
	"Advertising is strictly prohibited, whether in public channels or direct messages. This includes promotion of servers, products, or services. Using our server to spam or advertise to others will result in disciplinary action!",
	"No Griefing or Raiding: Respect other players' builds and property. Griefing, raiding, or stealing without valid roleplay justification is strictly Prohibited!",
	"Offensive slurs, antisemitism, racism, homophobia, whiteshaming, absolutely any promotion of extremist views/political ideologies are not allowed. Breaking this rule either leads to 4 days of isolation, or immediate ban!",
	"We uphold a strict zero-tolerance policy regarding sensitive content, including—but not limited to—pornography, pedophilia, and graphic violence. Posting such material will lead to immediate consequences, such as a mute, kick, or ban!",
	"No condone of racism, homophobia, transphobia, or sexism in any form. No targeted harassment in general. Get that shit outta here. For the love of god no rape jokes and no hateful language or jokes. Use of hateful imagery (such as swastikas, black sun, confederate flag etc.) will also be punished!",
	"We are committed to ensuring that everyone enjoys a pleasant experience here. If you have any questions or need assistance, please feel free to reach out to our staff they are always ready to help!",
	"Staff are responsible for enforcing the rules. Arguing with their decisions is discouraged. If you believe you’ve been treated unfairly, you’re welcome to submit a ticket for review through our Discord server!",
	"Kind reminder: Don’t advertise your server, product, or service even in DMs. We’re keeping this space clean and spam-free for everyone!",
	"We’re committed to making sure everyone has a great experience here. If you have any questions or need help, don’t hesitate to reach out to our staff they’re always happy to assist!",
	"The use of slurs, such as the N-word, is strictly prohibited. Violations will result in a one-hour timeout as a warning. You will receive up to two warnings; any further violations will lead to removal from the platform!",
	"Your donation status does not change the fact that you are a valued member of our community. However, it does not place you above our rules or any other expectations. You are still required to follow our guidelines!",
	"Attacking with splash damage through props, walls, or beyond the pizzeria's territory is strictly forbidden. Intentionally attacking animatronics and plush toys outside the pizzeria's territory is also prohibited. Climbing stairs is not allowed (except for Purple Guy in the guise of a security guard). Punishment: Warning / 10-20 minute ban!",
	"Value your character’s life. Reckless behavior such as suicide-by-cop, unnecessary rushing, or unrealistic heroics—is considered FailRP!",
	"Please do not advertise your own content or server—this includes servers, products, or services even in private messages. We want to keep the community free of spam for everyone!",
	"The Animatronics may KOS you from 12:00 am to 5:00 am in-game time. - They are allowed to kill you at this time since it is after closing if you are in the Restaurant!",
	"We do not provide refunds for donations or packages such as VIP, PAC3 Access, etc. There are no change-of-mind refunds on sale items. AN does not have a contractual obligation to provide donation packages. Donation packages can be revoked, and art subjects can be changed!",
	"Value Your Life You should act as if your character wants to survive. Suicide-by-cop, pointless rushing, or unrealistic heroics are FailRP!",
	"No speaking or attempting to joke about DDOS or DOXING, even in role-play. This will, as stated in the General Rules, almost immediately result in a permanent ban!",
	"Breaking the NLR constitutes returning to the place of your death within or before five minutes of your death. This can also mean returning to and/or interacting with the player that killed you. If you are found breaking this rule, it’ll be dealt with by a verbal warning, a written warning, or a ban for repeat offenders. Returning to the vicinity of your base to watch the raiders (even if you aren’t interacting with them) counts as breaking NLR. Don’t do it!",
	"KOS signs must be clearly placed at the entrance of a KOS area and should be appropriately sized and colored for visibility. Any attempts to bait players into areas with unclear or obscure KOS signs will result in staff-issued punishment!",
	"You are not allowed to take control of locations. If you raid a place, you must leave once your objective is achieved. Do NOT remain to obstruct others from returning for an extended period!",
	"Attempting to charge back a donation or purchase is a serious violation of our terms and may result in a permanent ban!",
	"The staff is responsible for maintaining the rules. Arguing with them over their decisions is discouraged. If you believe you were treated unfairly, you may submit a ticket for review in our dsicord server!",
	"Promoting your company or organization outside the server is prohibited unless you obtain explicit permission from the founders. However, promoting in-game businesses is permitted!",
	"You don’t have to do something massive to get perma-banned. If you're spamming slurs, mic-spamming, or just trolling to cause chaos, you’re gone. Simple as that!",
	"Signs must be used for role-play purposes only. No GIFs, trolling, or inappropriate content — including racism, adult material, or anything offensive to religion!",
	"If you respectfully disagree with the actions taken by the administration, If you find yourself in disagreement with the reason for a kick or ban, you are always free to explore and play on other servers. Please remember that all Garry's Mod servers are community-hosted, and access to them is ultimately at the discretion of their respective administrations!",
	"Any posted content that the admins or moderators find suggestively offensive in the channels, depending on the situation, will result in anything from a warning to a possible ban!",
	"Do not engage in arguments or introduce controversial topics in public chats. Any disputes should be resolved privately, either through direct messages or by contacting a staff member. Failure to comply will result in disciplinary action!",
	"Look Please Be Respectful Discrimination, slurs, or offensive remarks about race, gender, sexuality, religion, or any personal characteristics are prohibited. While light swearing is acceptable, excessive use should be avoided. Harassment in any form will not be tolerated!",
	"Users with the exiled status have earned it by repeatedly violating our community rules, resulting in multiple bans, or by attempting to dispute or charge back payments (which is against our refund policy). Being exiled marks you as an outcast. Exiled users should not be mentioned or discussed within the community!",
	"It’s unacceptable to attack a person or a community based on attributes such as their race, ethnicity, caste, national origin, sex, gender identity, gender presentation, sexual orientation, religious affiliation, age, serious illness, disabilities, or other protected classifications!",
	"No threats of violence or threaten to harm others. This includes indirect or suggestive threats, as well as sharing or threatening to share someone’s personally identifiable information (also known as doxxing!",
	"Advertising your own products, services, or servers is not allowed this includes private messages. Please do not use our server to spam or promote content to other Discord users!",
	"Lastly, we hope you have a fantastic time! Our goal is for you to enjoy this wonderful community, connect with other members, and make the most of your experience here. Thank you for taking the time to read through these rules—by following them, you’re helping us maintain a welcoming and enjoyable space for everyone. We truly appreciate it, and we’re excited to have you here. Enjoy your stay!",
	"Please Be respectful and kind always. Any rude or toxic behavior won't be tolerated. Keep this space safe and welcoming for all!",
	"It is your responsibility to read and abide by our server rules. These may change over time. Failure to follow will result in punishment. This is a simple list. Follow, and you'll do great!",
	"No Racism Please, homophobia, transphobia, sexism, or any other targeted harassment have no place here. Keep that out of any Discord, GMod server, or ETA-related spaces. Absolutely no rape jokes, hateful language, or hate symbols (e.g., swastikas, Black Sun, Confederate flag). Violations will result in strict consequences!",
	"display of swastikas, the Nazi salute, or any other form of glorifying Nazism is strictly prohibited, including within roleplay scenarios. This rule applies to all server activities without exception!",
	"Please do not talk about killing yourself, being worthless, venting your struggles, etc. on this public server. Moderators and other members of the server are not therapists and may not offer the best advice. If you're struggling, we recommend talking to close friends and/or family in a private setting or reaching out for professional medical help. A public discord is not best suited to discussing these issues!",
	"We do not offer refunds for donations or packages, including VIP, PAC3 access, or similar items. Refunds will not be granted for sale items due to change of mind. Authoritarian Nation (AN) holds no contractual obligation to provide donation packages, which may be modified or revoked at any time. Additionally, art subjects or content may be adjusted as needed!",
	"If what you're doing or are about to do isn't listed here and you're curious, ask a staff member. If one is not available, use common sense. If you can't find an answer, contact a Head Admin+. Server management has the final say over IC situations!",
	"Exploiting bugs, glitches, map features (such as going out of bounds or standing on the very edges of a map), or loopholes in the rules is prohibited. Abusing an exploit for any reason is punishable!",
	"Our staff team has the authority to take action when needed. If you feel a punishment was unjust, submit a ban appeal and we’ll make sure it gets a fair review!",
	"From 12:00 AM to 5:00 AM (in-game), animatronics have full KOS rights. Since the restaurant is closed during this time, entering it puts you at risk of being eliminated on sight!",
    "This Community enforces a strict zero-tolerance policy towards any form of paedophilia, child exploitation, or grooming. Any individual found engaging in, promoting, or supporting such activities will be immediately blacklisted and banned from our platforms!",
	"It Is forbidden to attack with a splash through props, walls, or outside the territory of the pizzeria. It is also forbidden to intentionally attack animatronics and plush toys while outside the territory of the pizzeria. It is forbidden to climb stairs (excl. Purple Guy in the guise of a security guard. Punishment: warn / Ban 10-20min!",
    "Don't say anything that could possibly hurt others (racial slurs, general slurs, etc!",
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
