/*5. British Airplanes Startup 

A British start-up specializing in the manufacturing of high-security, high-speed aircraft seeks to calculate the prices of its planes based on the following characteristics: Aircraft size, VIP seats, economy class seats, material quality, security system, and speed level.
Currently, it offers 3 types of aircraft ready for sale.

Wayne Rooney Plane:
Quality AAA
200 economy class seats
70 VIP seats
90 square meters
Security system AAA
Speed level AAA

Eric Cantona Plane:
Quality AAA
150 economy class seats
80 VIP seats
110 square meters
Security system AAA
Speed level AA

Bobby Charlton Plane:
Quality AA
100 economy class seats
40 VIP seats
120 square meters
Security system AA
Speed level A

The AAA material costs £60,000.
The AA material costs £54,000.
The A material costs £48,000.

The AAA security system costs £75,000.
The AA security system costs £68,000.
The A security system costs £59,000.

The AAA speed level costs £89,000.
The AA speed level costs £78,000.
The A speed level costs £70,000.

In the Wayne Rooney and Eric Cantona planes, each economy class seat costs £400, and each VIP seat costs £1200.

In the Bobby Charlton plane, each economy class seat costs £300, and each VIP seat costs £1000.*/



//The problem do not mention the price per square meter so i will set it in £90

//Creating the plane class
class Plane{
    //private attributes
    #squareMeters;
    #material;
    #securitySystem;
    #speedLevel;
    #vipSeats;
    #vipSeatsCost;
    #regularSeats;
    #regularSeatsCost;
    #totalCost = 0;

    constructor(squareMeters,material,securitySystem,speedLevel,vipSeats,vipSeatsCost,regularSeats,regularSeatsCost){
        this.#squareMeters = squareMeters;
        this.#material = material;
        this.#securitySystem = securitySystem;
        this.#speedLevel = speedLevel;
        this.#vipSeats = vipSeats;
        this.#regularSeats = regularSeats;
        this.#regularSeatsCost = regularSeatsCost;
        this.#vipSeatsCost = vipSeatsCost;
    }

//getters
    get getSquareMeters(){
        return this.#squareMeters;
    }
    get getMaterial (){
        return this.#material;
    }
    get getSecuritySystem(){
        return this.#securitySystem;
    }
    get getSpeedLevel(){
        return this.#speedLevel;
    }
    get getVipSeats(){
        return this.#vipSeats;
    }
    get getRegularSeats(){
        return this.#regularSeats;
    }
    get getTotalCost(){
        return this.#totalCost;
    }
    get getVipSeatsCost(){
        return this.#vipSeatsCost;
    }
    get getRegularSeatsCost(){
        return this.#regularSeatsCost;
    }

//setters
    set setSquareMeters(newSquareMeters){
        this.#squareMeters = newSquareMeters;
    }
    set setMaterial (newMaterial){
        this.#material = newMaterial;
    }
    set setSecuritySystem(newSecuritySystem){
        this.#securitySystem = newSecuritySystem;
    }
    set setSpeedLevel(newSpeedLevel){
        this.#speedLevel = newSpeedLevel;
    }
    set setTotalCost(newTotalCost){
        //nothing
    }
    set setVipSeats(newVipSeats){
        this.#vipSeats = newVipSeats;
    }
    set setRegularSeats(newRegulatSeats){
        this.#regularSeats = newRegulatSeats;
    }
    set setVipSeatsCost(newVipSeatsCost){
        this.#vipSeatsCost = newVipSeatsCost;
    }
    set setRegularSeatsCost(newRegularSeatsCost){
        this.#regularSeatsCost = newRegularSeatsCost;
    }

    //Calculating the cost of the plane
    calculateTotalCost(){
        let total = 0;
        //Adding the price depending on the material type
        switch(this.#material){
            case "AAA":
                total += 60000;
                break;

            case "AA":
                total += 54000;
                break;

            case "A":
                total += 48000;
                break;
        }
        //Adding the price depending on the security system
        switch(this.#securitySystem){
            case "AAA":
                total += 75000;
                break;

            case "AA":
                total += 68000;
                break;

            case "A":
                total += 59000;
                break;
        }
        //Adding the price depending on the speed level
        switch(this.#speedLevel){
            case "AAA":
                total += 89000;
                break;

            case "AA":
                total += 78000;
                break;

            case "A":
                total += 70000;
                break;
        }
        //adding the price of the seats
        total += this.#regularSeats*this.#regularSeatsCost; + this.#vipSeats*this.#vipSeatsCost + this.#squareMeters * 90;
        //adding the new total
        this.#totalCost = total;
    }

}

//Creating the objects
let wayneRooneyPlane = new Plane(90,"AAA","AAA","AAA",70,1200,200,400);
let ericCantonaPlane = new Plane(110,"AAA","AAA","AA",80,1200,150,400);
let bobbyCharltonPlane = new Plane(120,"AA","AA","A",40,1000,100,300);
wayneRooneyPlane.calculateTotalCost();
ericCantonaPlane.calculateTotalCost();
bobbyCharltonPlane.calculateTotalCost();
alert("The Waiyne Rooney Plane costs: £" + wayneRooneyPlane.getTotalCost);
alert("The Eric Cantona Plane costs: £" + ericCantonaPlane.getTotalCost);
alert("The Bobby Charlton Plane costs: £" + bobbyCharltonPlane.getTotalCost);