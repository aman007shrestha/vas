import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  background-image: linear-gradient(#fdfbfb, #ebedee);
`;

export const Content = styled.div`
  width: 80%;
  h1 {
    font-size: 4rem;
    display: flex;
    align-items: center;
  }
  .title__small {
    line-height: 1.5rem;
    margin-left: 1rem;
    display: inline;
    font-size: 1.7rem;
    color: blue;
  }
  p {
    color: black;
    font-size: 20px;
    width: 90%;
  }
  ul {
    margin: 2rem 0;
    list-style-type: none;
    padding: 0;
    font-size: 1.2rem;
  }
  li:first-child {
    color: red;
    font-weight: 600;
    font-size: 1.3rem;
  }
  li {
    margin: 10px 0;
  }
`;

export const Title = styled.h1``;
