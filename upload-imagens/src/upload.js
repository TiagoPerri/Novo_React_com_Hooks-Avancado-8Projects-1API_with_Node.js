import React, { useState } from 'react';
import './upload.css';
import {
  Button, Form, Jumbotron, Image, Modal, Spinner
} from 'react-bootstrap';
import axios from 'axios';

function Upload() {

  const UPLOAD_API_URL = 'http://localhost:3001/upload';

  const [imagem, setImagem] = useState();
  const [desabilitarBotao, setDesabilitarBotao] = useState(true);
  const [urlImagem, setUrlImagem] = useState('');
  const [exibirImagem, setExibirImagem] = useState(false);
  const [exibirModal, setExibirModal] = useState(false);
  const [exibirProcessando, setExibirProcessando] = useState(false);

  async function handleUpload(event) {
    event.preventDefault();
    try {
      setExibirProcessando(true);
      setDesabilitarBotao(true);
      const formData = new FormData()
      formData.append('imagem', imagem);
      const { data } = await axios.post(UPLOAD_API_URL, formData);
      setUrlImagem(data.path);
      setExibirImagem(true);
    } catch(err) {
      setExibirProcessando(false);
      setExibirModal(true);
    }
    setExibirProcessando(false);
    setDesabilitarBotao(false);
  }

  function handleImagem(event) {
    setImagem(event.target.files[0]);
    setDesabilitarBotao(false);
  }

  function handleFecharModal() {
    setExibirModal(false);
  }

  return (
    <div>
      <h3 className="text-center">Upload de imagens</h3>
      <Jumbotron>
        <Form onSubmit={handleUpload} noValidate>
          <Form.Group>
            <Form.Label>Selecione a imagem (PNG ou JPEG).</Form.Label>
            <Form.Control
              type="file"
              onChange={handleImagem}
              accept="image/png, image/jpeg" />
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              variant="success"
              type="submit"
              disabled={desabilitarBotao}>
              <span> Fazer upload</span>
            </Button>
          </Form.Group>
          <Form.Group className={exibirProcessando ? 'text-center' : 'hidden'}>
            <Spinner animation="border" />
          </Form.Group>
        </Form>
        <div className={exibirImagem ? 'text-center' : 'hidden'}>
          <hr />
          <a href={urlImagem} target="_blank" rel="noopener noreferrer">
            <Image src={urlImagem} thumbnail />
            <br />
            {urlImagem}
          </a>
        </div>
      </Jumbotron>
      <Modal show={exibirModal} onHide={handleFecharModal}>
        <Modal.Header closeButton>
          <Modal.Title>Erro ao fazer o upload da imagem.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Não foi possível fazer o upload da imagem, tente novamente em instantes.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            onClick={handleFecharModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Upload;