import * as React from 'react';
import styled from 'styled-components';

export interface PropType {
  message: string;
}

export const Home = (props: PropType) => {
  return (
    <Container>
      <h1>{props.message}</h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #999;
`;
