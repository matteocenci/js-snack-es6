// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min
}


const teams = [
    {name:"Juve", points: 0, foul:0},
    {name:"Inter", points: 0, foul:0},
    {name:"Milan", points: 0, foul:0},
    {name:"Lazio", points: 0, foul:0},
];


teams.forEach((team) => {
    team.points = getRandomNumber(1, 20);
    team.foul = getRandomNumber(1, 10);
})

console.log(teams);


const teamsFouls = teams.map(({name, foul}) => ({name, foul}));

console.log("Lista di squadre: ");
console.log(teamsFouls);