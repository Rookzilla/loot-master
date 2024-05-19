import { useState } from 'react';

const useInputComponent = () => {
    const [formData, setFormData] = useState([{}]);

    
    const handleInputChange = (index, fieldname, value) => {
        setFormData(prevFormData => {
            const updatedData = [...prevFormData];
            updatedData[index] = {
                ...updatedData[index],
                [fieldname]: value
            };
            return updatedData;
        })
    }

    const handleDeleteInput = (index) => {
        setFormData(prevFormData => prevFormData.filter((i) => i !== index));
    }

    const handleAddInput = () => {
        setFormData(prevFormData => [...prevFormData, {value: ''}]);
    }

    return {
        formData,
        handleInputChange,
        handleDeleteInput,
        handleAddInput,
    }
}

export default useInputComponent;