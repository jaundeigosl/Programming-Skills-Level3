/*2. Amazon Software Engineer 

Amazon has hired you as a software engineer. Your first task is to create a system that allows calculating the price of shipping based on distance. Fulfill the following requirements:
Amazon has one branch in each state of the USA.
Research the approximate distance between each pair of states.
The price is $50 USD per kilometer.
The minimum number of packages to transport is 100, and the maximum is 500.
If the number of packages exceeds 200, a larger vehicle should be recommended, with a price of $60 USD per kilometer.
Based on the distance, the system should calculate an estimated delivery time.
*/

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
//The data in the txt file is from developers.google
let statesData = "AK,63.588753,-154.493062,Alaska,AL,32.318231,-86.902298,Alabama,AR,35.20105,-1.831833,Arkansas,AZ,34.048928,-111.093731,Arizona,CA,36.778261,-119.417932,California,CO,39.550051,-105.782067,Colorado,CT,41.603221,-73.087749,Connecticut,DC,38.905985,-77.033418,District of Columbia,DE,38.910832,-75.52767,Delaware,FL,27.664827,-81.515754,Florida,GA,32.157435,-82.907123,Georgia,HI,19.898682,-155.665857,Hawaii,IA,41.878003,-93.097702,Iowa,ID,44.068202,-114.742041,Idaho,IL,40.633125,-89.398528,Illinois,IN,40.551217,-85.602364,Indiana,KS,39.011902,-98.484246,Kansas,KY,37.839333,-84.270018,Kentucky,LA,31.244823,-92.145024,Louisiana,MA,42.407211,-71.382437,Massachusetts,MD,39.045755,-76.641271,Maryland,ME,45.253783,-69.445469,Maine,MI,44.314844,-85.602364,Michigan,MN,46.729553,-94.6859,Minnesota,MO,37.964253,-91.831833,Missouri,MS,32.354668,-89.398528,Mississippi,MT,46.879682,-110.362566,Montana,NC,35.759573,-79.0193,North Carolina,ND,47.551493,-101.002012,North,Dakota NE,41.492537,-99.901813,Nebraska,NH,43.193852,-71.572395,New Hampshire,NJ,40.058324,-74.405661,New Jersey,NM,34.97273,-105.032363,New Mexico,NV,38.80261,-116.419389,Nevada,NY,43.299428,-74.217933,New York,OH,40.417287,-82.907123,Ohio,OK,35.007752,-97.092877,Oklahoma,OR,43.804133,-120.554201,Oregon,PA,41.203322,-77.194525,Pennsylvania,PR,18.220833,-66.590149,Puerto Rico,RI,41.580095,-71.477429,Rhode Island,SC,33.836081,-81.163725,South Carolina,SD,43.969515,-99.901813,South Dakota,TN,35.517491,-86.580447,Tennessee,TX,31.968599,-99.901813,Texas,UT,39.32098,-111.093731,Utah,VA,37.431573,-78.656894,Virginia,VT,44.558803,-72.577841,Vermont,WA,47.751074,-120.740139,Washington,WI,43.78444,-88.787868,Wisconsin,WV,38.597626,-80.454903,West Virginia,WY,43.075968,-107.290284,Wyoming";
//spliting the file with the , and the \n character
let splitedInfo = statesData.split(/,/);
console.log(splitedInfo);

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
//console.log("Welcome to Amazon shipping system!\n1-Send a package\n2-Exit\n\n");
resp = parseInt(prompt("Welcome to Amazon shipping system!\n1-Send a package\n2-Exit\n\n"));
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
                            switch(packageOption){
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