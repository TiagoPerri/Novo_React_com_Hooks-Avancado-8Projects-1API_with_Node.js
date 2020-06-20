import React from 'react';
import { render } from '@testing-library/react';
import Produtos from './produtos';

describe('Teste do componente produtos', () => {

  it('Deve renderizar o componente quando visível', () => {
    const { getAllByText } = render(
      <Produtos visivel={true} adicionarProduto={() => false} />
    );
    const botoes = getAllByText(/comprar/i);
    expect(botoes).toBeTruthy();
  });
});