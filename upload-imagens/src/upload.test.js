import React from 'react';
import { render } from '@testing-library/react';
import Upload from './upload';

test('Deve renderizar o componente com sucesso', () => {
  const { getByText } = render(<Upload />);
  const linkElement = getByText("Upload de imagens");
  expect(linkElement).toBeInTheDocument();
});
