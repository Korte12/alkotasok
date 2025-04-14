/**
 * Létrehozunk egy új <div> elemet a megadott osztálynévvel.
 * 
 * @param {string} Div - Az osztály neve
 * @returns {HTMLDivElement} A div elem
 */

const createDiv = (Div) => { //Létrehozok egy arrow functiont
    const div = document.createElement('div'); // Létrehozom a divet
    div.className = Div; //Hozzáadok a div-hez egy classt
    return div; //Visszaadom a div értékét
}

const container = createDiv('container'); //Létrehozok a container-t aminek az értéke az arrow function
document.body.appendChild(container); //A document body-hoz hozzáappendelem a containert

const table = createDiv('table'); //Létrehozom a table-t aminek az értéke az arrow function
const form = createDiv('form'); //Létrehozom a form-ot containert aminek az értéke az arrow function

container.appendChild(table); //Hozzá rakom a container-hez a tablet

container.appendChild(form);//Hozzá rakom a container-hez a formot