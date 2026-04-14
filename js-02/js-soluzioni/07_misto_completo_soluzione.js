// ============================================================
//  MISTO COMPLETO · SOLUZIONI
//  VARIABILI · CONDIZIONI · LOOP · ARRAY · FUNZIONI
// ============================================================


// ── ESERCIZIO 1 (facile) ────────────────────────────────────
// Report studenti con lettera di voto.

const studenti = [
  { nome: "Alice",   voto: 88 },
  { nome: "Bruno",   voto: 54 },
  { nome: "Chiara",  voto: 92 },
  { nome: "Davide",  voto: 67 },
  { nome: "Elena",   voto: 45 },
  { nome: "Filippo", voto: 79 },
];

function reportStudenti(lista) {
  let promossi = 0;
  let bocciati = 0;
  let sommaVoti = 0;

  for (const s of lista) {
    // Determina la lettera di voto con if/else if
    let lettera;
    if      (s.voto >= 90) lettera = "A";
    else if (s.voto >= 80) lettera = "B";
    else if (s.voto >= 70) lettera = "C";
    else if (s.voto >= 60) lettera = "D";
    else                   lettera = "F";

    console.log(s.nome + ": " + s.voto + " (" + lettera + ")");

    // Aggiorna contatori
    if (s.voto >= 60) promossi++;
    else              bocciati++;

    sommaVoti += s.voto;
  }

  // Arrotondiamo la media a un decimale
  const media = (sommaVoti / lista.length).toFixed(1);

  // Restituiamo un oggetto con le statistiche finali
  return { promossi, bocciati, media };
}

const stats = reportStudenti(studenti);
console.log("\nStatistiche:", stats);

// Output:
// Alice: 88 (B)
// Bruno: 54 (F)
// Chiara: 92 (A)
// Davide: 67 (D)
// Elena: 45 (F)
// Filippo: 79 (C)
//
// Statistiche: { promossi: 4, bocciati: 2, media: '70.8' }


// ── ESERCIZIO 2 (facile) ────────────────────────────────────
// Tabella ASCII con diagonale principale evidenziata.

function tabellaAsterischi(righe, colonne) {
  // Loop esterno: scorre le righe
  for (let r = 0; r < righe; r++) {
    let riga = "";

    // Loop interno: costruisce le celle di quella riga
    for (let c = 0; c < colonne; c++) {
      // La diagonale principale è dove indice riga === indice colonna
      if (r === c) {
        riga += "[ ** ]";
      } else {
        // Formattiamo con padding per allineare le colonne
        riga += "[" + r + "," + c + "] ";
      }
    }
    console.log(riga);
  }
}

tabellaAsterischi(3, 4);

// Output:
// [ ** ][0,1] [0,2] [0,3]
// [1,0] [ ** ][1,2] [1,3]
// [2,0] [2,1] [ ** ][2,3]


// ── ESERCIZIO 3 (facile) ────────────────────────────────────
// Sostituisci e conta occorrenze in un array.

function sostituisci(arr, vecchio, nuovo) {
  // map() scorre ogni elemento: se è uguale a "vecchio" lo
  // sostituisce con "nuovo", altrimenti lo lascia invariato.
  // Non modifica arr originale: restituisce un nuovo array.
  return arr.map(el => el === vecchio ? nuovo : el);
}

function contaOccorrenze(arr, valore) {
  let count = 0;
  for (const el of arr) {
    if (el === valore) count++;
  }
  return count;
}

const arr1 = [1, 2, 3, 2, 4, 2];
console.log("Originale:", arr1);
console.log("Sostituito:", sostituisci(arr1, 2, 99));
console.log("Originale intatto:", arr1); // non modificato

const arr2 = ["a", "b", "a", "c"];
console.log("Sostituito:", sostituisci(arr2, "a", "z"));
console.log("Occorrenze di 'a':", contaOccorrenze(arr2, "a"));

// Output:
// Originale: [1, 2, 3, 2, 4, 2]
// Sostituito: [1, 99, 3, 99, 4, 99]
// Originale intatto: [1, 2, 3, 2, 4, 2]
// Sostituito: ['z', 'b', 'z', 'c']
// Occorrenze di 'a': 2


// ── ESERCIZIO 4 (intermedio) ────────────────────────────────
// Mini-gestionale di magazzino.

const magazzino = [
  { id: 1, prodotto: "Monitor",  quantita: 5,  prezzo: 299 },
  { id: 2, prodotto: "Tastiera", quantita: 12, prezzo: 49  },
  { id: 3, prodotto: "Mouse",    quantita: 0,  prezzo: 25  },
  { id: 4, prodotto: "Webcam",   quantita: 3,  prezzo: 89  },
  { id: 5, prodotto: "Cuffie",   quantita: 8,  prezzo: 79  },
];

// 1. Valore totale: somma di (prezzo * quantita)
function valoreTotale(mag) {
  let totale = 0;
  for (const p of mag) {
    totale += p.prezzo * p.quantita;
  }
  return totale;
}

// 2. Prodotti esauriti: filter restituisce un nuovo array
function prodottiEsauriti(mag) {
  return mag.filter(p => p.quantita === 0);
}

// 3. Cerca per nome, case-insensitive
function cercaProdotto(mag, nome) {
  const nomeMinuscolo = nome.toLowerCase();
  for (const p of mag) {
    if (p.prodotto.toLowerCase() === nomeMinuscolo) {
      return p;   // trovato → restituisce l'oggetto
    }
  }
  return null;    // non trovato
}

// 4. Aggiorna quantità cercando per id
function aggiornaQuantita(mag, id, nuovaQuantita) {
  // Cerchiamo l'indice con findIndex (o loop manuale)
  let trovato = false;
  for (const p of mag) {
    if (p.id === id) {
      p.quantita = nuovaQuantita;
      trovato = true;
      break;  // usciamo dal loop appena trovato
    }
  }
  if (!trovato) {
    console.log("❌ Prodotto con id " + id + " non trovato");
  }
  return mag;
}

console.log("Valore totale: €" + valoreTotale(magazzino));
console.log("Esauriti:", prodottiEsauriti(magazzino).map(p => p.prodotto));
console.log("Cerca 'webcam':", cercaProdotto(magazzino, "webcam"));
aggiornaQuantita(magazzino, 3, 15);
console.log("Mouse dopo aggiornamento:", cercaProdotto(magazzino, "Mouse"));
aggiornaQuantita(magazzino, 99, 5); // id inesistente

// Output:
// Valore totale: €3020
// Esauriti: [ 'Mouse' ]
// Cerca 'webcam': { id: 4, prodotto: 'Webcam', quantita: 3, prezzo: 89 }
// Mouse dopo aggiornamento: { id: 3, prodotto: 'Mouse', quantita: 15, prezzo: 25 }
// ❌ Prodotto con id 99 non trovato


// ── ESERCIZIO 5 (intermedio) ────────────────────────────────
// Analisi frequenza parole in un testo.

const testo = `JavaScript è un linguaggio di programmazione versatile.
È usato per creare siti web interattivi e applicazioni.
JavaScript può girare nel browser e sul server.
Molti sviluppatori amano JavaScript per la sua flessibilità.`;

function contaParole(t) {
  // Dividiamo per spazi e newline, filtriamo le stringhe vuote
  return t.split(/\s+/).filter(Boolean).length;
}

function frequenzaParole(t) {
  // 1. Tutto in minuscolo
  // 2. Rimuoviamo punteggiatura con regex (qualsiasi cosa non sia lettera/numero)
  // 3. Split su spazi/newline
  const parole = t
    .toLowerCase()
    .replace(/[.,!?;:"""()]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  // Costruiamo un oggetto { parola: conteggio }
  const freq = {};
  for (const p of parole) {
    // Se la chiave esiste già la incrementiamo, altrimenti la creiamo
    freq[p] = (freq[p] || 0) + 1;
  }
  return freq;
}

function topParole(freq, n) {
  // Trasformiamo l'oggetto in array di { parola, count }
  const arr = [];
  for (const parola in freq) {
    arr.push({ parola, count: freq[parola] });
  }
  // Ordiniamo per count decrescente con sort e arrow function
  arr.sort((a, b) => b.count - a.count);
  // Restituiamo solo i primi n
  return arr.slice(0, n);
}

console.log("Parole totali:", contaParole(testo));
const freq = frequenzaParole(testo);
console.log("Top 5 parole:", topParole(freq, 5));

// Output:
// Parole totali: 36
// Top 5 parole: [
//   { parola: 'javascript', count: 3 },
//   { parola: 'e',          count: 3 },
//   { parola: 'per',        count: 2 },
//   { parola: 'un',         count: 1 },
//   { parola: 'linguaggio', count: 1 }
// ]


// ── ESERCIZIO 6 (difficile) ─────────────────────────────────
// Motore di ricerca con filtri, ordinamento e rilevanza.

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

// 1. Ricerca per parola nel titolo
function cerca(arr, query) {
  const q = query.toLowerCase();
  return arr.filter(a => a.titolo.toLowerCase().includes(q));
}

// 2. Filtra per tag
function filtraPerTag(arr, tag) {
  return arr.filter(a => a.tags.includes(tag));
}

// 3. Ordinamento generico per campo e direzione
function ordina(arr, campo, direzione) {
  // [...arr] crea una copia per non modificare l'originale
  return [...arr].sort((a, b) => {
    if (a[campo] < b[campo]) return direzione === "asc" ? -1 : 1;
    if (a[campo] > b[campo]) return direzione === "asc" ?  1 : -1;
    return 0;
  });
}

// 4. Ricerca avanzata: combina tutti i filtri
function ricercaAvanzata(arr, opzioni = {}) {
  let risultati = [...arr];

  // Applichiamo ogni filtro solo se l'opzione è definita
  if (opzioni.query) {
    risultati = cerca(risultati, opzioni.query);
  }
  if (opzioni.tag) {
    risultati = filtraPerTag(risultati, opzioni.tag);
  }

  // SFIDA EXTRA: punteggio di rilevanza
  // Se c'è una query, mettiamo prima gli articoli dove compare
  // anche nei tag (più rilevanti)
  if (opzioni.query) {
    const q = opzioni.query.toLowerCase();
    risultati = risultati.map(a => ({
      ...a,
      rilevanza: a.tags.some(t => t.includes(q)) ? 2 : 1,
    }));
    risultati.sort((a, b) => b.rilevanza - a.rilevanza);
  }

  if (opzioni.ordinaPer) {
    risultati = ordina(risultati, opzioni.ordinaPer, opzioni.direzione || "asc");
  }
  if (opzioni.limite) {
    risultati = risultati.slice(0, opzioni.limite);
  }

  return risultati;
}

// Stampa risultati leggibile
function stampaRisultati(lista) {
  if (lista.length === 0) {
    console.log("Nessun risultato.");
    return;
  }
  for (const a of lista) {
    console.log(
      "[" + a.visite + " visite] " + a.titolo +
      " — tags: " + a.tags.join(", ")
    );
  }
}

console.log("\n🔍 Tag 'js', ordine visite desc, top 3:");
stampaRisultati(ricercaAvanzata(articoli, {
  tag: "js", ordinaPer: "visite", direzione: "desc", limite: 3,
}));

console.log("\n🔍 Query 'node', ordine titolo asc:");
stampaRisultati(ricercaAvanzata(articoli, {
  query: "node", ordinaPer: "titolo", direzione: "asc",
}));

// Output:
// 🔍 Tag 'js', ordine visite desc, top 3:
// [2100 visite] React: componenti e hook — tags: js, react, frontend
// [1520 visite] Guida a JavaScript — tags: js, web, base
// [1350 visite] Python vs JavaScript — tags: js, python, confronto
//
// 🔍 Query 'node', ordine titolo asc:
// [890 visite] API REST con Express — tags: js, node, api
// [740 visite] Node.js per principianti — tags: js, node, backend
