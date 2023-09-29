'use strict'; //Modo restrito

//Função para limpar formulario
// Arrow function
const limparformulario = (endereco) => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}