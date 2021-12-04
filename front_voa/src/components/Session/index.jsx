import React from 'react';

import {
  Container,
  TextH2
} from './styles'

const Session = ({ title }) => {
  return (
    <Container>
      <TextH2>
        {title}
      </TextH2>
    </Container>
  )
}

export default Session;
