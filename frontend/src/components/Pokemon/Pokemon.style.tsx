import styled from 'styled-components';

export default {
  Pokemon: styled.div`
	@font-face {
		font-family: 'Pokemon GB',
		src: url('Pokemon GB.ttf')
	};
	font-family: 'Pokemon GB';
    font-size: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    border: 1px solid black;
  `,
};
