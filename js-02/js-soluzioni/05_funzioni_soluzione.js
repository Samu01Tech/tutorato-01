// ============================================================
//  BLOCCO 5 — FUNZIONI · SOLUZIONI
// ============================================================

// ── ESERCIZIO 1 (facile) ────────────────────────────────────
// Tre funzioni base: saluta, quadrato, isoPari.

// Sintassi classica: function declaration
function saluta(nome) {
  return "Ciao, " + nome + "!";
}

function quadrato(n) {
  return n * n;
}

// Funzione classica al posto della arrow function
function isoPari(n) {
  return n % 2 === 0; // n % 2 === 0  restituisce direttamente true o false
}

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

  let parole = 0;
  let frasi = 0;
  let parolaLunga = "";
  let parolaCorrente = "";

  for (let i = 0; i < testo.length; i++) {
    const char = testo[i];

    // Conto frasi (., !, ?)
    if (char === "." || char === "!" || char === "?") {
      frasi++;
    }

    // Se NON è spazio → costruisco parola
    if (char !== " ") {
      parolaCorrente += char;
    } else {
      // Fine parola
      if (parolaCorrente.length > 0) {
        parole++;

        // Pulizia punteggiatura finale manuale
        let pulita = parolaCorrente;
        const ultimo = pulita[pulita.length - 1];
        if (ultimo === "." || ultimo === "," || ultimo === "!" || ultimo === "?") {
          pulita = pulita.slice(0, -1);
        }

        if (pulita.length > parolaLunga.length) {
          parolaLunga = pulita;
        }

        parolaCorrente = "";
      }
    }
  }

  // Gestiamo l'ultima parola (se il testo non finisce con spazio)
  if (parolaCorrente.length > 0) {
    parole++;

    let pulita = parolaCorrente;
    const ultimo = pulita[pulita.length - 1];
    if (ultimo === "." || ultimo === "," || ultimo === "!" || ultimo === "?") {
      pulita = pulita.slice(0, -1);
    }

    if (pulita.length > parolaLunga.length) {
      parolaLunga = pulita;
    }
  }

  // Stampa risultati invece di restituire un oggetto
  console.log("Caratteri:", caratteri);
  console.log("Parole:", parole);
  console.log("Frasi:", frasi);
  console.log("Parola più lunga:", parolaLunga);
}

analizzaTesto(
  "JavaScript è un linguaggio potente. Puoi creare app web! Davvero?"
);

// Output:
// Caratteri: 65
// Parole: 10
// Frasi: 3
// ParolaLunga: 'linguaggio'


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
// Caso ricorsivo: se è un array, appiattisci ogni suo elemento e concatena
function appiattisci(arr) {
  let risultato = [];

  for (let i = 0; i < arr.length; i++) {
    const elemento = arr[i];

    // Controllo se è un array
    if (elemento instanceof Array) {
      const interno = appiattisci(elemento);

      // Aggiungo manualmente gli elementi (senza spread)
      for (let j = 0; j < interno.length; j++) {
        risultato.push(interno[j]);
      }
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
