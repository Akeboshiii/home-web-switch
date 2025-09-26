const r1_on = document.querySelector('#r1_on')
const r1_off = document.querySelector('#r1_off')
const r2_on = document.querySelector('#r2_on')
const r2_off = document.querySelector('#r2_off')

let stat = {
    r1: false,
    r2: false
}

r1_on.addEventListener('click', () => {
    stat.r1 = true
    fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(stat)
    })
})  

r1_off.addEventListener('click', () => {
    stat.r1 = false
    fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(stat)
    })
})  

r2_on.addEventListener('click', () => {
    stat.r2 = true
    fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(stat)
    })
})  

r2_off.addEventListener('click', () => {
    stat.r2 = false
    fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(stat)
    })
})  