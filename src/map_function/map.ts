import { Animals } from '../jsonData/Animals';
import { Animal } from '../jsonData/Animal';

export class MapClass {

    public animals = new Animals();
    public myAnimals: Animal[] = this.animals.animals;

    public showAnimals(myAnimals: Animal[]) {
        myAnimals.forEach(element => {
            console.log(element)
        });
    }


    public getAnimalNames(myAnimals: Animal[]) {
        return myAnimals.map((animal: Animal) => {
            return animal.name
        })
    }


    public getInfoAnimals(myAnimals: Animal[]) {
        return myAnimals.map((animal: Animal) => {
            return animal.name + ' is a '  +  animal.species
        })
    }

}