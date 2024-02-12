/*Manchester United Line Up

You are the Manager of Manchester United FC, and your objective is to defeat Tottenham Hotspur. To achieve this, you must consider the power level of your players and choose the appropriate line-up against your opponent. Select 11 players from your team.

Tottenham Hotspur:

Goalkeepers

Hugo Lloris 85 pts
Guglielmo Vicario 79 pts
Fraser Forster 79 pts
Brandon Austin 79 pts

Defenders

Eric Dier 80 pts
Cristian Romero 80 pts
Davinson Sánchez 74 pts
Japhet Tanganga 70 pts
Matt Doherty 70 pts
Djed Spence 70 pts
Sergio Reguilón 74 pts
Ben Davies 76 pts
Joe Rodon 70 pts
Mislav Orsic 71 pts

Midfielders

Oliver Skipp 70 pts
Pierre-Emile Højbjerg 70 pts
Yves Bissouma 72 pts
James Maddison 74 pts
Giovani Lo Celso 78 pts
Ryan Sessegnon 80 pts
Dejan Kulusevski 60 pts
Pape Sarr 65 pts
Rodrigo Bentancur 65 pts
Oliver Skipp 65 pts

Forwards

Son Heung-Min 78 pts
Richarlison 82 pts
Bryan Gil 80 pts
Timo Werner 82 pts
Brennan Johnson 70 pts
Manor Solomon 70 pts
Alejo Véliz 75 pts
Dane Scarlett 75 pts

Manchester United:

Goalkeepers

André Onana 80 pts
Tom Heaton 75 pts
Altay Bayindir 69 pts

Defenders

Victor Lindelöf 80 pts
Harry Maguire 82 pts
Lisandro Martínez 82 pts
Tyrell Malacia 67 pts
Raphaël Varane 80 pts
Diogo Dalot 89 pts
Luke Shaw 89 pts
Aaron Wan-Bissaka 70 pts

Midfielders

Sofyan Amrabat 76 pts
Scott McTominay 80 pts
Bruno Fernandes 88 pts
Christian Eriksen 67 pts
Mason Mount 77 pts
Kobbie Mainoo 65 pts
Daniel Gore 60 pts

Forwards

Anthony Martial 50 pts
Marcus Rashford 76 pts
Antony 75 pts
Rasmus Højlund 80 pts
Alejandro Garnacho 85 pts
Facundo Pellistri: 75 pts
How it works: The system will randomly generate 11 Tottenham Hotspur players, comprising 1 goalkeeper, 3 midfielders, 4 midfielders, and 3 strikers.

As the Manager of Manchester United, you must select 11 players following the same system: 4-3-3.*/



//Function to asign the best players for each position
function asignPlayer(playersList,MCU,playersAmount,position,positionType){
    for(let i = 0; i < playersAmount;i++){
        index = 0;
        for(let j = 1; j < playersList[positionType].length;j++){
            if(playersList[positionType][j][1]>playersList[positionType][index][1]){
                index = j;
            }
        }
        MCU[position].push(playersList[positionType][index]);
        playersList[positionType].splice(index,1);
    }
}

//Function to assign random players
function asingRandomPlayer(playersList,team,playersAmount,position,positionType){
    for(let i = 0; i < playersAmount; i++){
        var rand = Math.floor(Math.random(playersList[positionType].length) * playersList[positionType].length);
        team[position].push(playersList[positionType][rand]);
        playersList[positionType].splice(rand,1);
    }
}

//objects representing the teams
let MCU = {
    fowards:[],
    midfielders:[],
    defenders:[],
    goalkeepers:[]
};

let Tottenham = {
    fowards:[],
    midfielders:[],
    defenders:[],
    goalkeepers:[]
};
                        //goalkeepers
let tottenhamPlayers = [[["Guglielmo Vicario ", 79],
                            ["Hugo Lloris ", 85],
                            ["Fraser Forster", 79],
                            ["Brandon Austin", 79]],
                        //defenders
                        [["Eric Dier", 80],
                            ["Cristian Romero", 80],
                            ["Davinson Sánchez", 74],
                            ["Japhet Tanganga", 70],
                            ["Matt Doherty", 70],
                            ["Djed Spence", 70],
                            ["Sergio Reguilón", 74],
                            ["Ben Davies", 76],
                            ["Joe Rodon", 70],
                            ["Mislav Orsic", 71]],
                        //midfielders
                        [["Oliver Skipp", 70],
                            ["Pierre-Emile Højbjerg", 70],
                            ["Yves Bissouma", 72],
                            ["James Maddison", 74],
                            ["Giovani Lo Celso", 78],
                            ["Ryan Sessegnon", 80],
                            ["Dejan Kulusevski" ,60],
                            ["Pape Sarr", 65],
                            ["Rodrigo Bentancur", 65],
                            ["Oliver Skipp" ,65]],
                        //fowards
                        [["Son Heung-Min" ,78],
                            ["Richarlison" ,82],
                            ["Bryan Gil" ,80],
                            ["Timo Werner" ,82],
                            ["Brennan Johnson" ,70],
                            ["Manor Solomon" ,70],
                            ["Alejo Véliz" ,75],
                            ["Dane Scarlett" ,75]]];

                //Goalkeepers
let mcuPlayers = [[["André Onana" ,80],
                    ["Tom Heaton", 75],
                    ["Altay Bayindir", 69]],
                //defenders
                [["Victor Lindelöf", 80],
                    ["Harry Maguire", 82],
                    ["Lisandro Martínez", 82],
                    ["Tyrell Malacia", 67],
                    ["Raphaël Varane", 80],
                    ["Diogo Dalot", 89],
                    ["Luke Shaw", 89],
                    ["Aaron Wan-Bissaka", 70]],
                //midfielders
                [["Sofyan Amrabat", 76],
                    ["Scott McTominay", 80],
                    ["Bruno Fernandes" ,88],
                    ["Christian Eriksen", 67],
                    ["Mason Mount", 77],
                    ["Kobbie Mainoo", 65],
                    ["Daniel Gore", 60]],
                //fowards    
                [["Anthony Martial", 50],
                    ["Marcus Rashford", 76],
                    ["Antony",75],
                    ["Rasmus Højlund", 80],
                    ["Alejandro Garnacho", 85],
                    ["Facundo Pellistri", 75]]];

let positionsAmountTottenham = [1,3,4,3];
let positionsAmountMCU = [1,4,3,3];
let positions = ["goalkeepers","defenders","midfielders","fowards"];
let mcuCounter = 0;
let tottenhamCounter = 0;


//Selecting the random players for the tottenham
for(let i = 0; i < 4; i ++){
    asingRandomPlayer(tottenhamPlayers,Tottenham,positionsAmountTottenham[i],positions[i],i);
}
//Selecting the best players for the  MCU
for(let i = 0; i < 4; i++){
    asignPlayer(mcuPlayers,MCU,positionsAmountMCU[i],positions[i],i);
} 
//Calculating the points of the MCU team
for(let position in MCU){
    for(let i = 0; i < MCU[position].length;i++){
        mcuCounter+=MCU[position][i][1];
    }
}
//Calculating the poinst of the Tottenham team
for(let position in Tottenham){
    for(let i = 0; i < Tottenham[position].length;i++){
        tottenhamCounter+=Tottenham[position][i][1];
    }
}
//Showing the teams and their score

console.log("Tottenham Team:");
console.log(Tottenham.goalkeepers);
console.log(Tottenham.defenders);
console.log(Tottenham.midfielders);
console.log(Tottenham.fowards);
console.log("Total points "+tottenhamCounter);

console.log("MCU Team:")
console.log(MCU.goalkeepers);
console.log(MCU.defenders);
console.log(MCU.midfielders);
console.log(MCU.fowards);
console.log("Total points "+mcuCounter);