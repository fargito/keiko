import styled from 'styled-components';

export default {
  Intro: styled.div`
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: line;
    padding: 10px;
    margin-top: 1em;
    margin-bottom: 1em;
  `,
  PokemonsContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,
  PageIterator: styled.div`
    font-size: 10px;
    cursor: pointer;
  `,
};
