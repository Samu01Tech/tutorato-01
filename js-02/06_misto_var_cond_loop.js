// ============================================================
//  MISTO — VARIABILI + CONDIZIONI + LOOP
//  3 esercizi di difficoltà crescente
// ============================================================


// ── ESERCIZIO 1 (base) ──────────────────────────────────────
// Classifica una lista di temperature.
//
// Hai questo array di temperature in Celsius:
//   [32, -5, 18, 0, 25, -12, 7, 40, 15, -1]
//
// Per ogni temperatura stampa la classificazione:
//   >= 30  → "🔥 Caldo"
//   15-29  → "😊 Mite"
//   1-14   → "🧥 Fresco"
//   0      → "🧊 Ghiaccio"
//   < 0    → "❄️  Freddo"
//
// Alla fine stampa quante temperature ricadono in ogni categoria.
//
// SUGGERIMENTO: usa let per i contatori, const per l'array,
// for...of per il loop, e if/else if per le condizioni.

// ✏️ Scrivi qui il tuo codice:
const temperature = [32, -5, 18, 0, 25, -12, 7, 40, 15, -1];




// ── ESERCIZIO 2 (intermedio) ────────────────────────────────
// Simulatore di conto bancario.
//
// Parti da un saldo iniziale di 1000€.
// Hai questa lista di transazioni (positive = depositi, negative = prelievi):
const transazioni = [200, -150, 500, -800, 100, -50, -300, 750, -200, -100];
//
// Per ogni transazione:
//   1. Controlla se il saldo è sufficiente per i prelievi
//   2. Se sì, esegui la transazione e stampa:
//      "Deposito 200€  → saldo: 1200.00€"
//      "Prelievo 150€  → saldo: 1050.00€"
//   3. Se no, stampa:
//      "⚠️  Fondi insufficienti per prelievo 800€ (saldo: 550.00€)"
//      e salta quella transazione
//
// Alla fine stampa:
//   - Saldo finale
//   - Numero di transazioni eseguite e rifiutate
//   - Totale depositato e totale prelevato

// ✏️ Scrivi qui il tuo codice:
let saldo = 1000;




// ── ESERCIZIO 3 (avanzato) ──────────────────────────────────
// Gioco della fortuna: simulatore di slot machine testuale.
//
// Simboli disponibili: ["🍒","🍋","🔔","⭐","💎"]
//
// Regole vincite (tre simboli uguali):
//   💎💎💎 → jackpot! x50 la puntata
//   ⭐⭐⭐ → x20
//   🔔🔔🔔 → x10
//   🍒🍒🍒 → x5
//   🍋🍋🍋 → x3
//   Due uguali qualsiasi → x1.5 (recuperi la metà)
//   Nessuna corrispondenza → perdi la puntata
//
// Simula 20 giocate da 10€ ciascuna:
// 1. Per ogni giocata, estrai 3 simboli casuali
//    SUGGERIMENTO: Math.floor(Math.random() * simboli.length)
// 2. Controlla le vincite con le condizioni
// 3. Aggiorna il saldo
// 4. Stampa ogni giocata: "🍒 🍋 🔔 → Nessuna vincita | Saldo: 180€"
//
// Alla fine stampa le statistiche: giocate vinte/perse, profitto netto.

// ✏️ Scrivi qui il tuo codice:
const simboli = ["🍒", "🍋", "🔔", "⭐", "💎"];
let saldoGioco = 200;
