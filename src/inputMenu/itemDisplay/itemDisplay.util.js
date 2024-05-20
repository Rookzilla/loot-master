import { CHALLENGE_RATINGS } from "../../consts/staticConsts";

export const getCategoryColor = (category) => {
    // Define color mappings based on category
    const colorMap = {
        weapon: '#ff4f4f',
        clothes: '#89c777', 
        tools: '#ffedad', 
        instrument: '#ffade9',
        arcana: '#a1a5f7',
        ammunition: '#ffce5c',
        misc: "#ebebeb",
        jewel: '#45ffbd',
        nature: '#31a83f',
        drink: '#e069bb',
        book: '#d8db81',
    };
    return colorMap[category] || '#ff00dd'; // Fallback color
};

// function for calculating the cost_real after being given a challange rating, challange rating objects have a reward property, we need to multiply that by the challenge rating
export const calcCostReal = (challengeRating) => {
    const cr = CHALLENGE_RATINGS.find(cr => cr.name === challengeRating);
    if (!cr) {
        return 0;
    }
    return cr.reward * challengeRating;
};

export const generateLootItems = (spendingCash, characterType, civilian, items) => {
    let remainingCash = spendingCash;
    const lootItems = [];

    const selectRandomItem = (gearList) => {
        const randomIndex = Math.floor(Math.random() * gearList.length);
        return gearList[randomIndex];
    };

    console.log(items)
    const uniqueList = [...items.message];

    // Continue selecting items until spending cash is exhausted or limit is reached
    while (remainingCash > 5 && lootItems.length < (civilian || characterType === "Beast" ? 1 : Math.floor(Math.random() * 2) + 7)) {
     // create a destructable list of items, based on character type
        let flexibleItemsList = [...uniqueList]; // Create a copy of the master item list

        if (characterType === 'Beast') {
            flexibleItemsList = flexibleItemsList.filter(item => item.category === 'nature');
        } else {
            flexibleItemsList = flexibleItemsList.filter(item => item.category !== 'nature');
        }
        
        // remove items that cost more than the remaining cash
        // sort the list by cost_real, with the most expensive at the top
        flexibleItemsList.sort((a, b) => b.cost_real - a.cost_real);

        // remove items that cost more than the remaining cash
        const remainingFunds = remainingCash;
        const ecoList = flexibleItemsList.filter(item => item.cost_real < remainingFunds);
        // take only the first 5 items of that list
        const top40items = ecoList.slice(0, 40);
        const item = selectRandomItem(top40items);

        const removeCategoryFromUniqueList = (category) => {
            const index = uniqueList.findIndex(i => i.category === category);
            if (index > -1) {
                uniqueList.splice(index);
            }
        }

        if (!item) {
            break;
        }

        // if the item is a weapon, remove all the objects with the weapon category from the uniqueList
        if (item.category === 'weapon') {
            removeCategoryFromUniqueList('weapon');
        }
        if (item.category === 'instrument') {
            removeCategoryFromUniqueList('instrument');
        }
        if (item.category === 'tools') {
            removeCategoryFromUniqueList('tools');
        }

        
        remainingCash -= item.cost_real;
        lootItems.push(item);
        // remove the item from the uniqueList so it cannot be selected again
        uniqueList.splice(uniqueList.findIndex(i => i.name === item.name), 1);
    }
    // sort the loot items by cost_real, with the most expensive at the top
    lootItems.sort((a, b) => b.cost_real - a.cost_real);
    return lootItems;
};


