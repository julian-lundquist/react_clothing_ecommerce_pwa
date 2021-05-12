import './cart-icon-dropdown.scss';
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import { withRouter } from "react-router";

const CartDropdown = ({ cartItems, history }) => {
    return (
        <div className={'cart-dropdown'}>
            <div id={'style-8'} className={'cart-items'}>
                {
                    cartItems.length ?
                        (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                        : <span className={'empty-cart'}>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));