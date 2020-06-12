import React from 'react';
import ReactDOM from 'react-dom';
import ListarMoedas from './listar-moedas';

describe('Teste do componente de listagem de moedas', () => {
    it('Deve renderizar o componente sem erro', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ListarMoedas />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});