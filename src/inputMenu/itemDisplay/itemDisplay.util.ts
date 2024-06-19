import { CHALLENGE_RATINGS } from "../../consts/staticConsts";
import { Item } from "../../inputMenu/itemDisplay/itemDisplay.types";


export const getCategoryColor = (category: string): string => {
    const colorMap: Record<string, string> = {
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

export const calcCostReal = (challengeRating: string): number => {
    const cr = CHALLENGE_RATINGS.find(cr => cr.name === challengeRating);
    if (!cr) {
        return 0;
    }
    return cr.reward * parseFloat(challengeRating); // Adjust if challengeRating is not always a number
};

export const generateLootItems = (spendingCash: number, characterType: string, civilian: boolean, items: any): Item[] => {
    let remainingCash = spendingCash;
    const lootItems: Item[] = [];

    const selectRandomItem = (gearList: Item[]): Item => {
        const randomIndex = Math.floor(Math.random() * gearList.length);
        return gearList[randomIndex];
    };

    const uniqueList: Item[] = [...items.message];

    while (remainingCash > 5 && lootItems.length < (civilian || characterType === "Beast" ? 1 : Math.floor(Math.random() * 2) + 7)) {
        let flexibleItemsList: Item[] = [...uniqueList];

        if (characterType === 'Beast') {
            flexibleItemsList = flexibleItemsList.filter(item => item.category === 'nature');
        } else {
            flexibleItemsList = flexibleItemsList.filter(item => item.category !== 'nature');
        }

        flexibleItemsList.sort((a, b) => b.cost_real - a.cost_real);

        const remainingFunds = remainingCash;
        const ecoList = flexibleItemsList.filter(item => item.cost_real < remainingFunds);
        const top40items = ecoList.slice(0, 40);
        const item = selectRandomItem(top40items);

        const removeCategoryFromUniqueList = (category: string) => {
            const index = uniqueList.findIndex(i => i.category === category);
            if (index > -1) {
                uniqueList.splice(index, 1); // Corrected splice usage
            }
        };

        if (!item) {
            break;
        }

        if (item.category === 'weapon' || item.category === 'instrument' || item.category === 'tools') {
            removeCategoryFromUniqueList(item.category);
        }

        remainingCash -= item.cost_real;
        lootItems.push(item);
        uniqueList.splice(uniqueList.findIndex(i => i.name === item.name), 1);
    }

    lootItems.sort((a, b) => b.cost_real - a.cost_real);
    return lootItems;
};
