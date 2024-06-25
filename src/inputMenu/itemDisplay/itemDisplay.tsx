import React, { useState, useMemo } from 'react';
import * as S from './itemDisplay.styles';
import { getCategoryColor } from './itemDisplay.util';
import getImageFromCdn from '../../util/cdn';

    const ItemDisplay = ({ items }) => {
    const isMobile = useMemo(() => window.innerWidth <= 768, []);    
    const [selectedItem, setSelectedItem] = useState(null);
    const handleItemClick = (index) => {
        setSelectedItem(index === selectedItem ? null : index);
    };
    const handleItemDelete = (index) => {
        items.splice(index, 1);
        setSelectedItem(null);
    };

    return (
        <S.Container>
            {items.length > 0 && items.map((item, index) => (
                <S.ItemStyles key={index} onClick={() => handleItemClick(index)} style={{border: `2px solid ${getCategoryColor(item.category)}`}}>
                    <S.StatsAndDescription>
                        <S.Stats>
                    <S.ItemAndIcon>
                    <S.IconStylesWrapper style={{border: `2px solid ${getCategoryColor(item.category)}`, background: getCategoryColor(item.category)}}> 
                        <S.Icon src={getImageFromCdn(`${item.category}.png`)} alt="Item Icon" />
                    </S.IconStylesWrapper>
                    <S.Item isMobile={isMobile} id={`item-${index}`}>{item.name}</S.Item>
                    </S.ItemAndIcon>
                    <S.ItemDetails>
                        <S.DescriptionWrapper> 
                            {item.description && <S.InfoIcon alt='info-icon' src={getImageFromCdn('info.png')}/>}
                        </S.DescriptionWrapper>
                        <S.Price>{item.cost}</S.Price>
                        <S.Weight>{item.weight}</S.Weight>
                        <S.DeleteButton alt='delete-icon' src={getImageFromCdn('bin.png')} onClick={() => handleItemDelete(index)}/>
                    </S.ItemDetails>
                    </S.Stats>
                    {selectedItem === index && (
                        <>
                        {item.description && <S.Description>{item.description}</S.Description>}
                        {item.effect && <S.Effect>{ item.effect}</S.Effect>}
                        </>
                    )}
                    </S.StatsAndDescription>
                    
                </S.ItemStyles>
            ))}
        </S.Container>
    );
};

export default ItemDisplay;