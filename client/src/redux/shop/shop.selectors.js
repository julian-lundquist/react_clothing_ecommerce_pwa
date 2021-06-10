import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.shopItems
);

export const selectShopItemsArray = createSelector(
    [selectShopItems],
    shopItems => shopItems ? Object.keys(shopItems).map(key => shopItems[key]) : []
);

export const selectShopCategory = (collectionUrlParam) =>
    createSelector(
    [selectShopItems],
    shopItems => shopItems ? shopItems[collectionUrlParam] : null
);

export const selectIsShopFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsShopItemsLoaded = createSelector(
    [selectShopItems],
    shopItems => !!shopItems
);