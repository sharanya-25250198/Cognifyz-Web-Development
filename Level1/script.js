// Color Change Button
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function(){

    document.body.style.backgroundColor =
    "#" + Math.floor(Math.random()*16777215).toString(16);

});

// Greeting Alert
function showGreeting(){

    alert("Hello! Welcome to Cognifyz Internship Project 🎉");

}

// Calculator
function calculateSum(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let sum = num1 + num2;

    document.getElementById("result").innerText =
    "Result: " + sum;

}