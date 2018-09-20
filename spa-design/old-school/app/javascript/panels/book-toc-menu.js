import {
  React, ReactDOM, cn, computed, observer, observable, action, styled,
} from '../vendor';
import { Button } from 'react-bootstrap';
import Location from '../model/location';

const mql = window.matchMedia(`(min-width: 800px)`);

const Sidebar = styled.div`
background-color: white;
padding: 2rem;
width: 300px;
position: fixed;
top: 80px;
bottom: 80px;
z-index: 1;
border: 1px solid red;
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

const SectionLink = styled.a`
display: block;
&.active:before {
  content: '⭐';
  position: absolute;
  left: 0.5rem;
}
`

const ChaptersWrapper = styled.div`
height: 100%;
overflow-y: auto;
`

const Chapter = observer(({ currentChapterUid, bookUid, chapter: { id, shortId, title, contents } }) => {
  if (contents) {
    return (
      <div>
      <h6>{title}</h6>
      {contents.map(section => (
        <SectionLink
          className={cn({ active: currentChapterUid === section.id })}
          key={section.id}
          href={`/book/${bookUid}/${section.id}`}
        >
          {section.title}
        </SectionLink>))}
      </div>
    )
  }
  return (
    <SectionLink
      className={cn({ active: currentChapterUid === id })}
      href={`/book/${bookUid}/${shortId}`}>{title}</SectionLink>
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
