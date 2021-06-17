import styled from 'styled-components';
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dead87;
    user-select: none;
    
    @media screen and (max-width: 800px) {
        height: 60px;
    }
`;

export const LogoSVG = styled(Logo)`
    height: 100%;
    width: 4em;
    
    @media screen and (max-width: 800px) {
        width: 3em;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
`;

export const OptionsContainer = styled.div`
    height: 100%;
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    @media screen and (max-width: 800px) {
        width: 85%;
    }
`;

export const OptionLink = styled(Link)`
    font-size: 1.6em;
    padding: 10px 16px;
    cursor: pointer;

    &:hover {
        color: dimgray;
    }
    
    @media screen and (max-width: 800px) {
        font-size: 1.4em;
    }
`;

export const CartTotalPrice = styled.div`
    font-size: 1.5em;
    letter-spacing: -1px;
    padding: 0 10px;
    
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

