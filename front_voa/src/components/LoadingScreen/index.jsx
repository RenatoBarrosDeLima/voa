import React from 'react';

import { Container, Content } from './styles';

const Loading = ({ loading }) => {

  if (!loading) return <></>;

  return (
    <Container>
      <Content>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Content>
    </Container>

  );
};

export default Loading;
