import { useState } from 'react';

const useInputCard = () => {
    const [cardCount, setCardCount] = useState(1);
    const [formData, setFormData] = useState([]);

    const handleAddCard = () => {
        setCardCount(prevCount => prevCount + 1);
        // Add an empty form data object for the new card
        setFormData(prevFormData => [...prevFormData, { creatureType: '', challengeRating: '', civilian: false }]);
    };

    const handleDeleteCard = (index) => {
        // Remove the form data object for the deleted card
        // if the index is 0, do not allow a deletion
        if (index === 0) {
            return;
        }
        setFormData(prevFormData => prevFormData.filter((_, i) => i !== index));
        setCardCount(prevCount => prevCount - 1 < 1 ? 1 : prevCount - 1);
    };

    const handleInputChange = (index, fieldName, value) => {
        if (fieldName === "challengeRating") {
            const tempVal = parseInt(value);
            if (isNaN(tempVal)) {
                value = "1";
            }
            if (tempVal > 20) {
                value = "20";
            }
            if (tempVal < 1) {
                value = "1";
            }
        }
        // Update the form data for the specific input field
        setFormData(prevFormData => {
            const updatedFormData = [...prevFormData];
            updatedFormData[index] = {
                ...updatedFormData[index],
                [fieldName]: value
            };
            return updatedFormData;
        });
    };

    const handleSave = () => {
        const savedData = formData
        return savedData
    };

    return {
        cardCount,
        formData,
        handleAddCard,
        handleDeleteCard,
        handleInputChange,
        handleSave,
}
}
export default useInputCard;