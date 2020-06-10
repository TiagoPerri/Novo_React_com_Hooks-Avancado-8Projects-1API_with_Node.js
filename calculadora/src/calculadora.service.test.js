import React from 'react';
import ReactDOM from 'react-dom';
import CalculadoraService from './calculadora.service';

describe('Teste do CalculadoraService', () => {
    const [calcular, ConcatenaNumero, SOMA, DIMINUIR, MULTIPLICAR, DIVIDIR] = CalculadoraService();

    it('Deve garantir que 1 + 4 = 5.', () => {
        let soma = calcular(1, 4, SOMA);
        expect(soma).toEqual(5);
    });

    it('Deve garantir que 1 - 4 = -3.', () => {
        let subtracao = calcular(1, 4, DIMINUIR);
        expect(subtracao).toEqual(-3);
    });

    it('Deve garantir que 1 * 4 = 4.', () => {
        let multiplicar = calcular(1, 4, MULTIPLICAR);
        expect(multiplicar).toEqual(4);
    });

    it('Deve garantir que 1 / 4 = 0.25.', () => {
        let dividir = calcular(1, 4, DIVIDIR);
        expect(dividir).toEqual(0.25);
    })

    it('Deve retornar 0 pra operação inválida.', () => {
        let opinvalida = calcular(1 , 4, '%');
        expect(opinvalida).toEqual(0);
    });
});