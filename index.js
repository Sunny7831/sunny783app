function isEven(number) {
    return number % 2 === 0;
  }
  
  // Main function to use the helper function
  function main() {
    // Example: Check if 8 is even
    let numberToCheck = 8;
  
    if (isEven(numberToCheck)) {
      console.log(numberToCheck + " is even.");
    } else {
      console.log(numberToCheck + " is odd.");
    }
  }
  
  // Call the main function to execute the code
  main();
  