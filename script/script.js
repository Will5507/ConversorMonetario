// as moedas terão um valor padrão dentro do javascript
// quero pegar o valor do input "valor"

const calcular = document.querySelector('#calcular')
var conversao = 0
let ConversorInicial = 0
let ConversorFinal = 0

// pegar atributos de moedas
//Campo inicial
/*const USD = document.getElementById('dolone').value
const  REAL = document.getElementById('realone').value
const IENE = document.getElementById('ieneone').value*/

console.log(moedas)

calcular.addEventListener('click', function (e){

    e.preventDefault()

    const moedas = document.getElementsByClassName('recebeMoedas')

    const valor = document.querySelector('#valor')
    const recebeValor =  valor.value

    for(let i of moedas) {
        console.log(i.value)
        if(i.value ==='Dolar (USD)') {
            conversao = recebeValor *  0.19 // Cotação diária
        } if(i.value ==='Real (BRL)') {
            conversao = recebeValor * 5.15
        } 
    }

     // criar uma div html via js com o valor de conversao
    //const body = document.querySelector('body')
    const corpo1 = document.querySelector('.corpo1')

    const div1 = document.createElement('div')
    div1.classList.add('resultado')
    div1.innerHTML = conversao
    corpo1.appendChild(div1)

   // console.log(recebeValor)  // na verdade quero adicionar esse valor como um elemento HTML novo

})

