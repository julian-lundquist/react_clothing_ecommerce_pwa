import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-icon-dropdown/cart-icon-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {selectCartHidden, selectCartTotalPrice} from "../../redux/cart/cart.selectors";
import {HeaderContainer, LogoContainer, LogoSVG, OptionLink, OptionsContainer, CartTotalPrice} from "./header.styles";
import {signOutStart} from "../../redux/user/user.actions";
import {useEffect, useRef} from "react";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const Header = ({ currentUser, isCartHidden, toggleCartHidden, signOutStart, total }) => {
    const dropdownAndCartIconEl = useRef();

    const handleClickOutside = (e) => {
        console.log("clicking anywhere");
        if (dropdownAndCartIconEl.current.contains(e.target)) {
            // inside click
            return;
        }
        console.log(e.target)
        // outside click
        toggleCartHidden(true);
    }

    useEffect(() => {
        if (!isCartHidden) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isCartHidden]);

    return (
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
                <div ref={dropdownAndCartIconEl}>
                    <CartIcon />
                    {
                        isCartHidden ? null : <CartDropdown />
                    }
                </div>
                <CartTotalPrice>{total > 0 ? '$' + total : ''}</CartTotalPrice>
            </OptionsContainer>
        </HeaderContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isCartHidden: selectCartHidden,
    total: selectCartTotalPrice
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);