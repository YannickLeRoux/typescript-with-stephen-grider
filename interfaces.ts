// we refactored the interface and function to maake it reusable
// as the function only request the summary property
// properties that are not used become unecessary in the interface
// it allows use to generalize the interface and the function
// so the interface just acts as a gatekeeper to make sure
// an object can interact with it

interface Reportable {
  summary(): string;
}

// interface Vehicule {
//   name: string;
//   date: Date;
//   broken: boolean;
//   summary(): string;
// }
const oldCivic = {
  name: 'Civic',
  date: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `This drink contains ${this.sugar} grams of sugar`;
  }
};

// const printVehicule = (vehicule: Vehicule): void => {
//   console.log(vehicule.summary);
// };

const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};

printSummary(oldCivic);
printSummary(drink);
