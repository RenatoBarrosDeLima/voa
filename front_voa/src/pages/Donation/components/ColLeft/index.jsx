import React from 'react';

// COMPONENTES CUSTOMIZADOS
import {
  ColLeftContainer,
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
} from './styles';

const ColLeft = ({ campaign }) => {
  return (
    <ColLeftContainer>
      <TitleBox>
        <TextH1> {campaign?.title} </TextH1>
      </TitleBox>
      <ImageContent>
        <Wrapper>
          <SwiperContainer>
            <SwiperWrapper>
              <SwiperSlide>
                <MediaContainer>
                  <Image src={campaign?.image} />
                </MediaContainer>
              </SwiperSlide>
            </SwiperWrapper>
          </SwiperContainer>
        </Wrapper>
      </ImageContent>
      <ContainerText>
        <ContentText>
          <TextP> {campaign?.description} </TextP>
        </ContentText>
      </ContainerText>
    </ColLeftContainer>
  )
}

export default ColLeft;
