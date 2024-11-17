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
	"Respect Fellow Players: Treat all players with respect, both in and out of character. Bullying, harassment, or toxicity will not be tolerated!",
	"Respect other players. Try to avoid arguments - If someone is annoying you, screenshot/record their behaviour if you believe it is rule-breaking, or simply mute/ignore them. Ignorance is bliss. And especially NO illicit behaviour. Do not harass players in an illicit, disgusting or creepy way. Keep interpersonal drama to DMs, even if said drama started in the server. The server is not a platform for arguments!",
	"After reading this and joining the server you here by adhere to these terms and conditions. If you fail to follow the terms and conditions then punishments such as permanent bans may be in favor of the staff team!",
	"Be Respectful Discrimination, slurs, or offensive remarks about race, gender, sexuality, religion, or any personal characteristics are prohibited. While light swearing is acceptable, excessive use should be avoided. Harassment in any form will not be tolerated!",
	"Due to some unfortunate incident, we can no longer allow unrestricted access to billboard signs for all users. We trust you understand our commitment to maintaining a positive environment and the necessity of this measure!",
	"No Excessive Killing: Because, of course, the animatronics should totally focus on enhancing the role-play experience instead of, you know, doing what animatronics do best!",
	"No Blatant RDM is if you blatantly RDM someone on their T round (like walk up and Juan Deag them in the face at the start of the round when they're afk), you may be slain an extra time at the discretion of the staff online. Same goes for blatently RDMing a D!",
	"Ah, what an absurd idea! Let's imagine a world where real-world knowledge mysteriously disappears. After all, who needs common sense or any semblance of realism in roleplay, am I right!",
	"Oh, joy, we get to tell everybody that we cannot use names with obscenities or obscenity-derivatives in them! Because nothing says 'classy' like a nasty username, right? No, seriously, we will kindly request that you change it, or if you are too lazy to do that, we will do the honors. And just a friendly warning, persisting with your creative naming habits may result in you getting kicked and possibly banned. Cheers to classiness!",
	"Please gracefully report any breaches of the established rules to the designated staff team. It is kindly advised to refrain from tagging moderators unless under valid circumstances necessitating their attention!",
	"Fear Roleplay (FearRP) is an event during which your character experiences a genuine fear for their life, refraining from any actions that contradict this fear. The rationale behind this principle extends to various scenarios and contexts!",
	"Well, I'm sure you're all aware of this revolutionary concept: Please refrain from flooding the chat or voice channels with your endless banter. Because, you know, we're all just dying to hear your life story while we're trying to play!",
	"Well, isn't that just an exciting announcement: All are welcome to share in the discussion! But let's make sure we don't drown out the deep intellectual conversations with a tidal wave of GIFs, images, and videos. I mean, who needs good conversation when you can spam the discussion board with cat memes!",
	"Oh, how delightful! Let's all play dress-up with our usernames and profile pictures like it's a kindergarten costume party. And don't forget, one strike and you're out! Because heaven forbid we have any fun around here!",
	"Breaking rules outside of our community and having it reported to us may result in equal punishment here. You are responsible for your own actions!",
	"To maintain the principles of dignity and respect within our community, we strictly prohibit the display of swastikas, the Nazi salute, or any glorification of Nazism, regardless of context, including roleplay scenarios. This rule applies to all users on the server, without exception!",
	"Disrespect, and discrimination will not be tolerated. Be civilised and do not target other players with actions in the game or in chat. This game is meant to be fun; anyone coming on with the intent of disrupting people's experiences will be treated harshly!",
	"I am a player, and I respectfully disagree with the actions taken by the administration on this server. However, if you find yourself in disagreement with the reason for a kick or ban, you are always free to explore and play on other servers. Please remember that all Garry's Mod servers are community-hosted, and access to them is ultimately at the discretion of their respective administrations!",
	"I am a player, and I disagree with admins actions on AN. If you disagree with a kick or ban reason taken against you, you are free to play on any other server. All Garry's Mod servers are community-hosted; access to the community server(s) is up to their administration!",
	"Oh, but where's the fun in not using props to their fullest? Remember, everyone, let's steer clear of prop-blocking, prop-killing, prop-bridging, or even the classic prop-spamming! Let's maintain the delicate balance of virtual prop harmony, shall we!",
	"It is illegal to fire any weapon, other than a licensed pistol, and then only in self-defence, at any time. It is not illegal to have weapons unless you have been caught by the law enforcement brandishing them in public and/or firing or using them with intent to commit a crime. It bans only the entry or attempting to enter any government facility and/or bank with any weapons in the case of not being a part of law enforcement or bank security!",
	"FearRP refers to when your character perceives their life to be in danger and consequently refrains from actions that would contradict that fear. This principle can be applied to a variety of situations for consistency and immersion!",
	"No contacting staff about your application. Rejected Applications may be resubmitted with changes the staff team has requested in one week. If your application has not been responded to within 3 days, please contact us via Discord, Master Doge#0192 , QWERTY#8219 , Cookie12#5485 , 1noahdavid07#0418, Connor3462#3260!",
	"Proceeding beyond the police department lobby constitutes an act of AOS (Arrest On Sight), while attempting to release prisoners or exhibiting hostile behavior while armed beyond the lobby is deemed KOS (Kill On Sight)",
	"Well, isn't it just delightful that we have to remind everyone not to spam? Because clearly, flooding the chat with nonsense is the epitome of productive conversation! Remember folks, no disrupting the peace by spamming. That means no excessive text, voice, or even soundboards! And just in case you missed the memo, after a gentle warning, you'll be bestowed with the gift of silence - a lovely mute awaits you!",
	"Animatronics are confined to the premises of the restaurant and are prohibited from pursuing players beyond its boundaries. However, they may engage in actions such as '/me grabs the child' before they depart!",
	"Any breaches of these rules will prompt our dedicated fellow moderators to issue a warning. Continued violations may result in removal from the community or, in severe cases, a ban. Please endeavor to avoid causing any disruptions. Have a pleasant day!",
	"Trolling: Do not disrupt roleplay sessions with non-serious actions or by breaking immersion. Griefing: Intentionally ruining the experience for others through harassment or unwanted behavior is prohibited!",
	"Oh, heaven forbid we start drama! Opinions or healthy debates from anybody, heaven forbid! Remember, guys, no arguing with anybody on the server! Let it all just be love and unicorns. And if you dare have a problem, please do, take it to DMs, or contact a Moderator because we certainly cannot handle any drama here!",
	"Grenades should only be used in Raids or in certain cases of self-defense. Please be aware that a grenade is an explosive weapon, therefore, has an AOE (Area of Effect) damaging or killing someone that is not your indented target is still attempted/RDM and you will be held responsible by staff!",
	"Because who doesn't love being restricted to roleplaying within the narrow confines of their in-game job or character background? Don't forget to meticulously follow all those exciting guidelines for each role or faction. It's the epitome of creativity!",
	"When you call a raid outside the target building, you can’t kill people who mean you no harm. If you wish to secure the area outside, employ fear RP first if the users still will not remove themselves from the area you may kill them. - The only reason to kill someone who is standing outside the building you’re raiding is if they have weapons un-holstered, they own the building (Thus want to kill you to defend said building), or they are CP. Inside the building the user can kill anyone they wish, this rule applies in public areas outside the raided building!",
	"If person A kills person B and person B drops loot (guns, printers, etc) from their pockets on death. That loot now belongs to person A, if they wish to claim it. No one else can take it unless person A doesn't want it, if this is the case, anyone can claim the items. There are two reasons someone can intervene if the items are illegal or the act wasn't in self-defense CP can collect/destroy the items from person B and arrest/kill person A, depending on the items and the circumstances of the killing. The teammates of person B can also collect the items of person B, more likely after they killed person A for slaying their teammate (this rule falls under fear RP, if someone murdered someone else in real life, you wouldn't run over to the dead guy and immediately start stealing from him because you would fear the murderer and what he/she would do to you!",
	"Arms dealers may legally engage in the sale of weapons. Gun dealers who do not contribute through donations are required to obtain a firearms license from the Mayor in order to conduct their business!",
	"OOC Behavior: Keep out-of-character conversations in designated OOC chat areas. Do not disrupt roleplay with OOC discussions!",
	"Avoid metagaming. You cannot issue a warrant based on hearing money printers or meth labs through walls, or from seeing a kill in the killfeed!",
	"Remain In-Character: Always behave in line with the traits and personality of your chosen animatronic or human character!",
	"No Advertising Do not post invites to other servers or YouTube channels. Sharing individual videos and/or tweets is OK but trying to promote or drive users to a channel or server is not. We are not a billboard!",
	"Please ensure that prices are set realistically, avoiding both overpriced and excessively cheap items. Staff on duty will assess pricing to maintain fairness!",
	"No Powergaming: Do not control other players' actions or outcomes without their consent (e.g., I immediately catch you and kill you!",
	"Under no circumstances, ever, suggest DDoS'ing the server for anything. We are actively watching and prepared to permanently ban with zero leniency!",
	"Do not encourage, or endorse the rule-breaking of others. Tricking, baiting, facilitating, inciting, or encouraging other players to violate the rules will result in a punishment equal to the offender!",
	"Create a character of depth and authenticity, weaving together a narrative that resonates with credibility. Strive for a balance of traits and backstory that captivates without venturing into the realms of overpowered or implausible personas!",
	"No Inappropriate or Offensive Usernames If your username is found to be offensive or inappropriate, you will be asked to change it. Failure to comply will lead to an enforced name change, followed by a kick or ban for continued violations!",
	"Do not exacerbate problems and do not succumb to provocations; do not make a scandal in any server chat because of a dispute or something else; instead, go to private messages and resolve all issues personally among yourself. If there are any problems, report them to the moderators!",
	"Please make sure all topics are appropriate for children. Nothing can be posted that is NSFW, sexually explicit, disturbing or that displays a grave nature, especially if it involves minors. This includes lewd and suggestive art. This also includes topics such as suicide, self-harm or abuse!",
	"Please honor the rich lore and setting of our server by adhering to its established narrative framework. Kindly refrain from introducing elements that deviate from or contradict the meticulously crafted storylines already in place!",
	"Kindly refrain from spamming by sending consecutive short messages, as this disrupts the natural flow of conversation and creates challenges for others in navigating the server. Let's strive to maintain the integrity of our channels by avoiding the inundation of excessive messages!",
	"Because clearly, we all want to see your personal websites, social media, and promotional material without any permission whatsoever. But hey, just a heads-up: No self-promotion allowed without explicit permission from the server administrators. Thanks for understanding!",
	"Breaking rules outside of [AN] and having it reported to us may result in equal punishment here. You are responsible for your own actions. Examples: Excessive racism, excessive harassment, excessive bullying, causing harm to other community members or communities!",
	"Please understand this: while every member of our community is dear to us, our server is not equipped to cope with personal problems of a heavy psychological nature. That has nothing to do with not being concerned about such things but rather our inability to provide the necessary support at that level. We would encourage seeking help from professionals who are better placed in expertise and means toward handling such concerns effectively. Let's focus on building a positive and fun atmosphere for all present!",
	"No intentional actions of delaying in a dignified and respectful way, such as repeatedly suiciding or causing injury to oneself to avoid engagements, or intentionally spawning in an unwanted role. This disrupts the natural flow of the game and has a seriously negative impact on the experiences of others!",
	"We sometimes may interpret the rules abit to ensure a fair outcome for all involved. If you have a complaint or feel you were treated unreasonably by a member of staff, please make a staff report on the forums. Please do not backseat, try to administrate, or attempt to take matters into your own hands. Furthermore, the member of staff has the final say, and any decision is absolute unless appealed on the forums!",
	"We kindly request that you uphold the integrity and fairness of the gaming environment by refraining from exploiting, hacking, or bypassing the game's intended limitations. The use of external cheats or game exploits, including prop surfing, is strictly prohibited!",
	"Raiding the server is a violation of our terms of service. Any attempt to circumvent or bypass these rules may lead to a permanent ban. Segregating individuals into separate chats with trusted members is in place for security. If you're caught raiding, an immediate ban will be enforced!",
	"In a manner befitting decency, it is imperative to refrain from resorting to discriminatory acts such as targeting individuals based on their race, sexual orientation, gender, and other similar characteristics. Any such behavior will be deemed as a severe form of Random Deathmatch (RDM), warranting an immediate ban!",
	"Promote engagement among members by inviting their active participation in server events and storylines. Such events may encompass a variety of in-game activities, quests, or contests, fostering a dynamic and enriching experience for all!",
	"Prohibition of Offensive Language: The use of homophobic, transphobic, racist, or any other generally offensive language is strictly prohibited. :mt: :ro: While swearing is permitted, it is expected to be utilized in a non-destructive and respectful manner!",
	"Maintain Harmony: We kindly request refraining from instigating or circulating drama, including avoiding political discussions. It's advisable to steer clear of topics that may incite unnecessary debates or disruptive behavior. In the event of such occurrences, it is preferred to address them privately or agree to respectfully disagree!",
	"We do not tolerate Illegal Activities Engaging in phishing, scamming, or any other illegal activities within the game or community is strictly prohibited. We maintain a zero-tolerance policy for such behaviour!",
	"Make sure to adhere to the extra rules tailored for our server community. This could cover lore regulations, roleplay themes, or unique server functionalities. Oh, and by the way, spamming is a big no-no!",
	"Ok look mate I kindly request that all players maintain a demeanor of respect towards one another at all times. Acts such as harassment, toxicity, and unfounded out-of-game allegations are firmly forbidden. Additionally, any form of cheating or exploitation within the game is strictly prohibited!",
	"Ah, yes, because we all know the primary purpose of vehicles in roleplay is to follow those oh-so-crucial traffic rules! Because nothing screams excitement like obeying virtual traffic signals while pretending to be someone else!",
	"No pornographic, adult, or other NSFW material The idea behind the server is to provide a safe place for us to share art, videos, and other kinds of creative material—not  the aforementioned NSFW material!",
	"We, reserves the right, at any  specific time without any notice, to revise these rules and guidelines by updating this posting. Players and staff agree to be bound by such revisions and should periodically revisit this post to review the current rules and guidelines listed herein!",
	"No Sensitive Content We enforce a strict zero-tolerance policy toward sensitive material, including but not limited to pornography, pedophilia, and graphic violence. Posting such content will result in immediate action, such as a mute, kick, or ban!
	"No jokes about mental illnesses, sexualities of any kind, religions, or political topics (e.g., cancer, autism, being gay, etc!",
	"Engaging in phishing, scamming, or any other illicit activities within the game or community is strictly prohibited. We uphold a zero-tolerance policy against such behavior and will enforce it accordingly!",
	"Do not share or grant access to any content related to hacking, cracking, or the distribution of stolen goods, pirated content, or accounts. This encompasses the sharing or selling of game cheats or hacks!",
	"we have a strict zero-tolerance policy towards racism, homophobia, offensive slurs, sexism, and any form of discrimination or hate speech. Engaging in such behavior will result in an immediate and permanent ban from the server. We are committed to fostering a welcoming and inclusive community where all individuals feel respected and valued. Let's work together to maintain a positive and respectful environment for everyone!",
	"Users with exiled status earn it for going above and beyond to receive multiple permanent bans or if it's applied automatically via the Paypal IPN for lodging a dispute or chargeback on a transaction on this server. Exiled status is exclusively for users who have presented no redeemable qualities to deserve to participate on this server. To be exiled is to be an outcast never to return!",
	"Anyone with the exiled status has earned it for going above and beyond to receive multiple bans within our communities and/or have tried to lodge a dispute or even try to chargeback (as it's against our policy of refunds). Being exiled makes you an outcast Users who were exiled are not to be mentioned within the community!",
	"In the game, animatronics reserve the right to enact 'KOS' (kill on sight) protocols from 12:00 am to 5:00 am in-game time. During these hours, they possess full authority to eliminate players found within the restaurant premises, as it coincides with the establishment's closing hours!",
        "We do not offer refunds for donations or packages like VIP, PAC3 Access, etc. Refunds are not available for change-of-mind purchases on sale items. AN is not contractually obligated to provide donation packages. Donation packages may be revoked, and artwork subjects are subject to change!",
	"We maintain a zero-tolerance policy regarding harassment or discrimination. Any instances of such behavior, including hate speech, personal attacks, or discriminatory acts, will not be tolerated and will be promptly and appropriately addressed!",
	"This community maintains a stringent zero-tolerance stance against any instances of paedophilia, child exploitation, or grooming. Any person discovered participating in, endorsing, or facilitating such behaviors will promptly face blacklisting and permanent banishment from our platforms!",
	"Character Creation: Develop a well-rounded character with a suitable backstory. Avoid creating overpowered or unrealistic characters!",
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
