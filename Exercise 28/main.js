
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


async function fetchUserDataAsync() {
    try {
        const userData = await fetchUserData();
        console.log('User Data:',);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

fetchUserDataAsync();