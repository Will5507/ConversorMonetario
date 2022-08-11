const btn = document.querySelector('#calcular') // botao 
const moedaInicial = document.querySelector('#ConverInicial')// input pra conversao inicial
const valor = document.querySelector('#valor')// input do valor a ser convertido
const recebeValor =  valor.value //recebe valor do input digitado pelo usuario
var conversao = 0




btn.addEventListener('click', function() {





        if (moedaInicial  == 'Dolar (USD)') {

                conversao = recebeValor * 0.19
                
        }if(moedaInicial == "Real (BRL)") {

                conversao = recebeValor * 5.25


        }

        
        const div1 = document.createElement('div')    
        div1.classList.add('resultado')
        div1.innerHTML = conversao
        btn.appendChild(div1)

})







    

  




