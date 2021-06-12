import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {selectCartHidden, selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import { withRouter } from "react-router";

import {
    CartDropdownContainer,
    CartItemsContainer,
    CustomCheckoutButton,
    EmptyCartContainer
} from "./cart-icon-dropdown.styles";
import {GoShopCustomButton} from "../../pages/checkout/checkout.styles";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, isCartHidden, toggleCartHidden, history }) => {
    const toggleCartDropdown = (path) => {
        if (!isCartHidden) {
            toggleCartHidden();
            history.push('/' + path);
        }
    }

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length > 0 ?
                        (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                        : (
                            <EmptyCartContainer>
                                Your cart is empty
                                <GoShopCustomButton type={'button'} onClick={() => toggleCartDropdown('shop')}>Go to Shop Page</GoShopCustomButton>
                            </EmptyCartContainer>
                        )
                }
            </CartItemsContainer>
            {
                cartItems.length > 0 ? (
                    <CustomCheckoutButton onClick={() => toggleCartDropdown('checkout')}>GO TO CHECKOUT</CustomCheckoutButton>
                ) : ('')
            }
        </CartDropdownContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    isCartHidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));