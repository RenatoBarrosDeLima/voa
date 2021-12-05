import React from 'react';

import {
  Container,
  Content,
  GridRow,
  TextH2Title,
  Image,
  TextH2Value,
  StepArea,
  Step,
  StepCircle,
  TextH3Step,
  StepText,
  TextPStep,
  ButtonGoBack,
  ButtonTextP,
} from './styles';


const ProofPayment = () => {
  return (
    <Container>
      <Content>
        <GridRow>
          <TextH2Title>
            Pix Copia e Cola
          </TextH2Title>
          <Image src={'data:image/png;base64,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'} />
          <TextH2Value> R$ 50,00 </TextH2Value>

          <StepArea>
            <Step>
              <StepCircle>
                <TextH3Step> 1</TextH3Step>
              </StepCircle>
              <StepText>
                <TextPStep>
                  Clique no botão <b>Copiar Código Pix</b>
                </TextPStep>

              </StepText>
            </Step>
            <Step>
              <StepCircle>
                <TextH3Step> 2</TextH3Step>
              </StepCircle>
              <StepText>
                <TextPStep>
                  Abra o aplicativo do seu banco ou instituição financeira e  <b>acesse o Menu Pix</b>
                </TextPStep>
              </StepText>
            </Step>
            <Step>
              <StepCircle>
                <TextH3Step> 3</TextH3Step>
              </StepCircle>
              <StepText>
                <TextPStep>
                  Escolha a opção  <b>Pix Copia e Cola</b>
                </TextPStep>
              </StepText>
            </Step>
            <Step>
              <StepCircle>
                <TextH3Step> 4</TextH3Step>
              </StepCircle>
              <StepText>
                <TextPStep>
                  <b>Cole o Código Pix</b> , confirme as informações e  <b>finalize.</b>
                </TextPStep>

              </StepText>
            </Step>
          </StepArea>

          <ButtonGoBack>
            <ButtonTextP>
              Voltar para home
            </ButtonTextP>
          </ButtonGoBack>

        </GridRow>
      </Content>
    </Container>
  )
}

export default ProofPayment;
