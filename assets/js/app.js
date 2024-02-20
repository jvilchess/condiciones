let border = true

const img = document.querySelector('img')


img.addEventListener('click', () => {
    if(border == true){
        img.style.border = '2px solid red'
        border = false
        console.log(border)
    }else{
        img.style.border = 'none'
        border = true
        console.log(border)
    }
})