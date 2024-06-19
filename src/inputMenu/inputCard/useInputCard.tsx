import { useState, useCallback, useEffect } from 'react';
import { fetchData } from '../../api/api';
import { FormDataItem } from './inputCard.types';

const useInputCard = () => {
    const [cardCount, setCardCount] = useState<number>(1);
    const [formData, setFormData] = useState<FormDataItem[]>([]);
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const result: any = await fetchData();
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
            { creatureName: '', creatureType: '', challengeRating: '', civilian: false }
        ]);
    }, []);

    const handleDeleteCard = useCallback((index: number) => {
        if (index === 0) {
            return;
        }
        setFormData(prevFormData => prevFormData.filter((_, i) => i !== index));
        setCardCount(prevCount => prevCount - 1 < 1 ? 1 : prevCount - 1);
    }, []);

    const handleInputChange = useCallback((index: number, fieldName: keyof FormDataItem, value: string | boolean) => {
        if (fieldName === "challengeRating") {
            const tempVal = parseInt(value as string);
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
    };
};

export default useInputCard;
