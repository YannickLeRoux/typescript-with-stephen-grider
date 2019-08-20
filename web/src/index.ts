import axios from 'axios';
import { User } from './models/User';

const user = new User({ name: 'NEW entry', age: 9999 });

user.save();
