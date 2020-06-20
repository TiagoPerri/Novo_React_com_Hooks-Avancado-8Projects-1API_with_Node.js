import React from 'react';
import { render } from '@testing-library/react';
import ListarProdutos from './listar-produtos';

describe('Teste do componente de listagem de produtos', () => {

  it('Deve exibir os nomes dos produtos nos cards', () => {
    const { getByTestId } = render(
      <ListarProdutos
        adicionarProduto={() => false}
        exibirMensagem={() => false} />
    );
    expect(getByTestId('card1')).toHaveTextContent('Aprenda Java');
    expect(getByTestId('card2')).toHaveTextContent('JavaScript em 24 horas');
  });

  it('Deve exibir as descrições dos produtos nos cards', () => {
    const { getByTestId } = render(
      <ListarProdutos
        adicionarProduto={() => false}
        exibirMensagem={() => false} />
    );
    expect(getByTestId('card1')).toHaveTextContent('Descrição do produto aqui...');
    expect(getByTestId('card3')).toHaveTextContent('Descrição do produto aqui...');
  });

  it('Deve exibir os preços dos produtos nos botões de comprar', () => {
    const { getByTestId } = render(
      <ListarProdutos
        adicionarProduto={() => false}
        exibirMensagem={() => false} />
    );
    expect(getByTestId('card1')).toHaveTextContent('Comprar (R$ 59,99)');
    expect(getByTestId('card2')).toHaveTextContent('Comprar (R$ 19,99)');
  });
});