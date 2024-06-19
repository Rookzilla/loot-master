import React, { useMemo, useCallback } from 'react';
import * as S from './inputCard.styles';
import { creatureOptions } from './inputCard.consts';
import getImageFromCdn from '../../util/cdn';

const InputCard = ({ index, formData, handleDeleteCard, handleInputChange }) => {

    const isMobile = useMemo(() => window.innerWidth <= 768, []);

    const handleInputChangeMemoized = useCallback(
        (field, value) => handleInputChange(index, field, value),
        [handleInputChange, index]
    );

    const inputCardJSX = useMemo(() => (
        <S.FormContainer 
        key={`inputCard-${index}`}
        isMobile={isMobile}>
            <S.InputWrapper
            isMobile={isMobile}
            className={`creatureName-${index}`}>
                <S.Label htmlFor={`creatureName${index}`}>
                    Name:
                </S.Label>
                <S.Input
                    isMobile={isMobile}
                    isName
                    type="text"
                    id={`creatureName${index}`}
                    name={`creatureName${index}`}
                    value={formData.creatureName}
                    onChange={(e) => handleInputChangeMemoized('creatureName', e.target.value)}
                />
            </S.InputWrapper>
            <S.InputWrapper 
            isMobile={isMobile}
            className={`creatureType-${index}`}>
                <S.Label htmlFor={`creatureType${index}`}>Type:</S.Label>
                <S.SelectInput 
                    isMobile={isMobile}
                    id={`creatureType${index}`}
                    name={`creatureType${index}`}
                    value={formData.creatureType}
                    onChange={(e) => handleInputChangeMemoized('creatureType', e.target.value)}
                >
                    {creatureOptions}
                </S.SelectInput >
            </S.InputWrapper>
            <S.InputWrapper 
            isMobile={isMobile}
            className={`civilianFlag-${index}`}>
                <S.Label>
                    Civilian:
                </S.Label>
                <S.Input
                    isMobile={isMobile}
                    isCivilian
                    type="checkbox" 
                    id={`civilian${index}`} 
                    name={`civilian${index}`}
                    checked={formData.civilian}
                    onChange={(e) => handleInputChangeMemoized('civilian', e.target.checked)} 
                />
            </S.InputWrapper>
            <S.InputWrapper 
            isMobile={isMobile}
            className={`challangeRating-${index}`}>
                <S.Label 
                htmlFor={`challengeRating${index}`}>Challenge Rating:
                </S.Label>
                <S.Input
                    isMobile={isMobile}
                    isChallengeRating
                    type="number"
                    id={`challengeRating${index}`}
                    name={`challengeRating${index}`}
                    min="0"
                    max="20"
                    value={formData.challengeRating}
                    onChange={(e) => handleInputChangeMemoized('challengeRating', e.target.value)}
                />
            </S.InputWrapper>
            <S.IconImage
                isMobile={!isMobile}
                alt="delete entry"
                src={getImageFromCdn("bin.png")}
                onClick={() => handleDeleteCard()}
            />
        </S.FormContainer>
    ), [index, formData, handleDeleteCard, handleInputChangeMemoized, isMobile]);

    // Only recalc when dependencies change for optimisation.
    return isMobile ? inputCardJSX : <>{inputCardJSX}</>;
};

export default InputCard;