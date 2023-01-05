const menu = document.getElementById('menu-ham')
const nav = document.getElementById('nav')
const fechar = document.getElementById('menu-fechar') 
const menuReserva = document.getElementById('menu-reserva')


function abrirMenu() {
    menu.style.display = 'none'
    nav.style.display = 'flex'
    menuReserva.style.display = 'none'
}

function fecharMenu() {
    fechar.style.display = 'flex'
    nav.style.display = 'none'
    menuReserva.style.display = 'flex'
    menu.style.display = 'flex'
}

