let nameJ1 = document.getElementById('name1')
let nameJ2 = document.getElementById('name2')
let nomJ1 = document.getElementById('nom1')
let nomJ2 = document.getElementById('nom2')
let widthWin = window.innerWidth

nameJ1.addEventListener('blur', () => {nomJ1.innerText = nameJ1.value})
nameJ2.addEventListener('blur', () => {nomJ2.innerText = nameJ2.value})


widthWin.addEventListener('change', () => {
    if (widthWin < 992 ) { document.getElementById('ligne1').setAttribute('class','row') && document.getElementById('ligne2').setAttribute('class','row')}
    else {document.getElementById('ligne1').setAttribute('class','row-cols-1') && document.getElementById('ligne2').setAttribute('class','row-cols-1')}
})

    




