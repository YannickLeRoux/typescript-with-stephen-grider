import { number } from 'prop-types';

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];

// classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Functions that return a any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2) When declare a variable on one line and
// declare it later
let color = ['red', 'blue', 'green'];
let foundColor: boolean;

for (let i = 0; i < color.length; i++) {
  if (color[i] === 'green') {
    foundColor = true;
  }
}

// 3) When we have a variable whose type
// cant be inferred
let numbers = [-1, -12, 2];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = number[i];
  }
}
