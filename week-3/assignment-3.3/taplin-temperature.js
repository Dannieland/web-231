/*
 Title: taplin-temperature.js
 Author: Danielle Taplin
 Date: 3/31/2023
 Description: JavaScript code to convert the input fahrenheit value to the output celsius value
*/

function calcCelsius () {
  const fahrenheit = document.getElementById('fahVal').value // grabbing the fahrenheit value entered in the input

  const celsius = (fahrenheit - 32) / 1.8 // converts the above fahrenheit value to celsius with this conversion

  document.getElementById('convert').innerHTML = celsius.toFixed(2) // shows converted number in the convert section
}
