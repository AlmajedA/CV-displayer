import * as Location from './location.js';

export class PersonalData{
    #name;
    #phoneNumbers;
    #websites;
    #emails;
    #dateOfBirth;
    #linkedin;

    // For Location

    #location;


    constructor(name, phoneNumbers, websites, emails, dateOfBirth, linkedin, locationInfo){
        this.#name = name;
        this.#phoneNumbers = phoneNumbers;
        this.#websites = websites;
        this.#emails = emails;
        this.#dateOfBirth = dateOfBirth;
        this.#linkedin = linkedin;
        if (locationInfo != null){
            this.#location = new Location.Location(locationInfo.PostalCode, locationInfo.State, 
                locationInfo.Country, locationInfo.CountryCode, locationInfo.StreetNumber, 
                locationInfo.Street, locationInfo.ApartmentNumber, locationInfo.City);
        }
    }

    getName(){
        return this.#name;
    }


    getFirstEmail(){
        return this.#emails[0];
    }
}
