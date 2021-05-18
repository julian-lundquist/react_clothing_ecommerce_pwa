import styled, { css } from 'styled-components';
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';

const OptionsContainerOptionStyles = css`
    font-size: 1.6em;
    padding: 10px 16px;
    cursor: pointer;

    &:hover {
        color: dimgray;
    }
`;

const LogoContainerLogoStyles = css`
    height: 100%;
    width: 4em;
    
    &:hover {
        width: 4.4em;
    }
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    //margin-bottom: 25px;
    background-color: burlywood;
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
    ${LogoContainerLogoStyles}
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    ${OptionsContainerOptionStyles}
`;

export const OptionDiv = styled.div`
    ${OptionsContainerOptionStyles}
`;

