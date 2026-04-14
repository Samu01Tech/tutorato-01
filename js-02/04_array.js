// ============================================================
//  BLOCCO 4 — ARRAY
//  2 facili · 1 intermedio · 1 difficile
// ============================================================


// ── ESERCIZIO 1 (facile) ────────────────────────────────────
// Parti da questo array di numeri:
//   [4, 9, 2, 7, 1, 5, 8, 3, 6]
//
// 1. Stampa il primo e l'ultimo elemento
// 2. Stampa quanti elementi ci sono
// 3. Aggiungi il numero 10 in fondo
// 4. Rimuovi il primo elemento
// 5. Stampa l'array aggiornato
//
// SUGGERIMENTO: usa push(), shift() e .length

// ✏️ Scrivi qui il tuo codice:
const numeri = [4, 9, 2, 7, 1, 5, 8, 3, 6];




// ── ESERCIZIO 2 (facile) ────────────────────────────────────
// Hai un array di nomi:
//   ["Luca", "Anna", "Marco", "Sofia", "Giulia"]
//
// 1. Stampa ogni nome con un saluto:
//    "Ciao, Luca!", "Ciao, Anna!", ...
// 2. Controlla se "Marco" è nell'array (usa includes)
// 3. Trova la posizione di "Sofia" (usa indexOf)
//
// SUGGERIMENTO: usa for...of per il punto 1.

// ✏️ Scrivi qui il tuo codice:
const nomi = ["Luca", "Anna", "Marco", "Sofia", "Giulia"];




// ── ESERCIZIO 3 (intermedio) ────────────────────────────────
// Gestione carrello della spesa.
//
// Parti da questo array:
const carrello = [
  { nome: "Mela",    prezzo: 0.5,  quantita: 6 },
  { nome: "Pane",    prezzo: 1.2,  quantita: 2 },
  { nome: "Latte",   prezzo: 1.0,  quantita: 3 },
  { nome: "Pasta",   prezzo: 0.85, quantita: 4 },
  { nome: "Yogurt",  prezzo: 0.7,  quantita: 5 },
];
//
// 1. Usa .map() per creare un array con il totale per prodotto
//    (prezzo * quantita)
// 2. Usa .filter() per trovare i prodotti che costano > €3 totali
// 3. Calcola il totale del carrello
// 4. Stampa un riepilogo tipo:
//    "Mela: 0.5 x 6 = 3.00€"
//    ...
//    "TOTALE: XX.XX€"

// ✏️ Scrivi qui il tuo codice:




// ── ESERCIZIO 4 (difficile) ─────────────────────────────────
// Analisi statistica di un dataset.
//
const voti = [72, 85, 91, 60, 78, 95, 55, 88, 73, 82,
              67, 90, 74, 86, 61, 79, 93, 58, 84, 77];
//
// Senza usare Math.min/Math.max né sort() built-in, calcola:
// 1. La media dei voti
// 2. Il voto più alto e quello più basso (con loop manuale)
// 3. Quanti voti sono sopra la media
// 4. La mediana (ordina manualmente con bubble sort, poi prendi
//    il valore centrale)
// 5. Stampa la distribuzione per fascia:
//    90-100: N studenti
//    80-89:  N studenti
//    70-79:  N studenti
//    60-69:  N studenti
//    <60:    N studenti
//
// SFIDA EXTRA: implementa il bubble sort da zero.

// ✏️ Scrivi qui il tuo codice:
