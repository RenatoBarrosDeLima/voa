import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  SwiperContainer,
  SwiperWrapper,
  SwiperSlide,
  LazyloadWrapper,
  SlideA,
  ImageContainer,
  ImageContent,
  Image,
  DayRemaining,
  CardBody,
  TextSpan,
  TextH3,
  Resume,
  TextP,
  ContainerCardProgressBar,
  FundraisingTarget,
  TextValue,
  Percentage,
  ProgressBar,
  Progress,
  ContentDetail,
  GoalDetail,
  GoalValue,
  GoalText

} from './styles'

const Campaigns = () => {


  return (
    <Container>
      <Content>
        <SwiperContainer>
          <SwiperWrapper>

            <Link to="/campanha/123">
              <SwiperSlide>
                <LazyloadWrapper>
                  <SlideA>
                    <ImageContainer>
                      <ImageContent>
                        <Image src={"https://voaa.me/_next/image?url=https%3A%2F%2Fs3.sa-east-1.amazonaws.com%2Fuploads.voaa.me%2Fcampaign%2F9450%2F3ce27464-5ff2-445d-9f57-3d2a21f46a8d-C%25C3%25B3pia%2520de%2520CAPAS%2520-%25202021-12-02T141608.543.jpg&w=3840&q=100"} />
                      </ImageContent>
                      <DayRemaining>
                        30 dias restantes
                      </DayRemaining>
                    </ImageContainer>
                    <CardBody>
                      <TextSpan>MOBILIDADE</TextSpan>
                      <TextH3> O Sr. José recolhe latinhas há 7 anos, para doar ao hospital do câncer. Vamos ajudá-lo nessa missão? </TextH3>
                      <Resume>
                        <TextP> Sr. José Carlos é vigilante e começou a recolher latinhas, nos seus dias de folga, com o propósito de ajudar o hospital do câncer, mesmo em um momento tão difícil de sua vida. Queremos ajudá-lo a comprar um caminhãozinho, para ele conseguir levar mais materiais, pois atualmente, ele usa uma moto, onde não cabe tudo. Vamos nessa? </TextP>
                      </Resume>

                      <ContainerCardProgressBar>
                        <FundraisingTarget>
                          <TextValue> R$ 352,01</TextValue>
                          <Percentage> 0% </Percentage>
                        </FundraisingTarget>

                        <ProgressBar>
                          <Progress />
                        </ProgressBar>

                        <ContentDetail>
                          <GoalDetail>
                            <GoalValue>
                              R$ 120.000,00
                            </GoalValue>
                            <GoalText>
                              META
                            </GoalText>
                          </GoalDetail>
                        </ContentDetail>

                      </ContainerCardProgressBar>
                    </CardBody>
                  </SlideA>
                </LazyloadWrapper>
              </SwiperSlide>
            </Link>


            <SwiperSlide>
              <LazyloadWrapper>
                <SlideA href="#">
                  <ImageContainer>
                    <ImageContent>
                      <Image src={"https://voaa.me/_next/image?url=https%3A%2F%2Fs3.sa-east-1.amazonaws.com%2Fuploads.voaa.me%2Fcampaign%2F9448%2Fe23562ae-7c9c-4f5d-bc80-97df3b429abf-C%25C3%25B3pia%2520de%2520CAPAS%2520%25282%2529.png&w=1200&q=100"} />
                    </ImageContent>
                    <DayRemaining>
                      30 dias restantes
                    </DayRemaining>
                  </ImageContainer>
                  <CardBody>
                    <TextSpan>GERAÇÃO DE RENDA</TextSpan>
                    <TextH3>Vaquinha para jovem que toca flauta na praia para sobreviver e sonha em ser músico </TextH3>
                    <Resume>
                      <TextP> Iago tem 20 anos e mora em Fortaleza. Ele foi criado pelos avós e os ajuda como pode. Iago tem o sonho de ser um grande músico e ter seu próprio estúdio de música, para poder trabalhar e ajudar mais ainda seus avós.  </TextP>
                    </Resume>

                    <ContainerCardProgressBar>
                      <FundraisingTarget>
                        <TextValue> R$ 352,01</TextValue>
                        <Percentage> 0% </Percentage>
                      </FundraisingTarget>

                      <ProgressBar>
                        <Progress />
                      </ProgressBar>

                      <ContentDetail>
                        <GoalDetail>
                          <GoalValue>
                            R$ 120.000,00
                          </GoalValue>
                          <GoalText>
                            META
                          </GoalText>
                        </GoalDetail>
                      </ContentDetail>

                    </ContainerCardProgressBar>
                  </CardBody>
                </SlideA>
              </LazyloadWrapper>
            </SwiperSlide>

            <SwiperSlide>
              <LazyloadWrapper>
                <SlideA href="#">
                  <ImageContainer>
                    <ImageContent>
                      <Image src={"https://voaa.me/_next/image?url=https%3A%2F%2Fs3.sa-east-1.amazonaws.com%2Fuploads.voaa.me%2Fcampaign%2F9444%2Fd40ca9c2-2df0-46be-9972-d0fbb5a78283-C%25C3%25B3pia%2520de%2520CAPAS%2520-%25202021-11-23T183036.450.jpg&w=1920&q=100"} />
                    </ImageContent>
                    <DayRemaining>
                      30 dias restantes
                    </DayRemaining>
                  </ImageContainer>
                  <CardBody>
                    <TextSpan>GERAÇÃO DE RENDA</TextSpan>
                    <TextH3>Vendedora de ovos é agredida em assalto e perde toda mercadoria, que era sustento de sua família</TextH3>
                    <Resume>
                      <TextP> Itala, conhecida como “tia do ovo”, é mãe de 2 filhos e vende ovos em São Bernardo (SP) há 9 anos. É dessa venda que ela tira o sustento da casa. Seu marido, Jhony, teve uma crise forte de estresse e ficou internado por 14 dias. Por enquanto, ele não pode trabalhar. Antes desse ocorrido, Johny trabalhava com venda de ferro velho.  </TextP>
                    </Resume>

                    <ContainerCardProgressBar>
                      <FundraisingTarget>
                        <TextValue> R$ 352,01</TextValue>
                        <Percentage> 0% </Percentage>
                      </FundraisingTarget>

                      <ProgressBar>
                        <Progress />
                      </ProgressBar>

                      <ContentDetail>
                        <GoalDetail>
                          <GoalValue>
                            R$ 120.000,00
                          </GoalValue>
                          <GoalText>
                            META
                          </GoalText>
                        </GoalDetail>
                      </ContentDetail>

                    </ContainerCardProgressBar>
                  </CardBody>
                </SlideA>
              </LazyloadWrapper>
            </SwiperSlide>

            <SwiperSlide>
              <LazyloadWrapper>
                <SlideA href="#">
                  <ImageContainer>
                    <ImageContent>
                      <Image src={"https://voaa.me/_next/image?url=https%3A%2F%2Fs3.sa-east-1.amazonaws.com%2Fuploads.voaa.me%2Fcampaign%2F9451%2Fc8cf1cd5-399a-4c2f-85ba-9e07ded7170f-C%25C3%25B3pia%2520de%2520CAPAS%2520-%25202021-12-03T115149.462.jpg&w=1200&q=100"} />
                    </ImageContent>
                    <DayRemaining>
                      30 dias restantes
                    </DayRemaining>
                  </ImageContainer>
                  <CardBody>
                    <TextSpan>PROJETOS SOCIAIS</TextSpan>
                    <TextH3>Vaquinha para comprar Kombi para Instituto que leva mantimentos para pessoas carentes</TextH3>
                    <Resume>
                      <TextP> Há 8 anos, o Instituto A Nossa Jornada, faz ações sociais, levando cestas básicas, roupas, calçados, cobertores, para pessoas em situação de rua e comunidades atendidas pelo Instituto.
                        Mas eles precisam ter um carro próprio pra conseguir levar todos os mantimentos. Vamos ajudar? 🙏  </TextP>
                    </Resume>

                    <ContainerCardProgressBar>
                      <FundraisingTarget>
                        <TextValue> R$ 352,01</TextValue>
                        <Percentage> 0% </Percentage>
                      </FundraisingTarget>

                      <ProgressBar>
                        <Progress />
                      </ProgressBar>

                      <ContentDetail>
                        <GoalDetail>
                          <GoalValue>
                            R$ 120.000,00
                          </GoalValue>
                          <GoalText>
                            META
                          </GoalText>
                        </GoalDetail>
                      </ContentDetail>

                    </ContainerCardProgressBar>
                  </CardBody>
                </SlideA>
              </LazyloadWrapper>
            </SwiperSlide>


          </SwiperWrapper>
        </SwiperContainer>
      </Content>
    </Container>
  )

}

export default Campaigns
