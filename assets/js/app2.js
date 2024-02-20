const but = document.getElementById('btn')
const resul = document.getElementById('resultado')

but.addEventListener('click',() => {

    let n1 = +document.getElementById('uno').value
    let n2 = +document.getElementById('dos').value
    let n3 = +document.getElementById('tres').value
    let res= n1 + n2 + n3

    if(res <= 10){
        resul.innerHTML = 'Llevas: ' + res + ' stickers'
    }else{
        resul.innerHTML = 'Llevas demasiados stickers'
    }

})

