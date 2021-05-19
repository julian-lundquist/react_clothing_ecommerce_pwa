import styled from 'styled-components';

import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    
    &:hover {
        .image {
            opacity: 0.8;
        }

        .custom-button {
            opacity: 0.85;
            display: flex;
        }
    }
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-bottom: 10px;
`;

export const CollectionNameContainer = styled.span`
    width: 90%;
`;

export const CollectionPriceContainer = styled.span`
    width: 10%;
    text-align: right;
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${ ({ imageUrl }) => `url(${imageUrl})` };
`;

export const CustomAddCartButton = styled(CustomButton)`
    width: auto;
    opacity: 0.6;
    position: absolute;
    top: 70%;
    display: none;
`;