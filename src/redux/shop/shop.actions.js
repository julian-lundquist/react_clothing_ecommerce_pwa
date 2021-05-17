import ShopActionTypes from "./shop.types";

export const updateShopItems = (shopItemsMap) => ({
    type: ShopActionTypes.UPDATE_SHOP_ITEMS,
    payload: shopItemsMap
});