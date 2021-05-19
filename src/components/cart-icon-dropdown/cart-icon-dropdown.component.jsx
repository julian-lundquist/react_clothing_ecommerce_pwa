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

const CartDropdown = ({ cartItems, history }) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                        : <EmptyCartContainer>Your cart is empty</EmptyCartContainer>
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