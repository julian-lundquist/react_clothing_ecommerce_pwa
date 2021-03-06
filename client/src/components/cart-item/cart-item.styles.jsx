import styled from 'styled-components';

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;
`;

export const ItemImageContainer = styled.img`
    width: 30%;
    border-radius: 0.5em;
`;

export const ItemDetailsContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`;

export const ItemNameContainer = styled.span`
    font-size: 16px;
`;

export const ItemPriceContainer = styled.span`
    font-size: 16px;
`;