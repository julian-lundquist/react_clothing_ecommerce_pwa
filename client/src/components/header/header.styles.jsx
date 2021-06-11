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
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 30%;

    .logo {
      height: 100%;
      width: 4em;

      &:hover {
        width: 4.4em;
      }
    }
`;

export const LogoSVG = styled(Logo)`
    height: 100%;
    width: 4em;
    
    &:hover {
        width: 4.4em;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    font-size: 1.6em;
    padding: 10px 16px;
    cursor: pointer;

    &:hover {
        color: dimgray;
    }
`;

export const CartTotalPrice = styled.div`
    font-size: 1.5em;
    letter-spacing: -1px;
    padding: 0 10px;
`;

