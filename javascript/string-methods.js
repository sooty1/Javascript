// new string()
let city = new String('london');
console.log(city);

//String Literal 
let movie = 'Memento';
console.log(movie);

//to UpperCase Method
console.log(movie.toUpperCase());

//to lowercase Method

console.log(movie.toLowerCase())

//concatanation to join 2 strings 

// let name = 'Tony';
// let lastName = "rogers";
// console.log(name +" " + lastName);

// using a string template literal can only past variables
let firstName = 'Tony';
let lastName = "Rogers";
console.log(`${firstName} ${lastName}`)

//length  property

console.log(firstName.length);
console.log(lastName.length);

//Finding the Index of strings
let pet = 'Birdy the Brid';
console.log(pet[2]);
console.log(pet[pet.length-1] );  //last index

// trim method   gets rid of space from front and end
let song = '              shallow        ';
console.log(song.trim());


// indexOf method  grabs the index of the parameter

console.log(pet.indexOf('y'));

//charAt method     grabs the letter of the index provide 
console.log(pet.charAt('4'));

// Slice method    slice our string from the front  
console.log(pet.slice(4));
console.log(pet.slice(4, 10)); // shows from to indexes

// split method 

console.log(pet.split(' '));

// includes method   checked if a string has something in Boolean 
console.log(pet.includes("y"));

//replace method 
console.log(pet.replace("y", "I"));