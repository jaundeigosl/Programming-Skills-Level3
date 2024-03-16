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

let sizesManAndWoman = ["1- XS ","2- S ","3- M ","4- L ","5- XL ","6- 2XL ","7- 3XL "];
let sizesChildren = ["1- S ","2- M ","3- L "];

//Jersey Types
let manJersey = new Jersey(manJerseyLongSleevedStock,manJerseyShortSleevedStock,120,100,sizesManAndWoman);
let womanJersey = new Jersey(womanJerseyLongSleevedStock,womanJerseyShortSleevedStock,120,100,sizesManAndWoman);
let childrenJerysey= new Jersey(childrenJerseyLongSleevedStock,childrenJerseyShortSleevedStock,90,70,sizesChildren);



function amount(jerseyObject , jerseyType){
    let flag = true;
    let number = 0;
    let amountInStock = 0;
    let total=0;
    let stock;
    let price;
    let personalize;
    let personalizeOption;

    //getting the stock and price of the respective choice 
    if(jerseyType==0){
        stock=jerseyObject.getStockLongSleeved;
        price = jerseyObject.getPriceLongSleeved;
    }else{
        stock=jerseyObject.getStockShortSleeved;
        price = jerseyObject.getPriceShortSleeved;
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
                if(jerseyType==0){
                    jerseyObject.setStockLongSleeved= (jerseyObject.getStockLongSleeved-number);
                }else{
                    jerseyObject.setStockShortSleeved = (jerseyObject.getStockShortSleeved-number);
                }
                personalizeOption = parseInt(prompt("Do you want to personalize it with a number ?:\n1-Yes\n2-No"));
                if(personalizeOption==1){
                    personalize = parseInt(prompt("Enter the number you want in the jersey:"));
                    total = price * (number * 25);
                }else{
                    total = price * number;
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
    let size;
    let totalAmount;
    switch(buyOption){
        case 1:
        case 2:
            size = parseInt(prompt("Choose a size: " + sizesManAndWoman));
            break;
        case 3:
            size = parseInt(prompt("Choose a size: " + sizesChildren));
            break;
        default:
            break;
    }
    switch(buyOption){
        case 1 :
             totalAmount = amount(manJersey, jerseyType);
            break;
        case 2:
            totalAmount = amount(womanJersey , jerseyType);
            break;
        case 3:
            totalAmount = amount(childrenJerysey , jerseyType);
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
    menuOption = parseInt(prompt("Welcome to the Glorius M.U. Jersey Store, please select an option\n 1-Buy\n2-Pay\n3-Exit"));
    switch(menuOption){
        case 1:
            total = buy();
            break;
        case 2:
            if(total == 0){
                alert("There is nothing to pay for\n");
            }else{
                pay(total);
            }
            break;
        default:
            flagMainMenu = false;
            break;
    }
}

