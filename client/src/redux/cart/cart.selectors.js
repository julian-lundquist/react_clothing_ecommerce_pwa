import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => (cartItems ? cartItems.reduce((requestedQuantity, cartItem) => requestedQuantity + cartItem.quantity, 0) : 0)
);

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems => (cartItems ? cartItems.reduce((requestedQuantity, cartItem) => requestedQuantity + (cartItem.quantity * cartItem.price), 0) : 0)
)