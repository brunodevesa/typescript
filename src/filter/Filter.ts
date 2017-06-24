import { Animals } from '../jsonData/Animals'
import { Animal } from '../jsonData/Animal'
export class FilterClass {

    constructor() { }
    public animals = new Animals();
    public myAnimals: Animal[] = this.animals.animals;

    public animalsAboveAge4: Animal[] = this.myAnimals.filter((animal: Animal) => {
        return animal.age > 4
    })


    public animalsAboveSomeAge(animals: Animal[], age: number) {
        return animals.filter((animal: Animal) => {
            return animal.age > age
        })
    }


    public animalsNameStartWithLetterK(animals: Animal[]) {
        return animals.filter((animal: Animal) => {
            return animal.name.indexOf('k') !== -1 // when indexOf returns -1 its because it didn't find
        })
    }

    public animalsNameStartWithSomeLetter(animals: Animal[], letter: string) {
        return animals.filter((animal: Animal) => {
            return animal.name.indexOf(letter) !== -1
        })
    }


    public ageArrayOfAllAnimals(animals: Animal[]) {
        let sum = 0;
        return animals.map((animals: Animal) => {
            return animals.age
        })
    }


    // regular way
    /*    public averageAge(ages: number[]): number {
            let sum = 0;
            for (var index = 0; index < ages.length; index++) {
                var element = ages[index];
                sum += element
            }
            return sum / ages.length;
    }*/


    // better way with 'reduce'
    public averageAge(ages: number[]): any {
        let sum = 0;
        return ages.reduce((sum: number, property: number) => {
            return sum + property
        }, 0)
    }


}