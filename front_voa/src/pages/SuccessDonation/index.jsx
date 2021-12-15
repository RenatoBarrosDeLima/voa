import React from 'react';
import { Link } from 'react-router-dom';

// COMPONENTES
import Header from '../../layout/Header';

// COMPONENTES CUSTOMIZADOS
import {
  Container,
  Card,
  ContentIcon,
  Icon,
  TextH1,
  TextP,
  Col,
  Button
} from './styles';

const SuccessDonation = () => {
  return (
    <>
    <Header />
    <Container>
      <Card>
        <ContentIcon>
          <Icon className="checkmark">✓</Icon>
        </ContentIcon>
        <TextH1>Sucesso!</TextH1>
        <TextP>Obrigado pela doação</TextP>
        <Col>
            <Link to='/'>
              <Button>Home</Button>
            </Link>
          </Col>
      </Card>
    </Container>
    </>
  )
}

export default SuccessDonation;
