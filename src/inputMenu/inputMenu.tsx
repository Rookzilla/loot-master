import React, { useState } from 'react';
import InputCard from './inputCard/inputCard';
import * as S from './inputMenu.styles';
import useInputCard from './inputCard/useInputCard';
import ItemDisplay from './itemDisplay/itemDisplay';
import { generateLootItems, calcCostReal } from './itemDisplay/itemDisplay.util';
import getImageFromCdn from '../util/cdn';
import { HANDHELD_SCREEN_WIDTH } from '../consts/staticConsts';

interface DisplayDataItem {
    creatureName: string | undefined;
    creatureType: string;
    challengeRating: string;
    civilian: boolean;
    loot: any[];
}

const InputMenu: React.FC = () => {
    const {
        cardCount,
        handleAddCard,
        handleDeleteCard,
        formData,
        handleInputChange,
        data: items,
    } = useInputCard();

    const [displayData, setDisplayData] = useState<DisplayDataItem[]>([]);
    const isMobile = window.innerWidth <= HANDHELD_SCREEN_WIDTH;

    const handleSave = () => {
        const newDisplayData: DisplayDataItem[] = formData.map(data => ({
            creatureName: data.creatureName,
            creatureType: data.creatureType,
            challengeRating: data.challengeRating,
            civilian: data.civilian,
            loot: generateLootItems(calcCostReal(data.challengeRating), data.creatureType, data.civilian, items)
        }));
        setDisplayData(newDisplayData);
    };

    return (
        <S.Menu isMobile={isMobile}>
            { displayData.length > 0 && 
                <S.LeftSubcontainer>
                    {displayData.map((data, index) => (
                        <React.Fragment key={`displayData-${index}`}>
                            <S.BasicSubContainer>
                                <p style={S.NPC_TITLE}>{data.creatureName ?? `NPC ${index + 1}`}</p>
                            </S.BasicSubContainer>
                            <ItemDisplay items={data.loot} />
                        </React.Fragment>
                    ))}
                </S.LeftSubcontainer>
            }
            <S.SubContainer isMobile={isMobile}>
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
                    {isMobile &&
                        <S.Icon
                            alt="delete entry"
                            src={getImageFromCdn("delete-black.png")}
                            onClick={() => handleDeleteCard(1)}
                        />
                    }
                    <S.Icon
                        alt="add entry"
                        src={getImageFromCdn("plus-black.png")}
                        onClick={handleAddCard}
                    />
                    <S.Icon
                        alt="save"
                        src={getImageFromCdn("save-black.png")}
                        onClick={handleSave}
                    />
                </S.OptionsMenu>
            </S.SubContainer>
        </S.Menu>
    );
};

export default InputMenu;
