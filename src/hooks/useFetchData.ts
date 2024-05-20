// src/hooks/useFetchData.ts
import { useState, useEffect } from 'react';
import { fetchData } from '../api/api';

export const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  return { data, loading, error };
};