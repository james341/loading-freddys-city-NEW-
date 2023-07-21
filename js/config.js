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
	{ogg: "johnyyespapanursery.ogg", name: "【AN】 - Installation Music"},
	{ogg: "dsafbirthday.ogg", name: "【AN】 - Installation Music"},
	{ogg: "smokindsafmusic.ogg", name: "【AN】 - Installation Music"},
	{ogg: "youfeelthelove.ogg", name: "【AN】 - Installation Music"},
	{ogg: "ghostbusterdsaf.ogg", name: "【AN】 - Installation Music"},
	{ogg: "neighbourhood.ogg", name: "【AN】 - Installation Music"},
	{ogg: "daycarethememusicbox.ogg", name: "【AN】 - Installation Music"},
	{ogg: "imbeliever.ogg", name: "【AN】 - Installation Music"},
	{ogg: "unseenhorrors.ogg", name: "【AN】 - Installation Music"},
	{ogg: "rocketman.ogg", name: "【AN】 - Installation Music"},
	{ogg: "sleeplessdavetheme.ogg", name: "【AN】 - Installation Music"},
	{ogg: "dsafyouspinme.ogg", name: "【AN】 - Installation Music"},  
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
	"No GIFs or offensive material on text signs and keep your signs in role-playing. (no random signs) (Racist/Pornographic/Bashing of religions etc are not tolerated!",
	"Use common sense when being active and chatting on the server. Don't encourage people to break rules, don't spam staff, etc. Use your brain!",
        "No inappropriate or offensive names We will ask you first to change it, or we will change it for you. Continuing to use offensive or inappropriate usernames will lead to a kick and ban!",
	"Hey there, my cool friends! Before you jump into the server, we’ve got a few rules to go over! We want to make sure this place is a friendly and safe place to hang out, so please sit tight while we explain, okay!",
	"These are going to be pretty basic. Don't be racist. What I mean is that saying slurs and sh*t racist jokes is fine as long as they don't go too far!",
	"Inappropriate usernames, pfps, banners, statuses, and bios are not allowed. Most violations of this rule will result in a kick on the first offence!",
	"Don't be a disturbance; let others play in peace! Don’t spam in text channels (except for the #spam🗿 channel), don’t repeatedly join and leave voice channels, and please don’t destroy our poor headphone users withearrape!"
	"Don't share your personal information. If you need to share personal information, do it in a DM. Otherwise, remember that what you share can be seen by ANYONE on the server. INCLUDING ME!",
	"Don’t you dare engage in any malicious behaviour, unless you want to get scurvy. This could be anything from blackmail, malicious links or content, revealing other friends' personal information, or scamming. We are respectful pirates around here!",
	"Avoid the pollution; keep the server organised! Try to keep your discussions in the appropriate channels, or else the server will be a complete mess. I’ve already spent so much time cleaning up the kitchen, so please don’t make me come and clean the server too!",
	"Avoid spamming the chat or using excessive mic spam. Posting leaks or sharing unauthorised information about the game is not allowed. Let's keep the discussions focused and enjoyable for everyone!",
	"Server raiding is against our terms of service. Any attempt to circumvent or bypass them can result in a permanent ban. As well as putting everyone in different chats with only trusted people, if you get cought raiding, that's an insta ban!",
	"Discussions about Bub Games is Banned- > Do not ignore this or consequences will be given out, single-handed by Doge himself!",
	"Treat fellow players with respect at all times. Harassment, toxicity, and baseless out-of-game accusations are strictly prohibited. Cheating or exploiting the game in any way is not allowed!",
	"Our goal is to have a clean, friendly, and enjoyable gaming environment for our players, which is why we have established a set of rules that we expect both players and staff to abide by at all times. Please review the list below, and as always, if you have any questions, feel free to contact a [AN] staff member!",
	"No pornographic, adult, or other NSFW material The idea behind the server is to provide a safe place for us to share art, videos, and other kinds of creative material—not  the aforementioned NSFW material!",
	"No advertisements No invasive advertising, whether it be for other communities or streams. You can post your content in the media channel in oir discord if it’s relevant and provides actual value for the community!",
	"The AN reserves the right, at any time without notice, to revise these rules and guidelines by updating this posting. Players and staff agree to be bound by such revisions and should periodically revisit this post to review the current rules and guidelines listed herein!",
	"Engaging in phishing, scamming, or any other illegal activities within the game or community is strictly prohibited. We maintain a zero-tolerance policy for such behaviour!",
	"The use of profanity should be kept to a reasonable minimum. Any derogatory language towards any user is prohibited. Swearing is permitted in casual channels only, while the official help and code channels should be kept free of any profane language!",
	"Treat all members with respect and kindness. Harassment, witch hunting, sexism, racism, or hate speech will not be tolerated. Any violations will result in a mute, followed by a ban if necessary!",
	"No spamming isn't okay. Please do not send a large volume of small messages to the server repeatedly. This makes it difficult for other people to follow and engage in discussions!",
	"Be civilised This basically means no slurs or discrimination about someone's race, gender, sexuality, religion, etc. Do not target people for something; even if they did something bad, it isn't best to go after them. We do allow swearing, but try to keep it to a minimum!",
	"No blatant racism, homophobia, or xenophobia towards others; memes and jokes are fine within reason!",
	"You're not allowed to ask someone if they can put a hit on a specific player; this also counts when you ask someone, Can you please place a hit!",
	"Keep the content appropriate for all ages. NSFW content, including pornography, lewd or explicit content, gore, or self-harm, is strictly prohibited. Sharing such materials will result in a permanent ban!",
	"Punishments for breaking a rule will vary based on the situation and are up to the relevant staff member's discretion. If you think you have been treated unfairly by a staff member, contact the head moderator. Rules are subject to change at any time!",
	"If there's a problem, DM any available staff member. (If people are saying, Go kill yourself or other stuff that is bad, they will get a warning!",
	"No jokes about mental illnesses, sexualities of any kind, religions, or political stuff. (Ex. cancer, autism, gay, etc!",
	"Do not distribute or provide access to content involving the hacking, cracking, or distribution of stolen goods, pirated content, or accounts. This includes sharing or selling game cheats or hacks!",
	"Do not use this community to spam, manipulate engagement, or disrupt other people’s experiences, including trying to influence or disrupt conversations using bots, fake accounts, multiple accounts, or other automation. This includes purchasing or selling methods of artificially increasing membership, such as via advertisements or botting!",
	"Do not harass others or organize, promote, or participate in harassment. Disagreements happen and are normal, but making continuous, repetitive, or severe negative comments or circumventing a block or ban can cross the line into harassment and is not okay!",
	"NLR (New life rule) is 3 minutes. Do not return to the place of death for that duration and you forget everything from your past life (including how you died and who killed you!",
	"No we have Zero Tolerance for any kinda Racism, Homophobia, Offensive Slurs, or Being Sexist, etc: This will result in a permanent ban!",
	"Please Abide by our New Life Rule (NLR). You have to wait 3 minutes until you can go back to the location where you died. This applies to conflict as well!",
	"Automation in any form for the purpose of collecting money is strictly forbidden and may result in a severe deduction from your account!",
	"Users with exiled status earn it for going above and beyond to receive multiple permanent bans or if it's applied automatically via the Paypal IPN for lodging a dispute or chargeback on a transaction on this server. Exiled status is exclusively for users who have presented no redeemable qualities to deserve to participate on this server. To be exiled is to be an outcast never to return!",
	"Most jobs can own a defense firearm (1 handed) to protect their property, not to be used as an attacking weapon and not to be drawn when not (RP) threatened.19. Body-blocking is not allowed if you are doing it to troll or be annoying!",
	"No speaking or attempting to joke about DDOS or DOXING, even in role-play. This will, as stated in the General Rules, almost immediately result in a permanent ban!",
	"All KOS Rules Apply will be allowed, but only under the default KOS rules for that section. You can use this, or you can manually do your KOS Rules!",
	"For most minor offenses like holding an illegal weapon out, discharging a weapon in public, illegal parking, or possession of contraband, CP might choose to ticket a user rather than arrest them!",
	"Anyone with the exiled status has earned it for going above and beyond to receive multiple bans within our communities and/or have tried to lodge a dispute or even try to chargeback (as it's against our policy of refunds). Being exiled makes you an outcast Users who were exiled are not to be mentioned within the community!",
	"Animatronics cannot exit the restaurant. They cannot chase players outside the restaurant, but they can grab the child before they leave the restaurant!",
        "If someone is bullying or harassing you or breaking any server rules, you should report them to a staff member or moderator of the server. Giving us as much information as possible will speed up our response time!",
	"Animatronics can KOS you from 12:00 am to 5:00 am in-game time. - They are allowed to kill you at this time since it is after closing if you are in the Restaurant!",
        "We do not provide refunds for donations or packages such as VIP, PAC3 Access, etc. There are no change-of-mind refunds on sale items. AN does not have a contractual obligation to provide donation packages. Donation packages can be revoked, and art subjects can be changed!",
	"Our community enforces a strict zero-tolerance policy towards any form of pedophilia, child exploitation, or grooming. Any individual found engaging in, promoting, or supporting such activities will be immediately blacklisted and banned from our platforms!",
	"It Is forbidden to attack with a splash through props, walls, or outside the territory of the pizzeria. It is also forbidden to intentionally attack animatronics and plush toys while outside the territory of the pizzeria. It is forbidden to climb stairs (excl. Purple Guy in the guise of a security guard. Punishment: warn / Ban 10-20min!",
        "No offensive humor is NOT okay. With everything going on, with racism and other problems around the world, we (as staff) will be more strict if we need to be!",
        "Unless the voice channel owner specifically allows it, There is to be no use of soundboards in the voice channels. If you have been given permission, please don't spam noises, as others may not want to hear them all the time!",
	"Any violations within these rules will have our loyal fellow mods give you a warning, if you continue to violate the rules it will result in a kick out or if major, banned. So pls, try not to cause trouble. Have a good day!",
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
