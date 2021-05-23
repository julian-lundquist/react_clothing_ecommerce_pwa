import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
    shopItems: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_SHOP_ITEMS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_SHOP_ITEMS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                shopItems: action.payload
            }
        case ShopActionTypes.FETCH_SHOP_ITEMS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default shopReducer;