import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-redux-modules';
import Highlighter, {SerializedHighlight} from '@openstax/highlighter';
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

  renderBookText = text => this.props.localState.book.collated
    ? <span dangerouslySetInnerHTML={{ __html: text}} />
    : text;

  renderTocSection = section => {
    const {selectors, actions: {closeToc}} = this.props;

    if (section.contents) {
      return <Toc.Section>
        <Toc.Section.Title>{this.renderBookText(section.title)}</Toc.Section.Title>
        <Toc.Section.Children>
          {section.contents && section.contents.map(section => <Toc.Section.Child key={section.id}>
            {this.renderTocSection(section)}
          </Toc.Section.Child>)}
        </Toc.Section.Children>
      </Toc.Section>;
    } else {
      return <Toc.Section.Link onClick={closeToc} to={selectors.getSectionLink(section)}>{this.renderBookText(section.title)}</Toc.Section.Link>;
    }
  };

  componentDidMount() {
    this.loadHighlights();
  }

  componentDidUpdate() {
    this.loadHighlights();
  }

  onClickHighlight = highlight => {
    if (highlight) {
      this.highlighter.erase(highlight);
    }
    this.saveHighlights();
  };

  onSelectHighlight = (highlights, highlight) => {
    if (highlights.length > 0) {
      return;
    }
    this.highlighter.highlight(highlight);
    document.getSelection().removeAllRanges();

    this.saveHighlights();
  };

  getHighlightKey() {
    const {localState: {book, section}} = this.props;
    return `highlights-${book.shortId}-${section.shortId}`;
  }

  saveHighlights() {
    const highlights = this.highlighter.getHighlights();
    const data = highlights.map(highlight => highlight.serialize().data);

    window.localStorage.setItem(this.getHighlightKey(), JSON.stringify(data));
  }

  loadHighlights() {
    if (this.highlighter) {
      this.highlighter.getHighlights().forEach(highlight => this.highlighter.erase(highlight));
      this.highlighter.unmount();
    }
    this.highlighter = new Highlighter(this.container, {
      snapTableRows: true,
      snapMathJax: true,
      snapWords: true,
      onClick: this.onClickHighlight,
      onSelect: this.onSelectHighlight,
    });
    (JSON.parse(window.localStorage.getItem(this.getHighlightKey())) || [])
      .map(data => new SerializedHighlight(data))
      .forEach(serialized => this.highlighter.highlight(serialized))
    ;
  }

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
            <Link to={selectors.getSectionLink(previousSection)}>back: {this.renderBookText(previousSection.title)}</Link>
          }
        </div>
        <a href="" onClick={e => {
          e.preventDefault();
          openToc();
        }} className="contents">contents</a>
        <div className="next">
          {nextSection &&
            <Link to={selectors.getSectionLink(nextSection)}>next: {this.renderBookText(nextSection.title)}</Link>
          }
        </div>
      </Links>
      <Content innerRef={ref => this.container = ref} dangerouslySetInnerHTML={{ __html: selectors.getContent()}} />
    </Container>;
  }
}
