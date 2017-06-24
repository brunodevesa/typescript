import { Animals } from '../jsonData/Animals'
import { Animal } from '../jsonData/Animal'
import { MapClass } from './map';

let myMapClass = new MapClass();
let animals = new Animals();
let myAnimals: Animal[] = animals.animals;


let allAnimals = myMapClass.showAnimals(myAnimals);

console.log('All Animal names : ')
let animalNames = myMapClass.getAnimalNames(myAnimals);
console.log(animalNames)


console.log('All Animals Info : ')
let allAnimalsInfo = myMapClass.getInfoAnimals(myAnimals);
console.log(allAnimalsInfo);