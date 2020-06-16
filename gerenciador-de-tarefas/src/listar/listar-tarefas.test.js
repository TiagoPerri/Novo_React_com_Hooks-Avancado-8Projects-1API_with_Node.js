import React from 'react';
import ReactDOM from 'react-dom';
import ListarTarefas from './listar-tarefas';
import Tarefa from '../models/tarefa.model';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Teste do componente de listagem de tarefas', () => {

  const nomePrimeiraTarefa = 'Primeira tarefa';
  const nomeSegundaTarefa = 'Segunda tarefa';
  const nomeTerceiraTarefa = 'Terceira tarefa';

  beforeEach(() => {
    localStorage['tarefas'] = JSON.stringify([
      new Tarefa(1, nomePrimeiraTarefa, false),
      new Tarefa(2, nomeSegundaTarefa, false),
      new Tarefa(3, nomeTerceiraTarefa, false)
    ]);
  });

  afterEach(() => {
    delete localStorage['tarefas'];
  });

  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListarTarefas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('deve exibir uma tabela contendo 3 tarefas', () => {
    const { getByTestId } = render(<ListarTarefas />);
    const tabela = getByTestId('tabela');
    expect(tabela).toHaveTextContent(nomePrimeiraTarefa);
    expect(tabela).toHaveTextContent(nomeSegundaTarefa);
    expect(tabela).toHaveTextContent(nomeTerceiraTarefa);
  });

  it('deve filtrar os dados da tabela de tarefas', () => {
    const { getByTestId } = render(<ListarTarefas />);
    fireEvent.change(getByTestId('txt-tarefa'), { target: { value: nomePrimeiraTarefa }});
    const tabela = getByTestId('tabela');
    expect(tabela).toHaveTextContent(nomePrimeiraTarefa);
    expect(tabela).not.toHaveTextContent(nomeSegundaTarefa);
    expect(tabela).not.toHaveTextContent(nomeTerceiraTarefa);
  });

});
