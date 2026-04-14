// ============================================================
//  BLOCCO 2 — CONDIZIONI · SOLUZIONI
// ============================================================


// ── ESERCIZIO 1 (facile) ────────────────────────────────────
// Controlla se un numero è positivo, negativo o zero.

const numero = 7;

// Le condizioni vengono valutate dall'alto verso il basso;
// la prima che risulta vera viene eseguita, le altre saltate.
if (numero > 0) {
  console.log("Il numero è positivo");
} else if (numero < 0) {
  console.log("Il numero è negativo");
} else {
  // Se non è > 0 né < 0, per esclusione è 0
  console.log("Il numero è zero");
}

// Output (con numero = 7):
// Il numero è positivo

// Output (con numero = -3):
// Il numero è negativo

// Output (con numero = 0):
// Il numero è zero


// ── ESERCIZIO 2 (facile) ────────────────────────────────────
// Voto in lettere.

const voto = 82;

// Controlliamo dalla fascia più alta verso quella più bassa.
// Non serve scrivere voto >= 80 && voto <= 89 perché il blocco
// else if viene raggiunto solo se i precedenti erano falsi.
if (voto >= 90) {
  console.log("Voto: A");
} else if (voto >= 80) {
  console.log("Voto: B");
} else if (voto >= 70) {
  console.log("Voto: C");
} else if (voto >= 60) {
  console.log("Voto: D");
} else {
  console.log("Voto: F");
}

// Output (con voto = 82):
// Voto: B

// Output (con voto = 95): Voto: A
// Output (con voto = 71): Voto: C
// Output (con voto = 40): Voto: F


// ── ESERCIZIO 3 (intermedio) ────────────────────────────────
// Simulatore di accesso con username e password.

const usernameCorretto = "admin";
const passwordCorretta = "js2024";

const usernameInserito = "admin";
const passwordInserita = "sbagliata";

// Prima controlliamo l'username; solo se è giusto ha senso
// verificare la password. L'operatore && richiede che
// entrambe le condizioni siano vere contemporaneamente.
if (usernameInserito === usernameCorretto && passwordInserita === passwordCorretta) {
  console.log("Accesso consentito");
} else if (usernameInserito === usernameCorretto) {
  // L'username è corretto (altrimenti saremmo nell'else sotto)
  // ma la password no → arriviamo qui
  console.log("Password errata");
} else {
  // L'username stesso è sbagliato
  console.log("Utente non trovato");
}

// Output (username="admin", password="sbagliata"):
// Password errata

// Output (username="admin", password="js2024"):
// Accesso consentito

// Output (username="root", password="qualsiasi"):
// Utente non trovato


// ── ESERCIZIO 4 (difficile) ─────────────────────────────────
// Calcolatore tariffa taxi con supplementi.

const km = 10;
const ora = 14;
const giornoSettimana = 4; // 0=dom, 1=lun, ..., 6=sab

const TARIFFA_BASE  = 3.00;
const COSTO_PER_KM  = 1.50;
const SOGLIA_SCONTO = 20;    // km oltre cui scatta lo sconto

// 1. Calcolo tariffa base prima dei supplementi
let totale = TARIFFA_BASE + (km * COSTO_PER_KM);

// 2. Raccogliamo i moltiplicatori di supplemento in una variabile
//    così possiamo sommarli e applicarli in un'unica operazione
let supplemento = 0;

// Fascia notturna: ore >= 22 OPPURE ore < 6
const eNotte = (ora >= 22 || ora < 6);
if (eNotte) {
  supplemento += 0.50; // +50%
}

// Weekend: sabato (6) o domenica (0)
const eWeekend = (giornoSettimana === 0 || giornoSettimana === 6);
if (eWeekend) {
  supplemento += 0.20; // +20%
}

// Applichiamo i supplementi sul totale corrente
totale = totale * (1 + supplemento);

// 3. Sconto distanza: si applica DOPO i supplementi
if (km > SOGLIA_SCONTO) {
  totale = totale * 0.90; // -10%
}

// 4. Stampa dettaglio
const giorni = ["Dom","Lun","Mar","Mer","Gio","Ven","Sab"];
console.log("--- RICEVUTA TAXI ---");
console.log("Tratta:      " + km + " km");
console.log("Orario:      " + ora + ":00 (" + giorni[giornoSettimana] + ")");
console.log("Tariffa base: €" + (TARIFFA_BASE + km * COSTO_PER_KM).toFixed(2)); // .toFixed(2) arrotonda a 2 decimali e restituisce una stringa
if (eNotte)   console.log("Supplemento notte:   +50%");
if (eWeekend) console.log("Supplemento weekend: +20%");
if (km > SOGLIA_SCONTO) console.log("Sconto distanza:     -10%");
console.log("TOTALE: €" + totale.toFixed(2));

// Output (10km, ore 14, giovedì):
// --- RICEVUTA TAXI ---
// Tratta:      10 km
// Orario:      14:00 (Gio)
// Tariffa base: €18.00
// TOTALE: €18.00

// Output (10km, ore 23, sabato → notte +50% e weekend +20% = +70%):
// Tariffa base: €18.00 → 18 * 1.70 = €30.60

// Output (25km, ore 10, domenica → weekend +20%, sconto -10%):
// Tariffa base: €40.50 → * 1.20 = 48.60 → * 0.90 = €43.74
