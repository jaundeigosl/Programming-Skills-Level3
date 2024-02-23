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

let wayneRooneyPlaneCost = 60000+(400*200)+(70*1200)+75000 + 89000;
let ericCantonaPlaneCost = 60000+(150*400)+(80*1200)+75000+78000;
let bobbyCharltonPlaneCost = 54000+(100*300)+(40*1000)+68000+70000;
console.log("The prices are :\nWayne Rooney Plane £"+wayneRooneyPlaneCost+"\nEric Cantona Plane £"+ericCantonaPlaneCost+"\nBobby Charlton Plane £"+bobbyCharltonPlaneCost);