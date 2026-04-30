// 1. Array playlist + stampa prima canzone
let playlist = ["Blinding Lights", "Believer", "Shape of You"];

console.log(playlist[0]); // per visualizzare il primo elemento dell'array
console.log(playlist);    // per visualizzare l'intero array

// ---------------------------------------------------------------------------------------
// 2. Array materie + lunghezza
let materie = ["Matematica", "Italiano", "Storia", "Inglese"];

console.log("Numero materie:", materie.length); // .length ritorna la dimensione dell'array


// ---------------------------------------------------------------------------------------
// 3. Push e Pop su array frutta
let frutta = ["Mela", "Banana", "Pera", "Arancia"];

console.log("Array iniziale:", frutta);

frutta.push("Kiwi");
console.log("Dopo push:", frutta);      // .push("Elemento") inserisce un elemento in coda (ultima posizione) dell'array

frutta.pop();
console.log("Dopo pop:", frutta);       // .pop() toglie l'ultimo elemento dell'array


// ---------------------------------------------------------------------------------------
// 4. Includes con prodotti
let prodotti = ["Pane", "Pasta", "Latte", "Uova", "Burro"];

if (prodotti.includes("Latte")) {                         // .includes("Elemento") controlla se "Elemento" è presente nell'array
  console.log("Latte è presente nella lista");
} else {
  console.log("Latte non è presente nella lista");
}


// ---------------------------------------------------------------------------------------
// 5. Ciclo for sui voti
// Creo un array chiamato "voti" che contiene più valori.
// Un array è una lista ordinata di elementi.
let voti = [7, 5, 9, 6, 8, 4, 10];

// Variabili che useremo per contare quanti studenti sono promossi e bocciati.
let promossi = 0;
let bocciati = 0;

// Ciclo for: serve per scorrere tutti gli elementi dell'array.
for (let i = 0; i < voti.length; i++) {

  // "i" rappresenta l'indice (la posizione) nell'array.
  // Gli array partono sempre da indice 0.
  //
  // Esempio:
  // voti[0] = 7
  // voti[1] = 5
  // voti[2] = 9
  //
  // voti[i] significa:
  // "prendi il valore presente nella posizione i"

  // .length indica quanti elementi contiene l'array.
  // In questo caso voti.length vale 7.
  //
  // È utile perché così il ciclo funziona automaticamente
  // anche se aggiungi o rimuovi elementi dall'array.

  if (voti[i] >= 6) {

    // Se il voto è almeno 6, lo studente è promosso.
    console.log(voti[i], "Promosso");

    // promossi++ significa:
    // promossi = promossi + 1
    //
    // Serve per aumentare il contatore dei promossi.
    // Ogni volta che troviamo un promosso, aggiungiamo 1.
    promossi++;

  } else {

    // Se il voto è minore di 6, lo studente è bocciato.
    console.log(voti[i], "Bocciato");

    // bocciati++ significa:
    // bocciati = bocciati + 1
    //
    // Anche qui stiamo contando quanti bocciati troviamo.
    bocciati++;
  }
}

// Alla fine del ciclo stampiamo i risultati finali.
console.log("Promossi:", promossi);
console.log("Bocciati:", bocciati);


// ---------------------------------------------------------------------------------------
// 1. Funzione benvenuto
function benvenuto(nome) {
  console.log("Ciao " + nome + ", benvenuto nel corso!");
}

benvenuto("Marco");
benvenuto("Luca");
benvenuto("Anna");


// ---------------------------------------------------------------------------------------
// 2. Funzione somma
function somma(a, b) {
  return a + b;
}

console.log(somma(5, 7));
console.log(somma(100, 23));


// ---------------------------------------------------------------------------------------
// 3. Controlla età
function controllaEta(eta) {
  if (eta >= 18) {
    return "Maggiorenne";
  } else {
    return "Minorenne";
  }
}

console.log(controllaEta(15));
console.log(controllaEta(18));
console.log(controllaEta(25));


// ---------------------------------------------------------------------------------------
// 4. Calcolo sconto
function calcolaSconto(prezzo, percentuale) {
  let sconto = prezzo * (percentuale / 100);
  return prezzo - sconto;
}

console.log(calcolaSconto(100, 20));


// ---------------------------------------------------------------------------------------
// 5. Carrello con funzioni
let carrello = [];

function aggiungiProdotto(nome) {
  carrello.push(nome);
  console.log("Carrello:", carrello);
}

function rimuoviProdotto(nome) {
  let indice = carrello.indexOf(nome);

  if (indice !== -1) {
    carrello.splice(indice, 1);
    console.log(nome + " rimosso");
  } else {
    console.log("Prodotto non trovato");
  }

  console.log("Carrello:", carrello);
}

function contaProdotti() {
  return carrello.length;
}

// Test
aggiungiProdotto("Pane");
aggiungiProdotto("Latte");
aggiungiProdotto("Pasta");

rimuoviProdotto("Latte");

console.log("Prodotti rimasti:", contaProdotti());