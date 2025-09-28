const r1_on = document.querySelector('#r1_on')
const r1_off = document.querySelector('#r1_off')
const r2_on = document.querySelector('#r2_on')
const r2_off = document.querySelector('#r2_off')

const username = document.querySelector('#username')
const password = document.querySelector('#password')
const login = document.querySelector('#login')
const auth = document.querySelector('.auth_container')
const note = document.querySelector('#notes')

login.addEventListener('click', () => {
    // sa front end lol HAHAHAHA
    if (username.value === 'yrua_locsin' && password.value === 'P@ssword') {
        auth.style.display = 'none'
    } else {
        note.textContent = 'Wrong credentials please try again'
        username.value = ''
        password.value = ''
    }
})

let stat = {
    r1: false,
    r2: false
}

r1_on.addEventListener('click', () => {
    stat.r1 = true
    r1.setAttribute('src', 'images/light_on.png')
    fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(stat)
    })
})  

r1_off.addEventListener('click', () => {
    stat.r1 = false
    r1.setAttribute('src', 'images/light_off.png')
    fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(stat)
    })
})  

r2_on.addEventListener('click', () => {
    stat.r2 = true
    r2.setAttribute('src', 'images/outlet_on.png')
    fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(stat)
    })
})  

r2_off.addEventListener('click', () => {
    stat.r2 = false
    r2.setAttribute('src', 'images/outlet_off.png')
    fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(stat)
    })
})  

const r1 = document.querySelector("#r1")
const r2 = document.querySelector("#r2")