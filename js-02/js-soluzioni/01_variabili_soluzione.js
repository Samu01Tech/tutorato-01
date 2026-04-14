// ============================================================
//  BLOCCO 1 — VARIABILI · SOLUZIONI
// ============================================================


// ── ESERCIZIO 1 (facile) ────────────────────────────────────
// Creare variabili nome, eta, attivo e stampare una frase.

const nome = "Mario";
const eta = 25;
const attivo = true;

// Concateniamo le variabili nella stringa con l'operatore +
console.log(nome + " ha " + eta + " anni. Loggato: " + attivo);

// Output:
// Mario ha 25 anni. Loggato: true


// ── ESERCIZIO 2 (facile) ────────────────────────────────────
// Operazioni successive su una variabile numerica.

let punteggio = 10;

punteggio += 5;   // 10 + 5 = 15  (equivale a punteggio = punteggio + 5)
punteggio *= 2;   // 15 * 2 = 30  (equivale a punteggio = punteggio * 2)

console.log("Punteggio finale:", punteggio);

// Output:
// Punteggio finale: 30


// ── ESERCIZIO 3 (intermedio) ────────────────────────────────
// Prodotto con sconto.

const nomeProdotto = "Laptop";
const prezzo = 999;
const sconto = 0.15;         // 15% → rappresentiamo percentuali come decimali
const disponibile = true;

// Il prezzo scontato si calcola sottraendo la quota di sconto
const prezzoScontato = prezzo - (prezzo * sconto);
// 999 - (999 * 0.15) = 999 - 149.85 = 849.15

// .toFixed(2) arrotonda a 2 decimali e restituisce una stringa
console.log(nomeProdotto + " costa " + prezzoScontato.toFixed(2) + "€ — Disponibile: " + disponibile);

// Output:
// Laptop costa 849.15€ — Disponibile: true


// ── ESERCIZIO 4 (difficile) ─────────────────────────────────
// Conversioni di temperatura + typeof.

const tempCelsius = 36.6;

// Formule standard di conversione
const tempFahrenheit = (tempCelsius * 9 / 5) + 32;
const tempKelvin     = tempCelsius + 273.15;

// .toFixed(2) restituisce una stringa con esattamente 2 decimali
console.log("Celsius:   ", tempCelsius.toFixed(2));
console.log("Fahrenheit:", tempFahrenheit.toFixed(2));
console.log("Kelvin:    ", tempKelvin.toFixed(2));

// typeof restituisce il tipo del valore come stringa
console.log("Tipo Celsius:   ", typeof tempCelsius);    // "number"
console.log("Tipo Fahrenheit:", typeof tempFahrenheit); // "number"
console.log("Tipo Kelvin:    ", typeof tempKelvin);     // "number"

// BONUS: JavaScript è dinamicamente tipizzato → una variabile
// può cambiare tipo a runtime (a differenza di Java o C#)
let variabile = 36.6;
console.log("Prima:", typeof variabile);   // "number"
variabile = "caldo";
console.log("Dopo: ", typeof variabile);   // "string"  ← il tipo cambia!

// Output:
// Celsius:    36.60
// Fahrenheit: 97.88
// Kelvin:     309.75
// Tipo Celsius:    number
// Tipo Fahrenheit: number
// Tipo Kelvin:     number
// Prima: number
// Dopo:  string
