import * as Location from './location.js';
import * as ExperanceDate from './experanceDate.js'
import * as Classification from './classification.js'


export class Experance{

    // For Constructor:

    #id;
    #jobTitle;
    #socCode;
    #socName;
    #organization;
    #industry;
    #jobDescription;
    #startData;
    #endDate;
    #monthsInPosition;
    #isCurrent;
    #managementLevel;
    #title;
    #minorGroup;
    #subMajorGroup;
    #majorGroup;
    #occupationSocCode;


    // For Location:

    #location;

    // For Experance Date

    #experanceDate;

    // For Classification

    #classification;

    constructor(id, jobTitle, socCode, socName, organization,industry, jobDescription, startDate, endDate, monthsInPosition, isCurrent, managementLevel, title, minorGroup, subMajorGroup, majorGroup, occupationSocCode, locationInfo){
        this.#id = id;
        this.#jobTitle = jobTitle;
        this.#socCode = socCode;
        this.#socName = socName;
        this.#organization = organization;
        this.#industry = industry;
        this.#jobDescription = jobDescription;
        this.#managementLevel = managementLevel;
        if (locationInfo != null){
            this.#location = new Location.Location(locationInfo.PostalCode, locationInfo.State, 
                locationInfo.Country, locationInfo.CountryCode, locationInfo.StreetNumber, 
                locationInfo.Street, locationInfo.ApartmentNumber, locationInfo.City);
        }

        
        this.#experanceDate = new ExperanceDate.ExperanceDate(startDate, endDate, monthsInPosition, isCurrent);

        this.#classification = new Classification.Classification(title, minorGroup, subMajorGroup, majorGroup, occupationSocCode);
    }

    getPosition(){
        return this.jobTitle + " at " + this.#organization;
    }

    


}