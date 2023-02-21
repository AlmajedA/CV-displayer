import * as Location from './location.js';
export class Education {
    #id;
    #organization;
    #education;
    #educationLevel;
    #grade;

    constructor(id, organization, education, educationLevel, grade) {
        this.#id = id;
        this.#organization = organization;
        this.#education = education;
        this.#educationLevel = educationLevel;
        this.#grade = grade

        
    }

    myFunction() {
        console.log(this.#id);
        
    }



}