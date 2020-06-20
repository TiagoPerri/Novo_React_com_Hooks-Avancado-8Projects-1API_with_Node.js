import React from 'react';
import { render } from '@testing-library/react';
import axiosMock from 'axios';
import ListarCidades from './listar-cidades';

describe('Teste do componente de listagem de cidades', () => {

  it('Deve gerar uma listagem de cidades', async () => {
    axiosMock.get.mockResolvedValueOnce({ data: ['São Paulo', 'São Pedro']});
    const { findByTestId } = render(<ListarCidades estado="SP" />);
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(await findByTestId('São Paulo')).toHaveTextContent('São Paulo');
    expect(await findByTestId('São Pedro')).toHaveTextContent('São Pedro');
  });
});