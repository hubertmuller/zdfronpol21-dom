const elementyTd = document.querySelectorAll("td");
const pierwszyElementTd = elementyTd[0];
const ostatniElementTd = elementyTd[elementyTd.length-1];
console.log("Bieżący dokument zawiera " + elementyTd.length + " elementów td");
console.log("Pierwszy element to: ", pierwszyElementTd);
console.log("Ostatni element to: ", ostatniElementTd);

const pierwszyTd = document.querySelector("td");
console.log("Pierwszy element to: ", pierwszyTd);

//document.getElementById("element1");
//document.getElementsByTagName("table");
//document.getElementsByName("nazwisko");
//document.getElementsByClassName("tekscik");
//....getElements.... zawsze zwroci nam tablice/kolekcje, 
// a getElementById zawsze pojedynczy element

const el = document.getElementsByName("nazwisko")[0];

console.log('element o name=nazwisko ma nastepujace atrybuty', el.attributes);

const maType = el.hasAttribute("type");
console.log('element o name=nazwisko ' + (maType?' ma atrybut type':'nie ma atrybutu type') );

//.getAttribute
//.setAttribute
//.removeAttribute
