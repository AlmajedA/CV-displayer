export class Location{
    #postalCode
    #state
    #country
    #countryCode
    #streetNumber
    #street
    #apartmentNumber
    #city
    constructor(postalCode, state, country, countryCode, streetNumber, street, apartmentNumber, city){
        this.#postalCode = postalCode;
        this.#state = state;
        this.#country = country;
        this.#countryCode = countryCode;
        this.#streetNumber = streetNumber;
        this.#street = street;
        this.#apartmentNumber = apartmentNumber;
        this.#city = city;
    }
}