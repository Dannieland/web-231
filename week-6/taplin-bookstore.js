/*
    Title: taplin-bookstore.js
    Author: Danielle Taplin
    Date: 4/19/2023
    Description: JavaScript styling for my bookstore app
*/

let books = ["A Thousand Splendid Suns", "The Name of The Wind", "Vampire Academy"]; //Declaring an array for favorite books
let authors = ["Agatha Christie", "Richelle Mead", "Khaled Hosseini"]; //declaring an array for favorite authors
let publishers = ["Simon Pulse", "Razorbill", "Bloomsbury Publishing"]; //declaring an array for favorite publishers

authors.sort(); //sort function to sort authors in array
publishers.sort().reverse(); //sort function to sort publishers in array, descending order

function display(){ //beginning of display  function for a table

    const choice = document.getElementById('choice').value; //declare the variable that will hold users choice

    let row = ""; //declaring an empty space in the row that will hold a value

    switch(choice){ //beginning of string that is based off of user choice

        case "books": //beginning of case for books

            //declare a variable holding html code for the table
            let tblBooks = `
            <h3>Books Listing</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Title</th>
                </tr>
              </thead>
            <tbody>
            `;

            for(let b of books){ //for each part of the array books
                //fill the row variables with html code info
                row = `
                <tr>
                  <td>` + b + `</td>
                </tr>`
                tblBooks += row; //concatenate new row to the table already in place
            }

            //close html table and table body for books
            tblBooks += `
              </tbody>
            </table>`

            document.getElementById('results').innerHTML = tblBooks; //display table to html page as a result
            break;

        case "authors": //for the case authors

            //declare a variable to hold html code for table
            let tblAuthors = `
            <h3>Authors Listing</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Full Name</th>
                </tr>
              </thead>
            <tbody>`;

            for(let a of authors){ //for each part of the array authors
                //fill the row variables with html code info
                row = `
                <tr>
                  <td>` + a + `</td>
                </tr>`

                tblAuthors += row; //concatenate the new row to table
            }

            //close html table and table body for authors
            tblAuthors += `
              </tbody>
            </table>`

            document.getElementById('results').innerHTML = tblAuthors; //display table to html page as a result
            break;

        case "publishers": //For the case publishers

            //declare a variable to hold html code for table
            let tblPublishers = `
            <h3>Publishers Listing</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Company</th>
                </tr>
              </thead>
            <tbody>`;

            for(let p of publishers){ //for each part of the array authors
                //fill the row variables with html code info
                row = `
                <tr>
                  <td>` + p + `</td>
                </tr>`

                tblPublishers += row; //concatenate the new row to table
            }

            //close html table and table body for publishers
            tblPublishers += `
              </tbody>
            </table>`

            document.getElementById('results').innerHTML = tblPublishers; //display the table to html page as a result
            break;

        default: //for invalid selection
            alert("Invalid selection, please try again!"); //alert for invalid selection
    }
}
