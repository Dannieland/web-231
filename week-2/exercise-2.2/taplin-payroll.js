//Beginning of payroll javascript

const firstNameOne = "Ludwig" //Employee one first name
const lastNameOne = "Beethoven" //Employee one last name
const addressOne = "505 main street" //Employee one address
const ludwigHireDate = new Date(2023, 2, 15).toLocaleDateString('en-US') //Employee one date showing March 15, 2023
const ludwigPayRate = 18.901.toFixed(1) //Employee one fixed pay rate

const itemAOne = document.getElementById("a1") //First item in the first list
itemAOne.innerHTML = firstNameOne //Assigning first name to innerHTML of item a one
const itemATwo = document.getElementById("a2") //Second item in the first list
itemATwo.innerHTML = lastNameOne //Assigning last name to innerHTML of item a two
const itemAThree = document.getElementById("a3") //Third item in the first list
itemAThree.innerHTML = addressOne //Assigning address to innerHTML of item a three
const itemAFour = document.getElementById("a4") //Fourth item in the first list
itemAFour.innerHTML = ludwigHireDate //Assigning hire date to innerHTML of item a four
const itemAFive = document.getElementById("a5") //Fifth item in the first list
itemAFive.innerHTML = ludwigPayRate //Assigning hire date to innerHTML of item a five

const firstNameTwo = "Johann" //Employee two first name
const lastNameTwo = "Bach" //Employee two last name
const addressTwo = "512 main street" //Employee two address
const bachHireDate = new Date(2023, 2, 15).toLocaleDateString('en-US') //Employee two date showing March 15, 2023
const bachPayRate = 25.501.toFixed(1) //Employee two fixed pay rate

const itemBOne = document.getElementById("b1") //First item in the second list
itemBOne.innerHTML = firstNameTwo //Assigning first name to innerHTML of item b one
const itemBTwo = document.getElementById("b2") //Second item in the second list
itemBTwo.innerHTML = lastNameTwo //Assigning last name to innerHTML of item b two
const itemBThree = document.getElementById("b3") //Third item in the second list
itemBThree.innerHTML = addressTwo //Assigning address to innerHTML of item b three
const itemBFour = document.getElementById("b4") //Fourth item in the second list
itemBFour.innerHTML = bachHireDate //Assigning hire date to innerHTML of item b four
const itemBFive = document.getElementById("b5") //Fifth item in the second list
itemBFive.innerHTML = bachPayRate //Assigning hire date to innerHTML of item b five

const firstNameThree = "Wolfgang" //Employee three first name
const lastNameThree = "Mozart" //Employee three last name
const addressThree = "600 main street" //Employee three address
const mozartHireDate = new Date(2023, 2, 15).toLocaleDateString('en-US') //Employee three date showing March 15, 2023
const mozartPayRate = 50.101.toFixed(1) //Employee three fixed pay rate

const itemCOne = document.getElementById("c1") //First item in the third list
itemCOne.innerHTML = firstNameThree //Assigning first name to innerHTML of item c one
const itemCTwo = document.getElementById("c2") //Second item in the third list
itemCTwo.innerHTML = lastNameThree //Assigning last name to innerHTML of item c two
const itemCThree = document.getElementById("c3") //Third item in the third list
itemCThree.innerHTML = addressThree //Assigning address to innerHTML of item c three
const itemCFour = document.getElementById("c4") //Fourth item in the third list
itemCFour.innerHTML = mozartHireDate //Assigning hire date to innerHTML of item c four
const itemCFive = document.getElementById("c5") //Fifth item in the third list
itemCFive.innerHTML = mozartPayRate //Assigning hire date to innerHTML of item c five

