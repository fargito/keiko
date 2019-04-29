import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default {
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,
  Pokemon: styled.div`
    font-size: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    margin: 1px;
    border: 2px solid black;
    text-decoration: none;
    min-width: 250px;
  `,
  Outline: styled.div`
    margin: 2px;
    border: 2px solid black;
  `,
  PokemonRotate: styled.img`
    cursor: pointer;
  `,
  PokemonDetailsLink: styled(Link)`
    text-decoration: 'none';
    color: 'inherit';
  `,
};
