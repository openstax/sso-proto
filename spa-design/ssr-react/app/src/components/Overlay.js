import styled from 'styled-components';

export default styled.div`
  background-color: rgba(.5, .5, .5, .5);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  transition: all 300ms;
  z-index: 2;

  display: none;
  ${props => props.open && `
    display: block;
  `}
`;
