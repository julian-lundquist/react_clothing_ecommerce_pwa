import styled from 'styled-components';
import CustomButton from "../../components/custom-button/custom-button.component";

export const CheckoutPageContainer = styled.div`
    width: 90vw;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
    padding: 2em 0;
`;

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const CheckoutHeaderBlockContainer = styled.div`
    text-transform: capitalize;
    width: 23%;
    
    &:last-child {
        width: 8%;
    }
`;

export const CheckoutTotalContainer = styled.div`
    margin: 0 auto;
    font-size: 36px;
`;

export const CartEmpty = styled.div`
    font-size: 3em;
`;

export const GoShopCustomButton = styled(CustomButton)`
    margin: 0 auto;
`;