import React from 'react';
import InputComponent from './inputComponent';
import useInputComponent from './useInputComponent';

const Menu = () => {
    const { handleAddInput, handleDeleteInput, handleInputChange, formData} = useInputComponent();
    return (
        <div>
            {formData && formData.map(( _, index) => (
            <InputComponent
                formData={formData}
                index={index}
                handleInputChange={handleInputChange}
            />
        ))}
        </div>
    )
}

export default Menu