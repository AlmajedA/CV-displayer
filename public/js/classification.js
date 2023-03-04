export class Classification{
    #title;
    #minorGroup;
    #subMajorGroup;
    #majorGroup;
    #socCode;
    constructor(title, minorGroup, subMajorGroup, majorGroup, socCode){
        this.#title = title;
        this.#minorGroup = minorGroup;
        this.#subMajorGroup = subMajorGroup;
        this.#majorGroup = majorGroup;
        this.#socCode = socCode;
    }
}


