// ============================================================
//  BLOCCO 4 — ARRAY · SOLUZIONI
// ============================================================


// ── ESERCIZIO 1 (facile) ────────────────────────────────────
// Manipolazione base di un array numerico.

const numeri = [4, 9, 2, 7, 1, 5, 8, 3, 6];

// Gli indici partono da 0; l'ultimo è length - 1
console.log("Primo elemento: ", numeri[0]);
console.log("Ultimo elemento:", numeri[numeri.length - 1]);
console.log("Numero elementi:", numeri.length);

// push() aggiunge in fondo e restituisce la nuova lunghezza
numeri.push(10);
console.log("Dopo push(10):", numeri);

// shift() rimuove il primo elemento e lo restituisce
const rimosso = numeri.shift();
console.log("Elemento rimosso:", rimosso);
console.log("Array finale:", numeri);

// Output:
// Primo elemento:  4
// Ultimo elemento: 6
// Numero elementi: 9
// Dopo push(10): [4, 9, 2, 7, 1, 5, 8, 3, 6, 10]
// Elemento rimosso: 4
// Array finale: [9, 2, 7, 1, 5, 8, 3, 6, 10]


// ── ESERCIZIO 2 (facile) ────────────────────────────────────
// Saluti e ricerca in un array di nomi.

const nomi = ["Luca", "Anna", "Marco", "Sofia", "Giulia"];

// for...of itera direttamente sui valori (non sugli indici)
for (const n of nomi) {
  console.log("Ciao, " + n + "!");
}

// includes() restituisce true/false
console.log('\n"Marco" è presente:', nomi.includes("Marco"));   // true
console.log('"Paolo" è presente:', nomi.includes("Paolo"));    // false

// indexOf() restituisce la posizione, oppure -1 se non trovato
console.log('Posizione di "Sofia":', nomi.indexOf("Sofia"));   // 3

// Output:
// Ciao, Luca!
// Ciao, Anna!
// Ciao, Marco!
// Ciao, Sofia!
// Ciao, Giulia!
//
// "Marco" è presente: true
// "Paolo" è presente: false
// Posizione di "Sofia": 3


// ── ESERCIZIO 3 (intermedio) ────────────────────────────────
// Carrello della spesa con map e filter.

const carrello = [
  { nome: "Mela",    prezzo: 0.5,  quantita: 6 },
  { nome: "Pane",    prezzo: 1.2,  quantita: 2 },
  { nome: "Latte",   prezzo: 1.0,  quantita: 3 },
  { nome: "Pasta",   prezzo: 0.85, quantita: 4 },
  { nome: "Yogurt",  prezzo: 0.7,  quantita: 5 },
];

// map() trasforma ogni elemento e restituisce un NUOVO array
// Non modifica l'array originale
const totaliPerProdotto = carrello.map(item => ({
  nome:   item.nome,
  totale: item.prezzo * item.quantita,
}));

// filter() restituisce un nuovo array con solo gli elementi
// per cui la funzione restituisce true
const prodottiCostosi = totaliPerProdotto.filter(item => item.totale > 3);
console.log("Prodotti con totale > 3€:", prodottiCostosi.map(p => p.nome));

// Calcoliamo il totale generale sommando i totali per prodotto
// reduce() "riduce" un array a un singolo valore
let totaleCarrello = 0;
for (const item of totaliPerProdotto) {
  totaleCarrello += item.totale;
}

// Stampa riepilogo
console.log("\n--- CARRELLO ---");
for (const item of carrello) {
  const tot = (item.prezzo * item.quantita).toFixed(2);
  console.log(item.nome + ": " + item.prezzo + " x " + item.quantita + " = " + tot + "€");
}
console.log("TOTALE: " + totaleCarrello.toFixed(2) + "€");

// Output:
// Prodotti con totale > 3€: [ 'Mela', 'Pasta', 'Yogurt' ]
//
// --- CARRELLO ---
// Mela: 0.5 x 6 = 3.00€
// Pane: 1.2 x 2 = 2.40€
// Latte: 1 x 3 = 3.00€
// Pasta: 0.85 x 4 = 3.40€
// Yogurt: 0.7 x 5 = 3.50€
// TOTALE: 15.30€


// ── ESERCIZIO 4 (difficile) ─────────────────────────────────
// Analisi statistica con bubble sort manuale.

const voti = [72, 85, 91, 60, 78, 95, 55, 88, 73, 82,
              67, 90, 74, 86, 61, 79, 93, 58, 84, 77];

// 1. Media: somma tutti i voti e dividi per la quantità
let somma = 0;
for (const v of voti) {
  somma += v;
}
const media = somma / voti.length;
console.log("Media:", media.toFixed(2));

// 2. Max e min con loop manuale
// Partiamo assumendo che il primo elemento sia il massimo/minimo;
// poi aggiorniamo se troviamo qualcosa di più grande/piccolo
let massimo = voti[0];
let minimo  = voti[0];
for (const v of voti) {
  if (v > massimo) massimo = v;
  if (v < minimo)  minimo  = v;
}
console.log("Voto massimo:", massimo);
console.log("Voto minimo: ", minimo);

// 3. Voti sopra la media
let sopraMedea = 0;
for (const v of voti) {
  if (v > media) sopraMedea++;
}
console.log("Voti sopra la media:", sopraMedea);

// 4. Mediana con Bubble Sort manuale
// Copiamo l'array per non modificare l'originale (spread operator)
const ordinati = [...voti];

// Bubble Sort: confronta coppie adiacenti e le scambia se fuori ordine.
// Ogni "passata" porta il valore più grande in fondo.
// Ripetiamo finché non ci sono più scambi.
let scambiEffettuati;
do {
  scambiEffettuati = false;
  for (let i = 0; i < ordinati.length - 1; i++) {
    if (ordinati[i] > ordinati[i + 1]) {
      // Scambio con variabile temporanea
      const temp       = ordinati[i];
      ordinati[i]      = ordinati[i + 1];
      ordinati[i + 1]  = temp;
      scambiEffettuati = true;
    }
  }
} while (scambiEffettuati);

// Con numero pari di elementi la mediana è la media dei due centrali
const metà = Math.floor(ordinati.length / 2);
const mediana = ordinati.length % 2 === 0
  ? (ordinati[metà - 1] + ordinati[metà]) / 2
  : ordinati[metà];
console.log("Mediana:", mediana);

// 5. Distribuzione per fasce
const fasce = { "90-100": 0, "80-89": 0, "70-79": 0, "60-69": 0, "<60": 0 };
for (const v of voti) {
  if      (v >= 90) fasce["90-100"]++;
  else if (v >= 80) fasce["80-89"]++;
  else if (v >= 70) fasce["70-79"]++;
  else if (v >= 60) fasce["60-69"]++;
  else              fasce["<60"]++;
}
console.log("\n--- DISTRIBUZIONE ---");
for (const fascia in fasce) {
  console.log(fascia + ": " + fasce[fascia] + " studenti");
}

// Output:
// Media: 77.15
// Voto massimo: 95
// Voto minimo:  55
// Voti sopra la media: 10
// Mediana: 78.5
//
// --- DISTRIBUZIONE ---
// 90-100: 4 studenti
// 80-89:  6 studenti
// 70-79:  6 studenti
// 60-69:  3 studenti
// <60:    1 studenti
