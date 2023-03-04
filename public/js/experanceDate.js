export class ExperanceDate{
    #startDate;
    #endDate;
    #monthsInPosition;
    #isCurrent;

    constructor(startDate, endDate, monthsInPosition, isCurrent){
        this.#startDate = startDate;
        this.#endDate = endDate;
        this.#monthsInPosition = monthsInPosition;
        this.#isCurrent = isCurrent;
        
    }
}





