function brktSwitch(btn){
    if (btn.getAttribute('direction') === 'left'){
        atualizarDisplay(btn);
        btn.setAttrbute('direction', 'right');
        btn.setAttrbute('jsValue', ')');
    } else if (btn.getAttribute('direction') === 'right'){
        atualizarDisplay(btn);
        btn.setAttrbute('direction', 'left');
        btn.setAttrbute('jsValue', '(');
    }
}

function atualizarDisplay(btn){
    const display = document.getElementById('display');
    if(display.value.length === 9) return;
    if(btn.value === '.') display.value += btn.value;
    else if(display.value === '0') display.value = btn.value;
    else display.value += btn.value;
}

function limparDisplay(){
    document.getElementById('display').value = '0';
}

var operador = ''
var valor1 = 0
function atualizarOperacao(btn){
    const display = document.getElementById('display');
    operador = btn.getAttribute('jsValue');
    valor1 = parseFloat(display.value);
    if (operador === '**0.5') {
        display.value = 0;
        calcularOperacao();
    } else display.value = '0';

}

function calcularOperacao(){
    const display = document.getElementById('display');
    const valor2 = parseFloat(display.value);
    valor1 = eval(valor1+operador+valor2);
    display.value = valor1;
    operador = '';
}       

function manipularTeclado(){
    if(/[0-9]/.test(event.key))
        atualizarDisplay({value: event.key});
}