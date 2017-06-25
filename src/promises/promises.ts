import { Animal } from '../jsonData/Animal'
import { Animals } from '../jsonData/Animals'

export class PromiseClass {
    constructor() { }

    public animals = new Animals();
    public myAnimals = this.animals.animals;

    showAnimals(myAnimals: Animal[]): Promise<any> {
        console.log();
        console.log('I will promise the animals will show in 2 seconds..')
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                console.log(myAnimals);
            }, 2000)

        })
    }


    getAgeArray(myAnimals: Animal[]): Promise<any> {
        return new Promise((resolve, reject) => {

            resolve(myAnimals.map((animal: Animal) => {
                return animal.age;
            }))
        })
    }

    getAverageAgeFromArray(arr: number[]): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(arr.reduce((sum: number, property: number): any => {
                console.log('sum = ' + sum)
                return sum + property
            }, 0))

        }).then((response)=>{
            console.log('average age = ' + response)
        })

    }


}