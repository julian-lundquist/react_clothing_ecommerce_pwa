import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotalPrice} from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckout from "../../services/stripe/stripe.component";
import { clearCart } from "../../redux/cart/cart.actions";

import {
    CartEmpty,
    CheckoutHeaderBlockContainer,
    CheckoutHeaderContainer,
    CheckoutPageContainer,
    CheckoutTotalContainer, GoShopCustomButton
} from "./checkout.styles";
import {withRouter} from "react-router";

const CheckoutPage = ({ cartItems, totalPrice, clearCart, history }) => {
    return (
        <CheckoutPageContainer>
            {
                cartItems.length > 0 ? (
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
                ) : (
                    <CartEmpty>
                        Your cart is empty
                        <GoShopCustomButton type={'button'} onClick={() => history.push('/shop')}>Go to Shop Page</GoShopCustomButton>
                    </CartEmpty>
                )
            }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutPage));