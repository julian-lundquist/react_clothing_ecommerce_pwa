import styled from 'styled-components';
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 24em;
    height: 30em;
    display: flex;
    flex-direction: column;
    padding: 1em;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    @media screen and (max-width: 800px) {
      width: 95%;
      top: 70px;
      right: 10px;
    }
`;

export const CartItemsContainer = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;
    
    &::-webkit-scrollbar-track {
        border: 1px solid black;
        background-color: #F5F5F5;
    }
    
    &::-webkit-scrollbar {
        width: 10px;
        background-color: #F5F5F5;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: #000000;
    }
`;

export const CustomCheckoutButton = styled(CustomButton)`
    margin-top: auto; 
`;

export const EmptyCartContainer = styled.span`
    font-size: 2em;
    margin: 2em auto;
`;