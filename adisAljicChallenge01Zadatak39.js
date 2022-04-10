let racun, iznosNapojnice, iznosRacuna, napojnica, procenatNapojnice;

racun = 23;
procenatNapojnice = 10;

napojnica = procenatNapojnice/100;

iznosNapojnice = racun * napojnica;
iznosRacuna = iznosNapojnice + racun;


console.log
("Za racun od " + racun + "KM i napojnicu od " + procenatNapojnice + "%, iznos napojnice je " + iznosNapojnice.toFixed(2) + 
"KM a ukupan iznos racuna je " + iznosRacuna.toFixed(2) + "KM.")
// koristio sam .toFixed metod da bi zaokruzio iznose napojnice i racuna na dvije decimale