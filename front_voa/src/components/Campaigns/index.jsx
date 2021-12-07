import React from 'react';
import { Link } from 'react-router-dom';

// FUNCTIONS UTILS
import {
  daysRemaining,
  moneyFormat,
  calculatePercentageNumber,
  calculatePercentageString
} from '../../utils/functions';

// COMPONENTES CUSTOMIZADOS
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

const Campaigns = ({ campaigns }) => {

  return (
    <Container>
      <Content>
        <SwiperContainer>
          <SwiperWrapper>

            {campaigns?.map(campaign => {
              return (
                <Link to={`/campanha/${campaign?.id}`}>
                  <SwiperSlide>
                    <LazyloadWrapper>
                      <SlideA>
                        <ImageContainer>
                          <ImageContent>
                            <Image src={campaign?.image} />
                          </ImageContent>
                          <DayRemaining>
                            {daysRemaining(campaign?.deadline)}
                          </DayRemaining>
                        </ImageContainer>
                        <CardBody>
                          <TextSpan> {campaign?.category} </TextSpan>
                          <TextH3> {campaign?.title} </TextH3>
                          <Resume>
                            <TextP> {campaign?.description} </TextP>
                          </Resume>

                          <ContainerCardProgressBar>
                            <FundraisingTarget>
                              <TextValue> {moneyFormat(campaign?.total_collected)} </TextValue>
                              <Percentage> {calculatePercentageString(campaign?.goal, campaign?.total_collected)} </Percentage>
                            </FundraisingTarget>

                            <ProgressBar>
                              <Progress $progress={calculatePercentageNumber(campaign?.goal, campaign?.total_collected)} />
                            </ProgressBar>

                            <ContentDetail>
                              <GoalDetail>
                                <GoalValue> {moneyFormat(campaign?.goal)} </GoalValue>
                                <GoalText> META </GoalText>
                              </GoalDetail>
                            </ContentDetail>

                          </ContainerCardProgressBar>
                        </CardBody>
                      </SlideA>
                    </LazyloadWrapper>
                  </SwiperSlide>
                </Link>
              )

            })}

          </SwiperWrapper>
        </SwiperContainer>
      </Content>
    </Container>
  )

}

export default Campaigns
