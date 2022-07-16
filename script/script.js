// as moedas terão um valor padrão dentro do javascript
// quero pegar o valor do input "valor"
//envia danado

const calcular = document.querySelector('#calcular')
var conversao = 0
let ConversorInicial = 0
let ConversorFinal = 0




calcular.addEventListener('click', function (e){

    e.preventDefault()

    const moedas = document.querySelectorAll('.recebeMoedas')

    const valor = document.querySelector('#valor')
    const recebeValor =  valor.value

    for(let i of moedas) {
        
        if(i.value === 'Dolar (USD)') {
            conversao = recebeValor *  5.15 // Cotação diária
        } if(i.value === 'Real (BRL)') {
            conversao = recebeValor * 0.19
        } 
    }

     // criar uma div html via js com o valor de conversao
    //const body = document.querySelector('body')
    //const corpo1 = document.querySelector('.corpo1')
    //const form = document.querySelector('form')

    const third = document.querySelector('.third')
    const div1 = document.createElement('div')
    div1.classList.add('resultado')
    div1.innerHTML = conversao
  
    third.appendChild(div1)
    

   // console.log(recebeValor)  // na verdade quero adicionar esse valor como um elemento HTML novo

})

