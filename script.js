let hobby = "playing my guitar";
let hoursPerWeek = 3;
let funLevel = "very fun";

console.log(hobby);
console.log(hoursPerWeek);
console.log(funLevel);

console.log(typeof hobby);
console.log(typeof hoursPerWeek);
console.log(typeof funLevel);

console.log(`My favorite hobby is ${hobby}.`);
console.log(`I spend about ${hoursPerWeek} hours per week playing it.`);
console.log(`I think it's ${funLevel}!`);

document.getElementById("title").textContent = "My Favorite Hobby";
document.getElementById("description").textContent = `I love ${hobby} and spend about ${hoursPerWeek} hours per week playing it. I think it's ${funLevel}!`;
