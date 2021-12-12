import React from 'react';

// COMPONENTES
import Header from '../../layout/Header';

// COMPONENTES CUSTOMIZADOS
import {
  Container,
  Card,
  ContentIcon,
  Icon,
  TextH1,
  TextP
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
      </Card>
    </Container>
    </>
  )
}

export default SuccessDonation;
