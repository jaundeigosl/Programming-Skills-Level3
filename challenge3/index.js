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


let squareMeterHouses = [200 , 150, 100, 100, 80];
let bedroomsAmount=[ 3, 2 ,2 , 1 ,1];
let bathroomAmount=[2, 2 ,1 ,2 ,1];
let valuePerHouse=[];
for(let i = 0; i < 5;i++){
    valuePerHouse.push(squareMeterHouses[i] *90 + bedroomsAmount[i]*40 + bathroomAmount[i]*30);
}
let response;
let space;
let bedrooms;
let bathrooms;
console.log(valuePerHouse);

while(true){
    response = prompt("Welcome to the Real State Rent System \nSelect an option\n1-Search a house to rent\n2-Exit");
    if(response ==1){
        space= prompt(`The first thing you must choose is the size of the house\n\nAvailable sizes:\n${squareMeterHouses[0]}\n${squareMeterHouses[1]}\n${squareMeterHouses[2]}\n${squareMeterHouses}\n${squareMeterHouses[3]}\n${squareMeterHouses[4]}`);
        if(space == 100){
            bathrooms = prompt
        }else{
            if(space<80 || space >200){
                alert("Invalid amount");
                break;
            }else{
                alert(`The price of this house is `)
            }
        }
    }else{
        break;
    }
    
    break;
}
