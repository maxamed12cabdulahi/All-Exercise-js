
function delayNonBlocking() {
    alert("This is a blocking delay.");
    return "blocking delay completed!";
}

console.log("this is blocking delay... ");
// console.log(delayBlocking());
console.log("This message is blocked until the delay is complete.");




function setTimeout(callback) {
   setTimeout(() => {
    callback("Non-blocking delay completed!");
  }, 5000);
}

console.log("non-blocking delay completed!");
delayNonBlocking((message) => {
    console.log(message);
});
console.log("This message is not blocked and runs immediately.");