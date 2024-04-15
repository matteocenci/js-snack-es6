// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const bikeList = [
    {
        bike: "Pantani's bike",
        weight: 25,
    },
    {
        bike: "TREK",
        weight: 16,
    },
    {
        bike: "Pittarosso",
        weight: 11,
    },
    {
        bike: "CUBE",
        weight: 32,
    },
    {
        bike: "woom",
        weight: 13,
    },
];

const notheavy = document.getElementById("notHeavy");
let minWeight = bikeList[0].weight;
let minName = bikeList[0].bike;

bikeList.forEach((curBike) => {
    const {bike, weight} = curBike;


    if (weight < minWeight) {
        minWeight = weight;
        minName = bike;
    }
    

})
notheavy.innerHTML = `${minName} ${minWeight}`;