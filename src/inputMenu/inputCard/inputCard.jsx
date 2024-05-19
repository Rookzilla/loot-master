import React from 'react';
import * as CSS from './inputCard.styles.js';
import { creatureOptions } from './inputCard.consts.jsx';

const InputCard = ({ index, formData, handleDeleteCard, handleInputChange }) => {

    const isMobile = window.innerWidth <= 768;
    
    return (
        !isMobile ? 
        <div key={`inputCard-${index}`} style={CSS.FORM_CONTAINER_STYLES}>

            <div className={`creatureName-${index}`} style={CSS.STYLED_INPUT_WRAPPER}>
                <label style={CSS.LABEL} htmlFor={`creatureName${index}`}>
                    Name:
                </label>
                <input
                    style={CSS.INPUT}
                    type="text"
                    id={`creatureName${index}`}
                    name={`creatureName${index}`}
                    value={formData.creatureName}
                    onChange={(e) => handleInputChange(index, 'creatureName', e.target.value)}
                />
            </div>

            <div className={`creatureType-${index}`} style={CSS.STYLED_INPUT_WRAPPER}>
                <label style={CSS.LABEL} htmlFor={`creatureType${index}`}>
                    Type:
                </label>
                <select 
                    style={CSS.SELECT}
                    id={`creatureType${index}`}
                    name={`creatureType${index}`}
                    value={formData.creatureType}
                    onChange={(e) => handleInputChange(index, 'creatureType', e.target.value)}
                >
                    {creatureOptions}
                </select>
            </div>

            <div className={`challangeRating-${index}`} style={CSS.STYLED_INPUT_WRAPPER}>
                <label style={CSS.LABEL} htmlFor={`challengeRating${index}`}>
                    CR:
                </label>
                <input
                    style={CSS.INPUT}
                    type="number"
                    id={`challengeRating${index}`}
                    name={`challengeRating${index}`}
                    min="0"
                    max="20"
                    value={formData.challengeRating}
                    onChange={(e) => handleInputChange(index, 'challengeRating', e.target.value)}
                />
            </div>
            
            <div className={`civilianFlag-${index}`} style={CSS.STYLED_INPUT_WRAPPER}>
                <label 
                    style={CSS.LABEL}
                >
                    Civilian:
                </label>
                <input 
                
                    style={CSS.CHECKBOX} 
                    type="checkbox" 
                    id={`civilian${index}`} 
                    name={`civilian${index}`}
                    checked={
                        // if creature is humanoid & a civilian, check the checkbox, otherwise, uncheck it
                        formData.civilian
                    }
                    onChange={(e) => handleInputChange(index, 'civilian', e.target.checked)} 
                />
            </div>

            <img
                    alt="delete entry"
                    src="bin.png"
                    style={CSS.ICON}
                    onClick={() => handleDeleteCard()}
                />
        </div>
    : // ------------------------------ MOBILE APP

    <div style={CSS.MOBILE_FORM_CONTAINER_STYLES}>
        <div className={`creatureName-${index}`} style={CSS.MOBILE_STYLED_INPUT_WRAPPER}>
                        <label style={CSS.LABEL} htmlFor={`creatureName${index}`}>
                            Name:
                        </label>
                        <input
                            style={CSS.MOBILE_INPUT}
                            type="text"
                            id={`creatureName${index}`}
                            name={`creatureName${index}`}
                            value={formData.creatureName}
                            onChange={(e) => handleInputChange(index, 'creatureName', e.target.value)}
                        />
                    </div>

                    <div className={`creatureType-${index}`} style={CSS.MOBILE_STYLED_INPUT_WRAPPER}>
                        <label style={CSS.LABEL} htmlFor={`creatureType${index}`}>
                            Type:
                        </label>
                        <select 
                            style={CSS.MOBILE_SELECT_INPUT}
                            id={`creatureType${index}`}
                            name={`creatureType${index}`}
                            value={formData.creatureType}
                            onChange={(e) => handleInputChange(index, 'creatureType', e.target.value)}
                        >
                            {creatureOptions}
                        </select>
                    </div>

                    <div className={`challangeRating-${index}`} style={CSS.MOBILE_STYLED_INPUT_WRAPPER}>
                        <label style={CSS.LABEL} htmlFor={`challengeRating${index}`}>
                            Challange Rating:
                        </label>
                        <input
                            style={CSS.MOBILE_INPUT}
                            type="number"
                            id={`challengeRating${index}`}
                            name={`challengeRating${index}`}
                            min="0"
                            max="20"
                            value={formData.challengeRating}
                            onChange={(e) => handleInputChange(index, 'challengeRating', e.target.value)}
                        />
                    </div>

                        <div className={`civilianFlag-${index}`} style={CSS.MOBILE_STYLED_INPUT_WRAPPER}>
                            <label 
                                style={CSS.LABEL}
                            >
                                Civilian:
                            </label>
                            <input 
                            
                                style={CSS.MOBILE_CHECKBOX} 
                                type="checkbox" 
                                id={`civilian${index}`} 
                                name={`civilian${index}`}
                                checked={
                                    // if creature is humanoid & a civilian, check the checkbox, otherwise, uncheck it
                                    formData.civilian
                                }
                                onChange={(e) => handleInputChange(index, 'civilian', e.target.checked)} 
                            />
                        </div>

                        
    </div>

);
};

export default InputCard;