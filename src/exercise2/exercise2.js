'use strict';

let name = prompt("What is your name?");

console.log("%c Nombre: ", "background-color: red; color: white", name);

// ============================================================================
function sum(numberList) {
  let total = 0;
  numberList.forEach(function(element) {
    total = total + element;
  })
  return total;
}
const n1 = 8;
console.log(sum([n1, 10, 32]));

//============================================================================

function correr(direccion) {
  return `Test THIS -> ${this.name} corre hacia el ${direccion}`;
}

console.log(correr.apply({name: 'sergio'},['Norte']));
console.log(correr.call({name: 'peca'}, 'Sur'));
const bind = correr.bind({name: 'peca'}, 'Sur');
console.log(bind());

//============================================================================
console.log("_______ Test Prototype _________");
function Motorcycle(brand, model){
  const moto = Object.create(Motorcycle.prototype);
  moto.brand = brand;
  moto.model = model;
  return moto;
}

Motorcycle.prototype.start = function() {
  console.log(`Arrancando moto ${this.brand} ${this.model}`);
}

const moto1 = Motorcycle('Kawasaki', 'Ninja ZX10R');
moto1.start();
console.log(moto1);

console.log("_______ Test Prototype 2 _________");

function Motorcyclee(brand, model){
  this.brand = brand;
  this.model = model;
}

Motorcyclee.prototype.start = function() {
  console.log(`Arrancando moto ${this.brand} ${this.model}`);
}

const moto2 = new Motorcyclee('Ducati', 'Panigale V4R');
moto2.start();
console.log(moto2);

//==============================================================================
console.log("_______ Herencia Prototypal _________");

function Vehiculo(marca) {
  this.marca = marca;
}

Vehiculo.prototype.encender = function() {
  console.log(`Encendiendo vehiculo ${this.marca}`);
}

function Motocicleta(modelo, marca) {
  Vehiculo.call(this, marca);
  this.modelo = modelo;
}

Motocicleta.prototype = Object.create(Vehiculo.prototype, {
  encender: {
    value: function() {
      console.log(`Encendiendo motocicleta ${this.marca} ${this.modelo}`);
    }
  }
});

const m = new Motocicleta(`Ninja ZX10RR`, `Kawasaki`);
m.encender();
console.log(m);

//======================EXPRESIONES REGULARES====================================
console.log(`%c EXPRESIONES REGULARES ----------------------`, `background-color: yellow; color: black; font-weight: bold`);

let stringText = 'Hola mi nombre es: nombre=crgiopeca88';
let expression = /nombre/gm;
let result = stringText.match(expression);
console.log(`%c RE_1 > literal chars: ${stringText} =>`, `background-color: black; color: yellow`, result);

let stringText2 = 'Hola mi nombre es: nombre=crgiopeca88';
let expression2 = /[aeiou]/gm;
let result2 = stringText2.match(expression2);
console.log(`%c RE_2 > set chars: ${stringText2} =>`, `background-color: yellow; color: black`, result2);

let stringText3 = 'Hola mi NOMBRE es: nombre=CRGIOpeca88';
let expression3 = /[A-Ga-g]/gm;
let result3 = stringText3.match(expression3);
console.log(`%c RE_3 > set chars with range: ${stringText3} =>`, `background-color: black; color: yellow`, result3);

let stringText4 = '1). Hola mi NOMBRE es: nombre=CRGIOpeca88';
let expression4 = /[A-Ga-g0-9peca]/gm; // /[A-Ga-g0-9]|peca88/gm
let result4 = stringText4.match(expression4);
console.log(`%c RE_4 > set chars with range and literal chars: ${stringText4} =>`, `background-color: yellow; color: black`, result4);

let stringText5 = `sergio andres
peña cardozo
crgio
peca
crgiopeca88
angiesita
angie garcia
rodriguez`;
let expression5 = /[a-z]+/gm;
let result5 = stringText5.match(expression5);
console.log(`%c RE_5 > repeat char "+" to repeat sets: ${stringText5} =>`, `background-color: black; color: yellow`, result5);

let stringText6 = `sergio andres
peña cardozo
crgio
peca
crgiopeca88
angiesita
angie garcia
rodriguez`;
let expression6 = /[a-z]*/gm;
let result6 = stringText6.match(expression6);
console.log(`%c RE_6 > repeat char "*" to repeat sets adding unlimited value like undefined: ${stringText6} =>`, `background-color: yellow; color: black`, result6);

let stringText7 = `123
123456
12345678
0000
88
888`;
let expression7 = /[0-9]{4,5}/gm; //between 4 and 5
let result7 = stringText7.match(expression7);
console.log(`%c RE_7 > set with range and length: ${stringText7} =>`, `background-color: black; color: yellow`, result7);

let stringText8 = `123
123456sss
12345688
0000
88
888`;
let expression8 = /[^0-9]+/gm;
let result8 = stringText8.match(expression8);
console.log(`%c RE_8 > set negation: ${stringText8} =>`, `background-color: yellow; color: black`, result8);

let stringText9 = `1). Hola mi NOMBRE es: nombre=CRGIOpeca88`;
let expression9 = /[0-9].+\./gm;
let result9 = stringText9.match(expression9);
console.log(`%c RE_9 > dot character for any match: ${stringText9} =>`, `background-color: black; color: yellow`, result9);

//let stringText10 = `1). Hola como estas?`;
//let stringText10 = `1). Hola angie como estas?`;
let stringText10 = `1). Hola angie como estas?`;
let expression10 = /Hola( [a-z]+)? como estas\?/gm;
let result10 = stringText10.match(expression10);
console.log(`%c RE_10 > optional values with group () ang ?: ${stringText10} =>`, `background-color: yellow; color: black`, result10);

let stringText11 = `Hola sergio como estas?
Hola muy bien, y tu como estas?
`;
let expression11 = /^Hola.+/gm;
let result11 = stringText11.match(expression11);
console.log(`%c RE_11 > start line with specific character or string "^": ${stringText11} =>`, `background-color: black; color: yellow`, result11);


let stringText12 = `Hola sergio como estas?
Hola muy bien, y tu como estas? que hay de nuevo?
`;
let expression12 = /como estas\?$/gm;
let result12 = stringText12.match(expression12);
console.log(`%c RE_12 > end line with specific character or string "$": ${stringText12} =>`, `background-color: yellow; color: black`, result12);

//------------------------------------------------------------------------------

let stringText13 = `Hola sergio como estas?
Hola muy bien, y tu como estas? que hay de nuevo?
`;
let expression13 = /como estas\?$/gm;
let result13 = stringText13.match(expression13);
console.log(`%c RE_13 > end line with specific character or string "$": ${stringText13} =>`, `background-color: yellow; color: black`, result13);

let stringText14 = `[2021-04-06 12:39:05am][warn] dsfbdsbjhbshfbfbhjsdbfdshfbjdbsfjhbdfhjdsfhbsdfhhjdsbfhdsfbdbfsdfdsf. dsfbjhdsfbjhbf.bjhdsfbhj

[2021-04-06 12:45:07pm][warn] dsfbdsbjhbshfbfbhjsdbfdshfbjdbsfjhbdfhjdsfhbsdfhhjdsbfhdsfbdbfsdfdsf. dsfbjhdsfbjhbf.bjhdsfbhj

[2021-04-06 12:50:07pm][err] dsfbdsbjhbshfbfbhjsdbfdshfbjdbsfjhbdfhjdsfhbsdfhhjdsbfhdsfbdbfsdfdsf. dsfbjhdsfbjhbf.bjhdsfbhj

[2021-04-10 11:40:01pm][info] sjdahdkjshkjdhsakj
`;
let expression14 = /^\[[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}(am|pm)\]/gm;
let result14 = stringText14.match(expression14);
console.log(`%c RE_14 > validate date format into log: ${stringText14} =>`, `background-color: black; color: yellow`, result14);
