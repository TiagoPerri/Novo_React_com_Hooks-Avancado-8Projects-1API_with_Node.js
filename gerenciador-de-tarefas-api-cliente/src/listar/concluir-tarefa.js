import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function ConcluirTarefa(props) {

  const API_URL_CONCLUIR_TAREFA = 'http://localhost:3001/gerenciador-tarefas/:id/concluir';

  const [exibirModal, setExibirModal] = useState(false);
  const [exibirModalErro, setExibirModalErro] = useState(false);

  function handleAbrirModal(event) {
    event.preventDefault();
    setExibirModal(true);
  }

  function handleFecharModal() {
    setExibirModal(false);
  }

  function handleFecharModalErro() {
    setExibirModalErro(false);
  }

  async function handleConcluirTarefa(event) {
    event.preventDefault();
    try {
      await axios.put(API_URL_CONCLUIR_TAREFA.replace(':id', props.tarefa.id));
      setExibirModal(false);
      props.recarregarTarefas(true);
    } catch(erro) {
      setExibirModal(false);
      setExibirModalErro(true);
    }
  }

  return (
    <span className={props.className}>
      <Button className="btn-sm" onClick={handleAbrirModal}
        data-testid="btn-abrir-modal">
        <FontAwesomeIcon icon={faClipboardCheck} />
      </Button>
      <Modal show={exibirModal} onHide={handleFecharModal}
        data-testid="modal">
        <Modal.Header closeButton>
          <Modal.Title>Concluir tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deseja realmente concluir a seguinte tarefa?
          <br />
          <strong>{props.tarefa.nome}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConcluirTarefa}
            data-testid="btn-concluir">
            Sim
          </Button>
          <Button variant="light" onClick={handleFecharModal}
            data-testid="btn-fechar-modal">
            Não
          </Button>
        </Modal.Footer>
      </Modal>
      
      <Modal show={exibirModalErro} onHide={handleFecharModalErro}>
        <Modal.Header closeButton>
          <Modal.Title>Erro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Erro ao concluir tarefa, tente novamente em instantes.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleFecharModalErro}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  );
}

ConcluirTarefa.propTypes = {
  tarefa: PropTypes.object.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default ConcluirTarefa;