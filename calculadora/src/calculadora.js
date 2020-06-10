import React, { useState } from 'react';
import './calculadora.css';
import { 
  Jumbotron, Container, Row, Col, Button, Form
} from 'react-bootstrap';
import CalculadoraService from './calculadora.service';

function Calculadora() {

  const [calcular, ConcatenaNumero, SOMA, DIMINUIR, MULTIPLICAR, DIVIDIR] = CalculadoraService();

  const [txtNumeros, setTxtNumeros] = useState('0');
  const [numero1, setNumero1] = useState('0');
  const [numero2, setNumero2] = useState(null);
  const [operacao, setOperacao] = useState(null);

  function AddNumero(numero){
    let resultado;
    if (operacao === null){
      resultado = ConcatenaNumero(numero1, numero);
      setNumero1(resultado);
    } else {
      resultado = ConcatenaNumero(numero2, numero);
      setNumero2(resultado);
    }
    setTxtNumeros(resultado);
  }

  function DefineOp(op){
    //Apenas define a operação caso nenhuma exista
    if(operacao===null){
      setOperacao(op);
      return;
    }
    //Caso a operaçao estiver definida e numero 2 selecionado, realiza o calculo
    if(numero2!==null){
      const resultado = calcular(parseFloat(numero1),parseFloat(numero2),operacao);
      setOperacao(op);
      setNumero1(resultado.toString());
      setNumero2(null);
      setTxtNumeros(resultado.toString());
    }
  }

  function acaoCalcular(){
    if(numero2 === null){
      return;
    }
    const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
    setTxtNumeros(resultado);
  }

  function LimpaTela(){
    setTxtNumeros('0');
    setNumero1('0');
    setNumero2(null);
    setOperacao(null);
  }

  return (
    <Jumbotron style={{
      background: 'transparent !important',
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '5px',
      width: '400px'
    }}>
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger"
              onClick={LimpaTela}>C</Button>
          </Col>
          <Col xs="9">
            <Form.Control type="text" 
            name="txtNumeros"
            className="text-right"
            readOnly="readonly"
            value={txtNumeros} 
            data-testid="TxtNumeros" />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light"
              onClick={() => AddNumero('7')}>7</Button>
          </Col>
          <Col>
            <Button variant="light"
              onClick={() => AddNumero('8')}>8</Button>
          </Col>
          <Col>
            <Button variant="light"
              onClick={() => AddNumero('9')}>9</Button>
          </Col>
          <Col>
            <Button variant="warning"
              onClick={() => DefineOp(DIVIDIR)}>/</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light"
              onClick={() => AddNumero('4')}>4</Button>
          </Col>
          <Col>
            <Button variant="light"
              onClick={() => AddNumero('5')}>5</Button>
          </Col>
          <Col>
            <Button variant="light"
              onClick={() => AddNumero('6')}>6</Button>
          </Col>
          <Col>
            <Button variant="warning"
              onClick={() => DefineOp(MULTIPLICAR)}>*</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light"
              onClick={() => AddNumero('1')}>1</Button>
          </Col>
          <Col>
            <Button variant="light"
              onClick={() => AddNumero('2')}>2</Button>
          </Col>
          <Col>
            <Button variant="light"
              onClick={() => AddNumero('3')}>3</Button>
          </Col>
          <Col>
            <Button variant="warning"
              onClick={() => DefineOp(DIMINUIR)}>-</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light"
              onClick={() => AddNumero('0')}>0</Button>
          </Col>
          <Col>
            <Button variant="light"
              onClick={() => AddNumero('.')}>.</Button>
          </Col>
          <Col>
            <Button variant="success"
              onClick={acaoCalcular}>=</Button>
          </Col>
          <Col>
            <Button variant="warning"
              onClick={() => DefineOp(SOMA)}>+</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculadora;
