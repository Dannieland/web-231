/*
    Title: taplin-calculator.js
    Author: Danielle Taplin
    Date: 4/26/2023
    Description: JavaScript styling for my calculator app
*/


function multiply(num1, num2){ //declare function for multiplying numbers
  if (typeof num1 !== 'number' || typeof num2 !== 'number') { //if num1 OR num2 are NOT numbers on input
      throw Error('inputs must be numbers'); //throw error saying input must be numbers
    }

  if (isNaN(num1) || isNaN(num2)) { //if num1 OR num2 are NOT valid numbers
      throw Error('Input must be numbers'); //throw error stating input must be numbers
    }
  return num1 * num2; //return value of num1 multiplied by num2
}

function displayMultiplyResults(){ //declare function to display multiplication results
  let num1 = document.getElementById('num1').value; //declare empty spots that will hold the user input numbers
  let num2 = document.getElementById('num2').value;

  num1 = parseFloat(num1); //parse num1 AND num2 // parsefloat
  num2 = parseFloat(num2);

  try{ //if no errors found TRY
      const sum = multiply(num1, num2) //setting sum equal to num1 MULTIPLIED by num2

      document.getElementById('multi-results').innerHTML = num1 + ' * ' + num2 + ' = ' + sum;  //display results of multiplication to page
  } catch(err){ //IF an error occurs display error alert
      alert(err)
  }
}

function divide(num3, num4){ //declare function for dividing numbers
  if (typeof num3 !== 'number' || typeof num4 !== 'number') { //if num3 OR num4 are NOT numbers on input
      throw Error('Inputs must be numbers'); //throw error saying input must be numbers
    }

  if (isNaN(num3) || isNaN(num4)) { //if num3 or num4 are NOT valid numbers
      throw Error('Input must be numbers'); //throw an error saying input must be numbers
    }

  if (num3 == 0 || num4 == 0) { //if num3 OR num4 are ZERO
      throw Error('cannot divide by zero'); //throw error cannot divide by 0
    }

  return num3 / num4; //return value of num3 divided by num4
}

function displayDivideResults(){ //declare function displaying division results
  let num3 = document.getElementById('num3').value; //declare empty spots that will hold the user input numbers
  let num4 = document.getElementById('num4').value;

  num3 = parseFloat(num3); //parse num3 AND num4 //parsefloat
  num4 = parseFloat(num4);

  try{ //if no errors found TRY
      const sum = divide(num3, num4) //setting sum equal to num3 DIVIDED by num4

      document.getElementById('div-results').innerHTML = num3 + ' / ' + num4 + ' = ' + sum; //display results of division to page
  } catch(err){ //IF an error occurs display error alert
      alert(err)
  }
}
