const btn = document.getElementById('btn')
const result = document.getElementById('res')

btn.addEventListener('click', () => {

    let n1 = document.getElementById('option1').value
    let n2 = document.getElementById('option2').value
    let n3 = document.getElementById('option3').value
    let sum = n1 + n2 + n3
    
    if(sum == '911'){
        result.innerHTML = 'Password 1 correcto'
    }else if(sum == '714' ) {
        result.innerHTML = 'Password 2 correcto'
    }else{
        result.innerHTML = 'Contraseña incorrecta'
    }

})