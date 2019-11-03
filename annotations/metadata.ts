import 'reflect-metadata';

const plane = {
  color: 'red'
};

// metadata on object
Reflect.defineMetadata('note', 'hi there', plane);
// or object property
Reflect.defineMetadata('propertyNote', 'hi there again', plane, 'color');

const note = Reflect.getMetadata('note', plane);
const propertyNote = Reflect.getMetadata('propertyNote', plane, 'color');

console.log(note);
