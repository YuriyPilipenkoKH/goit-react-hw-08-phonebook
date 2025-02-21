import styled from '@emotion/styled';

export const Div = styled.div`
	width: 100%;
	@media (min-width: 768px) {
		width: 60%;
	}
	@media (min-width: 1280px) {
		width: 90%;
	}
`

export const Wrapper = styled.div`
	display: flex;
	font-size: 32px;
	font-weight: 600;
	background-color: var(--lauren);
	color: #555 ;
	border-radius: 16px;
	padding: 32px;
	box-shadow: var(--shadow-four);   
	width: 100%;

`