import {
    ItemDetailsContainer,
    CartItemContainer,
    ItemImageContainer,
    ItemNameContainer,
    ItemPriceContainer
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <ItemImageContainer src={imageUrl} alt={'item'} />
            <ItemDetailsContainer>
                <ItemNameContainer>{name}</ItemNameContainer>
                <ItemPriceContainer>{quantity} x ${price}</ItemPriceContainer>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
}

export default CartItem;