const btnProx = document.querySelector("#proximo")
const btnVolt = document.querySelector("#voltar")
const slide = document.querySelectorAll(".slide")
const carrossel = document.querySelector("#carrossel")
let cont = 0

function Esconder(){
    slide.forEach(element => element.classList.remove('aparecer'))
}

function Mostrar(){
    slide[cont].classList.add('aparecer')
}

function mudarBackground(){
    const classes = ["vulcao", "oeste", "tropical"]
    carrossel.classList.remove(...classes)
    carrossel.classList.add(classes[cont])
}

function prox(){
    Esconder()
    if(cont === slide.length - 1){
        cont = 0
    }else{
        cont++
    }
    mudarBackground()
    Mostrar()
}

function prev(){
    Esconder()
    if(cont === slide.length - 1){
        cont = 0
    }else{
        cont--
    }
    
    if(cont < 0)
        cont++

    mudarBackground()
    Mostrar()
}

btnProx.addEventListener('click', prox)
btnVolt.addEventListener('click', prev)

const menu = document.getElementById("menu")
const navegacao = document.getElementById("navegacao")

menu.addEventListener('click', ()=>{
    if(navegacao.style.display == 'none'){
        navegacao.style.display = 'block'
    }else{
        navegacao.style.display = 'none'
    }
})