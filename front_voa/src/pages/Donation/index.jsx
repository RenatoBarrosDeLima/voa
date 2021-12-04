import React, { useState } from 'react';

// Funções
import { moneyFormat } from '../../utils/functions'

// Componentes
import Header from '../../layout/HeaderHome';
import Footer from '../../layout/Footer';
import ButtonContribution from '../../components/ButtonContribution';

import { useQuery } from '../../hooks/useQueryURL';

// Componentes de customizados
import {
  Container,
  Content,
  Body,
  GridContainer,
  GridRow,
  ColLeft,
  TitleBox,
  TextH1,
  ImageContent,
  Wrapper,
  SwiperContainer,
  SwiperWrapper,
  SwiperSlide,
  MediaContainer,
  Image,
  ContainerText,
  ContentText,
  TextP,
  ColRight,
  BlurContainer,
  ContentRight,
  GridContainerDonation,
  TextCategory,
  ContainerCardProgressBar,
  ValueCollected,
  ValueCollectedText,
  ValueCollectedPercent,
  ProgressBar,
  Progress,
  ContentDetail,
  GoalDetail,
  GoalValue,
  GoalText,
  TextValue,
  Anonymous,
  CheckBoxWrapper,
  TextAnonymous,
  TextHide,
  ContainerDonationResume,
  ContentDonationResume,
  GridInlineResume,
  TextTitleResume,
  TextContribution,
  TextContributionValue,
  ContributionTotalResume,
  ContributionTotalResumeTitle,
  ContributionTotalResumeValue,
  ContainerButtons,
  ButtonAdd,
  ButtonFinish
} from './styles'

const Donation = () => {

  const query = useQuery();

  console.log("ID da campanha ", query.get('id'));

  const [valueSelected, setValueSelected] = useState("");





  const changeValue = (item) => {
    setValueSelected(item);
  }


  return (
    <Container>
      <Header />
      <Content>
        <Body>
          <GridContainer>
            <GridRow>
              <ColLeft>
                <TitleBox>
                  <TextH1>
                    Vaquinha para família que escapou da morte em enxurrada e perdeu tudo
                  </TextH1>
                </TitleBox>
                <ImageContent>
                  <Wrapper>
                    <SwiperContainer>
                      <SwiperWrapper>
                        <SwiperSlide>
                          <MediaContainer>
                            <Image src={'https://s3.sa-east-1.amazonaws.com/uploads.voaa.me/campaign/9445/1b5c1dde-7c13-41df-9b6a-10d6f890e3df-C%C3%B3pia%20de%20CAPAS%20-%202021-11-25T152332.566.jpg'} />
                          </MediaContainer>
                        </SwiperSlide>
                      </SwiperWrapper>
                    </SwiperContainer>
                  </Wrapper>
                </ImageContent>
                <ContainerText>
                  <ContentText>
                    <TextP>
                      Romulo mora com sua esposa, Julia, em Anápolis (GO) em uma casa financiada, onde pagam 700 reais de prestação. Na semana passada, devido às fortes chuvas na cidade, ele percebeu que tinha água acumulando no terreno ao fundo de sua casa, chegando à altura de 1 metro e meio!
                    </TextP>
                    <TextP>
                      Romulo avisou o proprietário do terreno várias vezes, mas ele sempre dizia que estava tudo certo. Foi quando, no dia 18/11, por volta de 12:30,
                    </TextP>
                  </ContentText>
                </ContainerText>
              </ColLeft>

              <ColRight>
                <BlurContainer>
                  <ContentRight>

                    <GridContainerDonation>
                      <TextCategory>
                        Moradia
                      </TextCategory>

                      <ContainerCardProgressBar>
                        <ValueCollected>
                          <ValueCollectedText> R$ 41.137,26 </ValueCollectedText>
                          <ValueCollectedPercent> 34% </ValueCollectedPercent>

                        </ValueCollected>
                      </ContainerCardProgressBar>

                      <ProgressBar>
                        <Progress />
                      </ProgressBar>

                      <ContentDetail>
                        <GoalDetail>
                          <GoalValue> R$ 120.000,00</GoalValue>
                          <GoalText> META</GoalText>
                        </GoalDetail>

                        <GoalDetail>
                          <GoalValue>22</GoalValue>
                          <GoalText> DIAS RESTANTES</GoalText>
                        </GoalDetail>

                      </ContentDetail>

                      <TextValue> Quero contribuir com </TextValue>

                      <ButtonContribution changeValue={changeValue} valueSelected={valueSelected} />

                      <Anonymous>
                        <CheckBoxWrapper>
                          <input type="checkbox" />
                        </CheckBoxWrapper>

                        <TextAnonymous>
                          Fazer contribuição anônima
                          <br></br>
                          <TextHide>(ocultar o seu nome para o público)</TextHide>
                        </TextAnonymous>

                      </Anonymous>

                    </GridContainerDonation>

                    <ContainerDonationResume>
                      <ContentDonationResume>
                        <GridInlineResume>
                          <TextTitleResume>
                            Resumo da doação:
                          </TextTitleResume>
                        </GridInlineResume>

                        <GridInlineResume>
                          <TextContribution>
                            Sua contribuição
                          </TextContribution>
                          <TextContributionValue>
                            {moneyFormat(valueSelected)}
                          </TextContributionValue>
                        </GridInlineResume>
                      </ContentDonationResume>

                      <ContributionTotalResume>
                        <ContributionTotalResumeTitle> VALOR TOTAL </ContributionTotalResumeTitle>
                        <ContributionTotalResumeValue>  {moneyFormat(valueSelected)} </ContributionTotalResumeValue>
                      </ContributionTotalResume>
                    </ContainerDonationResume>

                    <ContainerButtons>
                      <ButtonAdd href="#"> ADICIONAR AO CARRINHO </ButtonAdd>
                      <ButtonFinish href="#"> FINALIZAR CONTRIBUIÇÃO </ButtonFinish>

                    </ContainerButtons>

                  </ContentRight>
                </BlurContainer>
              </ColRight>
            </GridRow>
          </GridContainer>
        </Body>

        <Footer />
      </Content>
    </Container>
  )
}

export default Donation;
