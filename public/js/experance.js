import * as Location from './location.js';

export class Experance{
    #id;
    #jobTitle;
    #socCode;
    #socName;
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
    constructor(id, jobTitle, socCode, socName, industry, jobDescription, startData, endDate, monthsInPosition, isCurrent, managementLevel, title, minorGroup, subMajorGroup, majorGroup, occupationSocCode){
        this.#id = id;
        this.#jobTitle = jobTitle;
        this.#socCode = socCode;
        this.#socName = socName;
        this.#industry = industry;
        this.#jobDescription = jobDescription;
        this.#startData = startData;
        this.#endDate = endDate;
        this.#monthsInPosition = monthsInPosition;
        this.#isCurrent = isCurrent;
        this.#managementLevel = managementLevel;
        this.#title = title;
        this.#minorGroup = minorGroup;
        this.#subMajorGroup = subMajorGroup;
        this.#majorGroup = majorGroup;
        this.#occupationSocCode = occupationSocCode;
    }


}