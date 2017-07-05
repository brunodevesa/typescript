import { Animals } from '../jsonData/Animals'
import { Animal } from '../jsonData/Animal'
import { FilterClass } from './Filter';

console.log("Typescript Basics");

// filter, map and reduce exercices

let myFilterClass = new FilterClass();
let animals = new Animals();
let myAnimals: Animal[] = animals.animals;

let myAnimalsAboveAge4  = myFilterClass.animalsAboveAge4;
console.log(myAnimalsAboveAge4)

let myAnimalsAbove = myFilterClass.animalsAboveSomeAge(myAnimals , 1 )
console.log('animals above some age :')
console.log(myAnimalsAbove)


let animalsNameStartWithLetterK = myFilterClass.animalsNameStartWithLetterK(myAnimals);


console.log('animals name starting with letter k :');
console.log('....................................')
console.log(animalsNameStartWithLetterK)


let letter = 'b'
let animalsNameStartWithSomeLetter = myFilterClass.animalsNameStartWithSomeLetter(myAnimals, letter) ;
console.log('animals name starting with letter  : ' + letter);
console.log('....................................')
console.log(animalsNameStartWithSomeLetter)


let ageArrayOfAllAnimals= myFilterClass.ageArrayOfAllAnimals(myAnimals);

console.log('age array of all animals :')
console.log(ageArrayOfAllAnimals);

let averageAgeOfAllAnimals = myFilterClass.averageAge(ageArrayOfAllAnimals)
console.log('average age of all animals :')
console.log(averageAgeOfAllAnimals);


console.log('new Array of animals name and ages  :');
let newArrayOfNameAndAge = myFilterClass.getArrayOfNamesAndAges(myAnimals);
console.log(newArrayOfNameAndAge);