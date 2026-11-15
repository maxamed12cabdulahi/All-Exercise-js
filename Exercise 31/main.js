
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');{
            [ 
                {
                    "id": 2,
                    "name": "mcc",
                    "username": "mohamed",
                    "email": "mohamed@example.com"
                    
                }
            ]
        }
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();