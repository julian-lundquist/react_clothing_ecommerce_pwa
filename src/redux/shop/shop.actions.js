import ShopActionTypes from "./shop.types";
import {firestore, convertShopItemsSnapshotToMap} from "../../firebase/firebase.utils";

export const updateShopItems = (shopItemsMap) => ({
    type: ShopActionTypes.UPDATE_SHOP_ITEMS,
    payload: shopItemsMap
});

export const fetchShopItemsStart = () => ({
    type: ShopActionTypes.FETCH_SHOP_ITEMS_START
});

export const fetchShopItemsSuccess = shopItems => ({
    type: ShopActionTypes.FETCH_SHOP_ITEMS_SUCCESS,
    payload: shopItems
});

export const fetchShopItemsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_SHOP_ITEMS_FAILURE,
    payload: errorMessage
});

export const fetchShopItemsStartAsync = () => {
    return dispatch => {
        const shopRef = firestore.collection('shopItems');
        dispatch(fetchShopItemsStart());

        shopRef.get().then(snapshot => {
            const shopItemsMap = convertShopItemsSnapshotToMap(snapshot);

            dispatch(fetchShopItemsSuccess(shopItemsMap));
        }).catch(e => dispatch(fetchShopItemsFailure(e.message())));
    }
}