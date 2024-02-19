/*
2. Amazon Software Engineer 

Amazon has hired you as a software engineer. Your first task is to create a system that allows calculating the price of shipping based on distance. Fulfill the following requirements:
Amazon has one branch in each state of the USA.
Research the approximate distance between each pair of states.
The price is $50 USD per kilometer.
The minimum number of packages to transport is 100, and the maximum is 500.
If the number of packages exceeds 200, a larger vehicle should be recommended, with a price of $60 USD per kilometer.
Based on the distance, the system should calculate an estimated delivery time.
*/

//The data in the txt file is from developers.google

//importing the file  system module 
import * as fs from 'node:fs';
//Importing the prompt function
import promptSync from 'prompt-sync';
const prompt = promptSync();
//function to calculate the distance in kilometers
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  
//reading the file and assing it to dataFile
let dataFile = fs.readFileSync('states.txt',"utf-8");
//spliting the file with the , and the \n character
let splitedInfo = dataFile.split(/,|\n/);

let latitude=[];
let longitude=[];
let states=[];
let i = 0;
const length = splitedInfo.length;
let j =1;
//spliting by info
while(i < (length / 4)){
    latitude.push(splitedInfo[j]);
    j+=1;
    longitude.push(splitedInfo[j]);
    j+=1;
    states.push(splitedInfo[j]);
    j+=2;
    i++;
}

let flag = true;
let packageAmount;
let packageOption;
let distance;
let originState;
let destinyState;
let resp;
//menu
console.log("Welcome to Amazon shipping system!\n1-Send a package\n2-Exit\n\n");
resp = parseInt(prompt());
switch(resp){
    case 1:
        //selecting the origin state
        console.log("\nPlease choose the estate you are in:\n");
        for(let i = 0; i <states.length;i++ ){
            console.log(i+1+`-${states[i]}\n`);
        }
        originState = parseInt(prompt());
        //validation
        if(originState<0 || originState>52){
            console.log("\nInvalid index");
            break;
        }else{
            //selecting destiny state
            console.log("\nPlease choose the destiny state:\n");
            for(let i = 0; i <states.length;i++ ){
                console.log(i+1+`-${states[i]}\n`);
            }
            destinyState = parseInt(prompt());
            //validation
            if(destinyState<0 || destinyState>52|| originState==destinyState){
                console.log("\nInvalid index");
                break;
            }else{
                //calculating the distance
                distance = getDistanceFromLatLonInKm(latitude[originState-1],longitude[originState-1],latitude[destinyState-1],longitude[destinyState-1]);
                while(flag){
                    //getting the amount of packages
                    console.log("How many packages do you wish to send ? The max is 500 and the min is 100\n");
                    packageAmount = parseInt(prompt());
                    //validating the amount
                    if(packageAmount<100 || packageAmount>500){
                        console.log("\nEnter a valid amount\n\n");
                    }else{
                        //if there are more than 200 packages showing the option
                        if(packageAmount>200){
                            console.log("The amount of packages is greater than 200 so the price per kilometer would be $60 and it's recommended to use a larger truck\n\nDo you whis to continue?\n1-Yes\n2-No\n\n");
                            packageOption=parseInt(prompt());
                            switch(parseInt(packageOption)){
                                case 1:
                                    //I asume that the truck is going at 100km per hour
                                    console.log(`the price would be $${(distance*60).toFixed(2)} and it would take ${(distance/100).toFixed(2)} hours`);
                                    flag = false;
                                    break;
                                case 2:
                                    break;
                                default:
                                    console.log("Invalid option\n");
                                    flag = false;
                                    break;
                            }
                        }else{
                            //case when the amount of packages is less than 200
                            console.log(`the price would be $${(distance*50).toFixed(2)} and it would take ${(distance/100).toFixed()} hours`);
                            flag = false;
                        }
                    }
                }
            }
        }
        break;
    case 2:
        break;
    default:
        console.log("Error");
        break;
}