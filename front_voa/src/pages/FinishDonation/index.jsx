import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import { moneyFormat } from '../../utils/functions';

import ButtonFinishContribution from '../../components/ButtonFinishContribution'
import Payment from '../../components/Payment'

import {
  Container,
  Content,
  Body,
  GridContainer,
  GridHeade,
  ButtonA,
  TextP,
  GridRow,
  GridCol,
  GridColFlex,
  GridColIncolumn,
  GridColInline,
  GridColInlineLeft,
  Image,
  GridColInlineLeftDescription,
  TextH6Description,
  TextH6Value,
  GridColInlineRigth,
  ButtonEdit,
  ButtonDelete,
  ColBorder,
  TextH4Resumn,
  GridColInlineLeftResumn,
  TextH4ResumnDescription,
  TextH4ResumnValue,
  GridColInlineTotal,
  TextH4Total,
  TextH4ValueTotal,
} from './styles'

const FinishDonation = () => {

  const history = useHistory();
  const { getCart, removeCart } = useCart();
  const { isAuthenticated, getAuth } = useAuth();
  const [finish, setFinish] = useState(false);

  const handleEditContribution = () => {
    history.goBack();
  }

  const handleDeleteContribution = () => {
    const answer = window.confirm("Deseja remover o carrinho?");

    if (answer) {
      history.goBack();
      removeCart();
    }
  }

  const handleFinishContribution = () => {

    if (isAuthenticated()) {
      setFinish(true);
    } else {
      history.push('/login');
    }
  }

  const handlePayment = () => {
    console.log("getAuth ", getAuth());
    history.push('/comprovante');

  }

  return (
    <Container>
      <Content>
        <Body>
          <GridContainer>
            <GridHeade>
              <ButtonA onClick={() => history.goBack()}>
                <svg id="voltar" width="12" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '20px' }}>
                  <path d="M1 9.6a1.2 1.2 0 0 1 .352-.852l7.393-7.396a1.202 1.202 0 1 1 1.7 1.7L3.906 9.6l6.541 6.537a1.202 1.202 0 0 1-1.7 1.7l-7.395-7.39A1.2 1.2 0 0 1 1 9.6v0z" fill="#CC3577" stroke="#CC3577" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </ButtonA>
              <TextP>
                Seu carrinho
              </TextP>
            </GridHeade>

            <GridRow>
              <GridCol>
                <GridColFlex>
                  <GridColIncolumn>
                    <GridColInline>
                      <GridColInlineLeft>
                        <Image src={'https://s3.sa-east-1.amazonaws.com/uploads.voaa.me/campaign/9443/94a28691-38e6-49a6-a8b5-e7bb6cf4cf28-C%C3%B3pia%20de%20CAPAS%20-%202021-11-23T190131.103.jpg'} />
                        <GridColInlineLeftDescription>
                          <TextH6Description>
                            Autista severo se machuca até sangrar. Mãe pede socorro por tratamento para ele
                          </TextH6Description>
                          <TextH6Value>
                            {moneyFormat(getCart()?.value)}
                          </TextH6Value>
                        </GridColInlineLeftDescription>
                      </GridColInlineLeft>

                      <GridColInlineRigth>
                        <ButtonEdit onClick={() => handleEditContribution()}>
                          <svg alt="editar contribuição" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m8.742 2.802 3.847 3.847-8.354 8.353-3.43.379a.72.72 0 0 1-.8-.8l.382-3.432 8.355-8.347zm6.226-.573L13.162.423a1.443 1.443 0 0 0-2.041 0l-1.7 1.7 3.847 3.847 1.7-1.7a1.443 1.443 0 0 0 0-2.041z" fill="#7D2A8A"></path>
                          </svg>
                        </ButtonEdit>

                        <ButtonDelete onClick={() => handleDeleteContribution()}>
                          <svg alt="remover do carrinho" width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.836 1.1h-4.121l-.323-.643A.824.824 0 0 0 9.654 0H5.728a.815.815 0 0 0-.735.457l-.322.643H.549A.549.549 0 0 0 0 1.648v1.1a.549.549 0 0 0 .549.552h14.287a.549.549 0 0 0 .549-.549v-1.1a.548.548 0 0 0-.549-.551zM1.827 16.038a1.648 1.648 0 0 0 1.645 1.545h8.441a1.648 1.648 0 0 0 1.645-1.545L14.286 4.4H1.1l.727 11.638z" fill="#CC3577"></path>
                          </svg>
                        </ButtonDelete>
                      </GridColInlineRigth>
                    </GridColInline>
                  </GridColIncolumn>
                </GridColFlex>
              </GridCol>

              <GridCol>
                <div style={{ width: '100%' }}>
                  <ColBorder>
                    <GridColInlineLeftResumn>
                      <TextH4Resumn> Resumo da doação: </TextH4Resumn>
                    </GridColInlineLeftResumn>

                    <GridColInlineLeftResumn>
                      <TextH4ResumnDescription> Sua contribuição </TextH4ResumnDescription>
                      <TextH4ResumnValue>  {moneyFormat(getCart()?.value)} </TextH4ResumnValue>
                    </GridColInlineLeftResumn>
                  </ColBorder>

                  <GridColInlineTotal>
                    <TextH4Total>
                      VALOR TOTAL
                    </TextH4Total>

                    <TextH4ValueTotal>
                      {moneyFormat(getCart()?.value)}
                    </TextH4ValueTotal>
                  </GridColInlineTotal>
                </div>

              </GridCol>
            </GridRow>

            {!finish ? (
              <ButtonFinishContribution handleFinishContribution={handleFinishContribution} />
            ) :
              <Payment handlePayment={handlePayment} />
            }


          </GridContainer>
        </Body>

      </Content>
    </Container>
  )
}

export default FinishDonation;
