import * as React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenuDirectoryCategories } from "../../redux/menu-directory/menu-directory.selectors";

import {MenuDirectoryContainer} from "./menu-directory.styles";

const MenuDirectory = ({ categories }) => {
    return (
        <MenuDirectoryContainer>
            {
                categories.map(({ id, ...otherSectionProps }) => {
                   return (
                       <MenuItem key={id} {...otherSectionProps} />
                   );
                })
            }
        </MenuDirectoryContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    categories: selectMenuDirectoryCategories
});

export default connect(mapStateToProps)(MenuDirectory);