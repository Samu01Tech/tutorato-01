// ============================================================
//  BLOCCO 3 — LOOP
// ============================================================

// ── For ────────────────────────────────────
// Un for loop ha 3 parti:
// 1. inizializzazione: let i = 1 --> inizializziamo una variabile 'i' e le assegniamo il valore 1
// 2. condizione: i <= 5 --> il ciclo si ripeterà finché la condizione è vera
// 3. incremento: i++ (abbreviazione di i = i+1) --> alla fine di ogni ciclo il valore della variabile 'i' aumenterà di 1

for (let i = 1; i <= 5; i++) {
  // Questo codice viene eseguito ad ogni iterazione
  console.log(i);
}

// ── While ────────────────────────────────────
// Con il while devi gestire tutto manualmente

let i = 1; // inizializzazione

while (i <= 5) { // condizione
  console.log(i); // esecuzione

  i++; // incremento
}

// ── ESERCIZIO 0 ────────────────────────────────────
// 1. Stampa i numeri dall'1 al 10
// 2. Stampa i numeri dall'1 al 10, solo se pari
// 3. Stampa i numeri dall'1 al 10, solo se dispari

// ── ESERCIZIO 1 (facile) ────────────────────────────────────
// Stampa la tavola moltiplicativa del 7 da 1 a 10.
//
// Output atteso:
//   7 x 1 = 7
//   7 x 2 = 14
//   ...
//   7 x 10 = 70
//
// SUGGERIMENTO: usa un for loop con i da 1 a 10.

// ✏️ Scrivi qui il tuo codice:




// ── ESERCIZIO 2 (facile) ────────────────────────────────────
// Conta il totale partendo da 1 e sommando finché
// il totale non supera 50. Stampa ogni passo.
//
// Output atteso:
//   Passo 1: totale = 1
//   Passo 2: totale = 3
//   Passo 3: totale = 6
//   ...
//   Fermato al passo N: totale = XX (supera 50)
//
// SUGGERIMENTO: usa un while loop.

// ✏️ Scrivi qui il tuo codice:




// ── ESERCIZIO 3 (intermedio) ────────────────────────────────
// Stampa un triangolo di asterischi usando loop annidati.
//
// Output atteso (5 righe):
//   *
//   **
//   ***
//   ****
//   *****
//
// Poi stampa anche il triangolo invertito.
//
// SUGGERIMENTO: loop esterno per le righe, loop interno
// per costruire la stringa di asterischi di quella riga.

// ✏️ Scrivi qui il tuo codice:
const righe = 5;




// ── ESERCIZIO 4 (difficile) ─────────────────────────────────
// FizzBuzz esteso.
//
// Stampa i numeri da 1 a 100, ma:
//   - multiplo di 3        → "Fizz"
//   - multiplo di 5        → "Buzz"
//   - multiplo di 3 e 5    → "FizzBuzz"
//   - multiplo di 7        → aggiungi "!" alla fine
//     (es. 7→"7!", 21→"Fizz!", 35→"Buzz!", 105→"FizzBuzz!")
//
// Alla fine stampa anche:
//   - quante volte è uscito "Fizz" (incluso FizzBuzz)
//   - quante volte è uscito "Buzz" (incluso FizzBuzz)
//   - quante volte è uscito "FizzBuzz"
//   - la somma di tutti i numeri che NON erano Fizz/Buzz
//
// SUGGERIMENTO: usa variabili contatore fuori dal loop.

// ✏️ Scrivi qui il tuo codice:
