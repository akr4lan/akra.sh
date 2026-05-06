function myfunction2() {
    document.getElementById("straight bs").innerHTML = "My throat hurts";
}

function bigtext() {
    document.getElementById("mouse").innerHTML = "<h2>Now this text is big</h2>";
}

// Declaración de variables:
// let x = 5;
// let y = 6;

// let z = x + y;

// let john_doe = "john" + " " + "doe"

let x, y, z;
x = 5;
y = 6;
z = x + y;

function hello() {
    document.getElementById("dolly").innerHTML = "hi dolly";
}

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");


// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson"; 


//Arrays are lists
let numbers = [1, 2, 3];
// Objects son diccionarios
let person = {firstname:"akra", lastname:"kraut"}
// tipo de dato date
let date = new Date("05-07-2026")

typeof "john"

// Los operadores son los típicos y **, % (resto de división), ++ (incremento), -- (decremento)
// + o += se pueden usar para concatenar strings o añadir valores a variables numéricas
// actually you can do it whith any operation symbol before the equal sign

// === iqual value and type, !== viceversa
// && || !

function age() {
    let age = Math.random() * 60;
    let text = (age < 18) ? "Minor" : "Adult";

    document.getElementById("age").innerHTML = text
}

while (i < 10) {
    text += i;
    i++;
}

Boolean(10 > 9);
// anything with a value is true

