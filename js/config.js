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
	{ogg: "donstopmenowmusic.ogg", name: "【AN】 - Installation Music"},
	{ogg: "forgottensundayshow.ogg", name: "【AN】 - Installation Music"},
	{ogg: "smokindsaf.ogg", name: "【AN】 - Installation Music"},
	{ogg: "elevatorsl.ogg", name: "【AN】 - Installation Music"},
	{ogg: "flipsidedsaf.ogg", name: "【AN】 - Installation Music"},
	{ogg: "davethemeend3.ogg", name: "【AN】 - Installation Music"},
	{ogg: "moonlianaflores.ogg", name: "【AN】 - Installation Music"},
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
	"Under any circumstances, sky bases are not allowed. According to Rule 12 States, basing on rooftops is NOT ALLOWED!",
	"Disrespecting any of our players and/or staff members for any reason, under any circumstances, is strongly forbidden!",
	"If its Serious or joke, about DDOS or DOXING, even in rr. This will as stated in the General Rules almost Immediately result in a Perm Ban!",
	"You can identify your base as “building” with a text screen whenever you are building defenses initially. You must take the building sign down as soon as you are done. You can not raid a “building base!",
	"You may not kill someone using discrimination based upon their race, sexual orientation, sex, etc. Doing such will be considered a higher count of RDM, and is subject to an immediate ban!",
	"Exploiting is strictly forbidden. Our servers are designed to be as minimalistic with glitches and exploits as possible, however, it is not fully guaranteed that some glitches and exploits can slip by unnoticed. Should you find anything that needs to come to our attention, please submit a bug report immediately!",
	"Do not attempt/say you are going to DDOS/crash the server. - Don't walk up to somebody and say I'm going to DDOS this fucking stupid server as a joke, it will be taken seriously and you will be permabanned!",
	"Use common sense when being active and chatting in the server. Don't ecourage people to break rules, don't spam staff, etc. Use your brain!",
        "PLEASE NOTE: Staff has the final say; if they tell you to stop, you must stop.Otherwise, you can be warned! NOTICE!",
	"No concentration camps or inappropriate structures. (Racist, pornographic, bashing of religions, etc are not tolerated) Stick figures are allowed. Maybe penis statues in the forest!",
	"Animatronics cannot exit the Restaurant. They cannot chase players outside the restaurant, but they can do /me grabs the child before they leave the restaurant!!",
        "Dont Prop Abuse, Fly on a prop / object, or to Lift, push someone, spam with a prop / object, as well as climb props that do not obey the laws of physics (you CAN build stairs) and build non-physical structures. It is also forbidden to build near the fountain and in the pizzeria. [Punishment: warn / Ban 10-20min!",
        "No offensive humor is NOT okay. With everything going on, with racism and other problems around the world, we (as staff) will be more strict if we need to be!",
        "Do NOT abuse props in any way, shape, or form. (prop-blocking, prop-killing, prop-bridging, and prop-spamming!",
	"Accidentally killing someone (crossfire) is not RDM unless on purpose, if someone does walk in the way that is allowed as long as you repay them. ( This rule also applies to Accidentally running someone over!",
	"This is called NLR (New Life Rule). You can't go back and shoot the same person that shot you because you are a new person!",
	"Do not double-door (Double-dooring is when you place a fading door directly on top of another. This applies to world doors!",
	"You need to have a licence which you get from the MAYOR. Without it, you may be AOS. If seen with a gun out in public with it, you may not be AOS!",
	"Staff has the final say; if they tell you to stop, you must stop. Otherwise, you can/will be warned!",
	"Accidentally killing someone (crossfire) is not RDM unless on purpose. If someone does walk in the way, that is allowed as long as you repay them!",
	"No RDM, MRDM, VDM, etc. (Random Death Match, Mass Random Death Match, Vehicle Death Match!",
	"No metagaming or trying to take advantage of in-roleplay. It ruins the fun for those who take roleplaying seriously!",
	"All bases must have the dimensions of two players wide (shoulder to shoulder) and two players back/front (four players should at least be able to fit into this space in two pairs!",
	"Violations within these rules will have our loyal fellow mods give you a warning, if you continue to violate the rules it will result in a kick out or if major, banned. So pls, try not to cause trouble. Have a good day!",
        "All jobs (except children and co.) can own a defence firearm (1-handed) to protect their property, not to be used as an attacking weapon, and not be drawn when not (RP) threatened!"

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
