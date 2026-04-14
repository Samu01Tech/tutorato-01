// ============================================================
//  MISTO — VARIABILI + CONDIZIONI + LOOP · SOLUZIONI
// ============================================================


// ── ESERCIZIO 1 (base) ──────────────────────────────────────
// Classifica temperature e conta per categoria.

const temperature = [32, -5, 18, 0, 25, -12, 7, 40, 15, -1];

// Contatori per ogni categoria — inizializzati a 0
let caldo   = 0;
let mite    = 0;
let fresco  = 0;
let ghiaccio = 0;
let freddo  = 0;

// for...of per iterare sui valori (non sugli indici)
for (const t of temperature) {
  let categoria;

  // Le condizioni controllano fasce di valori numerici
  if (t >= 30) {
    categoria = "Caldo";
    caldo++;
  } else if (t >= 15) {
    categoria = "Mite";
    mite++;
  } else if (t >= 1) {
    categoria = "Fresco";
    fresco++;
  } else if (t === 0) {
    categoria = "Ghiaccio";
    ghiaccio++;
  } else {
    categoria = "Freddo";
    freddo++;
  }

  console.log(t + "°C → " + categoria);
}

console.log("\n--- RIEPILOGO ---");
console.log("Caldo:    " + caldo);
console.log("Mite:     " + mite);
console.log("Fresco:   " + fresco);
console.log("Ghiaccio: " + ghiaccio);
console.log("Freddo:   " + freddo);

// Output:
// 32°C → Caldo
// -5°C → Freddo
// 18°C → Mite
// 0°C → Ghiaccio
// 25°C → Mite
// -12°C → Freddo
// 7°C → Fresco
// 40°C → Caldo
// 15°C → Mite
// -1°C → Freddo
//
// --- RIEPILOGO ---
// Caldo:    2
// Mite:     3
// Fresco:   1
// Ghiaccio: 1
// Freddo:   3


// ── ESERCIZIO 2 (intermedio) ────────────────────────────────
// Simulatore di conto bancario con verifica saldo.

let saldo = 1000;
const transazioni = [200, -150, 500, -800, 100, -50, -300, 750, -200, -100];

// Teniamo traccia delle statistiche
let eseguite  = 0;
let rifiutate = 0;
let depositi  = 0;
let prelievi  = 0;

console.log("Saldo iniziale: €" + saldo.toFixed(2));
console.log("---");

for (const t of transazioni) {
  if (t > 0) {
    // DEPOSITO: sempre consentito
    saldo   += t;
    depositi += t;
    eseguite++;
    console.log("Deposito  +" + t + "€  → saldo: €" + saldo.toFixed(2));
  } else {
    // PRELIEVO: verifichiamo che il saldo sia sufficiente
    // Math.abs() restituisce il valore assoluto (toglie il segno negativo)
    const importo = Math.abs(t);

    if (importo <= saldo) {
      saldo    -= importo;
      prelievi += importo;
      eseguite++;
      console.log("Prelievo  -" + importo + "€  → saldo: €" + saldo.toFixed(2));
    } else {
      rifiutate++;
      console.log("Fondi insufficienti per prelievo " + importo + "€ (saldo: €" + saldo.toFixed(2) + ")");
    }
  }
}

console.log("\n--- RIEPILOGO ---");
console.log("Saldo finale:          €" + saldo.toFixed(2));
console.log("Transazioni eseguite:  " + eseguite);
console.log("Transazioni rifiutate: " + rifiutate);
console.log("Totale depositato:     €" + depositi.toFixed(2));
console.log("Totale prelevato:      €" + prelievi.toFixed(2));

// Output:
// Saldo iniziale: €1000.00
// ---
// Deposito  +200€  → saldo: €1200.00
// Prelievo  -150€  → saldo: €1050.00
// Deposito  +500€  → saldo: €1550.00
// Fondi insufficienti per prelievo 800€ (saldo: €1550.00)   ← NO: 800 <= 1550, passa!
// (NB: la transazione -800 viene ESEGUITA perché 800 <= 1550)
// Prelievo  -800€  → saldo: €750.00
// Deposito  +100€  → saldo: €850.00
// Prelievo  -50€   → saldo: €800.00
// Fondi insufficienti per prelievo 300€ (saldo: €800.00)    ← NO: 300 <= 800, passa!
// Prelievo  -300€  → saldo: €500.00
// Deposito  +750€  → saldo: €1250.00
// Prelievo  -200€  → saldo: €1050.00
// Prelievo  -100€  → saldo: €950.00
// --- RIEPILOGO ---
// Saldo finale:          €950.00
// Transazioni eseguite:  10
// Transazioni rifiutate: 0
// Totale depositato:     €1550.00
// Totale prelevato:      €1600.00


// ── ESERCIZIO 3 (avanzato) ──────────────────────────────────
// Slot machine: 20 giocate con simboli casuali.

const simboli = ["🍒", "🍋", "🔔", "⭐", "💎"];
let saldoGioco = 200;
const PUNTATA = 10;

let giocateVinte  = 0;
let giocatePerse  = 0;

console.log("Saldo iniziale: €" + saldoGioco);
console.log("---");

for (let giocata = 1; giocata <= 20; giocata++) {
  // Math.random() → numero decimale da 0 (incluso) a 1 (escluso)
  // * simboli.length → 0..4.999...
  // Math.floor()     → intero 0..4
  const s1 = simboli[Math.floor(Math.random() * simboli.length)];
  const s2 = simboli[Math.floor(Math.random() * simboli.length)];
  const s3 = simboli[Math.floor(Math.random() * simboli.length)];

  let vincita = 0;
  let esito   = "";

  if (s1 === s2 && s2 === s3) {
    // Tre simboli uguali: controlliamo quale
    if      (s1 === "💎") { vincita = PUNTATA * 50; esito = "💎 JACKPOT! x50"; }
    else if (s1 === "⭐") { vincita = PUNTATA * 20; esito = "⭐ x20"; }
    else if (s1 === "🔔") { vincita = PUNTATA * 10; esito = "🔔 x10"; }
    else if (s1 === "🍒") { vincita = PUNTATA * 5;  esito = "🍒 x5";  }
    else if (s1 === "🍋") { vincita = PUNTATA * 3;  esito = "🍋 x3";  }
    giocateVinte++;
  } else if (s1 === s2 || s2 === s3 || s1 === s3) {
    // Due simboli uguali: recupero parziale
    vincita = PUNTATA * 1.5;
    esito   = "Due uguali x1.5";
    giocateVinte++;
  } else {
    esito = "Nessuna vincita";
    giocatePerse++;
  }

  // La vincita sostituisce la puntata persa (non si somma)
  saldoGioco = saldoGioco - PUNTATA + vincita;

  console.log(
    "G" + giocata + ": " + s1 + " " + s2 + " " + s3 +
    " → " + esito +
    " | Saldo: €" + saldoGioco.toFixed(2)
  );
}

console.log("\n--- STATISTICHE ---");
console.log("Giocate vinte: " + giocateVinte);
console.log("Giocate perse: " + giocatePerse);
console.log("Saldo finale:  €" + saldoGioco.toFixed(2));
console.log("Profitto netto: €" + (saldoGioco - 200).toFixed(2));

// Output (varia per via della casualità — esempio):
// G1:  🍒 🍋 🔔 → Nessuna vincita | Saldo: €190.00
// G2:  ⭐ ⭐ 🍒 → Due uguali x1.5 | Saldo: €195.00
// G3:  💎 💎 💎 → 💎 JACKPOT! x50 | Saldo: €685.00
// ...
