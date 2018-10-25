import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-redux-modules';
import {Overlay} from '../../components';

const TocBody = styled.div`
  width: 400px;
`;

const TocBodyWrapper = styled.div`
  background-color: white;
  overflow-x: hidden;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  transition: all 300ms;
  z-index: 3;

  ${props => props.open && `
    width: 400px;
  `}
`;

const Toc = props => <div className={props.className}>
  <TocBodyWrapper open={props.open}>
    <TocBody open={props.open}>
      {props.children}
    </TocBody>
  </TocBodyWrapper>
  <Overlay open={props.open} onClick={props.onClose} />
</div>;

Toc.Section = styled.div`
`
Toc.Section.Title = styled.h3`
`
Toc.Section.Children = styled.ol`
`
Toc.Section.Child = styled.li`
  list-style: none;
`
Toc.Section.Link = styled(Link)`
`

export default Toc;
