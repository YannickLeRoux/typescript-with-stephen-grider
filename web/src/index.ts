import { User } from './models/User';

console.log('Hi there!');

const user = new User({ name: 'yannick', age: 20 });

console.log(user.get('age'));

user.set({ name: 'jo', age: 999 });

console.log(user.get('name'));
