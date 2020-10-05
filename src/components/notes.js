import React from 'react';

import {Container, Text} from './styles';

const Notes = ({data}) => {
  return (
    <Container>
      <Text>{data.description}</Text>
    </Container>
  );
};

export default Notes;
