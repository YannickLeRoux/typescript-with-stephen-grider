import { User } from './models/User';

console.log('Hi there!');

const user = new User({ name: 'yannick', age: 20 });

user.on('change', () => {});

user.on('click', () => {});

console.log(user);
