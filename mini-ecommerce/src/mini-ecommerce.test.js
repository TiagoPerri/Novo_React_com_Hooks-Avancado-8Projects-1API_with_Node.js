import React from 'react';
import { render } from '@testing-library/react';
import MiniEcommerce from './mini-ecommerce';

describe('Teste do componente mini-ecommerce', () => {

  it('Deve renderizar o componente sem erros', () => {
    const { getByText } = render(<MiniEcommerce />);
    const linkElement = getByText('Mini Ecommerce');
    expect(linkElement).toBeInTheDocument();
  });
});