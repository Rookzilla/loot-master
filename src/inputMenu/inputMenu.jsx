import React from 'react';
import InputCard from './inputCard/inputCard';
import * as CSS from './inputMenu.styles.js';
import useInputCard from './inputCard/useInputCard.jsx';
import { CHALLANGE_RATINGS } from '../consts/staticConsts.js';
import ItemDisplay from './itemDisplay/itemDisplay.jsx';
import { generateLootItems } from './itemDisplay/itemDisplay.util.js';

const InputMenu = () => {
    const { cardCount, handleAddCard, handleDeleteCard, formData, handleInputChange } = useInputCard();

    // Calculate the total cash based on the CR values in formData
    const totalCash = formData.reduce((total, data) => {
        const crValue = parseFloat(data.challengeRating); // Parse the CR value to ensure numeric comparison
        const crData = CHALLANGE_RATINGS.find(cr => cr.value === crValue); // Find CR data from the array
        return total + (crData ? crData.reward : 0); // Add the reward if CR data is found, otherwise add 0
    }, 0); // Initialize total to 0

    return (
        <div style={CSS.MENU_CONTAINER_STYLES}>
            <div style={CSS.LEFT_SUBCONTAINER_STYLES}>
                <ItemDisplay items={generateLootItems(totalCash)} />
            </div>
            <div style={CSS.MENU_SUBCONTAINER_STYLES}>
                {[...Array(cardCount)].map((_, index) => (
                    <InputCard
                        key={`index-${index}`}
                        index={index}
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleDeleteCard={() => handleDeleteCard(index)}
                    />
                ))}
                <img
                    alt="add entry"
                    src="https://cdn-icons-png.flaticon.com/512/262/262038.png"
                    style={CSS.ICON}
                    onClick={handleAddCard}
                />
            </div>
        </div>
    );
};

export default InputMenu;