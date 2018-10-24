import styled from 'styled-components';
// eslint-disable-next-line import/no-webpack-loader-syntax
import css from '!!raw-loader!cnx-recipes/styles/output/intro-business.css';

export default styled.div`
  margin: 0 auto;
  display: block;
  padding: 4rem 6rem 0 6rem;
  min-height: 6rem;
  outline: none;
  
  ${css}
`;
