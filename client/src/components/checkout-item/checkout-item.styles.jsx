import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    justify-content: center;
    align-items: center;
`;

export const CheckoutImageContainer = styled.div`
    width: 20vw;
    height: auto;
    
    img {
      width: 9vw;
      height: auto;
      border-radius: 0.5em;
    }
`;

export const CheckoutNameContainer = styled.span`
    width: 21.5vw;
`;

export const CheckoutQuantityContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 20vw;
`;

export const CheckoutQuantityValueContainer = styled.span`
    margin: 0 10px;
    margin-top: 2px;
`;

export const CheckoutPriceContainer = styled.span`
    width: 21.5vw;
`;

export const CheckoutRemoveItemButton = styled.div`
    margin: 0 auto;
    cursor: pointer;
`;

export const ArrowContainer = styled.div`
    cursor: pointer;
`;