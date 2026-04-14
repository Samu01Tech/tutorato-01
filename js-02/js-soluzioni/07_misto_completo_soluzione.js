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
  let risultato = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (el === vecchio) {
      risultato.push(nuovo);
    } else {
      risultato.push(el);
    }
  }

  return risultato;
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

  for (let i = 0; i < mag.length; i++) {
    totale += mag[i].prezzo * mag[i].quantita;
  }

  return totale;
}

// 2. Prodotti esauriti
function prodottiEsauriti(mag) {
  let risultato = [];

  for (let i = 0; i < mag.length; i++) {
    if (mag[i].quantita === 0) {
      risultato.push(mag[i]);
    }
  }

  return risultato;
}

// 3. Cerca per nome (case-insensitive)
function cercaProdotto(mag, nome) {
  const nomeMinuscolo = nome.toLowerCase(); // trasforma tutti i caratteri maiuscoli in minuscolo

  for (let i = 0; i < mag.length; i++) {
    if (mag[i].prodotto.toLowerCase() === nomeMinuscolo) {
      return mag[i];
    }
  }

  return null;
}

// 4. Aggiorna quantità per id
function aggiornaQuantita(mag, id, nuovaQuantita) {
  let trovato = false;

  for (let i = 0; i < mag.length; i++) {
    if (mag[i].id === id) {
      mag[i].quantita = nuovaQuantita;
      trovato = true;
      break;
    }
  }

  if (!trovato) {
    console.log("Prodotto con id " + id + " non trovato");
  }

  return mag;
}

// ── OUTPUT ────────────────────────────────────────────────

console.log("Valore totale: €" + valoreTotale(magazzino));

// stampa nomi prodotti esauriti senza map
const esauriti = prodottiEsauriti(magazzino);
let nomiEsauriti = [];

for (let i = 0; i < esauriti.length; i++) {
  nomiEsauriti.push(esauriti[i].prodotto);
}

console.log("Esauriti:", nomiEsauriti);

console.log("Cerca 'webcam':", cercaProdotto(magazzino, "webcam"));

aggiornaQuantita(magazzino, 3, 15);

console.log("Mouse dopo aggiornamento:", cercaProdotto(magazzino, "Mouse"));

aggiornaQuantita(magazzino, 99, 5); // id inesistente

// Output:
// Valore totale: €2982
// Esauriti: [ 'Mouse' ]
// Cerca 'webcam': { id: 4, prodotto: 'Webcam', quantita: 3, prezzo: 89 }
// Mouse dopo aggiornamento: { id: 3, prodotto: 'Mouse', quantita: 15, prezzo: 25 }
// Prodotto con id 99 non trovato


// ── ESERCIZIO 5 (intermedio) ────────────────────────────────
// Analisi frequenza parole SENZA split, regex, filter, arrow function

const testo = `JavaScript è un linguaggio di programmazione versatile.
È usato per creare siti web interattivi e applicazioni.
JavaScript può girare nel browser e sul server.
Molti sviluppatori amano JavaScript per la sua flessibilità.`;

// 1. Conta parole
function contaParole(t) {
  let count = 0;
  let parola = "";

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    if (char !== " " && char !== "\n") {
      parola += char;
    } else {
      if (parola.length > 0) {
        count++;
        parola = "";
      }
    }
  }

  // ultima parola
  if (parola.length > 0) {
    count++;
  }

  return count;
}

// 2. Frequenza parole
function frequenzaParole(t) {
  const freq = {};
  let parola = "";

  for (let i = 0; i < t.length; i++) {
    let char = t[i];

    // minuscolo manuale
    char = char.toLowerCase();

    const punteggiatura =
      char !== "." &&
      char !== "," &&
      char !== "!" &&
      char !== "?" &&
      char !== ";" &&
      char !== ":" &&
      char !== "(" &&
      char !== ")";

    if (punteggiatura && char !== " " && char !== "\n") {
      parola += char;
    } else {
      if (parola.length > 0) {
        if (freq[parola] === undefined) {
          freq[parola] = 1;
        } else {
          freq[parola]++;
        }
        parola = "";
      }
    }

  // ultima parola
  if (parola.length > 0) {
    if (freq[parola] === undefined) {
      freq[parola] = 1;
    } else {
      freq[parola]++;
    }
  }

  return freq;
  }
}

// 3. Top parole (senza sort e senza arrow function)
function topParole(freq, n) {
  const arr = [];

  // trasformiamo oggetto in array
  for (const parola in freq) {
    arr.push({ parola: parola, count: freq[parola] });
  }

  // ordinamento manuale (bubble sort)
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].count < arr[j + 1].count) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // prendiamo i primi n
  const risultato = [];
  for (let i = 0; i < n && i < arr.length; i++) {
    risultato.push(arr[i]);
  }

  return risultato;
}

// ── OUTPUT ────────────────────────────────────────────────

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