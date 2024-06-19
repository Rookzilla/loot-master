import { API_ENDPOINT } from "../consts/staticConsts";

export const fetchData = () => {
  return new Promise((resolve, reject) => {
      // Fetch data from the API endpoint
      fetch(
        API_ENDPOINT, 
        {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        resolve(data); // Resolve with data if successful
      })
      .catch(error => {
        reject(error.message); // Reject with error message if something goes wrong
      });
  });
};