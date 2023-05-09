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
// (You can also use external URL)
var l_serverImage = "logo.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for automatic server name
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
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "moonlianaflores.ogg", name: "【AN】 - Installation Music"},
	{ogg: "smokindsaf.ogg", name: "【AN】 - Installation Music"},
	{ogg: "killerinp.ogg", name: "【AN】 - Installation Music"},
	{ogg: "superidomusicbox.ogg", name: "【AN】 - Installation Music"},
	{ogg: "donstopmenowmusic.ogg", name: "【AN】 - Installation Music"},
	{ogg: "daycarethememusicbox.ogg", name: "【AN】 - Installation Music"},
	{ogg: "twobirdsregina.ogg", name: "【AN】 - Installation Music"},
	{ogg: "dsafsuperidol.ogg", name: "【AN】 - Installation Music"},
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
	"Staff ALWAYS have the final say; if they tell you to stop, you've got to stop. Otherwise, you can be warned!",
	"Use common sense when being active and chatting on the server. Don't encourage people to break rules, don't spam staff, etc. Use your brain!",
        "No inappropriate or offensive names We will ask you first to change it, or we will change it for you. Continuing to use offensive or inappropriate usernames will lead to a kick and ban!",
	"If somebody is wanted, you may AOS or KOS the person. In order to KOS, you must warn the criminal at least three times to stop moving. If they comply, you must arrest them instead!",
	"ERP is strictly forbidden! - Erotic roleplay is not allowed on the server! It is a bannable offence!",
	"No GIFs or offensive material on text signs, and keep your signs role-play appropriate. (no random signs) Racist, pornographic, bashing of religions, etc. are not tolerated!",
	"Be respectful to each other. Don't harass each other, and do not threaten each other!",
	"You're not allowed to ask someone if they can put a hit on a specific player; this also counts when you ask someone, Can you please place a hit!",
	"You may raid as a mob boss, mafia leader, thief, pro thief, thief custom class, or battle medic!",
	"If there's a problem, DM any  available staff member. If people are saying, Go kill yourself or other stuff that is bad, they will get a warning!",
	"No jokes about mental illnesses, sexualities, religions, or political stuff. (Ex. cancer, autism, gay, etc!",
	"Any Discussion about Bub Games is banned! Do not ignore this or consequences will be given out, single-handedly!",
	"Staff members are there to help whenever there is an issue in chat or in any other situation. So please, for God's sake, just listen to them!",
	"No porn, like NSWF stuff. If you do not follow these rules, you will get warnings, which can result in a kick or ban!",
	"No impersonators. You can impersonate someone if you have permission from the person you want to impersonate!",
	"Staff members are there to help whenever there is an issue in chat or in any other situation. so please Listen to them Okay!",
	"Zero Tolerance to Racism, Homophobia, Offensive Slurs, or Being Sexist: This will result in a permanent ban!",
	"Please Abide by our New Life Rule (NLR). You have to wait 3 minutes until you can go back to the location where you died. This applies to conflict as well!",
	"Automation in any form for the purpose of collecting money is strictly forbidden and may result in a severe deduction from your account!",
	"Be respectful of others; this means no discrimination or harassment; respect other people's opinions, identities, and boundaries!",
	"Most jobs can own a defense firearm (1 handed) to protect their property, not to be used as an attacking weapon and not to be drawn when not (RP) threatened.19. Body-blocking is not allowed if you are doing it to troll or be annoying!",
	"Don't speak or joke about DDOS or DOXING, even in role-play. This will, as stated in the General Rules, almost immediately result in a permanent ban!",
	"No Mega-basing or owning multiple bases (regarding rule 6). (The only place you may block off is the houses next to the beach if the map is changed!",
	"While building, you should not have any printers or other entities. If you do, those entities can be removed. Gun and heavy arms dealers are an exception to this rule, as they will need to build a secure case of some sort around the shipments to set up the store. Do not, however, use or provide guns from these shipments under any circumstances while building. You may only have the shipments out to put them into a secure place before you open your store to prevent people from walking in and stealing!",
	"Accidentally killing someone (crossfire) is not RDM unless on purpose; if someone does walk in the way, that is allowed as long as you repay them. This rule also applies to accidentally running someone over!",
	"Your donation status does not change the fact that you are a member of our community. You are not above our rules or anything else for that matter. You still have to follow our guidelines!",
	"No sensitive content We have zero tolerance for sensitive content such as pornography, paedophilia, gore, etc. Posting images or videos of this will guarantee a mute or an immediate kick or ban!",
	"All KOS Rules Apply will be allowed, but only under the default KOS rules for that section. You can use this, or you can manually do your KOS Rules!",
	"Most minor offenses like holding an illegal weapon out, discharging a weapon in public, illegal parking, or possession of contraband CP might choose to ticket a user rather than arresting them!",
	"Anyone with the exiled status have earned it for going above and beyond to receive multiple bans within our communities and/or having tried to lodge a dispute or even try to chargeback (as it's against our policy of refunds). Being exiled makes you an outcast Users who were exiled are not to be mentioned within the community!",
	"Animatronics cannot exit the Restaurant. They cannot chase players outside the restaurant, but they can do /me grabs the child before they leave the restaurant!!",
        "Animatronics can KOS you from 12:00 am to 5:00 am in-game time. - They are allowed to kill you at this time since it is after closing if you are in the Restaurant!",
        "The Adult part may have a Simple 1-Handed firearm which they may only use in critical situations and for self-defense! They are not allowed to attack people with them!",
	"We do not provide refunds for donations or packages such as VIP, PAC3 Access, etc. There are no change-of-mind refunds on sale items. AN does not have a contractual obligation to provide donation packages. Donation packages can be revoked, and art subjects can be changed!",
	"Our community enforces a strict zero-tolerance policy towards any form of pedophilia, child exploitation, or grooming. Any individual found engaging in, promoting, or supporting such activities will be immediately blacklisted and banned from our platforms!",
	"It Is forbidden to attack with a splash through props, walls, outside the territory of the pizzeria. It is also forbidden to intentionally attack animatronics and plush toys while outside the territory of the pizzeria. It is forbidden to climb stairs (excl. Purple Guy in the guise of a security guard. Punishment: warn / Ban 10-20min!",
        "Using offensive humor is NOT okay. With everything going on, with racism and other problems around the world, we (as staff) will be more strict if we need to be!",
        "DDoS or the publicizing of other member's private information (DOX) will result in a permanent ban. (This includes all/any hacking threats!",
	"Unless the voice channel owner specifically allows it, There is to be no use of soundboards in the voice channels. If you have been given permission, please don't spam noises, as others may not want to hear them all the time!",
	"Pizzeria employees are not permitted to mug, steal, or damage property. Force people to leave, detain, and/or murder people for valid reasons such as (damaging property, going into restricted areas without a warrant, and/or harassing employees) (They can also ban you from the establishment as well.) All employees have jurisdiction over the establishment!",
	"Do not use colliding bulletproof props. Defenders can jump in and out of them, and this action is deemed unfair and prop abuse!",
	"Do not argue with other users on the server. This also includes bringing up controversial topics. If you have a problem, take it into DMs or contact a moderator!",
	"You may only have the shipments out to put them into a secure place before you open your store to prevent people from walking in and stealing!",
	"Spamming channels and/or unsolicited pinging or DMing will not be tolerated. Do not ping the staff or myself unless there is a good reason. When in voice chat, please keep background noise to a minimum or use push-to-talk!",
	"No RDM, MRDM, VDM, etc. (Random Death Match, Mass Random Death Match, Vehicle Death Match, etc!",
	"No metagaming or trying to take advantage in-game. It ruins the fun for those who take roleplaying seriously!",
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
