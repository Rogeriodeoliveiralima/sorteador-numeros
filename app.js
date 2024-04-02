function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }
    

    
    let numeroSorteados= [];
    let numero;



    for(let i = 1; i <= quantidade; i++){
      
        numero = obterNumeroAleatorio(de, ate);
       

        while(numeroSorteados.includes(numero)){
            
            numero = obterNumeroAleatorio(de, ate);

        }
        numeroSorteados.push(numero);
    }

    alterarStatusDoBotao();

    let resultados = document.getElementById('resultado');
    resultados.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numeroSorteados.sort()}</label>`
}


function obterNumeroAleatorio (min, max){

    return Math.floor(Math.random() * (max - min) + min);

}

function alterarStatusDoBotao(){
    let botao = document.getElementById('btn-reiniciar');

    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value ='';
    document.getElementById('de').value ='';
    document.getElementById('ate').value ='';
    alterarStatusDoBotao();
}
