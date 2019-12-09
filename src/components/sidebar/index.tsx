import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAtom, faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons';

interface Props {
  open: boolean;
  setOpen?: (open: boolean) => void;
}

const Burger = (props: Props): JSX.Element => {
  return (
    <StyledBurger open={props.open} onClick={() => props.setOpen(!props.open)}>
      <Line />
      <Line />
      <Line />
    </StyledBurger>
  );
};

const Menu = (props: Props): JSX.Element => {
  return (
    <StyledMenu open={props.open}>
      <a href="/">
        <FontAwesomeIcon icon={faHome} />
        Home
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faAtom} />
        Link 1
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faAtom} />
        Link 2
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faCog} />
        Settings
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faEnvelope} />
        About
      </a>
    </StyledMenu>
  );
};

export const Sidebar = (): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <SidebarContainer>
      <Burger open={open} setOpen={open => setOpen(open)} />
      <Menu open={open} />
    </SidebarContainer>
  );
};

const Line = styled.div``;

const SidebarContainer = styled.div`
  background-color: #222;
`;

const StyledBurger = styled.button<{ open?: boolean }>`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${props => (props.open ? '#0D0C1D' : '#EFFFFA')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${props => (props.open ? '0' : '1')};
      transform: ${props => (props.open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${props => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const StyledMenu = styled.nav<{ open?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  width: 300px;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 576px) {
    width: 75%;
  }
  a {
    font-size: 16px;
    text-transform: uppercase;
    padding: 20px 30px;
    font-weight: bold;
    color: #222;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 576px) {
      font-size: 14px;
    }
    &:hover {
      color: #343078;
    }
    svg {
      margin-right: 15px;
    }
  }
`;
