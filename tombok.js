const szamok = [1,2,3,4,5,6,7,8,9,10];
const szamok2 = szamok;   // ha bármilyen változást szeretnénk csinálni akkor az hatással lesz a eredeti tömbükre is. 
szamok2[3] = 111;         // hiába definiáltunk egy új változot a tömbünknek, akkor is a változás az eredeti szamok tömbünkben is megjelenik majd

console.log(szamok);  
/* a következő eredméynt fogjuk kapni ->
[
    1, 2, 3, 111,  5,
    6, 7, 8,   9, 10
]
*/

let szam = 5;
let szam2 = szam;   // itt viszont meg fog változni az eredeti szám, nem ugy mint a tömbböknél
szam2 = 11;
console.log(szam);

const ujLength = szamok.push(15);             // push a tömb utolsó elemének berakja amit hozzápusholunk 
console.log(`A tömb már ${ujLength} elemű.`); // a tömb már 11 elemű.
console.log(szamok);

/* így néz ki a szamok nevezetű tömbünk a szamok.push(15) után ->
[
   1, 2, 3, 111,  5,
   6, 7, 8,   9, 10,
  15
]
*/

const utolsoElem = szamok.pop();                // a pop-val ki tudjuk venni a tömb utolsó elemét, ugyanaz mint a push, csak fordítva
console.log(`A tömb utolsó eleme ${utolsoElem}`); // A tömb utolsó eleme 15 -> mindig az elöző állapotot nézi 
console.log(szamok);

/* így fog kinézni a pop után a tömbünk ->
[
  1, 2, 3, 111,  5,
  6, 7, 8,   9, 10
]
*/

const ujLength2 = szamok.unshift(4);           // az unshift-vel hozzádtunk egy elemet a tömbünk elejére, itt példaul a 0-t, de lehet ez pl. 4,6, akármilyen szám
console.log(`A tömb már ${ujLength2} elemű.`); // az a lényeg, hogy olyan, mint a push csak nem a tömb végére hanem legelejére adja hozzá a kívánt számot
console.log(szamok);

/* így fog kinézni az unshift után a tömbünk ->
[
   4, 1, 2, 3, 111,
   5, 6, 7, 8,   9,
  10
]
*/

const elsoElem = szamok.shift();           // kiveszi a tömb első elemét 
console.log(`Az első elem: ${elsoElem}`);  // Az első elem: 4 -> elöző állapotot nézni
console.log(szamok);

/* így fog kinézni a shift után a tömbünk ->
[
   1, 2, 3, 111,  5,
  6, 7, 8,   9, 10
]
*/

// az includes-val mindig true vagy false-ot kapunk 

const megtalalhatoE = szamok.includes(8);
console.log(megtalalhatoE); // true, mert a szamok tömbünkben megtalálható a 8

const megtalalhatoE2 = szamok.includes(999);
console.log(megtalalhatoE2);// false, mert a szamok tömbünkben nem található meg a 999

for (const szam of szamok) {
console.log(szam);
}

/* for of-val végigmegyünk a egyesével és kiirjuk, hogy mi található meg a szamok tömbbünkben
1
2
3
111
5
6
7
8
9
10
*/

console.log("*******************************");

function osszeadas(konzolKiir, a, b) {
    const result = a + b;
    konzolKiir(result);         // fontos sor!!! hozzadjuk a resultot a konzolKiir függvényünkhöz
}

function konzolKiir(ertek) {
    console.log(`A megadott érték: ${ertek}`);
}

osszeadas (konzolKiir, 4, 5); // meghívjuk a felső függvényt amiben meghivtuk a 2. függvényt is.  A megadott érték: 9

function konzolKiir2(ertek, index, tomb) {
    console.log(ertek);
    console.log(index);
    console.log(tomb);
    console.log("*******************************");
}

//osszeadas(konzolKiir, 5, 11);

//szamok.forEach(konzolKiir2);

szamok.forEach(function(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("*******************************");
});


/*
1          -> value - érték, a szamok tömb első értéke az 1 
0          -> index - hányadik indexen helyezkedik el ez az érték 
[
  1, 2, 3, 111,  5,
  6, 7, 8,   9, 10     -> visszakapjuk minden egyes forEach-nél az egész tömböt is 
]
*******************************
2
1
[
  1, 2, 3, 111,  5,
  6, 7, 8,   9, 10
]
*******************************
3
2
[
  1, 2, 3, 111,  5,
  6, 7, 8,   9, 10
]
*/

const myFunc = function(a, b) {  // egy változóval egyenlővé tettük a function-t 
    return a * b;
};

console.log(myFunc(5, 6));       // 30 ki console.log-tuk a vátozó nevét és az értékeit 

/*
    self invoke function          // igy meg tudjuk hívni a saját függvényünket 
*/

(function() {
    console.log("Meg vagyok hívva!");
})();

(function a() {
    console.log("Meg vagyok hívva!");
})();