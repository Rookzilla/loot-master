import React, { useMemo, useCallback } from 'react';
import * as CSS from './inputCard.styles.js';
import { creatureOptions } from './inputCard.consts.jsx';

const InputCard = ({ index, formData, handleDeleteCard, handleInputChange }) => {

    const isMobile = useMemo(() => window.innerWidth <= 768, []);

    const handleInputChangeMemoized = useCallback(
        (field, value) => handleInputChange(index, field, value),
        [handleInputChange, index]
    );

    const inputCardJSX = useMemo(() => (
        <div key={`inputCard-${index}`} style={isMobile ? CSS.MOBILE_FORM_CONTAINER_STYLES : CSS.FORM_CONTAINER_STYLES}>
            <div className={`creatureName-${index}`} style={isMobile ? CSS.MOBILE_STYLED_INPUT_WRAPPER : CSS.STYLED_INPUT_WRAPPER}>
                <label style={CSS.LABEL} htmlFor={`creatureName${index}`}>
                    Name:
                </label>
                <input
                    style={isMobile ? CSS.MOBILE_INPUT : CSS.INPUT}
                    type="text"
                    id={`creatureName${index}`}
                    name={`creatureName${index}`}
                    value={formData.creatureName}
                    onChange={(e) => handleInputChangeMemoized('creatureName', e.target.value)}
                />
            </div>
            <div className={`creatureType-${index}`} style={isMobile ? CSS.MOBILE_STYLED_INPUT_WRAPPER : CSS.STYLED_INPUT_WRAPPER}>
                <label style={CSS.LABEL} htmlFor={`creatureType${index}`}>
                    Type:
                </label>
                <select 
                    style={isMobile ? CSS.MOBILE_SELECT_INPUT : CSS.SELECT}
                    id={`creatureType${index}`}
                    name={`creatureType${index}`}
                    value={formData.creatureType}
                    onChange={(e) => handleInputChangeMemoized('creatureType', e.target.value)}
                >
                    {creatureOptions}
                </select>
            </div>
            <div className={`challangeRating-${index}`} style={isMobile ? CSS.MOBILE_STYLED_INPUT_WRAPPER : CSS.STYLED_INPUT_WRAPPER}>
                <label style={CSS.LABEL} htmlFor={`challengeRating${index}`}>
                    CR:
                </label>
                <input
                    style={isMobile ? CSS.MOBILE_INPUT : CSS.INPUT}
                    type="number"
                    id={`challengeRating${index}`}
                    name={`challengeRating${index}`}
                    min="0"
                    max="20"
                    value={formData.challengeRating}
                    onChange={(e) => handleInputChangeMemoized('challengeRating', e.target.value)}
                />
            </div>
            <div className={`civilianFlag-${index}`} style={isMobile ? CSS.MOBILE_STYLED_INPUT_WRAPPER : CSS.STYLED_INPUT_WRAPPER}>
                <label 
                    style={CSS.LABEL}
                >
                    Civilian:
                </label>
                <input 
                    style={isMobile ? CSS.MOBILE_CHECKBOX : CSS.CHECKBOX} 
                    type="checkbox" 
                    id={`civilian${index}`} 
                    name={`civilian${index}`}
                    checked={formData.civilian}
                    onChange={(e) => handleInputChangeMemoized('civilian', e.target.checked)} 
                />
            </div>
            <img
                alt="delete entry"
                src="bin.png"
                style={CSS.ICON}
                onClick={() => handleDeleteCard()}
            />
        </div>
    ), [index, formData, handleDeleteCard, handleInputChangeMemoized, isMobile]);

    // Only recalc when dependencies change for optimisation.
    return isMobile ? inputCardJSX : <>{inputCardJSX}</>;
};

export default InputCard;