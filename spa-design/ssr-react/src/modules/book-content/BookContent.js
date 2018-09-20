import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-redux-modules';
import {Loading} from '../../components';
import {navHeight} from '../../Wrapper';
import Content from './Content';
import Toc from './Toc';

const Title = styled.h1`
`;

const Links = styled.div`
  background-color: white;
  z-index: 1;
  padding: 5px;
  top: ${navHeight - 1}px;
  position: sticky;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ccc;

  > .back {
    flex: 1;
  }
  > .contents {
  }
  > .next {
    text-align: right;
    flex: 1;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default class BookContent extends Component {

  renderTocSection = section => {
    const {selectors, actions: {closeToc}} = this.props;

    if (section.contents) {
      return <Toc.Section>
        <Toc.Section.Title>{section.title}</Toc.Section.Title>
        <Toc.Section.Children>
          {section.contents && section.contents.map(section => <Toc.Section.Child key={section.id}>
            {this.renderTocSection(section)}
          </Toc.Section.Child>)}
        </Toc.Section.Children>
      </Toc.Section>;
    } else {
      return <Toc.Section.Link onClick={closeToc} to={selectors.getSectionLink(section)}>{section.title}</Toc.Section.Link>;
    }
  };

  render() {
    const {selectors, actions: {openToc, closeToc}, localState: {book, section, tocOpen}} = this.props;

    const previousSection = selectors.getPreviousSection();
    const nextSection = selectors.getNextSection();

    return <Container>
      <Loading open={selectors.isLoading()} />
      <Toc open={tocOpen} onClose={closeToc}>
        {this.renderTocSection(book.tree)}
      </Toc>
      <Title>{book.title} / {section.title}</Title>
      <Links>
        <div className="back">
          {previousSection &&
            <Link to={selectors.getSectionLink(previousSection)}>back: {previousSection.title}</Link>
          }
        </div>
        <a href="" onClick={e => {
          e.preventDefault();
          openToc();
        }} className="contents">contents</a>
        <div className="next">
          {nextSection &&
            <Link to={selectors.getSectionLink(nextSection)}>next: {nextSection.title}</Link>
          }
        </div>
      </Links>
      <Content baked={book.collated} dangerouslySetInnerHTML={{ __html: selectors.getContent()}} />
    </Container>;
  }
}
