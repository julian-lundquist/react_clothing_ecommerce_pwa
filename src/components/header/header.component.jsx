import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {auth} from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-icon-dropdown/cart-icon-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {HeaderContainer, LogoContainer, LogoSVG, OptionDiv, OptionLink, OptionsContainer} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to={'/'}>
            <LogoSVG />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to={'/shop'}>
                SHOP
            </OptionLink>
            <OptionLink to={'/contact'}>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionDiv>
                    :
                    <OptionLink to={'/signin'}>
                        SIGN IN
                    </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);