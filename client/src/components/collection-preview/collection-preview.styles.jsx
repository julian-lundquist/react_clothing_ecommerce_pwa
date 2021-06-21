import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    
    @media screen and (max-width: 800px) {
        align-items: center;
    }
`;

export const CollectionItemTitle = styled.div`
    font-size: 2.5em;
    margin: 0 auto 30px;
`;

export const CollectionItemPreview = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2em;
    
    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
    }
`;