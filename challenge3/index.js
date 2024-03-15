/*
3. Real State Rent System 


A real estate agency has 5 homes for rent. The homes are characterized by their size, number of bedrooms, number of bathrooms, and location. The rental price of a home is calculated based on these factors.
Features:

First home: 200 square meters, 3 bedrooms, 2 bathrooms
Second home: 150 square meters, 2 bedrooms, 2 bathrooms
Third home: 100 square meters, 2 bedrooms, 1 bathroom
Fourth home: 100 square meters, 1 bedroom, 2 bathrooms
Fifth home: 80 square meters, 1 bedroom, 1 bathroom
The program must quote the price of the home according to: square meters, number of bedrooms, and number of bathrooms. Each bedroom adds $40, and each bathroom adds $30. Each square meter has a cost of $90.
*/
 

//Creating the class House
class House{
    #squareMeters;
    #bedrooms;
    #bathrooms;
    #totalCost = 0;
    constructor(squareMeters,bedrooms,bathrooms){
        this.#squareMeters = squareMeters;
        this.#bedrooms = bedrooms;
        this.#bathrooms = bathrooms;
    }

    //Getters
    get getSquareMeters(){
        return this.#squareMeters;
    }
    get getBedrooms(){
        return this.#bedrooms;
    }
    get getBathrooms(){
        return this.#bathrooms;
    }
    get getTotalCost(){
        return this.#totalCost;
    }

    //Setters

    set setSquareMeters(newSquareMeters){
        this.#squareMeters = newSquareMeters;
    }
    set setBedrooms(newBedrooms){
        this.#bedrooms = newBedrooms;
    }
    set setBathrooms(newBathrooms){
        this.#bathrooms = newBathrooms;
    }
    set setTotalCost(newTotalCost){
        //nothing
    }

    calculateTotalCost(){
        let total = this.#bathrooms * 30 + this.#bedrooms * 40 + this.#squareMeters * 90;
        this.#totalCost = total;
    }

}   

let house1 = new House(200,3,2);
let house2 = new House(150,2,2);
let house3 = new House(100,2,1);
let house4 = new House(100,1,2);
let house5 = new House(80,1,1);

house1.calculateTotalCost();
house2.calculateTotalCost();
house3.calculateTotalCost();
house4.calculateTotalCost();
house5.calculateTotalCost();

alert("The House 1 have a price of: $" + house1.getTotalCost);
alert("The House 2 have a price of: $" + house2.getTotalCost);
alert("The House 3 have a price of: $" + house3.getTotalCost);
alert("The House 4 have a price of: $" + house4.getTotalCost);
alert("The House 5 have a price of: $" + house5.getTotalCost);

