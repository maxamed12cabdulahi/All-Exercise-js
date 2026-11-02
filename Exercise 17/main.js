

let temperature = 0; 

if (temperature < 0) {
    console.log("it's very cold.");
} else if (temperature >= 0 && temperature < 15) {
    console.log("it's cold.");
} else if (temperature >= 15 && temperature <= 25) {
    console.log("it's warm.");
}   
 else {
    console.log("it's hot.");
}