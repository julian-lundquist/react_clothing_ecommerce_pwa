import { createSelector } from "reselect";

const selectMenuDirectory = state => state.menuDirectory;

export const selectMenuDirectoryCategories = createSelector(
    [selectMenuDirectory],
    menuDirectory => menuDirectory.categories
);