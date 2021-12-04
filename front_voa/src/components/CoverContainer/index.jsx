import React from 'react';

import {
  Container,
  TextH1,
  MainImage,
  DivImageExterna,
  DivImageInterna,
  Image1,
  Image2,
  StoriesContainer,
  Link
} from './styles'

const CoverContainer = () => {
  return (
    <Container>
      <TextH1>
        Seja um transformador, mude o final de histórias
      </TextH1>

      <MainImage>
        <DivImageExterna>
          <DivImageInterna>
            <Image1 src={'https://voaa.me/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fhome-header-image.ea580eb2d6ba19fcea29d4061ef7dbd8.jpeg&w=1080&q=100'} />
          </DivImageInterna>

          <Image2 src={'https://voaa.me/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fhome-header-image.ea580eb2d6ba19fcea29d4061ef7dbd8.jpeg&w=1080&q=100'} />

        </DivImageExterna>
      </MainImage>

      <StoriesContainer>
        <Link href="#"> Conhecer histórias </Link>
      </StoriesContainer>
    </Container>
  )
}

export default CoverContainer;
