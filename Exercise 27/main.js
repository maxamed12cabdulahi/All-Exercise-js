
function fetchUserData() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if (success) {
                resolve({ id: 5, name: 'mc Hamuuda', age: 30 });
            } else {
                reject('Failed to fetch user data');
            }
        }, 2000);
    });
}

fetchUserData()
    .then(userData => {
        console.log('User Data:', userData);})
    .catch(error => {
        console.error('Error fetching user data:', error);});