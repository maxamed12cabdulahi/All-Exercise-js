
    console.log("properties and value of each person:")



const people = [
    { name: "alice",   Age: 25, city: "mogadishu" },
    { name: "Bob",     Age: 30, city: "Builderland" },
    { name: "Charlie", Age: 35, city: "Afgooye" },
];

for (const person of people) {
  

    for (const key in person) {
        console.log(key + ": " + person[key]);
    }

    console.log("---");
}