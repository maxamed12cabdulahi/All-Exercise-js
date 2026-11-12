

async function fetchData() {
    console.log("Fetching data...");


    const response = await fetch("data.json");

    const data = await response.json("https://jsonplaceholder.typicode.com/posts")

    console.log("Fetched data:", data);
    
    console.log("Data fetching completed.");
}
fetchData();
console.log("this message runs immediately after fetchData() is called, not after the data is fetched.");