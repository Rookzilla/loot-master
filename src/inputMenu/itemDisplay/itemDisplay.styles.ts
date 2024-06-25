import { BODY_COLOR } from "../../consts/staticConsts";
import { styled } from "styled-components";

const Container = styled.div`
    background-color: #8C7870;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: center;
    align-content: center;
    font-size: 12px;
    padding: 10px;
`;

const ItemStyles = styled.div`
    background-color: ${BODY_COLOR};
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    margin: 0 4px 4px 4px;
    width: 100%;
    border: 2px solid #d9d4c3;
`;

const StatsAndDescription = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Stats = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const IconStylesWrapper = styled.div`
    align-items: center;
    align-content: center;
    width: 20px;
    height: 20px;
    margin: 6px 0 6px 6px;
    border-radius: 20px;
    border: 2px solid #d9d4c3;
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

const Icon = styled.img`
    width: 16px;
    height: 16px;
`;

const ItemDetails = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const Item = styled.p<{ 
    isMobile: boolean,
  }>`
  padding-left: 10px;
  
  ${({ isMobile }) => isMobile ? `
    margin: 0;
    max-width: 80px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 70px,
` : `
    margin: 10px,
    width: 140px,
`}
`;

const DescriptionWrapper = styled.div`
    width: 0;
`;

const InfoIcon = styled.img`
    width: 20px;
    height: 20px;
    position: relative;
    top: 2px;
    left: 50px;
`;

const Price = styled.p`
    margin: 8px;
    width: 60px;
`;

const Weight = styled.p`
    margin: 8px;
    width: 40px;
`;

const DeleteButton = styled.img`
    width: 16px;
    height: 16px;
    margin: 0 10px 0 0;
`;

const Description = styled.div`
    padding: 0 0 10px 40px;
    max-width: 220px;
    font-size: 10px;
`;

const Effect = styled.div`
    padding: 0 0 10px 40px;
    max-width: 220px;
    font-size: 10px;
    font-weight: 900;
`;

const ItemAndIcon = styled.div`
  display: flex;
  align-items: center;
`

export {
    Container,
    ItemStyles,
    StatsAndDescription,
    Stats,
    IconStylesWrapper,
    Icon,
    ItemDetails,
    Item,
    DescriptionWrapper,
    InfoIcon,
    Price,
    Weight,
    DeleteButton,
    Description,
    Effect,
    ItemAndIcon,
};
