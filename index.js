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

const przyciskSet = document.getElementById("set");
const przyciskDel = document.getElementById("del");

przyciskSet.addEventListener("click", function () { 
    console.log('kliknieto na set');
    //.setAttribute
    el.setAttribute("class","wazne");
});

przyciskDel.addEventListener("click", function () { 
    console.log('kliknieto na del');
    //.removeAttribute
    el.removeAttribute("class");
});

const hasloWidget = document.getElementsByName("haslo")[0];
hasloWidget.addEventListener("keyup", function () { 
    console.log('nacisnieto klawisz');
    //.getAttribute
    //const obecnaWartosc = hasloWidget.getAttribute("value");
    const komplikacja = hasloWidget.value.length / 8 ;
    let kolor = "extra";
    if (komplikacja < 0.25) {
        kolor = "weak";
    } else if (komplikacja < 0.5) {
        kolor = "medium";
    } else if (komplikacja < 0.75) {
        kolor = "almost";
    } else if (komplikacja < 1) {
        kolor = "close";
    } else if (komplikacja < 1.5) {
        kolor = "ok";
    } else if (komplikacja < 2) {
        kolor = "super";
    } 
    console.log('komplikacja=' + komplikacja);
    hasloWidget.setAttribute("class", kolor);
});




