function kolortla() {
    const tekst = document.getElementById("text")
    tekst.classList.add("tlo")
}
function rozmiar() {
    const tekst = document.getElementById("text")
    tekst.classList.add("rozmiar")
}
function font() {
    const tekst = document.getElementById("text")
    tekst.classList.add("font")
}
function usun() {
    const tekst = document.getElementById("text") 
    tekst.classList.remove("tlo","rozmiar","font")
}