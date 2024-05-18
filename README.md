## ID NUMBER: 11301080

1. Task 1: Implement processArray function in arrayManipulation.js
   - Create a JavaScript file named arrayManipulation.js.
   - Write a function called processArray.
   - The processArray function takes an array of numbers as an argument.
   - For each number in the input array:
     - If the number is even, square it (multiply it by itself).
     - If the number is odd, triple it (multiply it by 3).
   - Return a new array containing the modified numbers.

2. Task 2: Implement formatArrayStrings function in arrayManipulation.js
   - Still in arrayManipulation.js, add another function called formatArrayStrings.
   - formatArrayStrings takes two arrays as arguments:
     - An array of strings (original strings).
     - An array of numbers processed by the processArray function.
   - Modify each string based on its corresponding number:
     - Capitalize the entire string if the number is even.
     - Convert the string to lowercase if the number is odd.
   - Return the modified array of strings.

3. Task 3: Create userInfo.js and implement createUserProfiles function
   - Create a file named userInfo.js.
   - Write a function called createUserProfiles.
   - createUserProfiles takes two arrays as arguments:
     - An array of original names.
     - An array of modified names (from the formatArrayStrings function).
   - Create an array of objects, where each object contains:
     - originalName: The original name from the first array.
     - modifiedName: The modified name from the second array.
     - id: An auto-incremented value starting from 1.
   - Return the array of user profiles.
