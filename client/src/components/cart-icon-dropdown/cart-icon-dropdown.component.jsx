import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import { withRouter } from "react-router";

import {
    CartDropdownContainer,
    CartItemsContainer,
    CustomCheckoutButton,
    EmptyCartContainer
} from "./cart-icon-dropdown.styles";
import {GoShopCustomButton} from "../../pages/checkout/checkout.styles";
import {Link} from "react-router-dom";

const CartDropdown = ({ cartItems, history }) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                        : (
                            <EmptyCartContainer>
                                Your cart is empty
                                <GoShopCustomButton type={'button'} onClick={() => history.push('/shop')}>Go to Shop Page</GoShopCustomButton>
                            </EmptyCartContainer>
                        )
                }
            </CartItemsContainer>
            <CustomCheckoutButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomCheckoutButton>
        </CartDropdownContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));