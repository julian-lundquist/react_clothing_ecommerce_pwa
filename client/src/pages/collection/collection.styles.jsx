import styled from 'styled-components';

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CategoryTitleContainer = styled.div`
    font-size: 2.5em;
    margin: 0 auto 30px;
`;

export const CategoryItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2em;

    & .collection-item {
      margin-bottom: 30px;
    }

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;