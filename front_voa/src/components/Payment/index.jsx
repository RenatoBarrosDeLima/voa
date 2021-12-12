import React from 'react';

import {
  Container,
  Content,
  GridRow,
  GridCol,
  ButtonPix
} from './styles';

const Payment = ({ choicePaymentMethod }) => {



  return (
    <Container>
      <Content>
        <GridRow>
          <GridCol>
            <ButtonPix onClick={() => choicePaymentMethod()}>
              <img style={{width:'30%'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1920px-PayPal.svg.png"/>
            </ButtonPix>
          </GridCol>
        </GridRow>
      </Content>
    </Container>
  )
}

export default Payment;
