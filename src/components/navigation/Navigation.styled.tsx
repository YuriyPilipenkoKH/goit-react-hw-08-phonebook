import styled from '@emotion/styled';

export const StyledWrap = styled.div`
    display: flex;
    align-items: center;
    
    gap: 20px;
    @media screen and (max-width: 767px) {
		display: none;
}
    `

export const Wrap = styled.div`

    @media screen and (min-width: 768px) {
		display: none;
}
    `