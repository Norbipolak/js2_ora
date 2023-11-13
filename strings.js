const palindrom = "A cápa ette apáca a cápa ette apáca";

/*
    A string egy tömb karakterekkel,
    length -> a karakterek száma 
*/

console.log(`A karakterek száma: ${palindrom.length}`); // A karakterek száma: 35

console.log(palindrom[0]); // a
console.log(palindrom[4]); // p

for(let i = 0; i < palindrom.length; i++) {
    console.log(`${i+1} karakter: ${palindrom[i]}`); // 1 karakter: A, 2 karakter:, 3 karakter:c ....  
    
}

    // 1 karakter: A
    // 2 karakter:
    // 3 karakter: c
    // 4 karakter: á
    // 5 karakter: p
    // 6 karakter: a       const palindrom = "A cápa ette apáca a cápa ette apáca";
    // 7 karakter:
    // 8 karakter: e
    // 9 karakter: t
    // 10 karakter: t
    // 11 karakter: e


/*
    Egy karakter, karakterlánc kezdő 
    értékének a helye a karakterláncban
*/

const index = palindrom.indexOf("ette"); // az eredmény itt 7. (hetedik karakternél kezdődik az "ette")
console.log(index);                      // AZT IS BEÍRHATNÁNK, hogy "a", akkor 0 lenne, hiszen a nulladik karaktere a stringünknek az első "a",
                                         // mindig csak azt nézi, hogy hol van az első egyezés, "a"-nál 0 lesz, mindegy hány "a" jön még utána 

const nincsBenne = palindrom.indexOf("itta");
console.log(`Nincs benne: ${nincsBenne}`); // Nincs benne: -1, ha valami nicsen benne akkor -1-et kapunk 

/*
    A lastIndexOf mindig az utolsó előfordulást keresi
*/

const lastIndex = palindrom.lastIndexOf("ette"); // mindig azt keresi hol fordul elő az adott "ette" vagy akár "a" utoljára a stringünkben
console.log(`Last index: ${lastIndex}`);         // Last index: 25 az "ette"-ből az e a stringünk 25-dik indexén található

/* 
    Egy részlet kívágása a stringből 
*/

const datum = "2018.10.10 10:11:12";   
const ev = parseInt(datum.slice(0, 4)); // slice-nál két értéket adunk meg, az első, hogy hányadik index-től kezdjük -> 0 és hányadik indexig megyünk -> 4 (ami már nincs benne!!!!!!)
console.log(ev);              // 2018
const honap = parseInt(datum.slice(5, 7)); // ParseInt-jük, mert számra van szükségünk, slice meg stringként adja vissza
console.log(honap);           // 10

const perc = datum.slice(-5, -3); // lehet visszafele is, ez is nullától kezdődik, utaána -1,-2,-3,-4 .... és (-5, -3) !!!! nem (-3, -5)
console.log(perc);

/*
    A substring ugynaz mint a slice, csak nem fogadhat el negatív értékeket
*/

console.log(datum.substring(0, 4)); // 2018

/* 
    5-dik indexű elemtől 5 indexet a a substr-vel lehet
*/

const evHonap = datum.substr(5, 5);
console.log(evHonap);  // 10.10

const evNum = 2019;
const honapNum = 5;
const napNum = 6;

const datumStr = evNum + "." + 
honapNum.toString().padStart(2, "0") + "." + napNum.toString().padStart(2, "0");
console.log(datumStr); 

// ha a dátumot ugy szeretnénk, hogy kinézzen, hogy 2019.05.06 akkor a padStart hozzá tudunk adni az eléjére egy 0 (vagy amit akarunk más esetben)
// elöször is át kell alakítani toString-vel, mert ez  csak stringeknél lehetséges, meg kell adni 2 értéket,hogy hány indexű legyen -> 2, mit szeretnénk az elejére rakni -> 0

const datumStr2 = 
`${evNum}.${honapNum.toString().padStart(2, "0")}.${napNum.toString().padStart(2, "0")}`;
console.log(datumStr2);

const strNum = "2019.".padEnd(21, "iii!"); // padEnd, megadjuk hány indexű legyen a string -> 21 és, hogy mit tegyünk a végére "iii!"
console.log(strNum); // 2019.iii!iii!iii!iii!

const nevek = ["Aladár", "Béla", "Cecilia", "Daniella", "Elemér", "Franciska"];
const nevekToString = nevek.toString();
console.log(nevekToString); //Aladár,Béla,Cecilia,Daniella,Elemér,Franciska -> kiveszi őket a tömbböl 

const nevekToString2 = nevek.join(", ");
console.log(nevekToString2); //Aladár, Béla, Cecilia, Daniella, Elemér, Franciska -> kiveszi őket a tömbböl, veszző és szőközzel elvasztva

const nevekToString3 = nevek.join(",");
console.log(nevekToString3); // Aladár,Béla,Cecilia,Daniella,Elemér,Franciska

const nevekToString4 = nevek.join("");
console.log(nevekToString4); // AladárBélaCeciliaDaniellaElemérFranciska

const nevekToString5 = nevek.join("-");
console.log(nevekToString5); // Aladár-Béla-Cecilia-Daniella-Elemér-Franciska

const nevekTomb = nevekToString2.split(", "); // újra belerakja őket a tömbbe, szóközzel és vesszővel elválasztva
console.log(nevekTomb);

/*
    Amit tudni kell:
        *length 
        *indexOf
        *lastIndexOf
        *slice, substring, substr (feldaraboljuk a stringet)
        *toString 
        *ParseInt, ParseFloat
        *padStart, padEnd
        *join(toString) (kiveszük a tömbből valami feltátel alapján) join(""), join(" "), join(" ,"); join("-")
        *split (join ellenkezője, berakjuk a tömbbe)
*/

