import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import Overlay from './Overlay';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Center = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  position: absolute;
  animation: ${rotate360} 2s linear infinite;
  font-size: 15rem;
`;

export default class Loading extends Component {
  static defaultProps = {
    open: true
  };

  render() {
    return <Overlay open={this.props.open}>
      <Center>
        <Loader>Loading</Loader>
      </Center>
    </Overlay>;
  }
}
