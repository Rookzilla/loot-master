import React, { useState } from 'react';
import InputCard from './inputCard/inputCard';
import * as CSS from './inputMenu.styles.js';
import useInputCard from './inputCard/useInputCard.jsx';
import ItemDisplay from './itemDisplay/itemDisplay';
import { generateLootItems, calcCostReal } from './itemDisplay/itemDisplay.util.js';

const InputMenu = () => {
    const { cardCount, handleAddCard, handleDeleteCard, formData, handleInputChange } = useInputCard();
    const [displayData, setDisplayData] = useState([]);
    const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

    const handleSave = () => {
        setDisplayData(formData.map((data) => {
            // Create a new object with the creatureName, creatureType, challengeRating, civilian, and loot properties
            return {
                creatureName: data.creatureName,
                creatureType: data.creatureType,
                challengeRating: data.challengeRating,
                civilian: data.civilian,
                loot: generateLootItems(calcCostReal(data.challengeRating), data.creatureType, data.civilian)
            };
        }));
        
    };

    return (
        <div style={isMobile ? CSS.MOBILE_MENU_STYLES : CSS.MENU_CONTAINER_STYLES}>
            { displayData.length > 0 && 
            <div style={CSS.LEFT_SUBCONTAINER_STYLES}>
                {[...Array(displayData.length)].map((_, index) => (
                    <>
                    <div style={CSS.BASIC_SUB_CONTAINER}>
                    <p key={`creatureName-${index}`} style={CSS.NPC_TITLE}>{displayData[index].creatureName ?? `NPC ${index + 1}`}</p>
                    </div>
                    <ItemDisplay items={displayData[index].loot} />
                    </>
                ))}
                
            </div>
            }
            <div style={isMobile? CSS.MOBILE_MENU_SUBCONTAINER_STYLES : CSS.MENU_SUBCONTAINER_STYLES}>
                {[...Array(cardCount)].map((_, index) => (
                    <InputCard
                        key={`index-${index}`}
                        index={index}
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleDeleteCard={() => handleDeleteCard(index)}
                    />
                ))}
                <div style={CSS.OPTIONS_MENU}>
                {isMobile && // delete entry
                <img
                    alt="delete entry"
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    style={CSS.ICON}
                    onClick={() => handleDeleteCard(1)}
                />
                }
                <img
                    alt="add entry"
                    src="https://cdn-icons-png.flaticon.com/512/262/262038.png"
                    style={CSS.ICON}
                    onClick={handleAddCard}
                />
                <img
                    alt="save"
                    src="https://cdn-icons-png.flaticon.com/512/1004/1004781.png"
                    style={CSS.ICON}
                    onClick={handleSave}
                />
                </div>
            </div>
        </div>
    );
};

export default InputMenu;