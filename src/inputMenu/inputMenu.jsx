import React, { useState } from 'react';
import InputCard from './inputCard/inputCard.jsx';
import * as S from './inputMenu.styles.js';
import useInputCard from './inputCard/useInputCard.jsx';
import ItemDisplay from './itemDisplay/itemDisplay.jsx';
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
        <div style={isMobile ? S.MOBILE_MENU_STYLES : S.MENU_CONTAINER_STYLES}>
            { displayData.length > 0 && 
            <S.LeftSubcontainer>
                {[...Array(displayData.length)].map((_, index) => (
                    <>
                    <S.BasicSubContainer>
                    <p key={`creatureName-${index}`} style={S.NPC_TITLE}>{displayData[index].creatureName ?? `NPC ${index + 1}`}</p>
                    </S.BasicSubContainer>
                    <ItemDisplay items={displayData[index].loot} />
                    </>
                ))}
            </S.LeftSubcontainer>
            }
            <div style={isMobile? S.MOBILE_MENU_SUBCONTAINER_STYLES : S.MENU_SUBCONTAINER_STYLES}>
                {[...Array(cardCount)].map((_, index) => (
                    <InputCard
                        key={`index-${index}`}
                        index={index}
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleDeleteCard={() => handleDeleteCard(index)}
                    />
                ))}
                <S.OptionsMenu>
                {isMobile && // delete entry
                <S.Icon
                    alt="delete entry"
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    onClick={() => handleDeleteCard(1)}
                />
                }
                <S.Icon
                    alt="add entry"
                    src="https://cdn-icons-png.flaticon.com/512/262/262038.png"
                    onClick={handleAddCard}
                />
                <S.Icon
                    alt="save"
                    src="https://cdn-icons-png.flaticon.com/512/1004/1004781.png"
                    onClick={handleSave}
                />
                </S.OptionsMenu>
            </div>
        </div>
    );
};

export default InputMenu;