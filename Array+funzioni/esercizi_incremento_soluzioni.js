// ==========================
// ESERCIZIO 1 — SEMPLICE
// ==========================
// Conta quanti numeri sono pari

let numeri = [2, 5, 8, 11, 14];

// Variabile contatore
let pari = 0;

// Ciclo che scorre tutto l'array
for (let i = 0; i < numeri.length; i++) {

  // numeri[i] prende il valore attuale
  // % significa modulo
  // Se il resto della divisione per 2 è 0 → numero pari
  if (numeri[i] % 2 === 0) {

    // aumento il contatore
    pari++;
  }
}

// Stampo il risultato finale
console.log("Numeri pari:", pari);



// ==========================
// ESERCIZIO 2 — SEMPLICE
// ==========================
// Conta quante temperature sono superiori a 30

let temperature = [28, 35, 31, 22, 40];

// Contatore
let giorniCaldi = 0;

// Scorro tutto l'array
for (let i = 0; i < temperature.length; i++) {

  // Controllo se la temperatura è maggiore di 30
  if (temperature[i] > 30) {

    // aumento il contatore
    giorniCaldi++;
  }
}

// Stampo il risultato
console.log("Giorni caldi:", giorniCaldi);



// ==========================
// ESERCIZIO 3 — INTERMEDIO
// ==========================
// Conta maggiorenni e minorenni

let eta = [12, 18, 25, 16, 40];

// Creo due contatori
let maggiorenni = 0;
let minorenni = 0;

// Ciclo
for (let i = 0; i < eta.length; i++) {

  // Se età >= 18 → maggiorenne
  if (eta[i] >= 18) {

    maggiorenni++;

  } else {

    // altrimenti è minorenne
    minorenni++;
  }
}

// Stampo risultati
console.log("Maggiorenni:", maggiorenni);
console.log("Minorenni:", minorenni);



// ==========================
// ESERCIZIO 4 — INTERMEDIO
// ==========================
// Conta parole con più di 5 lettere

let parole = ["cane", "elefante", "sole", "montagna"];

// Contatore
let paroleLunghe = 0;

// Ciclo array
for (let i = 0; i < parole.length; i++) {

  // .length sulle stringhe conta le lettere
  // Esempio: "cane".length = 4
  if (parole[i].length > 5) {

    paroleLunghe++;
  }
}

// Stampo risultato
console.log("Parole lunghe:", paroleLunghe);


// ==========================
// ESERCIZIO 5 — INTERMEDIO
// ==========================
// Array che contiene i livelli di utilizzo.
// Ogni numero rappresenta quanto è stato usato qualcosa.
let utilizzi = [30, 60, 20, 80, 55, 40];

// La batteria parte da 100%.
let batteria = 100;

// Contatore che serve a sapere quante volte
// la batteria viene scaricata.
let scariche = 0;

// Ciclo for che scorre tutti gli elementi dell'array.
for (let i = 0; i < utilizzi.length; i++) {

  // utilizzi.length indica quanti elementi ci sono nell'array.
  // In questo caso vale 6.

  // utilizzi[i] prende il valore corrente.
  //
  // Esempio:
  // i = 0 → utilizzi[0] = 30
  // i = 1 → utilizzi[1] = 60
  // i = 2 → utilizzi[2] = 20

  // Controlliamo se il valore attuale è maggiore di 50.
  if (utilizzi[i] > 50) {

    // Se è maggiore di 50:
    // togliamo 10 alla batteria.
    //
    // batteria -= 10 significa:
    // batteria = batteria - 10
    batteria -= 10;

    // Aumentiamo il contatore delle scariche.
    //
    // scariche++ significa:
    // scariche = scariche + 1
    scariche++;
  }

}

// Stampiamo quante scariche ci sono state.
console.log("Scariche:", scariche);

// Stampiamo quanta batteria è rimasta.
console.log("Batteria finale:", batteria);




// ==========================
// ESERCIZIO 6 — DIFFICILE
// ==========================
// Conta positivi, negativi e zeri

let valori = [3, -2, 0, 8, -1, 0];

// Creo i contatori
let positivi = 0;
let negativi = 0;
let zeri = 0;

// Ciclo
for (let i = 0; i < valori.length; i++) {

  // Numero positivo
  if (valori[i] > 0) {

    positivi++;

  // Numero negativo
  } else if (valori[i] < 0) {

    negativi++;

  // Numero uguale a zero
  } else {

    zeri++;
  }
}

// Stampo risultati
console.log("Positivi:", positivi);
console.log("Negativi:", negativi);
console.log("Zeri:", zeri);


// ==========================
// ESERCIZIO 7 — DIFFICILE
// ==========================
// Array che contiene i tipi di nemici incontrati.
let nemici = ["debole", "medio", "forte", "medio", "forte", "forte"];

// Il giocatore parte con 5 vite.
let vite = 5;

// Contatori per i vari tipi di nemici.
let forti = 0;
let medi = 0;
let deboli = 0;

// Ciclo che scorre tutti i nemici dell'array.
for (let i = 0; i < nemici.length; i++) {

  // Prima di controllare il nemico,
  // verifichiamo se il giocatore ha ancora vite.
  if (vite > 0) {

    // Se il nemico è forte
    if (nemici[i] === "forte") {

      // aumento il contatore dei nemici forti
      forti++;

      // tolgo 2 vite
      vite -= 2;

    // Se il nemico è medio
    } else if (nemici[i] === "medio") {

      // aumento il contatore dei medi
      medi++;

      // tolgo 1 vita
      vite--;

    // Se non è forte o medio, allora è debole
    } else {

      // aumento il contatore dei deboli
      deboli++;
    }

  }

}

// Stampiamo i risultati finali.
console.log("Forti:", forti);
console.log("Medi:", medi);
console.log("Deboli:", deboli);
console.log("Vite rimaste:", vite);