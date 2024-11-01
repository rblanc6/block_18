/* 
UNIT TESTS:

Write a function called "multiplication" that returns the product of two input numbers:
        - Expect multiplication(4,5) to return the product of 4*5
        - Expect multiplication(4,5) to be a number
        - Expect multiplication(4,5) to equal 20
        - Expect multiplication(4,5,2) to equal 20
        - Expect multiplication("a", 5) to be an error
        - Expect multiplication(4) to be an error

        
        
Write function called "concatOdds" takes two arrays of integers as arguments, it should return a single array that:
 - Only contains the odd numbers
 - The numbers appear in ascending order
 - The numbers should be returned from both arrays
        - Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to return [-1, 1, 3, 9, 15]
        - Expect concatOdds([3, 2, 1], [9, 1, 4, 15, -1]) to return [-1, 1, 3, 9, 15]
        - Expect concatOdds([a, b, c], [9, 1, 4, 15, -1]) to return an error
        - Expect concatOdds([3, 2, 1], [3, 2, 1]) to return [1, 3]
        - Expect concatOdds([2, 4, 6], [6, 20, 24]) to return no result
*/

/*
FUNCTIONAL TEST:

A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user.
    - When the cart is empty, a page displays that tells the user to add item[s] to the cart continue.
    - When the cart has items and the user proceeds to checkout, they will be asked to log in or continue as guest.
    - When a user selects guest, they should move on the next part of the checkout process.
    - When a guest enters an email address that is not registered, they will be asked if they want to register.
    - When registering a new account, if password requirements are not met, a message should inform the user what is missing.
    - When a guest enters an email address that is already registered, they should be prompted to log in to their account to continue.
    - When a user selects to log in, they should be taken to the secure log-in page before continuing checkout.
    - When an invalid email address is entered, and error will display.
    - When an incorrect password is entered, the user will be asked if they wish to reset their password.
*/

const multiplication = (x, y) => {
  return x * y;
};

module.exports = { multiplication };

//TESTING BELOW

// const results = multiplication(4, 5, 2);
// console.log(results);

// const arr1 = [2, 4, 6, 1, 5];
// const arr2 = [6, 20, 24, 21, 1, 3, 3];
// function concatOdd(arr1, arr2) {
// const newArr = arr1.concat(arr2);

//   const result = [];
//   for (const num of newArr) {
//     if (num % 2 !== 0) {
//       result.push(num);
//     }
//   }
//   return result;
// }

// const merged = concatOdd(arr1, arr2);
// console.log(merged);
