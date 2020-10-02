

// Ferry costs averaged out, price in GBP per 1000nm
const a1 = 2300; //Microlight/TMG/C152/PA38/PA28/C172
const a2 = 2500; //PA28R/C182/SR22
const a3 = 2700; //PA32R/C210/C206
const a4 = 2900; //Seneca/DA42
const a5 = 3000; //Cessna Caravan
const a6 = 3750; //PA31/C402
const a7 = 4000; //King Air
const a8 = 5400; //JS41
const a9 = 5250; //DHC8-1/2/300
const a10 = 7800; //DHC8-400

const minSingle = 500;
const minMulti = 600;
const minTurbine = 700;
const minKing = 950;
const minJS = 1450;
const minDHC8 = 1800;
const minQ400 = 2000;

var aCost = 0;

var minPrice = 0;

var exchange = 1.097;

function ferryCalc(){

    var dist = document.getElementById("distance").value;

    var aircraftSelection = document.getElementById("aircraft").value;

    switch(aircraftSelection) {
        case "acft1":
            //Microlight/Motorglider
            aCost = a1;
            minPrice = minSingle;
            break;
        case "acft3":
            //C152/PA38
            aCost = a1;
            minPrice = minSingle;
            break;
        case "acft4":
            //C172/PA28
            aCost = a1;
            minPrice = minSingle;
            break;
        case "acft5":
            //C182/PA28RT/DA40
            aCost = a2;
            minPrice = minSingle;
            break;
        case "acft6":
            //C206/PA32/C210/SR22
            aCost = a3;
            minPrice = minSingle;
            break;
        case "acft7":
            //DA42/PA34
            aCost = a4;
            minPrice = minMulti;
            break;
        case "acft8":
            //PA31/C402
            aCost = a5;
            minPrice = minMulti;
            break;
        case "acft9":
            //Cessna Caravan
            aCost = a6;
            minPrice = minTurbine;
            break;
        case "acft10":
            //King Air
            aCost = a7;
            minPrice = minKing;
            break;
        case "acft11":
            //Jetstream 41
            aCost = a8;
            minPrice = minJS;
            break;
        case "acft12":
            //DHC8 1/2/300
            aCost = a9;
            minPrice = minDHC8;
            break;
        case "acft13":
            //DHC8 Q400
            aCost = a10;
            minPrice = minQ400;
            break;
        default:
            finalPrice = "No Selection Made."
    }

    var finalPrice = ((dist * aCost)/1000).toFixed(2);

    document.getElementById("result").innerHTML = `£ ${finalPrice} `;
    document.getElementById("euroResult").innerHTML = `€ ${((finalPrice)*exchange).toFixed(2)}`;

}

//EXCHANGE RATE CORRECT AS OF 02/10/2020

function resetFunc(){
    document.getElementById("distance").reset;
    document.getElementById("result").innerHTML = "£ 0.00";
    document.getElementById("euroResult").innerHTML = "€ 0.00";

}




