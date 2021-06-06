import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-icon-dropdown/cart-icon-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {HeaderContainer, LogoContainer, LogoSVG, OptionLink, OptionsContainer} from "./header.styles";
import {signOutStart} from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOutStart }) => (
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
                    <OptionLink as={'div'} onClick={signOutStart}>
                        SIGN OUT
                    </OptionLink>
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);