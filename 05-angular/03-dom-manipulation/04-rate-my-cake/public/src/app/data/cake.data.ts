import { Cake } from '../models';

export const CAKES: Cake[] = [
   { id: randomId(),
    baker_name: 'Arya',
    url: 'cake1.jpg'
   },
   {
    id: randomId(),
    baker_name: 'Sansa',
    url: 'cake2.jpg',
   },
   {
    id: randomId(),
    baker_name: 'Jon',
    url: 'cake3.jpeg'
   }
];

function randomId(): number {
    return Math.floor(Math.random() * 1000);
  }