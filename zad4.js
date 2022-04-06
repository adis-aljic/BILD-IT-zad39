const mjesec = ["Januar", "Febuar", "Mart", "April", "Maj", "Juni", "Juli", "August", "Septembar", "Oktobar", "Novembar", "Decembar"];
let broj;

broj = 4;

for (  i=1; i<=12; i++ )
{
    if (i==broj)
    {
        console.log("Broju " + broj + " odgovara mjesec: " + mjesec[i-1] + ".")
        break;

    }

}


