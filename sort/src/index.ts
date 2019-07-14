import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numberCollection = new NumbersCollection([1, 89, 4, 7, 6, 8, 9]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);

const charactersCollection = new CharactersCollection('jgoajsgsHH');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
