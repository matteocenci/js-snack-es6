const persone = [
    {nome: "pipp", cognome: "tito", età: "15"},
    {nome: "baldo", cognome: "dado", età: "54"},
    {nome: "oper", cognome: "coppa", età: "12"},
    {nome: "lola", cognome: "xiao", età: "76"},
    {nome: "modo", cognome: "vedono", età: "33"},
    {nome: "wei", cognome: "shen", età: "27"},
];


const personePatente = persone.map(persona => {
    const età = persona.età;
    const string = `${persona.nome} ${persona.cognome} ${età >= 18 ? "può guidare" : "non può guidare"}`;

    return string;
})

console.log(personePatente);
