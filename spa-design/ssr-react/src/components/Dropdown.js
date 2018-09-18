import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-redux-modules';

const Label = styled.span`
  cursor: pointer;
  padding: 5px 0 5px 0;
`;

const Items = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #ccc;
  margin-top: 5px;
`;

const Item = styled(props => props.to ? <Link {...props} /> : <a {...props}>{props.children}</a>)`
  display: block;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

const Dropdown = styled.div`
  position: relative;

  &:not(:hover) > ${Items} {
    display: none;
  }
`;

Dropdown.Label = Label; 
Dropdown.Items = Items;
Dropdown.Item = Item;

export default Dropdown;
