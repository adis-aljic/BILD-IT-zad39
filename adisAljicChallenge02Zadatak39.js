let broj, prvaCifra, drugaCifra, trecaCifra, zbirCifara, cifra1, cifra2;

broj= 299;

trecaCifra= broj%10;
cifra2= (broj%100 / 10) ;
drugaCifra = Math.trunc(cifra2);
cifra1 = broj/100;
prvaCifra = Math.trunc(cifra1);
zbirCifara = prvaCifra + drugaCifra + trecaCifra;

if ((broj<1000)&&(broj>99)){

console.log("Zbir cifara broja "+broj + " je " + zbirCifara + ".")
}
else
{console.log("Broj "+broj+" nije trocifren broj. Molimo unesite trocifren broj.")}