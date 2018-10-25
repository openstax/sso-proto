import React from 'react';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';
import UserNav from './UserNav';
import {Link} from 'react-redux-modules';
import logo from './assets/unicorn.jpg';

const navInnerHeight = 40;
export const navHeight = 50;

const Wrapper = styled.div`
`;

const Body = styled.div`
  margin-top: 10px;
`;

const Nav = styled.div`
  position: sticky;
  z-index: 1;
  top: -1px;
  height: ${navInnerHeight}px;
  border-bottom: 1px solid #ccc;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 5px 10px 5px 10px;
`;

const Brand = () => {
  const BrandImg = styled.img`
    height: ${navInnerHeight}px;
  `;
  const BrandLink = styled(Link)`
  `;

  return <BrandLink to="/"><BrandImg src={logo} /></BrandLink>;
};

export default ({localState, children}) => {
  return <Wrapper>
    <Helmet title={localState.title} />
    <Nav>
      <Brand />
      <UserNav />
    </Nav>
    <Body>
      {localState.notAllowed && 'you need to log in'}
      {!localState.notAllowed && children}
    </Body>
  </Wrapper>;
}
