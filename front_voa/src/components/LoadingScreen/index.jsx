import React from 'react';

import { Container, Loader } from './styles';

const Loading = ({ loading }) => {

  if (!loading) return <></>;

  return (
    <Container>
      <Loader />
    </Container>
  );
};

export default Loading;
