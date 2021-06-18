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
    
    @media screen and (max-width: 800px) {
        width: 40vw;
        margin-bottom: 1em;
        
        &:hover {
            .image {
                opacity: unset;
            }
    
            .custom-button {
                opacity: unset;
            }
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

    @media screen and (max-width: 800px) {
        display: block;
        text-align: center;
    }
`;

export const CollectionNameContainer = styled.span`
    width: 90%;

    @media screen and (max-width: 800px) {
        width: 100%;
        display: block;
    }
`;

export const CollectionPriceContainer = styled.span`
    width: 10%;
    text-align: right;

    @media screen and (max-width: 800px) {
        width: 100%;
        display: block;
        text-align: unset;
    }
`;

export const CollectionImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    border-radius: 0.5em;
    background-image: ${ ({ imageUrl }) => `url(${imageUrl})` };
`;

export const CustomAddCartButton = styled(CustomButton)`
    width: auto;
    opacity: 0.6;
    position: absolute;
    top: 70%;
    display: none;
    
    @media screen and (max-width: 800px) {
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0;
    }
`;

export const AddToCartText = styled.span`
  padding: 0 1em;
  font-size: 13px;

  @media screen and (max-width: 350px) {
    font-size: 12px;
  }
`;