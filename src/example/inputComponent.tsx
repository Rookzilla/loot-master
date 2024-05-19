import React, { ReactNode } from 'react';

interface InputComponentProps {
    formData: any;
    index: number;
    handleInputChange: (index: number, fieldName: string, value: string) => any;
}

const InputComponent = ({formData, index, handleInputChange} : InputComponentProps) => {

    return (
    <div>
        Input Component Test

        <input
        type="text"
        id={`exampleInput${index}`}
        value={formData.creatureName}
        onChange={(event) => handleInputChange(index, 'creatureName', event.target.value)}
        />
    </div>
    )
}
export default InputComponent