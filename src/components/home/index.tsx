import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export interface PropType {
  message: string;
}

export const Home = (props: PropType) => {
  return (
    <Container>
      <IconContainer>
        <FontAwesomeIcon icon={faHome} size="2x" />
      </IconContainer>
      {props.message}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-weight: 500;
`;

const IconContainer = styled.div`
  margin: 25px 0;
`;
