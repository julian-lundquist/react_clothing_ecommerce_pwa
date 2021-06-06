import styled, { css } from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const itemCountSingleDigit = css`
    left: 15px;
`;

const itemCountDoubleDigit1 = css`
    left: 11px;
`;

const itemCountDoubleDigit2 = css`
    left: 12px;
`;

const itemCountTripleDigit1 = css`
    left: 7px;
`;

const itemCountTripleDigit2 = css`
    left: 8px;
`;

export const selectItemCountStyles = (itemCount) => {
    switch (itemCount) {
        case itemCount > 9:
            return itemCountDoubleDigit1;
        case itemCount > 19:
            return itemCountDoubleDigit2;
        case itemCount > 99:
            return itemCountTripleDigit1;
        case itemCount > 199:
            return itemCountTripleDigit2;
        default:
            return itemCountSingleDigit;
    }
}

export const CartIconContainer = styled.div`
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
    width: 38px;
    height: 100%;
    margin-bottom: 0.5em;
`;

export const ItemCountContainer = styled.span`
    position: absolute;
    font-size: 1.2em;
    font-weight: bold;
    bottom: 8px;
`;