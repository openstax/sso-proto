import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default () => {
  return <Container>
    <Helmet>
      <title>{`Unicorn - Notebook`}</title>
    </Helmet>

    some notes go here
  </Container>
};

