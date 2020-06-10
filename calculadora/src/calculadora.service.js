function CalculadoraService() {

    const SOMA = '+';
    const DIMINUIR = '-';
    const MULTIPLICAR = '*';
    const DIVIDIR = '/';

    function calcular(num1,num2,operacao){
        let resultado;

        switch(operacao){
            case SOMA:
                resultado = num1+num2;
                break;
            case DIMINUIR:
                resultado = num1-num2;
                break;
            case MULTIPLICAR:
                resultado = num1*num2;
                break;
            case DIVIDIR:
                resultado = num1/num2;
                break;
            default:
                resultado = 0;
        }
        
        return resultado;
    }

    function ConcatenaNumero(numAtual, numConcat) {
        // caso contenha apenas 0 ou null, reinicia o valor
        if(numAtual === '0' || numAtual === null) {
            numAtual = '';
        }

        // quando o primeiro digito for ., concatena com o 0 antes do .
        if(numConcat === '.' && numAtual === ''){
            return '0.';
        }
        //caso . digitado e já contem ., apenas retornar
        if(numConcat === '.' && numAtual.indexOf('.') > -1){
            return numAtual;
        }

        return numAtual + numConcat;
    }

    return [
        calcular,
        ConcatenaNumero,
        SOMA,
        DIMINUIR,
        MULTIPLICAR,
        DIVIDIR
    ];
}

export default CalculadoraService;