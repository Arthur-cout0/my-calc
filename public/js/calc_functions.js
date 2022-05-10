function brktSwitch(btn){
    if (btn.getAttribute('direction') === 'left'){
        atualizarDisplay(btn);
        btn.setAttribute('direction', 'right');
        btn.value = ')';
    } else if (btn.getAttribute('direction') === 'right'){
        atualizarDisplay(btn);
        btn.setAttribute('direction', 'left');
        btn.value = '(';
    }
}

function aumentarTamanhoDisplay(tamanho){
    const display = document.getElementById('display');
    display.style.fontSize = 'calc(10vmin /' + ((tamanho / 10) + 1) + ')';
}

function atualizarDisplay(btn){
    const display = document.getElementById('display');
    console.log(btn.getAttribute('jsValue'));
    if(display.value.length >= 9) aumentarTamanhoDisplay(display.value.length);
    if(btn.value === '.') display.value += btn.value;
    else if(display.value === '0') display.value = btn.value;
    else if(btn.value === '√' || btn.value === '^') display.value += btn.getAttribute('jsValue');
    else display.value += btn.value;
}

function limparDisplay(){
    document.getElementById('display').value = '0';
    display.style.fontSize = '10vmin';
}

var operacao = '';
function atualizarOperacao(btn){
    const display = document.getElementById('display');
    atualizarDisplay(btn);
}

function calcularOperacao(){
    const display = document.getElementById('display');
    operacao = display.value;
    valor1 = eval(operacao);
    display.value = valor1;
}       

function manipularTeclado(){
    if(/[0-9]/.test(event.key))
        atualizarDisplay({value: event.key});
}