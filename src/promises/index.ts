import { Animal } from '../jsonData/Animal'
import { Animals } from '../jsonData/Animals'
import {PromiseClass} from './promises';

let promiseClass = new PromiseClass();
let animals = new Animals();
let myAnimals = animals.animals;

// promiseClass.showAnimals(myAnimals);

promiseClass.getAgeArray(myAnimals);

promiseClass.getAgeArray(myAnimals)
.then((response)=>{
    promiseClass.getAverageAgeFromArray(response)
})

     

  






