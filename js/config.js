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
	"Raiding is a cornerstone of roleplay, offering a dynamic opportunity to profit not only from your own endeavors but also through strategic acquisitions from others. It enriches the server's economy by introducing elements of risk and reward, fostering a competitive yet engaging environment where both personal and communal growth thrive!",
	"Use common sense when being active and chatting on the server. Don't encourage people to break rules, don't spam staff, etc. Use your brain!",
        "All roles are permitted to possess a single-handed defensive firearm strictly for the protection of their property. This weapon is intended for defensive purposes only and must not be used offensively or drawn unless an in-character (RP) threat is present!",
	"This is a community server. We do not allow discussion of adult or NSFW content, and images or videos containing NSFW material are prohibited!",
	"Nazism Display of swastikas, the nazi salute, or other glorification of nazism is prohibited, even for roleplay purposes Server information!",
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
	"Breaking the NLR means returning to the place of your death within or before five minutes of your death. Returning to and/or acting with the player that killed you. Punishment: breaking this will be dealt by a verbal warning, written warning, or a ban for repeat offenders. Returning to the area near your base to spectate the raiders (even if you aren't roleplaying with them) is considered NLR. Don't do it!",
	"The most important rule is not to offend any participants of the server and especially moderators, testers, administrators, and above all, representatives of the server. Because it is impossible to keep up this standard, this might lead to your exclusion from the server and even in critical cases, to a ban. Therefore, we would be grateful if you approached with equal respect all participants of this server!",
	"Please maintain a drama-free environment in this server. While someone might express opinions or comments you disagree with, let's avoid prolonging conflicts. Instead, strive to set a positive example. If necessary, address issues through direct messages, or in more serious cases, allow the moderators or administrators to handle the situation!",
	"No arguing with Staff. Their role is to ensure everyone adheres to the rules, and they have the authority to enforce punishments as they see fit. If you believe you were unjustly muted or didn't violate any rules, be sure to bring it to the attention of a higher-ranking member of the team!",
	"Promoting your own company or organization outside of the server is not allowed unless you have permission from the founders. However, in-game businesses are permitted!",
	"Accidentally killing someone (such as in crossfire) is not considered RDM unless done intentionally. If someone walks into the line of fire, it’s allowed as long as you compensate them. This rule also applies to accidentally running someone over This wording keeps the rule straightforward and covers both situations!",
	"Using derogatory language or offensive terms to refer to fellow players is not tolerated on this platform. Such behavior, including calling players 'retarded,' is a violation of our community guidelines and will result in a ban from the game. We encourage a positive and inclusive gaming environment for everyone!",
	"You are prohibited from killing another player based on discriminatory factors such as race, sexual orientation, gender, etc. Engaging in such behavior will be treated as a severe form of Random Deathmatch (RDM) and will result in an immediate ban!",
	"Oh, just a friendly reminder: showing disrespect towards any of our players or staff members, for any reason whatsoever, is completely prohibited. Yeah, we take that pretty seriously!",
	"No NSFW (Not Safe For Work) content, including gore, pornographic material, or any other content considered distasteful by staff, is permitted in any channel. Additionally, spoilers for movies, TV shows, etc., are prohibited for one month following their release. If you intend to share a spoiler, it must be properly concealed and clearly marked as such!",
	"Harassment is strictly prohibited. If you witness harassment directed towards anyone in the server or observe persistent harassment between individuals, please inform us immediately. Violating this rule will result in a 5-10 minute timeout. Continued harassment may escalate to a 1-hour timeout, a one-week timeout, or even a ban in extreme cases!",
	"Racism, offensive language, and slurs are absolutely unacceptable. Violation of this rule will lead to a warning or a one-minute timeout. In severe cases, such behavior may result in a one-week timeout, a kick, or a ban from the server!",
	"We have zero tolerance for harassment. If you witness any kind of harassment targeted at people in the server or find that people have repeated harassment towards other members, let us know as soon as possible so we may take the necessary actions. Breaking this rule will get you a 5-10 minute timeout. Repeated behavior will lead to increased punishment: 1-hour timeout, one-week timeout, and up to a ban in extreme cases!",
	"When assuming the role of a Police Officer, it is imperative to refrain from abusing your authority. Any misuse of power will result in being blacklisted from further participation, and in severe instances, may lead to a ban from the server!",
	"Within our community, the discussion or active involvement in raids on other servers is not endorsed. Participation in such activities may result in a permanent ban from our server!",
	"Under no circumstances should you threaten to initiate a DDoS attack on the server. Such actions will result in an immediate and permanent ban, regardless of whether it was intended as a joke!",
	"Impersonation is prohibited. Players must refrain from pretending to be server staff, developers, or other players. This includes using similar names, avatars, or behavior with the intent to deceive others!",
	"Ah, what an absurd idea! Let's imagine a world where real-world knowledge mysteriously disappears. After all, who needs common sense or any semblance of realism in roleplay, am I right!",
	"Oh, joy, we get to tell everybody that we cannot use names with obscenities or obscenity-derivatives in them! Because nothing says 'classy' like a nasty username, right? No, seriously, we will kindly request that you change it, or if you are too lazy to do that, we will do the honors. And just a friendly warning, persisting with your creative naming habits may result in you getting kicked and possibly banned. Cheers to classiness!",
	"Please gracefully report any breaches of the established rules to the designated staff team. It is kindly advised to refrain from tagging moderators unless under valid circumstances necessitating their attention!",
	"Fear Roleplay (FearRP) is an event during which your character experiences a genuine fear for their life, refraining from any actions that contradict this fear. The rationale behind this principle extends to various scenarios and contexts!",
	"Well, I'm sure you're all aware of this revolutionary concept: Please refrain from flooding the chat or voice channels with your endless banter. Because, you know, we're all just dying to hear your life story while we're trying to play!",
	"Well, isn't that just an exciting announcement: All are welcome to share in the discussion! But let's make sure we don't drown out the deep intellectual conversations with a tidal wave of GIFs, images, and videos. I mean, who needs good conversation when you can spam the discussion board with cat memes!",
	"Oh, how delightful! Let's all play dress-up with our usernames and profile pictures like it's a kindergarten costume party. And don't forget, one strike and you're out! Because heaven forbid we have any fun around here!",
	"Breaking rules outside of our community and having it reported to us may result in equal punishment here. You are responsible for your own actions!",
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
	"Infiltrators and Scouting units may not disrupt training/drill sessions, debriefs, or tryouts directly or indirectly (by killing, causing chaos, etc.) where possible unless they are held outside of spawncamp borders!",
	"Please do not talk about killing yourself, being worthless, venting your struggles, etc. on this public server. Moderators and other members of the server are not therapists and may not offer the best advice. If you're struggling, we recommend talking to close friends and/or family in a private setting or reaching out for professional medical help. A public discord is not best suited to discussing these issues!",
	"Fail RP is defined as performing an action or behaving in a way which breaks or inhibits roleplay in any manner. This can include, but is not limited to, bunnyhopping, using /advert OOCly, having an invalid name, necksnapping EOD/OSS, making callouts after you die, prop killing with anything other than rollermines/manhacks, acting conversely to the implied role of a specialized class (such as not attempting to blend in as a disguised SU or kill farming as a pushback class), and/or disrupting the gameplay of others (such as by micspamming!",
	"If what you're doing or are about to do isn't listed here and you're curious, ask a staff member. If one is not available, use common sense. If you can't find an answer, contact a Head Admin+. Server management has the final say over IC situations!",
	"Exploiting bugs, glitches, map features (such as going out of bounds or standing on the very edges of a map), or loopholes in the rules is prohibited. Abusing an exploit for any reason is punishable!",
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
