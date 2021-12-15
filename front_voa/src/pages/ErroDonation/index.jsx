import React from 'react';
import { Link } from 'react-router-dom';

// COMPONENTES
import Header from '../../layout/Header';

// COMPONENTES CUSTOMIZADOS
import {
  Container,
  Content,
  Erro,
  TextH1,
  TextH2,
  TextP,
  Col,
  Button
} from './styles';

const ErroDonation = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Erro>
            <TextH1>ERR<span></span>!</TextH1>
          </Erro>
          <TextH2>Erro ao concluir a doação.</TextH2>
          <TextP>Desculpe, ocorreu um problema na finalização da sua doação, tente novamente por favor.</TextP>
          <Col>
            <Link to='/'>
              <Button>Home</Button>
            </Link>
          </Col>
        </Content>
      </Container>
    </>
  )
}

export default ErroDonation;
