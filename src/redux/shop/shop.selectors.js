import {createSelector} from "reselect";
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCategoryItems = createSelector(
    [selectShop],
    shop => shop.categoryItems
);

export const selectCategoryItemsArray = createSelector(
    [selectCategoryItems],
    categoryItems => Object.keys(categoryItems).map(key => categoryItems[key])
)

export const selectCategory = memoize((collectionUrlParam) =>
    createSelector(
    [selectCategoryItems],
    categoryItems => categoryItems[collectionUrlParam]
    )
);