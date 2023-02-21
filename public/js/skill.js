import * as Source from './source.js';

export class Skill{
    #id;
    #emsiId;
    #name;
    #lastUsed;
    #numberOfMonths;
    #type;
    #count;
    #weighting;
    constructor(id, emsiId, name, lastUsed, numberOfMonths, type, count, weighting){
        this.#id = id;
        this.#emsiId = emsiId;
        this.#name = name;
        this.#lastUsed = lastUsed;
        this.#numberOfMonths = numberOfMonths;
        this.#type = type;
        this.#count = count;
        this.#weighting = weighting;

    }
}