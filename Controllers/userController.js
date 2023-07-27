import { dataUsers } from "../Models/userModel.js";

const btnListar = document.querySelector('#btnListar');
const cards = document.querySelector('#cards');

btnListar.addEventListener('click', mostrarUsuarios)

function mostrarUsuarios() {
    dataUsers.map((dataUser)=>{
        const nombre = document.createElement('h1')
        const profesion = document.createElement('h3')
        const edad  = document.createElement('h3')
        const card = document.createElement('section')

        nombre.textContent = dataUser.nombre;
        profesion.textContent = dataUser.profesion;
        edad.textContent = dataUser.edad;

        card.append(nombre,profesion,edad)
        cards.appendChild(card)
        card.classList.add('card')
        cards.appendChild(card)

    })
}
//mostrarUsuarios()