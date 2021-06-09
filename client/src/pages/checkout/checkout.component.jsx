import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotalPrice} from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckout from "../../services/stripe/stripe.component";
import { clearCart } from "../../redux/cart/cart.actions";

import {
    CheckoutHeaderBlockContainer,
    CheckoutHeaderContainer,
    CheckoutPageContainer,
    CheckoutTotalContainer
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, totalPrice, clearCart }) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <CheckoutHeaderBlockContainer>
                    <span>Product</span>
                </CheckoutHeaderBlockContainer>
                <CheckoutHeaderBlockContainer>
                    <span>Description</span>
                </CheckoutHeaderBlockContainer>
                <CheckoutHeaderBlockContainer>
                    <span>Quantity</span>
                </CheckoutHeaderBlockContainer>
                <CheckoutHeaderBlockContainer>
                    <span>Price</span>
                </CheckoutHeaderBlockContainer>
                <CheckoutHeaderBlockContainer>
                    <span>Remove</span>
                </CheckoutHeaderBlockContainer>
            </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <CheckoutTotalContainer>
                <StripeCheckout total={totalPrice} clearCart={clearCart} />
            </CheckoutTotalContainer>
        </CheckoutPageContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
});

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);