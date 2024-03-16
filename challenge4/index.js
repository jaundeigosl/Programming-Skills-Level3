/*4. United Direct: The Manchester United's Shop


United Direct, the official store of Manchester United FC, has hired you as a developer for their online store. The manager wishes to launch a new line of products with different discounts.

Develop the shopping cart of this application considering the following features:

The jerseys are classified by: Men, Women, and Children.
Sizes range from XS to 3XL.
All men's and women's jerseys are priced at £100 if they are short-sleeved.
Long-sleeved jerseys cost £120.
Short-sleeved children's jerseys are priced at £70.
Long-sleeved children's jerseys are priced at £90.
If you are a club member, you get a 20% discount on the total purchase.
The user can buy as many jerseys as they want.
If the buyer wishes to personalize their jersey with a player's number, there is an additional charge of £25.
The stock is as follows:

FOR MEN:

First kit short-sleeved jersey: 100 units
First kit long-sleeved jersey: 90 units
Second kit short-sleeved jersey: 80 units
Second kit long-sleeved jersey: 80 units
Third kit short-sleeved jersey: 85 units
Third kit long-sleeved jersey: 50 units
FOR WOMEN:

First kit short-sleeved jersey: 105 units
First kit long-sleeved jersey: 92 units
Second kit short-sleeved jersey: 81 units
Second kit long-sleeved jersey: 81 units
Third kit short-sleeved jersey: 85 units
Third kit long-sleeved jersey: 51 units
FOR CHILDREN:

First kit short-sleeved jersey: 200 units
First kit long-sleeved jersey: 100 units
Second kit short-sleeved jersey: 85 units
Second kit long-sleeved jersey: 85 units
Third kit short-sleeved jersey: 90 units
Third kit long-sleeved jersey: 62 units

IMPORTANT: You decide how many sizes are available for each available shirt size. */


//Needs more validation

//class purchased Jersey

class PurchasedJersey{
    #name;
    #price;
    #size;
    #amount;
    #type;
    #number ;
    constructor(name,price,size,amount,type,number){
        this.#name =name;
        this.#price =price;
        this.#size = size;
        this.#amount = amount;
        this.#type = type;
        if(number == undefined){
            this.#number = -1;
        }else{
            this.#number = number ;
        }
    }


//getters
    get getName(){
        return this.#name;
    }
    get getPrice(){
        return this.#price;
    }
    get getSize(){
        return this.#size;
    }
    get getAmount(){
        return this.#amount;
    }
    get getNumber(){
        return this.#number;
    }
    get getType(){
        return this.#type;
    }


//setters
    set setName(newName){
        this.#name = newName;
    }
    set setPrice(newPrice){
        this.#price = newPrice;
    }
    set setSize(newSize){
        this.#price = newSize;
    }
    set setAmount(newAmount){
        this.#amount = newAmount
    }
    set setNumber(newNumber){
        this.#number = newNumber;
    }
    set setType(newType){
        this.#type = newType;
    }
}

//Jersey Class for the types and stock
class Jersey {
    #stockLongSleeved;
    #stockShortSleeved;
    #price = [];
    #sizes =[];
    
    constructor(stockLongSleeved,stockShortSleeved, priceLongSleeved, priceShortSleeved,sizes){
        let aux=0;
        for(let i = 0; i < stockLongSleeved.length;i++){
            aux+=stockLongSleeved[i];
        }
        this.#stockLongSleeved = aux;
        aux=0;
        for(let i = 0; i < stockShortSleeved.length;i++){
            aux+=stockShortSleeved[i];
        }
        this.#stockShortSleeved = aux;
        this.#price.push(priceLongSleeved);
        this.#price.push(priceShortSleeved);
        this.#sizes = sizes;
    }

//Getters
    get getStockLongSleeved(){
        return this.#stockLongSleeved;
    }
    get getStockShortSleeved(){
        return this.#stockShortSleeved;
    }
    get getPriceLongSleeved(){
        return this.#price[0];
    }
    get getPriceShortSleeved(){
        return this.#price[1];
    }
    get getSizes(){
        return this.#sizes;
    }

//Setters
    set setStockLongSleeved(newStock){
        this.#stockLongSleeved = newStock;
    }
    set setStockShortSleeved(newStock){
        this.#stockShortSleeved = newStock;
    }
    set setPriceLongSleeved(newPrice){
        this.#price[0] = newPrice;
    }
    set setPriceShortSleeved(newPrice){
        this.#price[1] = newPrice;
    }
    set setSizes(newSizes){
        this.#sizes = newSizes
    }
}
//stocks
let manJerseyLongSleevedStock = [90, 80, 50];
let manJerseyShortSleevedStock = [100, 80, 85];
let womanJerseyLongSleevedStock = [92,81,51];
let womanJerseyShortSleevedStock = [105,81,85];
let childrenJerseyLongSleevedStock = [100,85,62];
let childrenJerseyShortSleevedStock = [200,85,90];

// sizes 
// XS. S. M. L. XL. 2XL 3XL

let sizesManAndWomanToShow = ["1- XS ","2- S ","3- M ","4- L ","5- XL ","6- 2XL ","7- 3XL "];
let sizesManAndWoman= ["XS","S","M","L","XL","2XL","3XL"];
let sizesChildrentoShow = ["1- S ","2- M ","3- L "];
let sizesChildren = ["S","M","L"];
let gender= [ "Male" ,"Female" ,"Child"];

//Jersey Types
let manJersey = new Jersey(manJerseyLongSleevedStock,manJerseyShortSleevedStock,120,100,sizesManAndWoman);
let womanJersey = new Jersey(womanJerseyLongSleevedStock,womanJerseyShortSleevedStock,120,100,sizesManAndWoman);
let childrenJerysey= new Jersey(childrenJerseyLongSleevedStock,childrenJerseyShortSleevedStock,90,70,sizesChildren);


function amount(jerseyObject , jerseyType, buyOption,size){
    let flag = true;
    let number = 0;
    let total=0;
    let stock;
    let price;
    let personalize;
    let personalizeOption;
    let name;

    //getting the stock and price of the respective choice 
    if(jerseyType==0){
        stock=jerseyObject.getStockLongSleeved;
        price = jerseyObject.getPriceLongSleeved;
        name = "Long Sleeved Jersey";
    }else{
        stock=jerseyObject.getStockShortSleeved;
        price = jerseyObject.getPriceShortSleeved;
        name = "Short Sleeved Jersey";
    }

    //asking the amount to buy and validating it 
    if(stock == 0){
        alert("There are not jersey available");
    }else{
        while(flag){
            number = parseInt(prompt("How many jerseys do you want ?:"));
            if(number >stock ){
                alert("Invalid amount");
            }else{
                flag = false;  
                if(jerseyType-1==0){
                    jerseyObject.setStockLongSleeved= (jerseyObject.getStockLongSleeved-number);
                }else{
                    if(jerseyType-1==1){
                        jerseyObject.setStockShortSleeved = (jerseyObject.getStockShortSleeved-number);
                    }
                }
                //adding the purchase to the cart with the total price
                personalizeOption = parseInt(prompt("Do you want to personalize it with a number ?:\n1-Yes\n2-No"));
                if(personalizeOption==1){
                    personalize = parseInt(prompt("Enter the number you want in the jersey:"));
                    total = (price * number) + (number * 25);
                    cart.push(new PurchasedJersey(name,total,size,number,gender[buyOption-1],personalize))
                    alert("Purcharse added, you can pay now");
                }else{
                    total = price * number;
                    cart.push(new PurchasedJersey(name,total,size,number,gender[buyOption-1]))
                    alert("Purcharse added, you can pay now");
                }
            }
        }
    }
    return total;
}

//Ask the details of the purcharse
function buy(){
    let buyOption = parseInt(prompt("What type of Jersey do you whish to buy?\n 1-Man\n2-Woman\n3-Children\n"));
    let jerseyType = parseInt(prompt("Long Sleeved or Short Sleeved ?\n 1-Long Sleeved\n 2-Short Sleeved\n"));
    jerseyType-=1;
    let size;
    let aux;
    let totalAmount;
    //Selecting the size
    switch(buyOption){
        case 1:
        case 2:
            aux = parseInt(prompt("Choose a size: " + sizesManAndWomanToShow));
            size = sizesManAndWoman[aux-1];
            break;
        case 3:
            aux = parseInt(prompt("Choose a size: " + sizesChildrentoShow));
            size = sizesChildren[aux-1];
            break;
        default:
            break;
    }
    switch(buyOption){
        case 1 :
             totalAmount = amount(manJersey, jerseyType,buyOption,size);
            break;
        case 2:
            totalAmount = amount(womanJersey , jerseyType,buyOption,size);
            break;
        case 3:
            totalAmount = amount(childrenJerysey , jerseyType,buyOption,size);
            break;
        default:
            break;
    }
    return totalAmount;
}

//shows the total and ask for the member discount
function pay(total){
    let memebershipOption;
    memebershipOption = parseInt(prompt("Are you a member ?\n1-Yes\n2-No"));
    if(memebershipOption==1){
        alert("The total Amount would be : " + (total * 0.80));
    }else{
        alert("The total Amount would be : " + total);
    }
}

let memebership = false;
let jerseyPersonalizedNumber = 0;
let flagMainMenu = true;
let total = 0;
let menuOption = 0;
let cart = [];

//Main menu
while(flagMainMenu){
    menuOption = parseInt(prompt("Welcome to the Glorius M.U. Jersey Store, please select an option\n 1-Buy\n2-Pay\n3-show cart\n4-Exit"));
    switch(menuOption){
        case 1:
            total += buy();
            break;
        case 2:
            if(total == 0){
                alert("There is nothing to pay for\n");
            }else{
                pay(total);
            }
            break;
        case 3:
            if(total ==0){
                alert("There is nothing in the cart\n");
            }else{
                alert("It's in the console");
                for(let i = 0; i < cart.length;i++){
                    console.log(cart[i]);
                }
            }
            break;
        default:
            flagMainMenu = false;
            break;
    }
}

