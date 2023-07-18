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
	{ogg: "mywaytrioroai.ogg", name: "【AN】 - Installation Music"},
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
	"Inappropriate usernames, pfps, banners, statuses, and bios are not allowed. Most violations of this rule will result in a kick on the first offence!",
	"In my very own addition to these rules, Xman 723 will be respected. Also, no mention of Bub Games or any of his fake nonsense!",
	"We have a zero-tolerance policy for discrimination, racism, and hate speech. While jokes are acceptable, if someone asks you to stop, please respect their request. Sharing NSFW (not safe for work) content is strictly prohibited!",
	"We have a Zero Tolerance for sensitive content such as pornography, pedophilia, gore, etc. Posting images or videos of this will guarantee a mute or immediate kick/ban!",
	"Breaking rules outside of AN and having it reported to us may result in equal punishment here. You are responsible for your own actions. Examples: Excessive racism, excessive harassment, excessive bullying, causing harm to other community members or communities!",
	"Any sort of discrimination against others because of their race, sexual orientation, gender, and/or disability is not allowed and has no tolerance. This includes the use of slurs (such as the n-word, fa-word, and r-word). Use of hard-r or any slur in a racist or homophobic context will result in an immediate ban, and appeals are likely to not be accepted!",
	"No flooding: This is when the same message is sent over and over again at a rapid speed. The message is usually long and offensive, but sometimes it consists of just one character!",
	"Please Speak only in English unless using short phrases or discussing language. In-depth linguistic discussions should still be kept to DMs. Excessive non-English messages are against the rules. We have zero tolerance for Paedophilia, Necrophilia, and Zoophile jokes and comments. These will most likely be met with an insta-ban!",
	"Do not flood chat with meaningless and unnecessary messages; this applies to OOC, Avert, local*, and DMs* [when reported]. You may not play music or make loud and/or unnecessary sounds through your microphone. Do not mention names of players banned or permanently banned in OOC. They can make an appeal if they are able. Otherwise, spamming their name makes their case worse!",
	"No pornographic/adult/other NSFW material. The idea behind the server is to provide a safe place for us to share art, videos, and other kinds of creative material-not to share the aforementioned NSFW material!",
	"If you have a significant other (whether or not they are on this server please don't flood the chat with a bunch of lovey-dovey messages with them or about them; it makes everyone else uncomfortable!",
	"The Admins and Mods will Mute/Kick/Ban per discretion. If you feel mistreated, let us know and we will resolve the issue!",
	"Direct & Indirect Threats Threats to other users of DDoS, Death, DoX, abuse, and other malicious threats are absolutely prohibited and disallowed!",
	"No pornographic/adult/other NSFW material. This is a community server and not meant to share this kind of material!",
	"Inciting arguments: If you are in disagreement with another, it's often better to drop the topic at hand and move on, even if you may be in the right. If you feel you must comment on another user's words, please be kind and respectful when directing it to their attention. If it is not receiving good feedback, then it's clear to stop immediately and bring up another subject!",
	"No homophobia: Everyone has the right to be who they want to be and who they discover themselves to be. This is considered a strict rule; those who violate this and actively harass user(s) or promote ideologies against it will be taken action upon!",
	"No Inappropriate Language The use of profanity should be kept to a minimum. However, any derogatory language towards any user is prohibido!",
	"Hold yourself accountable for your actions & mistakes - if you get in trouble, admit it and work with staff to resolve it!",
	"No offensive names and profile pictures. You will be asked to change your name or picture if the staff deem them inappropriate!",
	"No spamming. Do not send a lot of small messages right after each other. They disrupt chat and make it hard to scroll through the server. Please keep your messages at least 5 words long while chatting!",
	"No NSFW or explicit content: The show is made for little children and young people; therefore, there could be those browsing the wiki who have joined this server in that age range (albeit teenagers, as below that violates Discord ToS). Any explicit media is strictly prohibited!",
	"It's perfectly okay to offer constructive criticism of the game, but rude behaviour and personal attacks will not be tolerated. If you are obviously only here to talk trash and start drama (or if you just have a nasty attitude or obnoxious personality in general), you will be removed from the server!",
	"It's probably not a good idea to post any pictures of yourself on this server. Remember that there are people on the Internet whose hobby is ridiculing and shaming other people!",
	"If somebody is wanted, you may AOS or KOS the person. In order to KOS, you must warn the criminal at least three times to stop moving. If they comply, you must arrest them instead!",
	"No startling drama Do not argue with other users on the server. This also includes bringing up controversial topics. If you have a problem, take it into DMs or contact a Moderator!",
	"Attack Units have the right to protect the Mayor (only if they have permission from a command member in that department!",
	"Have fun! It's important you enjoy your time here, so if you have any questions, please let us know or post it on our forums!",
	"Fail RP is the act of saying or doing something that your character would not say or do (this includes being a minge, which is on purpose trying to find ways to break or make RP experiences less enjoyable for others, and freespelling, which is casting spells at people without a RP reason).An event surrounding an action that your character commits that is not probable.i.e., abuse of spells and potions in groups of people (5+) and active classrooms!",
	"Blatant advertising (especially right after joining) can result in punishment up to and including bans. Do note that #ugmp-server-advertising is exempt from this rule as it offers its own rules!",
	"If your behaviour in voice chat is consistently obnoxious and cringey, you will be server muted and will be unable to talk in any voice channels in the discord!",
	"You are not permitted to say things that are deliberately set out to offend a particular group or person based on, but not limited to, age, race, nationality, gender, religion, or sexual preferences. You may not use slang, abbreviations, variations (i.e., N-word ending with "a"), epithets, phrases, or words that are deemed hateful. You may not follow, target, or harass anyone with malicious intentions. The staff have the last say on what is considered hateful, disrespectful, and harassment!",
	"While camping is generally discouraged, it is tolerated as long as it does not lead to round-trip delays. Teaming that results in the death of teammates is strictly prohibited. Walking around the same zone or staying in corridors or tunnels is not considered camping!",
	"Being a member of a hate server dedicated to talking bad shit about people is grounds for being immediately banned!",
	"Spamming, sending unsolicited server invites, making advertisements, or promoting without permission from a staff member is prohibited. The only allowed promotion is in the designated self-promotion channel!",
	"We understand that you want to grow your community, but we do not want the Chats to be flooded with links to different servers. You can message one of the owners to request a partnership between servers!",
	"Be nice to other users. This should go without much explanation. Treat people as you want to be treated. If you are having a bad day, don't take it out on others and simply leave the chat room to cool down!",
	"Be respectful, even if you don’t agree with someone, and especially so to one’s nationality, personal views, or whatever!",
	"Don't spam (copy-pasting the same message in multiple channels to try and get people to read it is considered spam!",
	"Show respect to all members of the server. Harassment and bullying are not allowed in any form and may result in being muted or kicked!",
	"No arguing with Staff Their job is to make sure everyone is following the rules, and punishment is at their discretion. If you feel that you were wrongfully muted or did nothing wrong, make sure to let someone higher on the team know about it!",
	"Do not encourage others to violate server rules. Interfering with a moderator's job or announcing hidden tags for moderators is prohibited. False reporting or abusing the in-game reporting function is strictly forbidden!",
	"Avoid spamming the chat or using excessive mic spam. Posting leaks or sharing unauthorised information about the game is not allowed. Let's keep the discussions focused and enjoyable for everyone!",
	"Discussions about Bub Games is Banned- > Do not ignore this or consequences will be given out, single-handed by Doge himself!",
	"Treat fellow players with respect at all times. Harassment, toxicity, and baseless out-of-game accusations are strictly prohibited. Cheating or exploiting the game in any way is not allowed!",
	"Our goal is to have a clean, friendly, and enjoyable gaming environment for our players, which is why we have established a set of rules that we expect both players and staff to abide by at all times. Please review the list below, and as always, if you have any questions, feel free to contact a [AN] staff member!",
	"The AN reserves the right, at any time without notice, to revise these rules and guidelines by updating this posting. Players and staff agree to be bound by such revisions and should periodically revisit this post to review the current rules and guidelines listed herein!",
	"Engaging in phishing, scamming, or any other illegal activities within the game or community is strictly prohibited. We maintain a zero-tolerance policy for such behaviour!",
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
