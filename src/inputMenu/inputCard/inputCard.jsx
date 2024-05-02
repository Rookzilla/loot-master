import * as CSS from './inputCard.styles.js';
import React from 'react';
import { creatureOptions } from './inputCard.consts.jsx';

const InputCard = ({ index, formData, handleDeleteCard, handleInputChange }) => {
  const {
    challengeRating,
  } = formData;

  const handleChange = (fieldName, value) => {
    handleInputChange(index, fieldName, value);
};

  return (
    <div
      key={`inputCard-${index}`}
      style={CSS.FORM_CONTAINER_STYLES}
    >
      <div className={`creatureType-${index}`} style={CSS.STYLED_INPUT_WRAPPER}>
        <label style={CSS.LABEL} htmlFor={`creatureType${index}`}>
          Type:
        </label>
        <select style={CSS.INPUT} id={`creatureType${index}`} name={`creatureType${index}`}>
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
          placeholder='1'
          min="0"
          max="20"
          value={challengeRating}
          onChange={(e) => handleChange('challengeRating', e.target.value)}
        />
      </div>

      <div className={`civilianFlag-${index}`} style={CSS.STYLED_INPUT_WRAPPER}>
        <label style={CSS.LABEL} htmlFor={`citizen${index}`}>
          Civilian:
        </label>
        <input style={CSS.CHECKBOX} type="checkbox" id={`citizen${index}`} name={`citizen${index}`} />
      </div>

      {index !== 0 && (
        <img
          alt="delete entry"
          src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
          style={CSS.ICON}
          onClick={() => handleDeleteCard()}
        />
      )}

    </div>
  );
};

export default InputCard;
