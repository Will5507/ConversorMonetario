const btn = document.querySelector('#calcular') // botao 
const moedaInicial = document.querySelector('#ConverInicial')// input pra conversao inicial
const valor = document.querySelector('#valor')// input do valor a ser convertido

let conversao = 0



function calcular(e) {

        if (moedaInicial.value  == 'Dolar (USD)') {

              
            conversao = valor.value  * 0.19
                
        }if(moedaInicial.value == "Real (BRL)") {
            conversao = valor.value  * 5.25
        }

        
        const div1 = document.createElement('div')    
        div1.classList.add('resultado')
        div1.innerHTML = conversao
        btn.appendChild(div1)


        
}







    

  




