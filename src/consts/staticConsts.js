
// https://dungeonmastertools.github.io/items.html

export const CREATURES = [
    { label: "Humanoid" },
    { label: "Beast" },
];

export const ITEM_COLORS = [
    
]

export const ADVENTURING_GEAR = [
    
    // Ammunition
    {name: 'Arrows (20)', cost: '1 gp', weight: '1 lb.', category: 'ammunition'},
    {name: 'Blowgun needles (50)', cost: '1 gp', weight: '1 lb.', category: 'ammunition'},
    {name: 'Crossbow bolts (20)', cost: '1 gp', weight: '1 lb.', category: 'ammunition'},
    {name: 'Pebbles (20)', cost: '4 cp', weight: '1 lb.', category: 'ammunition'},

    // Reagents
    {name: 'Crystal', cost: '10 gp', weight: '1 lb.', category: 'arcana'},
    {name: 'Orb', cost: '20 gp', weight: '3 lb.', category: 'arcana'},
    {name: 'Rod', cost: '10 gp', weight: '2 lb.', category: 'arcana'},
    {name: 'Staff', cost: '5 gp', weight: '4 lb.', category: 'arcana'},
    {name: 'Wand', cost: '10 gp', weight: '1 lb.', category: 'arcana'},
    {name: 'Sprig of Mistletoe', cost: '5 gp', weight: '1 lb.', category: 'arcana'},
    {name: 'Totem', cost: '1 gp', weight: '1 lb.', category: 'arcana'},
    {name: 'Wooden Staff', cost: '5 gp', weight: '4 lb.', category: 'arcana'},
    {name: 'Yew Wand', cost: '10 gp', weight: '1 lb.', category: 'arcana'},

    {name: 'Abacus', cost: '2 gp', weight: '2 lb.', category: 'misc'},
    {name: 'Acid (vial)', cost: '25 gp', weight: '1 lb.', category: 'misc'},
    {name: 'Antitoxin (vial)', cost: '5 gp', weight: '1 lb.', category: 'misc'},
    {name: 'Backpack', cost: '2 gp', weight: '5 lb.', category: 'misc'},
    {name: 'Ball bearings', cost: '1 gp', weight: '2 lb.', category: 'misc'},
    {name: 'Barrel', cost: '2 gp', weight: '70 lb.', category: 'misc'},
    {name: 'Basket', cost: '4 sp', weight: '2 lb.', category: 'misc'},
    {name: 'Bedroll', cost: '1 gp', weight: '7 lb.', category: 'misc'},
    {name: 'Bell', cost: '1 gp', weight: '—', category: 'misc'},
    {name: 'Blanket', cost: '5 sp', weight: '3 lb.', category: 'misc'},
    {name: 'Block and tackle', cost: '1 gp', weight: '5 lb.', category: 'misc'},
    {name: 'Book', cost: '25 gp', weight: '5 lb.', category: 'misc'},
    {name: 'Bottle, glass', cost: '2 gp', weight: '2 lb.', category: 'misc'},
    {name: 'Bucket', cost: '5 cp', weight: '2 lb.', category: 'misc'},
    {name: 'Caltrops', cost: '1 gp', weight: '2 lb.', category: 'misc'},
    {name: 'Candle', cost: '1 cp', weight: '—', category: 'misc'},
    {name: 'Case, crossbow bolt', cost: '1 gp', weight: '1 lb.', category: 'misc'},
    {name: 'Case, map or scroll', cost: '1 gp', weight: '1 lb.', category: 'misc'},
    {name: 'Chain', cost: '10 feet', weight: '10 lb.', category: 'misc'},
    {name: 'Chalk', cost: '1 piece', weight: '—', category: 'misc'},
    {name: 'Chest', cost: '5 gp', weight: '25 lb.', category: 'misc'},
    {name: 'Climber\'s kit', cost: '25 gp', weight: '12 lb.', category: 'misc'},

    // Clothes
    {name: 'Clothes, common', cost: '5 sp', weight: '3 lb.', category: 'clothes'},
    {name: 'Clothes, costume', cost: '5 gp', weight: '4 lb.', category: 'clothes'},
    {name: 'Clothes, fine', cost: '15 gp', weight: '6 lb.', category: 'clothes'},
    {name: 'Clothes, traveler\'s', cost: '2 gp', weight: '4 lb.', category: 'clothes'},
    {name: 'Clothes, Cold Weather', cost: '10 gp', weight: '8 lb.', category: 'clothes'},
    {name: 'Signet ring', cost: '5 gp', weight: '—', category: 'clothes'},

    {name: 'Component pouch', cost: '25 gp', weight: '2 lb.', category: 'misc'},
    {name: 'Crowbar', cost: '2 gp', weight: '5 lb.', category: 'misc'},
    {name: 'Fishing Tackle', cost: '1 gp', weight: '4 lb.', category: 'misc'},
    {name: 'Flask or Tankard', cost: '2 cp', weight: '1 lb.', category: 'misc'},
    {name: 'Grappling Hook', cost: '2 gp', weight: '4 lb.', category: 'misc'},
    {name: 'Hammer', cost: '1 gp', weight: '3 lb.', category: 'misc'},
    {name: 'Hammer, Sledge', cost: '2 gp', weight: '10 lb.', category: 'misc'},
    {name: 'Healer\'s Kit', cost: '5 gp', weight: '3 lb.', category: 'misc'},
    {name: 'Holy Symbol', cost: '5 gp', weight: '1 lb.', category: 'misc'},
    {name: 'Holy Water (Flask)', cost: '25 gp', weight: '1 lb.', category: 'misc'},
    {name: 'Hourglass', cost: '25 gp', weight: '1 lb.', category: 'misc'},
    {name: 'Hunting Trap', cost: '5 gp', weight: '25 lb.', category: 'misc'},
    {name: 'Ink (1 oz. Bottle)', cost: '10 gp', weight: '—', category: 'misc'},
    {name: 'Ink Pen', cost: '2 cp', weight: '—', category: 'misc'},
    {name: 'Jug or Pitcher', cost: '2 cp', weight: '4 lb.', category: 'misc'},
    {name: 'Ladder (10-foot)', cost: '1 sp', weight: '25 lb.', category: 'misc'},
    {name: 'Lamp', cost: '5 sp', weight: '1 lb.', category: 'misc'},
    {name: 'Lantern, Bullseye', cost: '10 gp', weight: '2 lb.', category: 'misc'},
    {name: 'Lantern, Hooded', cost: '5 gp', weight: '2 lb.', category: 'misc'},
    {name: 'Lock', cost: '10 gp', weight: '1 lb.', category: 'misc'},
    {name: 'Magnifying Glass', cost: '100 gp', weight: '—', category: 'misc'},
    {name: 'Manacles', cost: '2 gp', weight: '6 lb.', category: 'misc'},
    {name: 'Mess Kit', cost: '2 sp', weight: '1 lb.', category: 'misc'},
    {name: 'Mirror, Steel', cost: '5 gp', weight: '1/2 lb.', category: 'misc'},
    {name: 'Oil (flask)', cost: '1 sp', weight: '1 lb.', category: 'misc'},
    {name: 'Paper (one sheet)', cost: '2 sp', weight: '—', category: 'misc'},
    {name: 'Parchment (one sheet)', cost: '1 sp', weight: '—', category: 'misc'},
    {name: 'Perfume (vial)', cost: '5 gp', weight: '—', category: 'misc'},
    {name: 'Pick, Miner\'s', cost: '2 gp', weight: '10 lb.', category: 'misc'},
    {name: 'Piton', cost: '5 cp', weight: '1/4 lb.', category: 'misc'},
    {name: 'Poison, Basic (vial)', cost: '100 gp', weight: '—', category: 'misc'},
    {name: 'Pole (10-foot)', cost: '5 cp', weight: '7 lb.', category: 'misc'},
    {name: 'Pot, Iron', cost: '2 gp', weight: '10 lb.', category: 'misc'},
    {name: 'Potion of Healing', cost: '50 gp', weight: '1/2 lb.', category: 'misc'},
    {name: 'Pouch', cost: '5 gp', weight: '2 lb.', category: 'misc'},
    {name: 'Quiver', cost: '1 gp', weight: '1 lb.', category: 'misc'},
    {name: 'Ram, portable', cost: '4 gp', weight: '35 lb.', category: 'misc'},
    {name: 'Rations (1 day)', cost: '5 sp', weight: '2 lb.', category: 'misc'},
    {name: 'Robes', cost: '1 gp', weight: '4 lb.', category: 'misc'},
    {name: 'Rope, hempen (50 feet)', cost: '1 gp', weight: '10 lb.', category: 'misc'},
    {name: 'Rope, silk (50 feet)', cost: '10 gp', weight: '5 lb.', category: 'misc'},
    {name: 'Sack', cost: '1 cp', weight: '1/2 lb.', category: 'misc'},
    {name: 'Scale, merchant\'s', cost: '5 gp', weight: '3 lb.', category: 'misc'},
    {name: 'Sealing wax', cost: '5 sp', weight: '—', category: 'misc'},
    {name: 'Shovel', cost: '2 gp', weight: '5 lb.', category: 'misc'},
    {name: 'Signal whistle', cost: '5 cp', weight: '—', category: 'misc'},
    
    {name: 'Soap', cost: '2 cp', weight: '—', category: 'misc'},
    {name: 'Spellbook', cost: '50 gp', weight: '3 lb.', category: 'misc'},
    {name: 'Spikes, iron (10)', cost: '1 gp', weight: '5 lb.', category: 'misc'},
    {name: 'Spyglass', cost: '1,000 gp', weight: '1 lb.', category: 'misc'},
    {name: 'Tent, two-person', cost: '2 gp', weight: '20 lb.', category: 'misc'},
    {name: 'Tinderbox', cost: '5 sp', weight: '1 lb.', category: 'misc'},
    {name: 'Torch', cost: '1 cp', weight: '1 lb.', category: 'misc'},
    {name: 'Vial', cost: '1 gp', weight: '—', category: 'misc'},
    {name: 'Waterskin', cost: '2 sp', weight: '5 lb. (full)', category: 'misc'},
    {name: 'Whetstone', cost: '1 cp', weight: '1 lb.', category: 'misc'},

    // Tools
    {name: "Alchemist's supplies", cost: '50 gp', weight: '8 lb.', category: "tools"},
    {name: "Brewer's supplies", cost: '20 gp', weight: '9 lb.', category: "tools"},
    {name: "Calligrapher's supplies", cost: '10 gp', weight: '5 lb.', category: "tools"},
    {name: "Carpenter's tools", cost: '8 gp', weight: '6 lb.', category: "tools"},
    {name: "Cartographer's tools", cost: '15 gp', weight: '6 lb.', category: "tools"},
    {name: "Cobbler's tools", cost: '5 gp', weight: '5 lb.', category: "tools"},
    {name: "Cook's utensils", cost: '1 gp', weight: '8 lb.', category: "tools"},
    {name: "Glassblower's tools", cost: '30 gp', weight: '5 lb.', category: "tools"},
    {name: "Jeweler's tools", cost: '25 gp', weight: '2 lb.', category: "tools"},
    {name: "Leatherworker's tools", cost: '5 gp', weight: '5 lb.', category: "tools"},
    {name: "Mason's tools", cost: '10 gp', weight: '8 lb.', category: "tools"},
    {name: "Painter's supplies", cost: '10 gp', weight: '8 lb.', category: "tools"},
    {name: "Potter's tools", cost: '10 gp', weight: '5 lb.', category: "tools"},
    {name: "Smith's tools", cost: '20 gp', weight: '5 lb.', category: "tools"},
    {name: "Tinker's tools", cost: '50 gp', weight: '5 lb.', category: "tools"},
    {name: "Weaver's tools", cost: '1 gp', weight: '5 lb.', category: "tools"},
    {name: "Woodcarver's tools", cost: '1 gp', weight: '5 lb.', category: "tools"},
    {name: "Disguise kit", cost: '25 gp', weight: '3 lb.', category: "tools"},
    {name: "Forgery kit", cost: '15 gp', weight: '3 lb.', category: "tools"},
    {name: "Gaming set", cost: '1 gp', weight: '5 lb.', category: "tools"},
    {name: "Dragonchess set", cost: '1 gp', weight: '4 lb.', category: "tools"},
    {name: "Playing card set", cost: '5 sp', weight: '—', category: "tools"},
    {name: "Three-Dragon Ante set", cost: '1 gp', weight: '5 lb.', category: "tools"},
    {name: "Navigator's tools", cost: '25 gp', weight: '2 lb.', category: "tools"},
    {name: "Poisoner's kit", cost: '50 gp', weight: '3 lb.', category: "tools"},
    {name: "Thieve's tools", cost: '25 gp', weight: '1 lb.', category: "tools"},

    // Instruments
    {name: "Bagpipes", cost: '30 gp', weight: '6 lb.', category: "instrument"},
    {name: "Drum", cost: '6 gp', weight: '3 lb.', category: "instrument"},
    {name: "Dulcimer", cost: '25 gp', weight: '10 lb.', category: "instrument"},
    {name: "Flute", cost: '2 gp', weight: '1 lb.', category: "instrument"},
    {name: "Lute", cost: '35 gp', weight: '2 lb.', category: "instrument"},
    {name: "Lyre", cost: '30 gp', weight: '2 lb.', category: "instrument"},
    {name: "Horn", cost: '3 gp', weight: '2 lb.', category: "instrument"},
    {name: "Pan flute", cost: '12 gp', weight: '2 lb.', category: "instrument"},
    {name: "Shawm", cost: '2 gp', weight: '1 lb.', category: "instrument"},
    {name: "Viol", cost: '30 gp', weight: '1 lb.', category: "instrument"},

    // Jewels
    {name: "Amber", cost: '5 gp', weight: '1 lb.', category: "jewel"},
    {name: "Topaz", cost: '25 gp', weight: '1 lb.', category: "jewel"},
    {name: "Saphire", cost: '15 gp', weight: '1 lb.', category: "jewel"},
    {name: "Emerald", cost: '5 gp', weight: '1 lb.', category: "jewel"},
    {name: "Ruby", cost: '15 gp', weight: '1 lb.', category: "jewel"},
    {name: "Diamond", cost: '25 gp', weight: '1 lb.', category: "jewel"},
    {name: "Dragon's Eye", cost: '35 gp', weight: '1 lb.', category: "jewel"},
    {name: "Onyx", cost: '5 gp', weight: '1 lb.', category: "jewel"},

    

]

export const WEAPONRY = [

    // Simple Melee Weapons
    {name: 'Club', cost: '1 sp', dmg: '1d4 B', weight: '2 lb.', properties: 'Finesse Weapon, Thrown Rg(20/60)', category: 'weapon'},
    {name: 'Dagger', cost: '2 cp', dmg: '1d4 P', weight: '1 lb.', properties: 'Finesse Weapon, Thrown Rg(20/60)', category: 'weapon'},
    {name: 'Greatclub', cost: '2 sp', dmg: '1d8 B', weight: '10 lb.', properties: 'Two Handed', category: 'weapon'},
    {name: 'Handaxe', cost: '5 gp', dmg: '1d6 S', weight: '2 lb.', properties: 'Thrown Rg(20/60)', category: 'weapon'},
    {name: 'Javelin', cost: '5 sp', dmg: '1d6 P', weight: '2 lb.', properties: 'Thrown Rg(30/120)', category: 'weapon'},
    {name: 'Light hammer', cost: '2 gp', dmg: '1d4 B', weight: '2 lb.', properties: 'Thrown Rg(20/60)', category: 'weapon'},
    {name: 'Mace', cost: '5 gp', dmg: '1d6 B', weight: '4 lb.', properties: '-', category: 'weapon'},
    {name: 'Quarterstaff', cost: '2 sp', dmg: '1d6 B', weight: '4 lb.', properties: '-', category: 'weapon'},
    {name: 'Sickle', cost: '1 cp', dmg: '1d4 P', weight: '2 lb.', properties: '-', category: 'weapon'},
    {name: 'Spear', cost: '1 gp', dmg: '1d6 P', weight: '3 lb.', properties: 'Reach, Special', category: 'weapon'},

    // Simple Ranged Weapons
    {name: 'Dart', cost: '25 gp', dmg: '1d4 P', weight: '0.5 lb.', properties: 'Finesse Weapon, Thrown Rg(20/60)', category: 'weapon'},
    {name: 'Light Crossbow', cost: '25 gp', dmg: '1d8 P', weight: '5 lb.', properties: 'Ammunition, Rg(30/120), Two Handed', category: 'weapon'},
    {name: 'Shortbow', cost: '25 gp', dmg: '1d6 P', weight: '2 lb.', properties: 'Ammunition, Rg(30/120), Two Handed', category: 'weapon'},
    {name: 'Sling', cost: '0 gp', dmg: '1 P', weight: '0 lb.', properties: 'Ammunition, Rg(0/0)', category: 'weapon'},

    // Martial Melee Weapons
    {name: 'Battleaxe', cost: '10 gp', dmg: '1d8 S', weight: '4 lb.', properties: 'Versatile(1d10)', category: 'weapon'},
    {name: 'Flail', cost: '10 gp', dmg: '1d8 B', weight: '2 lb.', properties: '-', category: 'weapon'},
    {name: 'Glaive', cost: '20 gp', dmg: '1d10 S', weight: '6 lb.', properties: 'Reach, Two Handed', category: 'weapon'},
    {name: 'Greataxe', cost: '30 gp', dmg: '1d12 S', weight: '7 lb.', properties: 'Two Handed', category: 'weapon'},
    {name: 'Greatsword', cost: '50 gp', dmg: '2d6 S', weight: '6 lb.', properties: 'Two Handed', category: 'weapon'},
    {name: 'Halberd', cost: '20 gp', dmg: '1d10 S', weight: '6 lb.', properties: 'Reach, Two Handed', category: 'weapon'},
    {name: 'Lance', cost: '10 gp', dmg: '1d12 P', weight: '6 lb.', properties: 'Reach, Special', category: 'weapon'},
    {name: 'Longsword', cost: '15 gp', dmg: '1d8 S', weight: '3 lb.', properties: 'Versatile(1d10)', category: 'weapon'},
    {name: 'Maul', cost: '10 gp', dmg: '2d6 B', weight: '10 lb.', properties: 'Versatile(1d12)', category: 'weapon'},
    {name: 'Pike', cost: '5 gp', dmg: '1d10 S', weight: '18 lb.', properties: 'Reach, Special', category: 'weapon'},
    {name: 'Rapier', cost: '5 gp', dmg: '1d8 P', weight: '2 lb.', properties: 'Finesse Weapon, Reach', category: 'weapon'},
    {name: 'Scimitar', cost: '15 gp', dmg: '1d6 S', weight: '3 lb.', properties: 'Finesse Weapon, Reach', category: 'weapon'},
    {name: 'Shortsword', cost: '10 gp', dmg: '1d6 S', weight: '2 lb.', properties: 'Finesse Weapon, Reach', category: 'weapon'},
    {name: 'Trident', cost: '5 gp', dmg: '1d6 P', weight: '4 lb.', properties: 'Reach, Special', category: 'weapon'},
    {name: 'War pick', cost: '5 gp', dmg: '1d8 P', weight: '2 lb.', properties: '', category: 'weapon'},
    {name: 'Warhammer', cost: '15 gp', dmg: '1d8 B', weight: '2 lb.', properties: 'Versatile(1d10)', category: 'weapon'},
    {name: 'Whip', cost: '2 gp', dmg: '1d4 P', weight: '3 lb.', properties: 'Finesse Weapon, Reach', category: 'weapon'},

    // Martial Ranged Rewards
    {name: 'Shortbow', cost: '25 gp', dmg: '1d6 P', weight: '2 lb.', properties: 'Two Handed, Range(80/320)', category: 'weapon'},
    {name: 'Sling', cost: '0 gp', dmg: '1d4 P', weight: '0 lb.', properties: 'Range(30/120)', category: 'weapon'},
    {name: 'Crossbow, hand', cost: '75 gp', dmg: '1d6 P', weight: '3 lb.', properties: 'Two Handed, Range(80/320)', category: 'weapon'},
    {name: 'Crossbow, heavy', cost: '50 gp', dmg: '1d10 P', weight: '18 lb.', properties: 'Two Handed, Range(320/1600)', category: 'weapon'},
    {name: 'Longbow', cost: '50 gp', dmg: '1d8 P', weight: '3 lb.', properties: 'Two Handed, Range(320/1600)', category: 'weapon'},
    {name: 'Net', cost: '10 gp', dmg: '0', weight: '10 lb.', properties: '', category: 'weapon'},
];

export const CHALLANGE_RATINGS = [
    {name: '1/8', value: 0.125, reward: 0},
    {name: '1/4', value: 0.25, reward: 5},
    {name: '1/2', value: 0.5, reward: 10},
    {name: '1', value: 1, reward: 15},
    {name: '2', value: 2, reward: 20},
    {name: '3', value: 3, reward: 25},
    {name: '4', value: 4, reward: 30},
    {name: '5', value: 5, reward: 35},
    {name: '6', value: 6, reward: 40},
    {name: '7', value: 7, reward: 50},
    {name: '8', value: 8, reward: 60},
    {name: '9', value: 9, reward: 70},
    {name: '10', value: 10, reward: 80},
    {name: '11', value: 11, reward: 90},
    {name: '12', value: 12, reward: 100},
    {name: '13', value: 13, reward: 110},
    {name: '14', value: 14, reward: 120},
    {name: '15', value: 15, reward: 130},
]