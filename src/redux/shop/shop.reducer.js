import SHOP_DATA from './shop.data';
import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
    categoryItems: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_SHOP_ITEMS:
            return {
                ...state,
                shopItems: action.payload
            }
        default:
            return state
    }
}

export default shopReducer;