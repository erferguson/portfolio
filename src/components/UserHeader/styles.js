import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display:flex;
    justify-content: space-between

    @media (max-width: 640px) {
        display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
        flex-direction: column;
    }
`;