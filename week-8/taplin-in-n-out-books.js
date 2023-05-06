/*
    Title: taplin-in-n-out-books.js
    Author: Danielle Taplin
    Date: 5/04/2023
    Description: JavaScript styling for my in n out books app
*/

const book1 = { //declaring first book object with isbn, title and amount of pages
    isbn: "9781408803738",
    title: "A Thousand Splendid Suns",
    pages: 384
};
const book2 = { //declaring second book object with isbn, title and amount of pages
    isbn: "0756404746",
    title: "The Name of the Wind",
    pages: 722
};
const book3 = { //declaring third book object with isbn, title and amount of pages
    isbn: "159514174X",
    title: "Vampire Academy",
    pages: 352
};

const author1 = { //declaring first author object with their name and book genre
    name: "Khaled Hosseini",
    genre: "Domestic Fiction"
};
const author2 = { //declaring second author object with their name and book genre
    name: "Patrick Rothfuss",
    genre: "Fantasy Fiction, Heroic Fantasy"
};
const author3 = { //declaring third author object with their name and book genre
    name: "Richelle Mead",
    genre: "Young Adult, Paranormal Romance, Urban Fantasy"
};

function display(){ //declare function to display a table

    const choice = document.getElementById('choices').value; //declare the constant that will hold the drop down info 

    switch(choice){ //depending on choice from drop down, build string to show a table in html

        case "books": //for the three books at the beginning

            //declare variable holding html code for the table
            let tblBooks = `
            <h3>Top 3 Favorite Books</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Pages</th>
                </tr>
              </thead>
            <tbody>
                <tr>
                  <td>` + book1.isbn + `</td>
                  <td>` + book1.title + `</td>
                  <td>` + book1.pages + `</td>
                </tr>
                <tr>
                  <td>` + book2.isbn + `</td>
                  <td>` + book2.title + `</td>
                  <td>` + book2.pages + `</td>
                </tr>
                <tr>
                  <td>` + book3.isbn + `</td>
                  <td>` + book3.title + `</td>
                  <td>` + book3.pages + `</td>
                </tr>
              </tbody>
            </table>`;

            document.getElementById('results').innerHTML = tblBooks; //code to display the finished table to the page
            break;
        
        case "authors": //for the three authors at the beginning

            //declare variable holding html code for the table
            let tblAuthors = `
            <h3>Top 3 Favorite Authors</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Genre</th>
                </tr>
              </thead>
            <tbody>
                <tr>
                  <td>` + author1.name + `</td>
                  <td>` + author1.genre + `</td>
                </tr>
                <tr>
                  <td>` + author2.name + `</td>
                  <td>` + author2.genre + `</td>
                </tr>
                <tr>
                  <td>` + author3.name + `</td>
                  <td>` + author3.genre + `</td>
                </tr>
              </tbody>
            </table>`;

            document.getElementById('results').innerHTML = tblAuthors; //code to display the finished table to the page
            break;

            default: //if book or author is not selected, it is the default selection
                alert("Invalid selection, please try again!"); //default selection is invalid, show an error alert
        }
    }
