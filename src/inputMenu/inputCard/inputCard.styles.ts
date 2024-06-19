// Styled component for the form container
import { BODY_COLOR, MIDGROUND_COLOR } from "../../consts/staticConsts";
import { styled } from "styled-components";

const CURVED_BORDER_RADIUS = "2px";

const WIDTH = 10;

const Label = styled.label`
  display: flex;
  font-weight: 500;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 14px;
  margin: 2px 0 2px 0;
  width: 100%;
`;

const Input = styled.input<{ 
  isMobile: boolean,
  isChallengeRating?: boolean,
  isCivilian?: boolean,
  isName?: boolean
}>`
  display: inline-block;
  padding: 8px;
  margin: 0;
  font-size: 18px;
  border: 2px solid ${MIDGROUND_COLOR};
  border-radius: ${CURVED_BORDER_RADIUS};
  max-width: ${({ isChallengeRating }) => (isChallengeRating ? '20rem' : '90rem')};
  min-height: 24px; // Be cautious, this controls the even spacing on the boxes.
  ${({ isCivilian }) => isCivilian && `
    width: 42px;
    height: 42px;
    min-width: 0;
  `}
  ${({ isName, isMobile }) => isName && isMobile && `
    width: 8rem;
  `}
`;

const SelectInput = styled.select<{ isMobile: boolean }>`
  display: inline-block;
  padding: 8px;
  margin: 0;
  font-size: 18px;
  border: 2px solid ${MIDGROUND_COLOR};
  border-radius: ${CURVED_BORDER_RADIUS};
  min-width: ${({ isMobile }) => (isMobile ? `${WIDTH * 1.08}px` : `${WIDTH}px`)};
`;

const InputWrapper = styled.div<{ isMobile: boolean}>`
  display: flex;
  flex-direction: column;
  margin: 2px;
  align-items: flex-start;
  
  ${({ isMobile }) => isMobile ? `
    border-radius: 5px;
  ` : `
    padding: 0 2px;
  `}
`;

const FormContainer = styled.div<{ isMobile: boolean }>`
  background-color: ${BODY_COLOR};
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding: ${({ isMobile }) => (isMobile ? '8px 16px' : '6px 12px')};

  ${({ isMobile }) => isMobile && `
    margin: 5px;
    align-items: flex-end;
  `}
`;

const IconImage = styled.img<{ isMobile: boolean }>`
  align-items: center;
  display: ${({ isMobile }) => (isMobile ? 'flex' : 'none')};;
  width: 2rem;
  height: 2rem;
  margin: 1.2rem 0 0.5rem 0.5rem;
  cursor: pointer;
`;

export {
  Label,
  SelectInput,
  Input,
  InputWrapper,
  FormContainer,
  IconImage,
};
