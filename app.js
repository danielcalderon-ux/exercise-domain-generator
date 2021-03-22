let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.net',];

function ranDom() {
    var Pronoun2 = pronoun[Math.floor(Math.random() * pronoun.length)];
    var Adj2 = adj[Math.floor(Math.random() * adj.length)];
    var Noun2 =  noun[Math.floor(Math.random() * noun.length)];
    var Domain2 =  domain[Math.floor(Math.random() * domain.length)];
    return Pronoun2+Adj2+Noun2+Domain2;
}

console.log(ranDom());