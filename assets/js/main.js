/*
    1. Chiedi all’utente il suo nome
    2. Chiedi il suo cognome
    3. Chiedi il suo colore preferito
    4. Genera la password costituita dalla stringa nomecognomecolorepreferito21
*/

const name = prompt('Qual è il tuo nome?');

const surname = prompt('Qual è il tuo cognome?');

const color = prompt('Qual è il tuo colore preferito?');

let password = name + surname + color;

console.log(password);

document.getElementById('pass').innerHTML = `<h2>${password}21</h2>`