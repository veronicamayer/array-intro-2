/* Level 1_11 */
console.log("UEBUNG 1:");
console.log("---------Level 1_11----------");

let array = [ "imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg" ];
array.splice(2,0,"imageTeilnehmer008supercode.jpg","imageTeilnehmer009supercode.jpg","imageTeilnehmer010supercode.jpg");
console.log(array);
array.splice(5,0,"imageTeilnehmer014supercode.jpg","imageTeilnehmer015supercode.jpg","imageTeilnehmer016supercode.jpg","imageTeilnehmer017supercode.jpg","imageTeilnehmer018supercode.jpg","imageTeilnehmer019supercode.jpg");
console.log(array);
array.splice(2,0,"imageTeilnehmer002supercode.jpg","imageTeilnehmer003supercode.jpg","imageTeilnehmer004supercode.jpg","imageTeilnehmer005supercode.jpg","imageTeilnehmer006supercode.jpg","imageTeilnehmer007supercode.jpg");
console.log(array);
array.splice(11,0,"imageTeilnehmer011supercode.jpg","imageTeilnehmer012supercode.jpg","imageTeilnehmer013supercode.jpg");
console.log(array);


/* Level 1_12 */
console.log("---------Level 1_12----------");

let arrayNeu = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];

let copyImg1 = arrayNeu.slice(7,15);
console.log(copyImg1);
let copyImg2 = arrayNeu.slice(6,12);
console.log(copyImg2);


/* Level 1_3 */
console.log("---------Level 1_3----------");

var numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
console.log(numArray1.sort((a,b)=>a-b));


/* Level 1_1 */
console.log("---------Level 1_1----------");

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

function sortierung() {
    console.log(languages.sort());
};

sortierung();


/* Level 1_1 */
console.log("UEBUNG 2:");
console.log("---------Level 1_1----------");

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

function myDrinks() {
    getraenke.sort();
    console.log(getraenke);
    getraenke.forEach(element => {
        document.querySelector("body").innerHTML += "<p>" + element + "</p>";
    });
};

myDrinks();


/* Level 1_2 */
console.log("---------Level 1_2----------");

const upperDrinks = getraenke.map(element => {
    return element.toUpperCase();
});

console.log(upperDrinks);


/* Level 1_3 */
console.log("---------Level 1_3----------");

let arrayX = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

arrayX = arrayX.map(element => {
    return element * 2;
});

console.log(arrayX.sort((a,b)=>a-b));


/* Level 1_5 */
console.log("---------Level 1_5----------");

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

checkNumber = checkNumber.map(num => {
    return num % 3 === 0 ? num + 100 : num;
});

console.log(checkNumber);