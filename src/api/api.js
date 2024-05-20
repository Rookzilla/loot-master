import { API_ENDPOINT } from "../consts/staticConsts";
import { ITEMS }  from "../consts/staticConsts";
const isLocal = window.location.hostname === 'localhost';

export const fetchData = async () => {
  if (isLocal) {
    // Return local data when running locally
    return ITEMS;
  } else {
    // Fetch data from the API endpoint
    const response = await fetch(API_ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  }
};