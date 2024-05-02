import React from 'react';
import * as CSS from './itemDisplay.styles.js';

const ItemDisplay = ({ items }) => {

    return (
        
    <div style={CSS.CONTAINER_STYLES}>
            {items.map((item, index) => (
                <div key={index} style={CSS.ITEM_STYLES}>
                    <img src="icon.png" alt="Item Icon" style={CSS.ICON_STYLES} />
                    <div style={CSS.ITEM_DETAILS_STYLES}>
                        <p style={CSS.ITEM}>{item.name}</p>
                        <p style={CSS.PRICE}>{item.value}</p>
                        <p style={CSS.WEIGHT}>{item.weight}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemDisplay;