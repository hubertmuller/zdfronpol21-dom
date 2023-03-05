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

const lista = znajdzElement("ul");
const dodaj = znajdzElement("button");
const input = znajdzElement("input[name='rzecz']");

dodaj.addEventListener("click", () => {
    const rzecz = input.value;
    input.value = "";
    const elLi = zrobElement("li", rzecz);
    lista.appendChild(elLi);
})


