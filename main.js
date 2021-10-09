//chiedo il nome
const userName = prompt("come ti chiami?")
const lastName = prompt("qual è il tuo cognome?")
const favouriteColor = prompt("qual è il tuo colore preferito?")
const userAge = prompt ("quanti anni hai")

const end = userName + lastName + favouriteColor + userAge



document.getElementById("PASS"). innerHTML = `la tua password è ${end}`

