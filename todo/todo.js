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

function pokazKomunikat(tekst) {
    const potwierdzenie = zrobElement('div', tekst);
    for (let i=0 ; i<bledy.children.length; i++){
        bledy.children[i].remove();
    }
    bledy.appendChild(potwierdzenie);
}

const lista = znajdzElement("ul");
const dodaj = znajdzElement("button");
const input = znajdzElement("input[name='rzecz']");

dodaj.addEventListener("click", () => {
    const rzecz = input.value;
    if (input.value !== ""){
        input.value = "";
        const elLi = zrobElement("li", rzecz);
        const elUsun = zrobElement("button","usun");
        lista.appendChild(elLi);
        elLi.appendChild(elUsun);
        pokazKomunikat('dodano czynnosc');
    }
    else {
        pokazKomunikat('nie można dodoać pustego pola');
    }
})


