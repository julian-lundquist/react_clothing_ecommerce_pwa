import ShopActionTypes from "./shop.types";
import {call, takeLatest, put} from "@redux-saga/core/effects";
import {convertShopItemsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchShopItemsFailure, fetchShopItemsSuccess} from "./shop.actions";

export function* fetchShopItemsStart() {
    yield takeLatest(ShopActionTypes.FETCH_SHOP_ITEMS_START, fetchShopItemsAsync);
}

export function* fetchShopItemsAsync() {
    try {
        const shopRef = firestore.collection('shopItems');
        const snapshot = yield shopRef.get();
        const shopItemsMap = yield call(convertShopItemsSnapshotToMap, snapshot);
        yield put(fetchShopItemsSuccess(shopItemsMap));
    } catch (e) {
        yield put(fetchShopItemsFailure(e.message));
    }
}