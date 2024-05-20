
// https://dungeonmastertools.github.io/items.html

const API_ENDPOINT = 'https://jqo8jktdd3.execute-api.eu-west-2.amazonaws.com/dev/get_loot';

 const CREATURES = [
    { label: "Humanoid" },
    { label: "Beast" },
];

 const CREATURE_NAMES = {
    HUMANOID: "Humanoid",
    BEAST: "Beast",
}

 const LOOT_TYPES = {
    AMMUNITION: "ammunition",
    ARCANA: "arcana",
    MISC: "misc",
    WEAPON: "weapon",
    JEWEL: "jewel",
    NATURE: "nature",
    CLOTHES: "clothes",
    INSTRUMENT: "instrument",
    TOOLS: "tools",
    DRINK: "drink",
    BOOK: "book",
}

 const BODY_COLOR = "#BB6B5A";
 const MIDGROUND_COLOR = "#8C7870";


 const CHALLENGE_RATINGS = [
    { name: '0', value: 0, reward: 5 },
    { name: '1', value: 1, reward: 399 },
    { name: '2', value: 2, reward: 599 },
    { name: '3', value: 3, reward: 899 },
    { name: '4', value: 4, reward: 1199 },
    { name: '5', value: 5, reward: 1599 },
    { name: '6', value: 6, reward: 2099 },
    { name: '7', value: 7, reward: 2799 },
    { name: '8', value: 8, reward: 3799 },
    { name: '9', value: 9, reward: 5099 },
    { name: '10', value: 10, reward: 6899 },
    { name: '11', value: 11, reward: 9299 },
    { name: '12', value: 12, reward: 12499 },
    { name: '13', value: 13, reward: 16999 },
    { name: '14', value: 14, reward: 22999 },
    { name: '15', value: 15, reward: 31199 },
    { name: '16', value: 16, reward: 42399 },
    { name: '17', value: 17, reward: 57499 },
    { name: '18', value: 18, reward: 78099 },
    { name: '19', value: 19, reward: 105999 },
    { name: '20', value: 20, reward: 143899 },
]

export {
    CHALLENGE_RATINGS,
    MIDGROUND_COLOR,
    BODY_COLOR,
    CREATURES,
    CREATURE_NAMES,
    LOOT_TYPES,
    API_ENDPOINT
}