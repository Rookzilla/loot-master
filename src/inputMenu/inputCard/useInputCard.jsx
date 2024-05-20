import { useState, useCallback, useEffect } from 'react';
import { fetchData } from '../../api/api';


const useInputCard = () => {
    const [cardCount, setCardCount] = useState(1);
    const [formData, setFormData] = useState([]);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDataAsync = async () => {
        try {
            const result = await fetchData();
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        };

        fetchDataAsync();
    }, []);

    const handleAddCard = useCallback(() => {
        setCardCount(prevCount => prevCount + 1);
        // Add an empty form data object for the new card
        setFormData(prevFormData => [
            ...prevFormData, 
            { creatureType: '', challengeRating: '', civilian: false }
        ]);
    }, []);

    const handleDeleteCard = useCallback((index) => {
        if (index === 0) {
            return;
        }
        setFormData(prevFormData => prevFormData.filter((_, i) => i !== index));
        setCardCount(prevCount => prevCount - 1 < 1 ? 1 : prevCount - 1);
    }, []);

    const handleInputChange = useCallback((index, fieldName, value) => {
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
    }, []);

    const handleSave = useCallback(() => {
        const savedData = formData;
        return savedData;
    }, [formData]);

    return {
        cardCount,
        formData,
        handleAddCard,
        handleDeleteCard,
        handleInputChange,
        handleSave,
        data,
        loading,
        error,
}
}
export default useInputCard;