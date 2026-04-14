// ============================================================
//  BLOCCO 2 — CONDIZIONI
//  2 facili · 1 intermedio · 1 difficile
// ============================================================


// ── ESERCIZIO 1 (facile) ────────────────────────────────────
// Scrivi un programma che controlla se un numero è positivo,
// negativo o zero e stampa il risultato.
//
// Testa con: 7, -3, 0
//
// Output atteso:
//   7  → "Il numero è positivo"
//   -3 → "Il numero è negativo"
//   0  → "Il numero è zero"

// ✏️ Scrivi qui il tuo codice:
const numero = 7;




// ── ESERCIZIO 2 (facile) ────────────────────────────────────
// Scrivi un programma che dà un voto in lettere in base al punteggio:
//   90-100 → "A"
//   80-89  → "B"
//   70-79  → "C"
//   60-69  → "D"
//   sotto  → "F"
//
// Testa con: 95, 82, 71, 65, 40

// ✏️ Scrivi qui il tuo codice:
const voto = 82;




// ── ESERCIZIO 3 (intermedio) ────────────────────────────────
// Simulatore di accesso.
//
// Hai queste credenziali corrette:
//   username: "admin"
//   password: "js2024"
//
// Scrivi la logica che:
//   1. Se username E password sono corretti → "Accesso consentito"
//   2. Se l'username è corretto ma la password no → "Password errata"
//   3. Se l'username è sbagliato → "Utente non trovato"
//
// Testa con varie combinazioni.

// ✏️ Scrivi qui il tuo codice:
const usernameInserito = "admin";
const passwordInserita = "sbagliata";




// ── ESERCIZIO 4 (difficile) ─────────────────────────────────
// Calcolatore di tariffa taxi.
//
// Regole tariffarie:
//   - Tariffa base: €3.00
//   - Costo per km: €1.50
//   - Fascia oraria notturna (22:00–06:00): +50% sul totale
//   - Weekend (sabato=6, domenica=0): +20% sul totale
//   - Se distanza > 20km: sconto 10% sul totale
//   - I supplementi si sommano (es. notte + weekend = +70%)
//
// 1. Calcola la tariffa per:
//    - 10km, ore 14, giovedì (giorno 4)
//    - 10km, ore 23, sabato  (giorno 6)
//    - 25km, ore 10, domenica (giorno 0)
//
// 2. Stampa per ciascuno il dettaglio e il totale con .toFixed(2)
//
// SUGGERIMENTO: calcola prima la base, poi applica i supplementi
// con if/else if e variabili per tenere traccia dei moltiplicatori.

// ✏️ Scrivi qui il tuo codice:
const km = 10;
const ora = 14;
const giornoSettimana = 4; // 0=dom, 1=lun, ..., 6=sab
