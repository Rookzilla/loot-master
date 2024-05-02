import { ADVENTURING_GEAR, WEAPONRY } from "../../consts/staticConsts";

export const generateLootItems = (spendingCash) => {
    let remainingCash = spendingCash;
    const lootItems = [];

    // Helper function to randomly select an item from the gear list
    const selectRandomItem = (gearList) => {
        const randomIndex = Math.floor(Math.random() * gearList.length);
        return gearList[randomIndex];
    };

    // Continue selecting items until spending cash is exhausted or limit is reached
    while (remainingCash > 0 && lootItems.length < 20) { // Limit to 10 items
        // Select a random item from the adventuring gear list
        const adventuringGearItem = selectRandomItem(ADVENTURING_GEAR);
        if (parseInt(adventuringGearItem.cost) <= remainingCash) {
            lootItems.push(adventuringGearItem);
            remainingCash -= parseInt(adventuringGearItem.cost);
        }
    }

    // Continue selecting items until spending cash is exhausted or limit is reached
    while (remainingCash > 0 && lootItems.length < 20) { // Limit to 10 items
        // Select a random item from the weaponry list
        const weaponryItem = selectRandomItem(WEAPONRY);
        if (parseInt(weaponryItem.cost) <= remainingCash) {
            lootItems.push(weaponryItem);
            remainingCash -= parseInt(weaponryItem.cost);
        }
    }

    return lootItems;
};