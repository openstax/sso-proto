import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {connect} from 'react-redux-modules';
import {Dropdown} from './components';
import notebook from './modules/notebook/module';
import app from './module'

const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  transition: opacity 1s;
  opacity: 0;

  > *:not(:last-child) {
    margin-right: 10px;
  }

  ${props => props.in && css`
    opacity: 1;
  `}
`;

class UserNav extends Component {
  render() {
    const {localState: {user, userStateEstablished}, selectors: {location}} = this.props;
    return <Wrapper in={userStateEstablished ? "true" : undefined}>
      {user && <Dropdown>
        <Dropdown.Label>{user.full_name}</Dropdown.Label>
        <Dropdown.Items>
          <Dropdown.Item to={notebook.makePath()}>notebook</Dropdown.Item>
          <Dropdown.Item target="_blank" rel="noopener noreferrer" href="https://accounts.rdls.org/profile">profile</Dropdown.Item>
          <Dropdown.Item href="https://accounts.rdls.org/logout">logout</Dropdown.Item>
        </Dropdown.Items>
      </Dropdown>}
      {!user && <a href={`https://accounts.rdls.org/login?return_to=${encodeURIComponent(location())}`}>login</a>}
    </Wrapper>;
  }
}

export default connect(() => app, UserNav);
