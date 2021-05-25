import {all, call} from "@redux-saga/core/effects";
import {fetchShopItemsStart} from "./shop/shop.sagas";
import {userSagas} from "./user/user.sagas";
import {cartSagas} from "./cart/cart.sagas";

export default function* rootSaga() {
    yield all([
        call(fetchShopItemsStart),
        call(userSagas),
        call(cartSagas)
    ]);
}