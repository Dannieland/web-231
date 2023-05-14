/*
    Title: taplin-dino-app.js
    Author: Danielle Taplin
    Date: 5/11/2023
    Description: JavaScript styling for my dino app
*/

class Gigantosaurus { //create class for first dinosaur
    constructor(name) { //construct a string to add dinosaur noise choice
      this.name = name;
    }
    roar() { 
      return this.name + " says: Rooooar"; //if this dinosaur is picked, Rooooar will be returned
    }
  }
  class Tyrannosaurus extends Gigantosaurus { //create extended class for second dinosaur
    constructor(name) { //construct a string to add dinosaur noise choice
      super(name);
    }
    growl() {
      return this.name + " says: Groooowl"; //if this dinosaur is picked, grooowl will be returned
    }
  } 
  class Velociraptor extends Tyrannosaurus { //create extended class for third dinosaur
    constructor(name) { //construct a string to add dinosaur noise choice
      super(name);
    }
    awk() {
      return this.name + " says: Awk Awk Awwwwk"; //if dinosaur is picked, awk awk awwk will be returned
    }
  }
  const giga = new Gigantosaurus("Gigantosaurus"); //variable created from Gigantosaurus dino class
  const rex = new Tyrannosaurus("Tyrannosaurus"); //variable created from Tyrannosaurus dino class 
  const raptor = new Velociraptor("Velociraptor"); //variable created from Velociraptor dino class 
  
  function display() { //display a function with a decision tree for selected radio box. 
      const selection = document.querySelector('input[name="selection"]:checked'); //variable with query selector from currently checked radio box
      const resultContainer = document.getElementById("dino-results"); //variable created for dinosaur results
      let message = ""; //blank space to house results
  
    switch (selection?.id) { //switch selection set up depending on which case is active
      case "roar":
        message = giga.roar(); //for the roar
        break;
      case "growl":
        message = rex.growl(); //for the growl
        break;
      case "awk":
        message = raptor.awk(); //for the awk
        break;
      default:
        alert("Invalid selection, please try again"); //invalid selection will return error alert
        return;
    }
    resultContainer.textContent = message; //send out results
  }
  
  const submitButton = document.getElementById("submit");//variable created to retrieve info from submit
  submitButton.addEventListener("click", display);//event listener added for button click with display function