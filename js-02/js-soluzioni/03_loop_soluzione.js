// ============================================================
//  BLOCCO 3 — LOOP · SOLUZIONI
// ============================================================


// ── ESERCIZIO 1 (facile) ────────────────────────────────────
// Tavola moltiplicativa del 7.

// Il for loop ha tre parti: inizializzazione ; condizione ; incremento
// i parte da 1, continua finché i <= 10, incrementa di 1 ogni volta
for (let i = 1; i <= 10; i++) {
  console.log("7 x " + i + " = " + (7 * i));
}

// Output:
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70


// ── ESERCIZIO 2 (facile) ────────────────────────────────────
// Somma progressiva con while, ci fermiamo quando superiamo 50.

let totale = 0;
let passo  = 0;

// Il while continua finché la condizione è vera.
// Usiamo <= 50 così l'ultimo passo che porta SOPRA 50 viene eseguito.
while (totale <= 50) {
  passo++;
  totale += passo;  // totale = totale + passo  (1, 3, 6, 10, 15, 21, 28, 36, 45, 55)

  if (totale <= 50) {
    console.log("Passo " + passo + ": totale = " + totale);
  } else {
    console.log("Fermato al passo " + passo + ": totale = " + totale + " (supera 50)");
  }
}

// Output:
// Passo 1: totale = 1
// Passo 2: totale = 3
// Passo 3: totale = 6
// Passo 4: totale = 10
// Passo 5: totale = 15
// Passo 6: totale = 21
// Passo 7: totale = 28
// Passo 8: totale = 36
// Passo 9: totale = 45
// Fermato al passo 10: totale = 55 (supera 50)


// ── ESERCIZIO 3 (intermedio) ────────────────────────────────
// Triangolo di asterischi con loop annidati.

const righe = 5;

// TRIANGOLO NORMALE
// Il loop esterno gestisce le righe (riga 1, 2, 3, 4, 5)
// Il loop interno costruisce la stringa di asterischi per quella riga
console.log("Triangolo normale:");
for (let r = 1; r <= righe; r++) {
  let riga = "";
  // Alla riga r aggiungiamo r asterischi
  for (let c = 1; c <= r; c++) {
    riga += "*";
  }
  console.log(riga);
}

// TRIANGOLO INVERTITO
// Alla riga r (partendo da 'righe') decresciamo gli asterischi
console.log("\nTriangolo invertito:");
for (let r = righe; r >= 1; r--) {
  let riga = "";
  for (let c = 1; c <= r; c++) {
    riga += "*";
  }
  console.log(riga);
}

// Output triangolo normale:
// *
// **
// ***
// ****
// *****

// Output triangolo invertito:
// *****
// ****
// ***
// **
// *


// ── ESERCIZIO 4 (difficile) ─────────────────────────────────
// FizzBuzz esteso con statistiche.

let contFizz     = 0;
let contBuzz     = 0;
let contFizzBuzz = 0;
let sommaNormali = 0;

for (let i = 1; i <= 100; i++) {
  const multiplo7  = (i % 7 === 0);   // % è il modulo (resto della divisione) --> Esempio: 5%7 = 5, 6%7 = 6, 7%7 = 0
  const multiplo3  = (i % 3 === 0);
  const multiplo5  = (i % 5 === 0);

  let output = "";

  if (multiplo3 && multiplo5) {
    // Controlliamo FizzBuzz PRIMA di Fizz e Buzz separati,
    // altrimenti entreremmo nei blocchi singoli per primi
    output = "FizzBuzz";
    contFizz++;     // FizzBuzz conta anche come Fizz...
    contBuzz++;     // ...e come Buzz
    contFizzBuzz++;
  } else if (multiplo3) {
    output = "Fizz";
    contFizz++;
  } else if (multiplo5) {
    output = "Buzz";
    contBuzz++;
  } else {
    output = String(i);
    sommaNormali += i;  // Sommiamo solo i numeri "normali"
  }

  // Il "!" si aggiunge in coda se il numero è anche multiplo di 7
  if (multiplo7) {
    output += "!";
  }

  console.log(output);
}

console.log("\n--- STATISTICHE ---");
console.log("Fizz (incluso FizzBuzz): " + contFizz);
console.log("Buzz (incluso FizzBuzz): " + contBuzz);
console.log("FizzBuzz:                " + contFizzBuzz);
console.log("Somma numeri normali:    " + sommaNormali);

// Output (prime righe):
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7!
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 7!  ← no, 14 → "14!"
// FizzBuzz
// 16
// ...
// 21 → "Fizz!"  (multiplo di 3 E di 7)
// 35 → "Buzz!"  (multiplo di 5 E di 7)
// 105 fuori range, ma 70 → "Buzz!" e 84 → "Fizz!"

// --- STATISTICHE ---
// Fizz (incluso FizzBuzz):  33
// Buzz (incluso FizzBuzz):  20
// FizzBuzz:                  6
// Somma numeri normali:    2632
