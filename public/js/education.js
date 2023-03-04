import * as Location from './location.js';
export class Education {

    //  For Constructor
    #id;
    #organization;
    #education;
    #educationLevel;
    #grade;
    

    // For Location

    #location;

    constructor(id, organization, education, educationLevel, grade, locationInfo) {
        this.#id = id;
        this.#organization = organization;
        this.#education = education;
        this.#educationLevel = educationLevel;
        this.#grade = grade
        if (locationInfo != null){
            this.#location = new Location.Location(locationInfo.PostalCode, locationInfo.State, 
                locationInfo.Country, locationInfo.CountryCode, locationInfo.StreetNumber, 
                locationInfo.Street, locationInfo.ApartmentNumber, locationInfo.City);
        }

    }

    getEducation(){
        return this.#education;
    }

    

    



}