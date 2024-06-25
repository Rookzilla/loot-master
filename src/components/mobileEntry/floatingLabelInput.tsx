import React, { useState, FocusEvent, ChangeEvent } from 'react';
import * as S from './floatingLabelInput.styles';

const FloatingLabelInput = ({ label, ...props }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    if (props.onFocus) props.onFocus(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    if (props.onBlur) props.onBlur(event);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (props.onChange) props.onChange(event);
  };

  return (
    <S.InputContainer>
      <S.Input
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      />
      <S.Label isFocused={focused} hasValue={!!value}>{label}</S.Label>
    </S.InputContainer>
  );
};

export default FloatingLabelInput;
