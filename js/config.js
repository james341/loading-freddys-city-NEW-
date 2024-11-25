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
	{ogg: "fnafsbdayecareshit.ogg", name: "Installation Music"},
	{ogg: "absofacto.ogg", name: "Installation Music"},
	{ogg: "dsafyouspinme.ogg", name: "Installation Music"},
	{ogg: "realfredbearmusic.ogg", name: "Installation Music"},
	{ogg: "dayshiftfpizza.ogg", name: "Installation Music"},
	{ogg: "cooldsafmusicbro.ogg", name: "Installation Music"},
	{ogg: "moonlianaflores.ogg", name: "Installation Music"},
	{ogg: "ryeryeintro.ogg", name: "Installation Music"}, 
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
	"Please help us maintain an elegant and respectful atmosphere. Avoid sharing GIFs or offensive content through text signs. We encourage signs that complement the thematic essence of role-playing. Kindly remember that expressions of racism, pornography, or religious denigration are strictly prohibited in this space!",
	"After reading this and joining the server you here by adhere to these terms and conditions. If you fail to follow the terms and conditions then punishments such as permanent bans may be in favor of the staff team!",
	"Fnaf restaurant animatronics are restricted to the confines of the restaurant and may not pursue players beyond its boundaries. However, they are permitted to roleplay actions, such as using /me grabs the child before they leave the restaurant, to interact within their designated area!",
	"Fnaf restaurant guards are granted authority exclusively within the boundaries of restaurant property!",
	"Reasons that can be included on your KOS sign may be Loitering for more than 10 seconds, Guns out within base, Touching Keypads / Buttons, Micspamming within the base!",
	"Violating the New Life Rule (NLR) is defined as returning to the location of your demise within five minutes or engaging with the player responsible for your death Such actions undermine the spirit of immersive gameplay and are addressed with appropriate consequences, ranging from a verbal warning to a formal warning or ban for repeat infractions. Additionally, returning to observe raiders near your base—even without direct interaction—constitutes a breach of NLR. To maintain fairness and integrity, please refrain from such behavior!",
	"No GIFs or offensive material on text signs and keep your signs in role-playing. (no random signs) (Racist/Pornographic/Bashing of religions etc are not tolerated!",
	"Respect other players. Try to avoid arguments - If someone is annoying you, screenshot/record their behaviour if you believe it is rule-breaking, or simply mute/ignore them. Ignorance is bliss. And especially NO illicit behaviour. Do not harass players in an illicit, disgusting or creepy way. Keep interpersonal drama to DMs, even if said drama started in the server. The server is not a platform for arguments!",
	"After reading this and joining the server you here by adhere to these terms and conditions. If you fail to follow the terms and conditions then punishments such as permanent bans may be in favor of the staff team!",
	"Be Respectful Discrimination, slurs, or offensive remarks about race, gender, sexuality, religion, or any personal characteristics are prohibited. While light swearing is acceptable, excessive use should be avoided. Harassment in any form will not be tolerated!",
	"Due to some unfortunate incident, we can no longer allow unrestricted access to billboard signs for all users. We trust you understand our commitment to maintaining a positive environment and the necessity of this measure!",
	"No Excessive Killing: Because, of course, the animatronics should totally focus on enhancing the role-play experience instead of, you know, doing what animatronics do best!",
	"No Blatant RDM is if you blatantly RDM someone on their T round (like walk up and Juan Deag them in the face at the start of the round when they're afk), you may be slain an extra time at the discretion of the staff online. Same goes for blatently RDMing a D!",
	"Ah, what an absurd idea! Let's imagine a world where real-world knowledge mysteriously disappears. After all, who needs common sense or any semblance of realism in roleplay, am I right!",
	"Oh, joy, we get to tell everybody that we cannot use names with obscenities or obscenity-derivatives in them! Because nothing says 'classy' like a nasty username, right? No, seriously, we will kindly request that you change it, or if you are too lazy to do that, we will do the honors. And just a friendly warning, persisting with your creative naming habits may result in you getting kicked and possibly banned. Cheers to classiness!",
	"Don't walk up to somebody and say "I'm going to DDOS this fucking stupid server!" as a joke, it will be taken seriously and you will be permabanned!",
	"Users with exiled status earn it for going above and beyond to receive multiple permanent bans or if it's applied automatically via the Paypal IPN for lodging a dispute or chargeback on a transaction on this server. Exiled status is exclusively for users who have presented no redeemable qualities to deserve to participate on this server. To be exiled is to be an outcast never to return!",
	"Anyone with the exiled status has earned it for going above and beyond to receive multiple bans within our communities and/or have tried to lodge a dispute or even try to chargeback (as it's against our policy of refunds). Being exiled makes you an outcast Users who were exiled are not to be mentioned within the community!",
	"In the game, animatronics reserve the right to enact 'KOS' (kill on sight) protocols from 12:00 am to 5:00 am in-game time. During these hours, they possess full authority to eliminate players found within the restaurant premises, as it coincides with the establishment's closing hours!",
        "We do not offer refunds for donations or packages like VIP, PAC3 Access, etc. Refunds are not available for change-of-mind purchases on sale items. AN is not contractually obligated to provide donation packages. Donation packages may be revoked, and artwork subjects are subject to change!",
	"We maintain a zero-tolerance policy regarding harassment or discrimination. Any instances of such behavior, including hate speech, personal attacks, or discriminatory acts, will not be tolerated and will be promptly and appropriately addressed!",
	"This community maintains a stringent zero-tolerance stance against any instances of paedophilia, child exploitation, or grooming. Any person discovered participating in, endorsing, or facilitating such behaviors will promptly face blacklisting and permanent banishment from our platforms!",
	"All roles are permitted to possess a single-handed defensive firearm strictly for the protection of their property. This weapon is intended for defensive purposes only and must not be used offensively or drawn unless an in-character (RP) threat is present!",
	"It Is forbidden to attack with a splash through props, walls, or outside the territory of the pizzeria. It is also forbidden to intentionally attack animatronics and plush toys while outside the territory of the pizzeria. It is forbidden to climb stairs (excl. Purple Guy in the guise of a security guard. Punishment: warn / Ban 10-20min!",
        "Animatronics are restricted to restaurant premises and cannot leave its perimeter in order to chase players outside. However, they can only intercept and apprehend any child before leaving the establishment!",
        "NLR stands for New Life Rule: going back to the place of death within or before five minutes of your death. This also tends to refer to returning to and/or interacting with the player who killed you. If found breaking this rule, it will be dealt with by a verbal warning, written warning, or a ban for repeat offenders. Returning to the vicinity of your base to watch the raiders, even if you aren't interacting with them, counts as breaking NLR. Don't do it!"

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
