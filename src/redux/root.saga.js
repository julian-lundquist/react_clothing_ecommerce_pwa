import {all, call} from "@redux-saga/core/effects";
import {fetchShopItemsStart} from "./shop/shop.sagas";
import {userSagas} from "./user/user.sagas";

export default function* rootSaga() {
    yield all([
        call(fetchShopItemsStart),
        call(userSagas)
    ]);
}