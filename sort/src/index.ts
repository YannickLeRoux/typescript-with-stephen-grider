import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numberCollection = new NumbersCollection([1, 89, 4, 7, 6, 8, 9]);
// numberCollection.sort();
// console.log(numberCollection.data);

// const charactersCollection = new CharactersCollection('jgoajsgsHH');
// charactersCollection.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(100);
linkedList.add(-5);
linkedList.add(4);
linkedList.add(-30);

linkedList.sort();
linkedList.print();
