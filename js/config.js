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
	{ogg: "newdsafmusiccoolrightxd.ogg", name: "Installation Music"},
	{ogg: "dsafrealgoodending.ogg", name: "Installation Music"},
	{ogg: "darxieland.ogg", name: "Installation Music"},
	{ogg: "dsafremove.ogg", name: "Installation Music"},
	{ogg: "lostconstellation.ogg", name: "Installation Music"},
	{ogg: "schnuffelkuschelsongInstrumentaltwo.ogg", name: "Installation Music"},
	{ogg: "flipsidedsaf.ogg", name: "Installation Music"},
	{ogg: "sleeplessdavetheme.ogg", name: "Installation Music"},
	{ogg: "boulevardofbrokendreamsmusicbox.ogg", name: "Installation Music"},
	{ogg: "flintstonesdsafremix.ogg", name: "Installation Music"},
	{ogg: "daycarethememusicbox.ogg", name: "Installation Music"},
	{ogg: "thepizzeriashitmusicai.ogg", name: "Installation Music"},
	{ogg: "dayshiftfpizza.ogg", name: "Installation Music"},
	{ogg: "youfeelthelove.ogg", name: "Installation Music"}, 
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
	"Text signs must not include GIFs or offensive content and should remain relevant to role-playing. Random, unrelated signs are not allowed. Racist, pornographic, or religiously offensive material is strictly prohibited!",
	"Use common sense when participating and chatting on the server. Avoid encouraging others to break rules, spamming staff, or engaging in disruptive behavior. Think before you act!",
        "ERP (Erotic Roleplay) is strictly prohibited! Participating in ERP violates server rules and will lead to a ban. Please adhere to the community guidelines and show respect for others!",
	"No Unreasonable Job Changes: Do not switch jobs just to avoid consequences or bypass cooldowns!",
	"Police Rules: Police must follow due process and cannot randomly arrest or shoot suspects (no random tazing or AOS!",
	"Admins and moderators have the discretion to mute, kick, or ban players as necessary. If you believe you have been treated unfairly, please contact an admin via forms ban appeal, and we will work to resolve the issue!",
	"No spamming or causing any kind of nuisance or inconvenience!",
	"Mic Spamming/Chat Spamming: Avoid excessive noise or repetitive messages that disrupt gameplay!",
	"Advertising of any kind, including DM (direct message) advertising, is strictly prohibited. This applies to promoting other servers, communities, or services!",
	"Mayor Rules: The mayor cannot engage in illegal activities or abuse emergency broadcasts. Laws must be reasonable and fair!",
	"Respect Everyone - Treat everyone with respect. Absolutely no harassment, witch hunting, sexism, racism, or hate speech!",
	"We uphold a strict zero-tolerance policy regarding sensitive content, including but not limited to pornography, pedophilia, and graphic violence. Any violation will result in immediate action, which may include a mute, kick, or ban!",
	"We don’t condone racism, homophobia, transphobia, or sexism in any form. No targeted harassment in general. Get that shit outta here. For the love of god no rape jokes and no hateful language or jokes. Use of hateful imagery (such as swastikas, black sun, confederate flag etc.) will also be punished!",
	"The use of slurs, such as the N-word, is strictly prohibited. Violations will result in a one-hour timeout as a warning. You will receive up to two warnings; any further violations will lead to removal from the platform!",
	"No Fading Door Abuse: Use fading doors with a keypad or button that remains open for at least 5 seconds!",
	"Kidnapping Rules: Kidnappings must be roleplayed properly. A ransom must be reasonable (e.g., no higher than $50,000!",
	"Do not discuss about sensitive topics This isn't a debating server, keep sensitive topics out of here so we don't have a ton of nasty arguments!",
	"No RDM (Random Deathmatch): Do not kill or attack players without a valid in-roleplay reason!",
	"It's forbidden to stay in the back rooms of the pizzeria during the day (excl. Broken animatronics and plush toys in the basement) Punishment: warn / Ban 10-20min!",
	"KOS signs must be clearly placed at the entrance of a KOS area and should be appropriately sized and colored for visibility. Any attempts to bait players into areas with unclear or obscure KOS signs will result in staff-issued punishment!",
	"You are not allowed to take control of locations. If you raid a place, you must leave once your objective is achieved. Do NOT remain to obstruct others from returning for an extended period!",
	"The staff is responsible for maintaining the rules. Arguing with them over their decisions is discouraged. If you believe you were treated unfairly, you may submit a ticket for review in our dsicord server!",
	"Promoting your company or organization outside the server is prohibited unless you obtain explicit permission from the founders. However, promoting in-game businesses is permitted!",
	"Within our community, the discussion or active involvement in raids on other servers is not endorsed. Participation in such activities may result in a permanent ban from our server!",
	"Please refrain from metagaming. Actions such as issuing warrants based solely on auditory cues like money printers or meth labs through walls, or relying on information derived from the killfeed, are not permissible!",
	"Community management reserves the right to modify the rules at any time without prior notice. Please ensure you stay informed about the latest updates!",
	"I am a player, and I respectfully disagree with the actions taken by the administration on this server. However, if you find yourself in disagreement with the reason for a kick or ban, you are always free to explore and play on other servers. Please remember that all Garry's Mod servers are community-hosted, and access to them is ultimately at the discretion of their respective administrations!",
	"Any posted content that the admins or moderators find suggestively offensive in the channels, depending on the situation, will result in anything from a warning to a possible ban!",
	"Do not engage in arguments or introduce controversial topics in public chats. Any disputes should be resolved privately, either through direct messages or by contacting a staff member. Failure to comply will result in disciplinary action!",
	"Be Respectful Discrimination, slurs, or offensive remarks about race, gender, sexuality, religion, or any personal characteristics are prohibited. While light swearing is acceptable, excessive use should be avoided. Harassment in any form will not be tolerated!",
	"It’s unacceptable to attack a person or a community based on attributes such as their race, ethnicity, caste, national origin, sex, gender identity, gender presentation, sexual orientation, religious affiliation, age, serious illness, disabilities, or other protected classifications!",
	"Do not make threats of violence or threaten to harm others. This includes indirect or suggestive threats, as well as sharing or threatening to share someone’s personally identifiable information (also known as doxxing!",
	"Disagreements are normal and expected, but repeatedly making negative comments or attempting to bypass a block or ban crosses the line into harassment and is unacceptable!",
	"Advertising your own products, services, or servers is not allowed, including through private messages. Please refrain from using our server to spam or advertise to other Discord users!",
	"Finally, have fun! We want you to have fun and enjoy our finest community, as well as talk to other members and shit! Thanks for reading this set of rules, and please be sure to follow them to keep this server an enjoyable environment! Thanks, and enjoy your stay!",
	"Treat everyone here with respect and kindness. Avoid any behavior or remarks that could be perceived as rude or hurtful, as everyone deserves to feel comfortable and welcome!",
	"It is your responsibility to read and abide by our server rules. These may change over time. Failure to follow will result in punishment. This is a simple list. Follow, and you'll do great!",
	"Be Respectful: Racism, homophobia, transphobia, sexism, and any form of targeted harassment have no place here. Keep that out of any Discord, GMod server, or ETA-related spaces. Absolutely no rape jokes, hateful language, or hate symbols (e.g., swastikas, Black Sun, Confederate flag). Violations will result in strict consequences!",
	"No Self-Promotion: Please don’t spam your mixtape we're begging you! Jokes aside, feel free to share your work, but if that’s all you’re here for, trust us, we’ll notice!",
	"The display of swastikas, the Nazi salute, or any other form of glorifying Nazism is strictly forbidden, even in the context of roleplay. This rule applies to all server activities!",
	"Please do not talk about killing yourself, being worthless, venting your struggles, etc. on this public server. Moderators and other members of the server are not therapists and may not offer the best advice. If you're struggling, we recommend talking to close friends and/or family in a private setting or reaching out for professional medical help. A public discord is not best suited to discussing these issues!",
	"Fail RP is defined as performing an action or behaving in a way which breaks or inhibits roleplay in any manner. This can include, but is not limited to, bunnyhopping, using /advert OOCly, having an invalid name, necksnapping EOD/OSS, making callouts after you die, prop killing with anything other than rollermines/manhacks, acting conversely to the implied role of a specialized class (such as not attempting to blend in as a disguised SU or kill farming as a pushback class), and/or disrupting the gameplay of others (such as by micspamming!",
	"If what you're doing or are about to do isn't listed here and you're curious, ask a staff member. If one is not available, use common sense. If you can't find an answer, contact a Head Admin+. Server management has the final say over IC situations!",
	"Exploiting bugs, glitches, map features (such as going out of bounds or standing on the very edges of a map), or loopholes in the rules is prohibited. Abusing an exploit for any reason is punishable!",
	"If someone is bullying or harassing you or breaking any server rules, you should report them to a staff member or moderator of the server. Giving us as much information as possible will speed up our response time!",
	"Animatronics are permitted to KOS (Kill on Sight) from 12:00 AM to 5:00 AM in-game time. During these hours, as the restaurant is closed, they are allowed to eliminate you if you're inside!",
        "This Community enforces a strict zero-tolerance policy towards any form of paedophilia, child exploitation, or grooming. Any individual found engaging in, promoting, or supporting such activities will be immediately blacklisted and banned from our platforms!",
	"It Is forbidden to attack with a splash through props, walls, or outside the territory of the pizzeria. It is also forbidden to intentionally attack animatronics and plush toys while outside the territory of the pizzeria. It is forbidden to climb stairs (excl. Purple Guy in the guise of a security guard. Punishment: warn / Ban 10-20min!",
        "Offensive humor is NOT okay. With everything going on, with racism and other problems around the world, we (as staff) will be more strict if we need to be!",
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
