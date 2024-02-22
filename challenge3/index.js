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
let response = parseInt(prompt("Welcome to the Real State Rent System \nSelect an option\n1-See available houses\n2-Exit"));
if(response ==1){
        console.log("Available houses\nHouse value  square meters    bedrooms   bathrooms\n");
        for(let i = 0; i < 5;i++){
            console.log(`  ${valuePerHouse[i]}              ${squareMeterHouses[i]}          ${bedroomsAmount[i]}        ${bathroomAmount[i]}\n`)
        }
    }else{

    }

