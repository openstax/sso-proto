import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import {Link} from 'react-redux-modules';
import {Loading} from '../../components';
import BookContent from '../book-content/module';

const Book = styled.div`
  display: flex;
`;

Book.Title = styled(Link)`
`;

Book.Body = styled.div`
  flex: 1;
`;

Book.Description = styled.div`
`;

Book.Cover = styled.img`
  width: calc(125px + 2rem);
  height: calc(125px + 2rem);
  margin-right: 2rem;
`;

export default class Homepage extends Component {
  render() {
    const {localState: {books, loading}} = this.props;

    return <div>
      <Helmet>
        <title>Unicorn</title>
      </Helmet>
      {loading && <Loading />}
      {books.map(book => <Book key={book.cnx_id}>
        <Book.Cover src={book.cover_url} />
        <Book.Body>
          <Book.Title to={BookContent.makePath({bookId: book.cnx_id})}>{book.title}</Book.Title>
          <Book.Description dangerouslySetInnerHTML={{ __html: book.description}} />
        </Book.Body>
      </Book>)}
    </div>;
  }
}
