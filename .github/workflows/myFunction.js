const fs = require('fs');

// Generate a random number
const randomValue = Math.random();

// Create a string with the random number
const randomValueString = `Random Number: ${randomValue}\n`;

// Define the path to the output file
const outputFile = 'randomNumber.txt';

// Write the random number to the file
fs.writeFile(outputFile, randomValueString, (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
  } else {
    console.log(`Random number written to ${outputFile}`);
  }
});