/*
 Title: taplin-sequence-game.js
 Author: Danielle Taplin
 Date: 4/12/2023
 Description: JavaScript code to make a sequence game
*/

function showSequence(){  //ensure the function is declared to the sequence button 'Display Sequence'

  const choice = document.getElementById('choice').value; //declare value that contains the options a user can pick from

  switch(choice){ //when the user makes a choice, different strings to switch into play

      case "numbers": //for the numbers option in html option values

          let index = 0;  //declare starting number as index
          let txtNumSequence = ""; //declare an area for those values to be presented

          while(index < 11){ //while index is less than 11
              txtNumSequence += index; //begin concatenation ; string the increments in area presented
              index++;

              if (index < 11){ //if this index is less than 11
                  txtNumSequence += ", " //concatenate ; add a , and space to string
              }
          }

          //Set the results element to display the sequence
          document.getElementById("results").innerHTML = txtNumSequence; //ensure results element in html displays the numbers sequence
          break; //break to start new string

      case "even": //for the even option in html option values

          let evenNumber = 0; //index number declared
          let txtEvenSequence = ""; //area for those values to be presented

          do { //when an even number is less than 21
              txtEvenSequence += evenNumber; //add index to string (even numbers)
              evenNumber += 2; //increment that index by 2

              //If index is less than 21
              if (evenNumber < 21){ //if the index is less than 21
                  txtEvenSequence += ", " //concatenate in a comma and space to string
              }
          } while(evenNumber < 21) //while even number is 21
          document.getElementById("results").innerHTML = txtEvenSequence; //show results in the html element 'results'
          break; //break to start new string

      case "odd": //for the odd option in html option values
          txtOddSequence = ""; //declare string to hold an odd sequence in place

          //For odd numbers less than 20
          for (let i = 1; i < 20; i += 2) { //for any odd numbers that are less than 20
              txtOddSequence += i; //add those odd numbers less than 20 and increase increment by 2

              if (i < 19){ //if the index is less than 21
                  txtOddSequence += ", " //concatenate in a comma and space to string
              }
            }

          //Set the results element to display the sequence
          document.getElementById("results").innerHTML = txtOddSequence; //set up results to show in html element 'results'
          break; //break to start new string

      default: //for no options or invalid option
          alert("Invalid selection, please try again!"); //show pop up alert for invalid selection
  }
}
