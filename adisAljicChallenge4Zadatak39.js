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


/*


Ovo mi je bio prvi kod pa sam malo gledao for petlje i uspio sam skratiti kod. 

const mjesec = ["Januar", "Febuar", "Mart", "April", "Maj", "Juni", "Juli", "August", "Septembar", "Oktobar", "Novembar", "Decembar"];
const brojmjeseci=[1,2,3,4,5,6,7,8,9,10,11,12];
let broj;

broj = 9;

if (broj == brojmjeseci[0]) {
    console.log("Broju " + broj + " odgovara mjesec: " + mjesec[0] + ".")
}
else
    if
        (broj == brojmjeseci[1]) {
        console.log("Broju " + broj + " odgovara mjesec: " + mjesec[1] + ".")
    }
    else
        if
            (broj == brojmjeseci[2]) {
            console.log("Broju " + broj + " odgovara mjesec: " + mjesec[2] + ".")
        }
        else if
            (broj == brojmjeseci[3]) {
            console.log("Broju " + broj + " odgovara mjesec: " + mjesec[3] + ".")
        }
        else if
            (broj == brojmjeseci[4]) {
            console.log("Broju " + broj + " odgovara mjesec: " + mjesec[4] + ".")
        }
        else if
            (broj == brojmjeseci[5]) {
            console.log("Broju " + broj + " odgovara mjesec: " + mjesec[5] + ".")
      
        }
        else if (broj == brojmjeseci[6]) {
            console.log("Broju " + broj + " odgovara mjesec: " + mjesec[6] + ".")
        }
        else if (broj == brojmjeseci[7]) {
            console.log("Broju " + broj + " odgovara mjesec: " + mjesec[7] + ".")
        }
        else if
            (broj == brojmjeseci[8]) {
            console.log("Broju " + broj + " odgovara mjesec: " + mjesec[8] + ".")
        }
        else if
            (broj == brojmjeseci[9]) {
            console.log("Broju " + broj + " odgovara mjesec: " + mjesec[9] + ".")
        }
        else if
            (broj == brojmjeseci[10]) {
            console.log("Broju " + broj + " odgovara mjesec: " + mjesec[10] + ".")
        }
        else if (broj == brojmjeseci[11])
         {
            console.log("Broju " + broj + " odgovara mjesec: " + mjesec[11] + ".")
        }
        else{
            console.log(broj + " broj nije validan, molimo unesite brojeve od 1 do 12.")
        }
        */