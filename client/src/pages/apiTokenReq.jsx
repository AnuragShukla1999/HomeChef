import React from 'react'

const apiTokenReq = () => {
    const your_token = 'your_actual_token'; // Replace this with the actual token received after login

    function fetchDataFromAPI() {
        fetch('http://localhost:5000/api/checkUser', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${your_token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => {
                // Process the data received from the API
                console.log(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Call the function to make the API request
    fetchDataFromAPI();
    return (
        <div>apiTokenReq</div>
    )
}

export default apiTokenReq