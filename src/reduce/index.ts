import { Animals } from '../jsonData/Animals'
import { Animal } from '../jsonData/Animal'
import { ReduceClass } from './reduce';

let reduceClass = new ReduceClass();

let animals = new Animals();
let myAnimals: Animal[] = animals.animals

reduceClass.showAllAnimals(myAnimals)

console.log('average age of all animals :');
let averageAgeOfAllAnimals = reduceClass.showAverageAges(myAnimals);
console.log('averageAgeOfAllAnimals : ' + averageAgeOfAllAnimals)


console.log('all Animal names :');
let allProducts = reduceClass.getAnimalsWithAgeAbove4(myAnimals, 4)
console.log(allProducts)