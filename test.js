const x = 3;
let y = 4; 

function update(arg) 
{ return Math.random() + y * arg; } 

y = 4;
y = Math.round((6 - Math.random(y))/x); 
console.log(y)

// y = (6 - Math.random()) / x; // Adjusting y to ensure the result is between 6 and 7
const result = update(x);

console.log(result)


