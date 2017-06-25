import { Animals } from '../jsonData/Animals'
import { Animal } from '../jsonData/Animal'


export class ReduceClass {
    constructor() { }

    public animals = new Animals();
    public myAnimals: Animal[] = this.animals.animals

    showAllAnimals(myAnimals: Animal[]): void {
        console.log(myAnimals)
    }

    showAverageAges(myAnimals: Animal[]) {
        return myAnimals.reduce((sum: number, property: Animal): number => {
            console.log('property.age = ' + property.age)
            return sum + property.age
        }, 0) / myAnimals.length
    }


    // OR make an array of the animal's ages and divide by its length :

    getArrayOfAges(myAnimals: Animal[]): number[] {
        return myAnimals.map((animal: Animal) => {
            return animal.age
        })
    }

    getAnimalsWithAgeAbove4(myAnimals: Animal[], age) {
        return myAnimals.reduce((result: any, property) => {
            // console.log('result = ' + result)
            if (property.age > age) {
                result.push(property.name + ' is ' + property.age + ' years old')
            }
            return result
        }, [])
    }




}