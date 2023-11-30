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
	{ogg: "daycarethememusicbox.ogg", name: "【AN】 - Installation Music"},
	{ogg: "tuckedup.ogg", name: "【AN】 - Installation Music"},
	{ogg: "imbeliever.ogg", name: "【AN】 - Installation Music"},
	{ogg: "springInmystep.ogg", name: "【AN】 - Installation Music"},
	{ogg: "flipsidedsaf.ogg", name: "【AN】 - Installation Music"},
	{ogg: "ghostbusterdsaf.ogg", name: "【AN】 - Installation Music"},
	{ogg: "youfeelthelove.ogg", name: "【AN】 - Installation Music"},
	{ogg: "rocketman.ogg", name: "【AN】 - Installation Music"},
	{ogg: "twobirdsregina.ogg", name: "【AN】 - Installation Music"},
	{ogg: "fnafmoviesongth.ogg", name: "【AN】 - Installation Music"},  
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
        "Prop blocking, climbing, griefing and minging are not allowed. Do not make intrusive builds. Pointless builds may be removed. You must not have to use more than 3 fading doors to access your entire base and its contents. Base layout must be clear and concise. You must use signs for certain protections. Bases that are not being used may be force unowned/deleted by a staff member if another player wants it!",
	"No police baiting. Value your life/freedom and strive to not get caught in a crime. Jail and fines are not to be treated lightly!",
	"Do not RDM (Random Death Match) - killing another player without a valid roleplay reason or initiation!",
	"Disconnecting from the server after being raided is not permitted and may result in a ban. If you lose a raid, don't be a spoil sport - give them a chance to benefit from their raid before leaving!",
	"Do not break NLR - when killed, you must forget everything that happened in the past life, and may not return to the location of your death for at least 5 minutes or until the situation has ended!",
	"Nazism Display of swastikas, the nazi salute, or other glorification of nazism is prohibited, even for roleplay purposes Server information!",
	"Raiding must be done with Roleplay. It would be anti RP to just randomly walk to a door and bust it down with an auto shotgun and look and see what is inside!",
	"No Blatant RDM is if you blatantly RDM someone on their T round (like walk up and Juan Deag them in the face at the start of the round when they’re afk), you may be slain an extra time at the discretion of the staff online. Same goes for blatantly RDMing a D. (except Pao, fuck that guy, always RDM Pao when you see him!",
	"No harassing users We all have different opinions! That means we all have different ships, character options, etc. Healthy discussion is one thing; asking questions is normal, but getting mad at someone for their likes is unacceptable!",
	"You can sneak up behind opponents and strip their weapons and communications only if they have their weapons on safety. If their weapon is off-safety, it is not possible, and you must roll above 50 to be successful!",
	"Do not disconnect, suicide, change jobs, change names, etc. to get out of a roleplay/staff situation. This will result in a harsher or additional punishment!",
	"Do not prop block. Prop blocking is blocking an area with a prop so nobody can get past it. For something to not be a prop block, there must be a keypad on the outside. If there is a prop blocking another entrance in the area, it still needs a keypad!",
	"Repeatedly leaving or suiciding to avoid encounters with Fnaf Animatronics or purposely spawning as a role you do not want is not allowed. Such behaviour disrupts the flow of the game and negatively affects others' experiences!",
	"Any harassment, disrespect, and discrimination will not be tolerated. Be civilised and do not target other players with actions in the game or in chat. This game is meant to be fun; anyone coming on with the intent of disrupting people's experiences will be treated harshly!",
	"You are not to talk badly about any other communities on this discord or gmod server, regardless of their actions. So long as you are within limits of AN , you are never to talk badly about another community!",
	"Be respectful Treat others with respect and kindness. Avoid hate speech, discrimination, and harassment!",
	"No impersonating staff within the discord or server. Tier 2 Offence: (These offences can result in a variaty of punishments, whether they be warn, kick, mute, or ban. This is determined in the context of the infraction. 1. Harassment of any form!",
	"Breaking rules outside of AN and having it reported to us may result in equal punishment here. You are responsible for your own actions. Examples: Excessive racism, excessive harassment, excessive bullying, causing harm to other community members or communities!",
	"The Server is not equipped to handle your personal issues. It's not that we don't care; it's just that we can't carry the weight of your problems. Do not talk about heavy psychological issues, and please seek help from a professional!",
	"no Intentional Delays Repeatedly leaving or suicidal to avoid encounters with anyone or purposely spawning in a role you do not want is not allowed. Such behaviour disrupts the flow of the game and negatively affects others' experiences!",
	"We sometimes may interpret the rules abit to ensure a fair outcome for all involved. If you have a complaint or feel you were treated unreasonably by a member of staff, please make a staff report on the forums. Please do not backseat, try to administrate, or attempt to take matters into your own hands. Furthermore, the member of staff has the final say, and any decision is absolute unless appealed on the forums!",
	"Do not exploit, hack, or otherwise avoid the game's intended limits. Using any external cheats or game exploits, including prop surfing, is against the rules!",
	"Raiding the server is against our terms of service. Any attempt to circumvent or bypass them can result in a permanent ban. As well as putting everyone in different chats with only trusted people, if you get cought raiding, that's an insta ban!",
	"Do not disclose the personal information of another person, such as an address, phone number, geographical location, photos, or other personally identifying information, without explicit consent from the person. In the event of a player or staff member breaking a rule associated with our Discord server, we will operate according to the guidelines set below when it comes to resolution and infraction consequences based on the severity of the infraction. The consequences below are in order of severity, and the staff has sole discretion to skip a lesser punishment if they deem the infraction to be more severe than what the consequence calls for. The individual(s) must be issued a written or verbal warning!",
	"You cannot steal work vehicles. You must drive vehicles in a reasonably roleplaying manner. Driving like an idiot will result in your car being deleted and/or you receiving a car ban for the rest of the session. Intentionally damaging or blowing up vehicles to annoy, injure, or kill other players without a valid RP reason is not allowed!",
	"We do not tolerate Illegal Activities Engaging in phishing, scamming, or any other illegal activities within the game or community is strictly prohibited. We maintain a zero-tolerance policy for such behaviour!",
	"Treat all fellow players with respect at all times. Harassment, toxicity, and baseless out-of-game accusations are strictly prohibited. Cheating or exploiting the game in any way is not allowed!",
	"Our goal is to have a clean, friendly, and enjoyable gaming environment for our players, which is why we have established a set of rules that we expect both players and staff to abide by at all times. Please review the list below, and as always, if you have any questions, feel free to contact a [AN] staff member!",
	"No pornographic, adult, or other NSFW material The idea behind the server is to provide a safe place for us to share art, videos, and other kinds of creative material—not  the aforementioned NSFW material!",
	"No advertisements No invasive advertising, whether it be for other communities or streams. You can post your content in the media channel in oir discord if it’s relevant and provides actual value for the community!",
	"We can reserves the right, at any time without notice, to revise these rules and guidelines by updating this posting. Players and staff agree to be bound by such revisions and should periodically revisit this post to review the current rules and guidelines listed herein!",
	"Engaging in phishing, scamming, or any other illegal activities within the game or community is strictly prohibited. We maintain a zero-tolerance policy for such behaviour!",
	"Do not distribute or provide access to content involving the hacking, cracking, or distribution of stolen goods, pirated content, or accounts. This includes sharing or selling game cheats or hacks!",
	"Do not use this community to spam, manipulate engagement, or disrupt other people’s experiences, including trying to influence or disrupt conversations using bots, fake accounts, multiple accounts, or other automation. This includes purchasing or selling methods of artificially increasing membership, such as via advertisements or botting!",
	"Do not harass others or organize, promote, or participate in harassment. Disagreements happen and are normal, but making continuous, repetitive, or severe negative comments or circumventing a block or ban can cross the line into harassment and is not okay!",
	"We have zero tolerance for any kind of racism, homophobia, offensive slurs, being sexist, etc., which will result in a permanent ban!",
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
	"Our community enforces a strict zero-tolerance policy towards any form of paedophilia, child exploitation, or grooming. Any individual found engaging in, promoting, or supporting such activities will be immediately blacklisted and banned from our platforms!",
	"It Is forbidden to attack with a splash through props, walls, or outside the territory of the pizzeria. It is also forbidden to intentionally attack animatronics and plush toys while outside the territory of the pizzeria. It is forbidden to climb stairs (excl. Purple Guy in the guise of a security guard. Punishment: warn / Ban 10-20min!",
        "Offensive humor is NOT okay. With everything going on, with racism and other problems around the world, we (as staff) will be more strict if we need to be!",
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
