import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

export interface PropType {
  message: string;
}

export const Settings = (props: PropType) => {
  return (
    <Container>
      <IconContainer>
        <FontAwesomeIcon icon={faCog} size="2x" />
      </IconContainer>
      Settings
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
