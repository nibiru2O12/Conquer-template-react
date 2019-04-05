import React from "react";
import styled from 'styled-components';

const BurgerNav = () => (
  <Nav>
    <span />
    <span />
    <span />
  </Nav>
);

const Nav = styled.div`
  & {
    cursor: pointer;
    /* hide burger nav for none mobile display */
    /* display: none; */
    right: 0;
    margin: 10px;
    background: #333;
    width: 22px;
    padding: 10px;
    border-radius: 5px;
    z-index: 10000;

    & span {
      display: block;
      height: 2px;
      background: white;
    }

    & span:nth-child(2) {
      margin-top: 4px;
      margin-bottom: 4px;
    }
  }
`;

export default BurgerNav;
