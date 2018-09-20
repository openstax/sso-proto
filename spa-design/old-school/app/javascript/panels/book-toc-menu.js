import {
  React, ReactDOM, cn, computed, observer, observable, action, styled,
} from '../vendor';
import { Button } from 'react-bootstrap';
import Location from '../model/location';

const mql = window.matchMedia(`(min-width: 800px)`);

const Sidebar = styled.div`
background-color: white;
width: 300px;
position: fixed;
top: 80px;
bottom: 80px;
z-index: 1;
border: 1px solid grey;
left: -300px;
&.open {
  left: 0;
}
transition: left 0.4s ease-out;
`

const ToggleButton = styled.button`
    position: absolute;
    top: -1px;
    right: -50px;
    width: 50px;
    height: 50px;
`

const PageLink = styled.a`
display: block;
position: relative;
&.active:before {
  content: '⭐';
  position: absolute;
  left: -1.5rem;
}
`

const ChaptersWrapper = styled.div`
height: 100%;
padding: 1rem 2rem;
overflow-y: auto;

`

const Chapter = observer(({ currentChapterUid, bookUid, chapter: { id, shortId, title, contents } }) => {
  const htmlTitle = { __html: title };
  if (contents) {
    return (
      <div>
      <h5 dangerouslySetInnerHTML={htmlTitle}/>
      {contents.map(section => (
        <div key={section.id}>
          <h6 dangerouslySetInnerHTML={{ __html: section.title }} />
          {section.contents.map(page => (
          <PageLink
            className={cn({ active: currentChapterUid === page.id })}
            key={page.id}
            href={`/book/${bookUid}/${page.id}`}
            dangerouslySetInnerHTML={{ __html: page.title }}
          />))}
        </div>
      ))}
      </div>
    );
  }
  return (
    <PageLink
      className={cn({ active: currentChapterUid === id })}
      href={`/book/${bookUid}/${shortId}`}
      dangerouslySetInnerHTML={htmlTitle}
    />
  )
});

@observer
export default class BookTocMenu extends React.Component {

  @observable isOpen = true;

  onSetSidebarOpen() {
    this.isOpen = !this.isOpen;
  }

  @computed get toc() {
    return JSON.parse(this.props.tableOfContents)
  }

  render() {
    if (!Location.isBook) { return null; }

    const [ _, bookUid, chapterUid ] = Location.parts;

    return (
      <Sidebar className={cn({ open: this.isOpen })}>
        <ToggleButton onClick={() => this.onSetSidebarOpen(true)}>X</ToggleButton>
        <ChaptersWrapper>
          {this.toc.map(chapter =>
            <Chapter key={chapter.id}
              bookUid={bookUid}
              currentChapterUid={chapterUid}
              chapter={chapter} />)}
        </ChaptersWrapper>
      </Sidebar>
    );
  }

}
