//Understanding Variables, Scope, and Hoisting in JavaScript
// Assign the string value Sammy to the username identifier
var username = "sammy_shark";
// Check if variable is equal to value
if (username === "sammy_shark") {
    console.log(true);
  }
  // Assignment of various variables
var name = "Sammy";
var spartans = 300;
var kingdoms = [ "mammals", "birds", "fish" ];
var poem = { roses: "red", violets: "blue" }; 
var success = true;
var nothing = null;
// Send spartans variable to the console
console.log(spartans);

// Assign value to password variable
var password = "hunter2";

// Reassign variable value with a new value
password = "hunter3";

console.log(password);

// Initialize a global variable
var creature = "wolf";
// Initialize a global variable
var species = "human";
 
function transform() {
  // Initialize a local, function-scoped variable
  var species = "werewolf";
  console.log(species);
}

// Log the global and local variable
console.log(species);
transform();
console.log(species);

var fullMoon = true;


if (fullMoon) {
  // Initialize a block-scoped variable
  let species = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${species}.`);
}

console.log(`It is not a full moon. Lupin is currently a ${species}.`);

// Use var to initialize a variable
var species = "human";

if (fullMoon) {
  // Attempt to create a new variable in a block
  var species = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${species}.`);
}

console.log(`It is not a full moon. Lupin is currently a ${species}.`);

// Attempt to use a variable before declaring it
console.log(x);

// Variable assignment
var x = 100;

// The code we wrote
console.log(x);
var x = 100;

// How JavaScript interpreted it
var x;
console.log(x);
x = 100;

// Initialize x in the global scope
var x = 100;

function hoist() {
  // A condition that should not affect the outcome of the code
  if (false) {
    var x = 200;
  }
  console.log(x);
}

hoist();
// Attempt to overwrite a variable declared with var
var x = 1;
var x = 2;

console.log(x);

// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();
const note = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
  }
  // Destructure nested items
const [one, two, [three, four], five] = nestedArray

console.log(one, two, three, four, five)

// Define three example functions, but one of them contains asynchronous code
function first() {
    console.log(1)
  }
  
  function second() {
    setTimeout(() => {
      console.log(2)
    }, 0)
  }
  
  function third() {
    console.log(3)
  }