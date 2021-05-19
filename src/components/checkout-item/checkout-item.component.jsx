import { connect } from "react-redux";
import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";

import {
    ArrowContainer,
    CheckoutImageContainer,
    CheckoutItemContainer,
    CheckoutNameContainer, CheckoutPriceContainer,
    CheckoutQuantityContainer, CheckoutQuantityValueContainer, CheckoutRemoveItemButton
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <img src={imageUrl} alt={'item'} />
            </CheckoutImageContainer>
            <CheckoutNameContainer>{name}</CheckoutNameContainer>
            <CheckoutQuantityContainer>
                <ArrowContainer onClick={() => removeItem(cartItem)}>&#10094;</ArrowContainer>
                <CheckoutQuantityValueContainer>{quantity}</CheckoutQuantityValueContainer>
                <ArrowContainer className={'arrow'} onClick={() => addItem(cartItem)}>&#10095;</ArrowContainer>
            </CheckoutQuantityContainer>
            <CheckoutPriceContainer>${price}</CheckoutPriceContainer>
            <CheckoutRemoveItemButton onClick={() => clearItem(cartItem)}>&#10005;</CheckoutRemoveItemButton>
        </CheckoutItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);