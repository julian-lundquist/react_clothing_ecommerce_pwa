import styled from 'styled-components';

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CategoryTitleContainer = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const CategoryItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;

    & .collection-item {
      margin-bottom: 30px;
    }

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;