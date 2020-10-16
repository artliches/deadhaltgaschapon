export const GASHAPONITEMS = [
    { num: 1, descrip: 'Cadet Badge'},
    { num: 2, descrip: 'Rabbit_s Foot'},
    { num: 3, descrip: 'Captains Cap'},
    { num: 4, descrip: 'Glowing Rock'},
    { num: 5, descrip: 'Wagon'},
    { num: 6, descrip: 'Fire Sword'},
    { num: 7, descrip: 'The Order of Operations'},
    { num: 8, descrip: 'Ordinary Sword'},
    { num: 9, descrip: 'Aggravation Helm'},
    { num: 10, descrip: 'Bone Carved Knife'},
    { num: 11, descrip: 'Powder Ball'},
    { num: 12, descrip: 'Miner Helmet'},
    { num: 13, descrip: 'Happy Health Bar'},
    { num: 14, descrip: 'Strong Magnet'},
    { num: 15, descrip: 'Sack of Marbles'},
    { num: 16, descrip: 'Threatening Prop Sword'},
    { num: 17, descrip: 'Folding Grappling Hook'},
    { num: 18, descrip: 'Triple Whip'},
    { num: 19, descrip: 'Slap Trap'},
    { num: 20, descrip: 'Lens Magnifier'},
    { num: 21, descrip: 'Unliftable Sphere'},
    { num: 22, descrip: 'Laser Pistol'},
    { num: 23, descrip: 'Ektro'},
    { num: 24, descrip: 'X-Ray Polaroid'},
    { num: 25, descrip: 'Fire Cube'},
    { num: 26, descrip: 'Everthrow Stone'},
    { num: 27, descrip: 'Bubble Scrubber Pods'},
    { num: 28, descrip: 'Stick of TNT'},
    { num: 29, descrip: 'Gwonka_s Gumball'},
    { num: 30, descrip: 'Expander Foam Grenade'},
    { num: 31, descrip: 'Phase Pistol'},
    { num: 32, descrip: 'Grandma_s Deck'},
    { num: 33, descrip: 'Dark Sword'},
    { num: 34, descrip: 'Ruck'},
    { num: 35, descrip: 'Cuppa'},
    { num: 36, descrip: 'Lion Hilt Sword'},
    { num: 37, descrip: 'Pyramid Necklace'},
    { num: 38, descrip: 'Ever Burning Torch'},
    { num: 39, descrip: 'Gold Spray Paint'},
    { num: 40, descrip: 'Nailgun'},
    { num: 41, descrip: 'Pamphlet of the Dead'},
    { num: 42, descrip: 'Piston Knee'},
    { num: 43, descrip: 'Screaming Shield'},
    { num: 44, descrip: 'Magic Beam'},
    { num: 45, descrip: 'Hoagland_s Travel Guide'},
    { num: 46, descrip: 'Pop Cap Gun'},
    { num: 47, descrip: 'Scorcher'},
    { num: 48, descrip: 'Rax Cube'},
    { num: 49, descrip: 'Mind Reading Circlet'},
    { num: 50, descrip: 'Spiked Gauntlets'},
    { num: 51, descrip: 'Whirly'},
    { num: 52, descrip: 'Zhuthar_s Helm'},
    { num: 53, descrip: 'Harp Bow'},
    { num: 54, descrip: 'Endless Stick'},
    { num: 55, descrip: 'Jabber_s Gibber Box'},
    { num: 56, descrip: 'Kork'},
    { num: 57, descrip: 'Smoking Gun'},
    { num: 58, descrip: 'Radar Dish'},
    { num: 59, descrip: 'Vorpal Sword'},
    { num: 60, descrip: 'Chagu_s Fist'},
    { num: 61, descrip: 'Energy Cell'},
    { num: 62, descrip: 'Cursed Gold'},
    { num: 63, descrip: 'Sword of Samuel'},
    { num: 64, descrip: 'Little Whooper'},
    { num: 65, descrip: 'Jar of Ball Lightning'},
    { num: 66, descrip: '2.1 GB Harddrive'},
    { num: 67, descrip: 'Slapper'},
    { num: 68, descrip: 'Samuel the Horse'},
    { num: 69, descrip: 'Solar Emitter'},
    { num: 70, descrip: 'Hook Scale Maille'},
    { num: 72, descrip: 'Flash Array'},
    { num: 72, descrip: 'Microcosm'},
    { num: 73, descrip: 'Microwave Gun'},
    { num: 74, descrip: 'Mechanical Sheep'},
    { num: 75, descrip: 'Energy Shotgun'},
    { num: 76, descrip: 'Old Robot Head'},
    { num: 77, descrip: 'Godbane'},
    { num: 78, descrip: 'Fist Boot'},
    { num: 79, descrip: 'Eye of the Beholder'},
    { num: 80, descrip: '3.5_ Floppy Ejector'},
    { num: 81, descrip: 'Cursed Axe'},
    { num: 82, descrip: 'Coin Operated Dragnov'},
    { num: 83, descrip: 'TV Helmet'},
    { num: 84, descrip: 'Fusion Belt'},
    { num: 85, descrip: 'Box Creator'},
    { num: 86, descrip: 'Graftling Gun'},
    { num: 87, descrip: 'Bumblechuck'},
    { num: 88, descrip: 'Amulet of RA'},
    { num: 89, descrip: 'Duplicator Gun'},
    { num: 90, descrip: '8 Shooter'},
    { num: 91, descrip: 'Telecade'},
    { num: 92, descrip: 'Eversack'},
    { num: 93, descrip: 'Soul Necklace'},
    { num: 94, descrip: 'Be Kind Rewinder'},
    { num: 95, descrip: 'Growth Ray'},
    { num: 96, descrip: 'Knowledge Eater'},
    { num: 97, descrip: 'Pikeler'},
    { num: 98, descrip: 'God_s Hand'},
    { num: 99, descrip: 'Redbone'},
    { num: 100, descrip: 'Chucklehead'},
];

export const BODYPARTS = [
    'head',
    'torso',
    'arm',
    'arm',
    'leg',
    'leg'
];

export const MODS = [
    {
        body: 'head',
        replacement: [
            { mod: 'Memory Drive',     attr: 'KNO', function: 'Cast Magicks with a a +1 for each Knock rolled' },
            { mod: 'Plated Skull',     attr: 'CON', function: 'Take no damage from the next Attack targeting you' },
            { mod: 'Ractive Sight',    attr: 'SPE', function: 'Choose a single target to skip their next Action activation' },
            { mod: 'SLR Bridge',       attr: 'STR', function: 'Crew Members may use your STR score for ten minutes' },
            { mod: 'Recollection Cap', attr: 'KNO', function: 'Recall a mod, event, key term, or info that was forgotten' },
            { mod: 'Cone Addons',      attr: 'FOC', function: 'See perfectly in pitch darkness for the current Job' },
        ]
    },
    {
        body: 'torso',
        replacement: [
            { mod: 'Nuclear Aorta',    attr: 'STR', function: 'Add two more dice to your next STR roll' },
            { mod: 'Servo Core',       attr: 'KNO', function: 'Telepathically send a one sentence message to anyone' },
            { mod: 'Dual Enablers',    attr: 'CON', function: 'Take two non combat Action rolls next turn' },
            { mod: 'Animalistic Nave', attr: 'FOC', function: 'Next time shot at, roll to take a return projectile Weapon attack' },
            { mod: 'Central Gyro',     attr: 'SPE', function: 'Knock an enemies Weapon out of their hands' },
            { mod: 'Reflective Chest', attr: 'CON', function: 'Reflect half damage from next Attack on you to any other target' },
        ]

    },
    {
        body: 'arm',
        replacement: [
            { mod: 'Boolean Biceps',   attr: 'SPE', function: 'On a Striking Success make two Attack rolls against one target' },
            { mod: 'Trigger Flickers', attr: 'FOC', function: 'Take an Attack with a Weapon, deal double damage' },
            { mod: 'Spiral Threads',   attr: 'KNO', function: 'Recreate the last Magicks effect' },
            { mod: 'Socket Stretcher', attr: 'SPE', function: 'Grab and return to you any Item within ten feet' },
            { mod: 'Clack Track',      attr: 'STR', function: 'For current Job unarmed Attacks have a WV of 3' },
            { mod: 'Woven Ligaments',  attr: 'CON', function: 'Use both your STR and CON scores for next Unarmed Attack' },
        ]
    },
    {
        body: 'leg',
        replacement: [
            { mod: 'Exhaust Belt',   attr: 'STR', function: 'Jump up to 6 times your height' },
            { mod: 'Hacked Nerves',  attr: 'CON', function: 'Ignore any amount of heat or cold for up to a minute' },
            { mod: 'Shifting Bones', attr: 'SPE', function: 'Move through a space up to a third of your size' },
            { mod: 'Rotation Cuffs', attr: 'FOC', function: 'Take a projectile Attack: split the damage between two targets' },
            { mod: 'Distro Virus',   attr: 'KNO', function: 'Let another Crew Member roll for Magicks with +2' },
            { mod: 'Turbo Turnkey',  attr: 'STR', function: 'Kick down any door. Period.' },
        ]
    },

];

export const MALFUNCTIONS = [
    { num: 6,   malfunction: 'Hot', oddity: 'Always very warm to the touch' },
    { num: 7,   malfunction: 'Rapid',   oddity: 'Enacts its function twice with each use' },
    { num: 8,   malfunction: 'Folding', oddity: 'Folds down twice' },
    { num: 9,   malfunction: 'Grassy',  oddity: 'Sprouts grass and small twigs' },
    { num: 10,  malfunction: 'Grow',    oddity: 'Some sections change size' },
    { num: 11,  malfunction: 'Slippery',    oddity: 'Hard to hold on to' },
    { num: 12,  malfunction: 'Embiggen',    oddity: 'Continually gets larger' },
    { num: 13,  malfunction: 'Elemental',   oddity: 'Crackles with energy and shocks on touch' },
    { num: 14,  malfunction: 'Chilled', oddity: 'Always layered with frost' },
    { num: 15,  malfunction: 'Sentient',    oddity: 'Speaks and understands languages' },
    { num: 16,  malfunction: 'Waterwork',   oddity: 'Spurts water when in use' },
    { num: 17,  malfunction: 'Bellowing',   oddity: 'Screams out whenever used' },
    { num: 18,  malfunction: 'Aggrevating', oddity: 'Gets louder, stronger, hotter when used multiple times' },
    { num: 19,  malfunction: 'Swapped', oddity: 'Front and back sections are flipped around in the center' },
    { num: 20,  malfunction: 'Formswitched',    oddity: 'Cosmetically looks like a completely different Item' },
    { num: 21,  malfunction: 'Wooden',  oddity: 'Made of wood' },
    { num: 22,  malfunction: 'Blinding',    oddity: 'Flashes with blinding light when used' },
    { num: 23,  malfunction: 'Glowing', oddity: 'Always glows slightly' },
    { num: 24,  malfunction: 'Gibbering',   oddity: 'Mutters, spits, and gibbers always' },
    { num: 25,  malfunction: 'Cool',    oddity: 'Remarked on consistently as “cool looking”' },
    { num: 26,  malfunction: 'Destructing', oddity: 'Deals physical damage to objects when used' },
    { num: 27,  malfunction: 'Announcing',  oddity: 'Says every action it does right before it does it' },
    { num: 28,  malfunction: 'Rubbery', oddity: 'Looks and feels like a movie prop' },
    { num: 29,  malfunction: 'Cute',    oddity: 'Adorned with pink and white bows as well as tiny rainbow stickers' },
    { num: 30,  malfunction: 'Bursting',    oddity: 'Pops, jumps, and skitters randomly' },
    { num: 31,  malfunction: 'Liquified',   oddity: 'Bends and warps with use' },
    { num: 32,  malfunction: 'Household',   oddity: 'Changes form to resemble a random household item' },
    { num: 33,  malfunction: 'Rusty',   oddity: 'Rusted and pockmarked' },
    { num: 34,  malfunction: 'Insectoid',   oddity: 'Squirming with plated legs and odd protrusions' },
    { num: 35,  malfunction: 'Gooey',   oddity: 'Sticks to everything it touches, hard to put down' },
    { num: 36,  malfunction: 'Organic', oddity: 'Made of living, breathing flesh and bone' },
];

export const RANDOMSAYING = [
    'SUIT YOURSELF THEN.',
    'SAY HELLO TO MR. SCRATCH FOR ME.',
    'ARE YOU AFRAID OF FORTRA?',
    'THE ALBATROSS AWAITS.',
    'DO YOU THINK YOU\'RE GAD OR SOMETHING?',
    'YOUR CREW WILL MISS YOU.',
    'DYING ON YOUR OWN TERMS HUH?',
    'DEAD HALTED',
    'SUDO RM -R'
];

export const RANDOMCHANGESSAYING = [
    'THE ONLY CONSTANT IS CHANGE.',
    'CHANGE IS GOOD!',
    'I WONDER WHAT\'S NEXT?',
    'EXPERIENCE BEGETS METAMORPHOSIS.',
    'EVOLVE OR DIE.',
    'ONLY FOOLS GO THROUGH LIFE WITHOUT REINVENTING ONESELF.',
    'INSTALLING VERSION 2.0... OR 3.0?',
];
