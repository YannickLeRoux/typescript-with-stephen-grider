const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];
// tuples are arrays with a speciaifc order of values

const pepsi: Drink = ['brown', true, 40];
