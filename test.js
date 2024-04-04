// 1. Problem 1 - (A) Create an Object with a "hello" method that writes "Hello <name> in the console"

// Define an object named 'person'
const person = {
    // Define a method named 'hello' within the object 'person'
    hello: function(name) {
        // Print a greeting message to the console with the provided name
        console.log("Hello " + name);
    }
};


person.hello("Paola"); // Test the output 
//Source: https://www.w3schools.com/js/js_objects.asp

//2. Problem 1 - (B)      How would you make name inmutable?
//We can achieve a read-only effect within the function using Template Literals
const person2 = {
    hello(name) {
      console.log(`Hello ${name}`); // Embed name directly in the template literal
    }
  };
  
  person2.hello("Paola"); // Output: Hello Alice
  
//Source: https://opensource.com/article/17/6/functional-javascript
//2-3. Problem 2 Write a funtion that logs the 5 cities that occur the most in the array below in order from the most number of occurrences to least.

// Define a function named 'findTopCities' which takes an array 'arr' as input
function findTopCities(arr) {
    // Create an empty object to store the count of each city
    const cityCount = {};

    // Iterate over each element (city) in the array using forEach method
    arr.forEach(city => {
        // Increment the count of the current city in the cityCount object
        // If the city is not in cityCount, set its count to 1, otherwise increment its count by 1
        cityCount[city] = (cityCount[city] || 0) + 1;
    });

    // Get an array of the city names from the cityCount object
    // Sort the array based on the count of occurrences of each city in descending order
    const sortedCities = Object.keys(cityCount).sort((a, b) => cityCount[b] - cityCount[a]);

    // Return the first 5 cities from the sorted array (the top 5 most frequent cities)
    return sortedCities.slice(0, 5);
}

// Test the output 
console.log(findTopCities([
    "nasville",
    "nasville",
    "los angeles",
    "nasville",
    "Madrid",
    "memphis",
    "barcelona",
    "los angeles",
    "sevilla",
    "Madrid",
    "canary islands",
    "barcelona",
    "Madrid",
    "Madrid",
    "nasville",
    "barcelona",
    "london",
    "berlin",
    "Madrid",
    "nasville",
    "london",
    "Madrid",
    "Madrid",
])); 
//Source: 