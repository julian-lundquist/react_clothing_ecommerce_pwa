import {all, call} from "@redux-saga/core/effects";
import {fetchShopItemsStart} from "./shop/shop.sagas";

export default function* rootSaga() {
    yield all([
        call(fetchShopItemsStart)
    ]);
}