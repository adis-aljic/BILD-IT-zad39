let a,b,c,min,max,mid;


a=25;
b=27;
c=12;

if (a<b)
{
    min=a;
    max=b;
}
else if{
    min=b;
    max=a;
}
else if (min>c){
    min=c;
    
}
else if (max<c){
    max=c;
}
else{
    mid=c;
}
console.log("Tri cijela broja: "+a+","+b+" i "+c+ " u rastucem obliku izgledaju ovako: " +min+" "+mid+" "+max+".")
