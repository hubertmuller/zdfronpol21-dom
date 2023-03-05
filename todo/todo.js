function znajdzElementy(selektor) {
    return document.querySelectorAll(selektor);
}

function znajdzElement(selektor) {
    return document.querySelector(selektor);
}

function zrobElement(nazwa,tekst) {
    const element = document.createElement(nazwa);
    element.innerText=tekst;
    return element
}

function pokazKomunikat(tekst, waga) {
    const potwierdzenie = zrobElement('div', tekst);
    for (let i=0 ; i<bledy.children.length; i++){
        bledy.children[i].remove();
    }
    potwierdzenie.setAttribute("class", "waga"+waga)
    bledy.appendChild(potwierdzenie);
    window.setTimeout( () => {
        for (let i=0 ; i<bledy.children.length; i++){
            bledy.children[i].remove();
        }
    } , 2000);
}

const lista = znajdzElement("ul");
const dodaj = znajdzElement("button");
const input = znajdzElement("input[name='rzecz']");
const bledy = znajdzElement("div#bledy");

// #pies -> <div id="pies"> lub <body id="pies">
// .pies -> <span class="pies"> lub <div class="osa kot pies">
// table.wazne -> <table class="wazne">
// table.wazne.poufne -> <table class="wazne poufne mocna">
// table#glowna -> <table id="glowna">
// table.wazne#glowna -> <table id="glowna" class="wazne">
// table[id=wazne] -> <table id="wazne">
// input[name=nazwisko] -> <input name="nazwisko">
// #pies > .kot > div ->  <div id="pies"><div class="kot"><div></div></div></div>

dodaj.addEventListener("click", () => {
    const rzecz = input.value;
    if (input.value !== ""){
        input.value = "";
        const elLi = zrobElement("li", rzecz);
        const elUsun = zrobElement("button","usun");
        lista.appendChild(elLi);
        elLi.appendChild(elUsun);
        pokazKomunikat('dodano czynnosc', 0);
    }
    else {
        pokazKomunikat('nie można dodoać pustego pola', 2);
    }
})


