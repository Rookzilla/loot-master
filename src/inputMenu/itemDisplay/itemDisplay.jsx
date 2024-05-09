import React, { useState } from 'react';
import * as CSS from './itemDisplay.styles.js';
import { getCategoryColor } from './itemDisplay.util.js';

    const ItemDisplay = ({ items }) => {

    const [selectedItem, setSelectedItem] = useState(null);
    const handleItemClick = (index) => {
        setSelectedItem(index === selectedItem ? null : index);
    };
    const handleItemDelete = (index) => {
        items.splice(index, 1);
        setSelectedItem(null);
    };

    return (
        <div style={CSS.CONTAINER_STYLES}>
            {items.length > 0 && items.map((item, index) => (
                
                <div key={index} onClick={() => handleItemClick(index)} style={{...CSS.ITEM_STYLES, border: `2px solid ${getCategoryColor(item.category)}`}}>
                    <div style={CSS.STATS_AND_DESCRIPTION}>
                        <div style={CSS.STATS}>
                    <div style={{...CSS.ICON_STYLES_WRAPPER, border: `2px solid ${getCategoryColor(item.category)}`, background: getCategoryColor(item.category)}}> 
                        <img src={`${item.category}.png`} alt="Item Icon" style={CSS.ICON_STYLES} />
                    </div>
                    <div style={CSS.ITEM_DETAILS_STYLES}>
                        <p style={CSS.ITEM}>{item.name}</p>
                        <div style={CSS.DESCRIPTION_WRAPPER}> 
                            {item.description && <img alt='info-icon' src={'info.png'} style={CSS.INFO_ICON_STYLES}/>}
                        </div>
                        <p style={CSS.PRICE}>{item.cost}</p>
                        <p style={CSS.WEIGHT}>{item.weight}</p>
                        <img alt='delete-icon' src={'bin.png'} style={CSS.DELETE_BUTTON} onClick={() => handleItemDelete(index)}/>
                    </div>
                    </div>
                    {selectedItem === index && (
                        <>
                        {item.description && <div style={CSS.DESCRIPTION_STYLES}>{item.description}</div>}
                        {item.effect && <div style={CSS.EFFECT_STYLES}>{ item.effect}</div>}
                        </>
                    )}
                    </div>
                    
                </div>
            ))}
        </div>
    );
};

export default ItemDisplay;