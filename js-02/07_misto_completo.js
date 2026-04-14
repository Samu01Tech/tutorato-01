// ============================================================
//  MISTO COMPLETO — VARIABILI · CONDIZIONI · LOOP · ARRAY · FUNZIONI
//  3 facili · 2 intermedi · 1 difficile
// ============================================================


// ── ESERCIZIO 1 (facile) ────────────────────────────────────
// Filtra e trasforma una lista di studenti.
//
const studenti = [
  { nome: "Alice",   voto: 88 },
  { nome: "Bruno",   voto: 54 },
  { nome: "Chiara",  voto: 92 },
  { nome: "Davide",  voto: 67 },
  { nome: "Elena",   voto: 45 },
  { nome: "Filippo", voto: 79 },
];
//
// Scrivi una funzione "reportStudenti(lista)" che:
// 1. Stampa ogni studente con la sua lettera di voto
//    (A=90+, B=80+, C=70+, D=60+, F=sotto 60)
// 2. Restituisce un oggetto con:
//    { promossi: N, bocciati: N, media: XX.X }
//    (promossi = voto >= 60)
//
// Chiama la funzione e stampa il risultato.

// ✏️ Scrivi qui il tuo codice:




// ── ESERCIZIO 2 (facile) ────────────────────────────────────
// Generatore di tabella ASCII.
//
// Scrivi una funzione "tabellaAsterischi(righe, colonne)"
// che stampa una griglia di asterischi.
// Ogni cella contiene la sua posizione (riga,col).
//
// Esempio: tabellaAsterischi(3, 4)
//   [0,0] [0,1] [0,2] [0,3]
//   [1,0] [1,1] [1,2] [1,3]
//   [2,0] [2,1] [2,2] [2,3]
//
// BONUS: evidenzia la diagonale principale con "[ ** ]"

// ✏️ Scrivi qui il tuo codice:




// ── ESERCIZIO 3 (facile) ────────────────────────────────────
// Cerca e sostituisci in un array.
//
// Scrivi una funzione "sostituisci(arr, vecchio, nuovo)"
// che sostituisce tutte le occorrenze di "vecchio" con "nuovo"
// e restituisce il nuovo array (senza modificare l'originale).
//
// Testa con:
//   sostituisci([1, 2, 3, 2, 4, 2], 2, 99) → [1, 99, 3, 99, 4, 99]
//   sostituisci(["a","b","a","c"], "a", "z") → ["z","b","z","c"]
//
// Poi scrivi anche "contaOccorrenze(arr, valore)"
// che conta quante volte un valore appare nell'array.

// ✏️ Scrivi qui il tuo codice:




// ── ESERCIZIO 4 (intermedio) ────────────────────────────────
// Mini-gestionale di magazzino.
//
const magazzino = [
  { id: 1, prodotto: "Monitor",   quantita: 5,  prezzo: 299 },
  { id: 2, prodotto: "Tastiera",  quantita: 12, prezzo: 49  },
  { id: 3, prodotto: "Mouse",     quantita: 0,  prezzo: 25  },
  { id: 4, prodotto: "Webcam",    quantita: 3,  prezzo: 89  },
  { id: 5, prodotto: "Cuffie",    quantita: 8,  prezzo: 79  },
];
//
// Implementa queste funzioni:
//
// 1. valoreTotale(magazzino)
//    → somma di (quantita * prezzo) per ogni prodotto
//
// 2. prodottiEsauriti(magazzino)
//    → array dei prodotti con quantita === 0
//
// 3. cercaProdotto(magazzino, nome)
//    → restituisce il prodotto trovato o null
//    (ricerca case-insensitive)
//
// 4. aggiornaQuantita(magazzino, id, nuovaQuantita)
//    → restituisce il magazzino aggiornato;
//    se id non esiste stampa un errore
//
// Chiama tutte le funzioni e stampa i risultati.

// ✏️ Scrivi qui il tuo codice:




// ── ESERCIZIO 5 (intermedio) ────────────────────────────────
// Analisi di un testo: contatore di parole e frequenze.
//
const testo = `JavaScript è un linguaggio di programmazione versatile.
È usato per creare siti web interattivi e applicazioni.
JavaScript può girare nel browser e sul server.
Molti sviluppatori amano JavaScript per la sua flessibilità.`;
//
// Scrivi le seguenti funzioni:
//
// 1. contaParole(testo) → numero totale di parole
//
// 2. frequenzaParole(testo)
//    → oggetto { parola: conteggio } per ogni parola unica
//    (ignora maiuscole/minuscole, rimuovi punteggiatura)
//
// 3. topParole(frequenza, n)
//    → array delle n parole più frequenti, ordinate per frequenza
//    Formato: [{ parola: "javascript", count: 3 }, ...]
//
// Stampa le top 5 parole del testo.
//
// SUGGERIMENTO: usa .toLowerCase(), .replace() con regex,
// e .split(" ") per dividere in parole.

// ✏️ Scrivi qui il tuo codice:




// ── ESERCIZIO 6 (difficile) ─────────────────────────────────
// Motore di ricerca minimalista.
//
// Hai questo database di articoli:
const articoli = [
  { id: 1, titolo: "Guida a JavaScript",       tags: ["js","web","base"],        visite: 1520 },
  { id: 2, titolo: "CSS Grid e Flexbox",        tags: ["css","web","layout"],     visite: 980  },
  { id: 3, titolo: "Node.js per principianti",  tags: ["js","node","backend"],    visite: 740  },
  { id: 4, titolo: "React: componenti e hook",  tags: ["js","react","frontend"],  visite: 2100 },
  { id: 5, titolo: "Python vs JavaScript",      tags: ["js","python","confronto"],visite: 1350 },
  { id: 6, titolo: "TypeScript avanzato",       tags: ["js","ts","avanzato"],     visite: 560  },
  { id: 7, titolo: "HTML semantico",            tags: ["html","web","base"],      visite: 430  },
  { id: 8, titolo: "API REST con Express",      tags: ["js","node","api"],        visite: 890  },
];
//
// Implementa un motore di ricerca con queste funzioni:
//
// 1. cerca(articoli, query)
//    Cerca per parola nel titolo (case-insensitive)
//    → array di articoli corrispondenti
//
// 2. filtraPerTag(articoli, tag)
//    → articoli che hanno quel tag
//
// 3. ordina(articoli, campo, direzione)
//    campo: "titolo" | "visite"
//    direzione: "asc" | "desc"
//    → array ordinato
//
// 4. ricercaAvanzata(articoli, opzioni)
//    opzioni = { query, tag, ordinaPer, direzione, limite }
//    Combina tutti i filtri sopra. Se un'opzione è undefined, ignorala.
//    "limite" = quanti risultati restituire al massimo
//
// Testa con:
//   ricercaAvanzata(articoli, { tag: "js", ordinaPer: "visite", direzione: "desc", limite: 3 })
//   ricercaAvanzata(articoli, { query: "node", ordinaPer: "titolo", direzione: "asc" })
//
// Stampa i risultati in modo leggibile.
//
// SFIDA EXTRA: aggiungi un sistema di "rilevanza" che assegna
// un punteggio più alto agli articoli dove la query appare
// nel titolo E nei tag.

// ✏️ Scrivi qui il tuo codice:
