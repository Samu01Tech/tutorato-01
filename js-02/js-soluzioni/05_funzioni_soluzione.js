// ============================================================
//  BLOCCO 5 — FUNZIONI · SOLUZIONI
// ============================================================


// ── ESERCIZIO 1 (facile) ────────────────────────────────────
// Tre funzioni base: saluta, quadrato, isoPari.

// Sintassi classica: function declaration
function saluta(nome) {
  return "Ciao, " + nome + "!";
}

// Arrow function con corpo ridotto (implicit return):
// quando il corpo è una sola espressione si può omettere
// le graffe e il return
const quadrato = n => n * n;

// Arrow function con parametro singolo → parentesi opzionali
const isoPari = n => n % 2 === 0;
// n % 2 === 0  restituisce direttamente true o false

console.log(saluta("Giulia"));    // "Ciao, Giulia!"
console.log(quadrato(6));         // 36
console.log(isoPari(4));          // true
console.log(isoPari(7));          // false

// Output:
// Ciao, Giulia!
// 36
// true
// false


// ── ESERCIZIO 2 (facile) ────────────────────────────────────
// Calcola area di diverse forme geometriche.

function calcolaArea(forma, valore1, valore2) {
  // Normalizziamo la stringa in minuscolo così "Cerchio" == "cerchio"
  const f = forma.toLowerCase();

  if (f === "rettangolo") {
    return valore1 * valore2;                  // larghezza * altezza
  } else if (f === "cerchio") {
    return Math.PI * valore1 * valore1;        // π * r²
  } else if (f === "triangolo") {
    return (valore1 * valore2) / 2;            // (base * altezza) / 2
  } else {
    return "Forma non riconosciuta";
  }
}

console.log("Rettangolo 4x6:  " + calcolaArea("rettangolo", 4, 6).toFixed(2));
console.log("Cerchio r=5:     " + calcolaArea("cerchio", 5).toFixed(2));
console.log("Triangolo 8x3:   " + calcolaArea("triangolo", 8, 3).toFixed(2));

// Output:
// Rettangolo 4x6:  24.00
// Cerchio r=5:     78.54
// Triangolo 8x3:   12.00


// ── ESERCIZIO 3 (intermedio) ────────────────────────────────
// Analisi di un testo: restituisce oggetto con statistiche.

function analizzaTesto(testo) {
  const caratteri = testo.length;

  // split(" ") divide la stringa in un array usando lo spazio come separatore
  // filter(Boolean) rimuove eventuali stringhe vuote dovute a doppi spazi
  const parole = testo.split(" ").filter(Boolean).length;

  // Contiamo i caratteri di fine frase con una regex
  // (regular expression): cerca tutti i . ! ? nel testo
  const frasi = (testo.match(/[.!?]/g) || []).length;

  // Troviamo la parola più lunga
  const elencoParole = testo.split(" ").filter(Boolean);
  let parolaLunga = "";
  for (const parola of elencoParole) {
    // Rimuoviamo la punteggiatura a fine parola prima di confrontare
    const pulita = parola.replace(/[.,!?]/g, "");
    if (pulita.length > parolaLunga.length) {
      parolaLunga = pulita;
    }
  }

  // La funzione restituisce un oggetto con tutti i risultati
  return { caratteri, parole, frasi, parolaLunga };
}

const risultato = analizzaTesto(
  "JavaScript è un linguaggio potente. Puoi creare app web! Davvero?"
);
console.log(risultato);

// Output:
// { caratteri: 65, parole: 10, frasi: 3, parolaLunga: 'linguaggio' }


// ── ESERCIZIO 4 (difficile) ─────────────────────────────────
// Funzioni ricorsive — senza loop.

// Una funzione ricorsiva richiama se stessa su un problema
// sempre più piccolo finché non raggiunge il "caso base"
// (che ferma la ricorsione).

// 1. FATTORIALE
// Caso base: fattoriale(0) = 1
// Caso ricorsivo: fattoriale(n) = n * fattoriale(n-1)
function fattoriale(n) {
  if (n <= 1) return 1;              // caso base
  return n * fattoriale(n - 1);     // 5 * fatt(4) * fatt(3) * ...
}
console.log("fattoriale(5):", fattoriale(5)); // 120
console.log("fattoriale(0):", fattoriale(0)); // 1


// 2. FIBONACCI
// Caso base: fib(0)=0, fib(1)=1
// Caso ricorsivo: fib(n) = fib(n-1) + fib(n-2)
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("fibonacci(8):", fibonacci(8)); // 21
// Sequenza: 0,1,1,2,3,5,8,13,21 → indice 8 = 21


// 3. SOMMA ARRAY (ricorsiva)
// Caso base: array vuoto → somma = 0
// Caso ricorsivo: primo elemento + somma del resto dell'array
function sommaArray(arr) {
  if (arr.length === 0) return 0;
  // arr[0] = primo elemento
  // arr.slice(1) = array senza il primo elemento
  return arr[0] + sommaArray(arr.slice(1));
}
console.log("sommaArray([1,2,3,4,5]):", sommaArray([1, 2, 3, 4, 5])); // 15


// 4. APPIATTISCI (flatten ricorsivo)
// Caso base: elemento non-array → lo restituiamo in un array
// Caso ricorsivo: se è un array, appiattisci ogni suo elemento
//                e concatena con spread operator
function appiattisci(arr) {
  let risultato = [];
  for (const elemento of arr) {
    if (Array.isArray(elemento)) {
      // Se l'elemento è a sua volta un array, lo appiattisci ricorsivamente
      // e aggiungi i suoi valori al risultato con lo spread (...)
      risultato = [...risultato, ...appiattisci(elemento)];
    } else {
      risultato.push(elemento);
    }
  }
  return risultato;
}
console.log("appiattisci:", appiattisci([1, [2, [3, [4]]], 5])); // [1, 2, 3, 4, 5]

// Output:
// fattoriale(5): 120
// fattoriale(0): 1
// fibonacci(8): 21
// sommaArray([1,2,3,4,5]): 15
// appiattisci: [1, 2, 3, 4, 5]
