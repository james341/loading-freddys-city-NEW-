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
	{ogg: "superidoldsafmusicbox.ogg", name: "【AN】 - Installation Music"},
	{ogg: "imbeliever.ogg", name: "【AN】 - Installation Music"},
	{ogg: "twobirdsregina.ogg", name: "【AN】 - Installation Music"},
	{ogg: "behindtheslaughteremix.ogg", name: "【AN】 - Installation Music"},
	{ogg: "smokindsaf.ogg", name: "【AN】 - Installation Music"},
	{ogg: "dsafsuperidol.ogg", name: "【AN】 - Installation Music"},
	{ogg: "daycarethememusicbox.ogg", name: "【AN】 - Installation Music"},  
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
	"Staff ALWAYS have the final say; if they tell you to stop- you got to stop. Otherwise, you can/will be warned!",
	"Use common sense when being active and chatting on the server. Don't encourage people to break rules, don't spam staff, etc. Use your brain!",
        "Please Abide by our New Life Rule (NLR). You have to wait 3 minutes until you can go back to the location where you died. This applies to conflict as well!",
	"Entering, stealing, and lockpicking military vehicles is not allowed. Unless your role is within the military!",
	"All the government officials can build within the PD as long as it does not block walking space!",
	"Don't say anything that could possibly hurt others (racial slurs, general slurs, etc!",
	"You can only have a maximum of three fading door entries or exits in your base (fading doors that are used as doors to funnel users). You can have up to four fading door windows, boxes, etc., but they must be linked with buttons (not keypads) and said buttons must be toggled!",
	"While building, you should not have any printers or other entities. If you do, those entities can be removed. Gun and heavy arms dealers are an exception to this rule, as they will need to build a secure case of some sort around the shipments to set up the store. Do not, however, use or provide guns from these shipments under any circumstances while building. You may only have the shipments out to put them into a secure place before you open your store to prevent people from walking in and stealing!",
	"Your donation status does not change the fact that you are a member of our community. You are not above our rules or anything else for that matter. You still have to follow our guidelines!",
	"All KOS Rules Apply will be allowed, but only under the default KOS rules for that section. You can use this, or you can manually do your KOS Rules!",
	"Users with the exiled status have earned it for going above and beyond to receive multiple bans within our communities and/or having tried to lodge a dispute or even try to chargeback (as it's against our policy of refunds). Being exiled makes you an outcast Users who were exiled are not to be mentioned within the community!",
	"Animatronics cannot exit the Restaurant. They cannot chase players outside the restaurant, but they can do /me grabs the child before they leave the restaurant!!",
        "Animatronics can KOS you from 12:00 am to 5:00 am in-game time. - They are allowed to kill you at this time since it is after closing if you are in the Restaurant!",
        "We do not provide refunds for donations or packages such as VIP, PAC3 Access, etc. There are no change-of-mind refunds on sale items. AN does not have a contractual obligation to provide donation packages. Donation packages can be revoked, and art subjects can be changed!",
	"It Is forbidden to attack with a splash through props, walls, outside the territory of the pizzeria. It is also forbidden to intentionally attack animatronics and plush toys while outside the territory of the pizzeria. It is forbidden to climb stairs (excl. Purple Guy in the guise of a security guard. Punishment: warn / Ban 10-20min!",
        "Do not Prop Abuse, Fly on a prop / object, or to Lift, push someone, spam with a prop / object, as well as climb props that do not obey the laws of physics (you CAN build stairs) and build non-physical structures. It is also forbidden to build near the fountain and in the pizzeria. [Punishment: warn / Ban 10-20min!",
        "Using offensive humor is NOT okay. With everything going on, with racism and other problems around the world, we (as staff) will be more strict if we need to be!",
        "DDoS or the publicizing of other member's private information (DOX) will result in a permanent ban. (This includes all/any hacking threats!",
	"Pizzeria employees are not permitted to mug, steal, or damage property. Force people to leave, detain, and/or murder people for valid reasons such as (damaging property, going into restricted areas without a warrant, and/or harassing employees) (They can also ban you from the establishment as well.) All employees have jurisdiction over the establishment!",
	"Do not use collided bulletproof props. Defenders can jump in and out of them, and this action is deemed unfair and prop abuse.!",
	"This exists to give the roleplay a more in-depth, realistic feel. Do not come back to the same area after you have died by someone within Roleplay This also counts if you are attempting to kill the exact same person who just recently killed you!",
	"No RDM, MRDM, VDM, etc. (Random Death Match, Mass Random Death Match, Vehicle Death Match, etc!",
	"No metagaming or trying to take advantage in-game. It ruins the fun for those who take roleplaying seriously!",
	"Any violations within these rules will have our loyal fellow mods give you a warning, if you continue to violate the rules it will result in a kick out or if major, banned. So pls, try not to cause trouble. Have a good day!",
        "Breaking NLR constitutes as returning to the place of your death within or before five minutes of your death. This can also mean returning and/or interacting with the player that killed you. If you are found breaking this rule, it’ll be dealt with by a Verbal Warn, Warn or Ban for repeat offenders. Returning to the vicinity of your base to watch the raiders (even if you aren’t interacting with them) counts as breaking NLR — don’t do it!"

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
