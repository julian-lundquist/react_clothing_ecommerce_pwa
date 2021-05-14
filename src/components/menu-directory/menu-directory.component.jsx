import * as React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './menu-directory.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenuDirectoryCategories } from "../../redux/menu-directory/menu-directory.selectors";

const MenuDirectory = ({ categories }) => {
    return (
        <div className={'directory-menu'}>
            {
                categories.map(({ id, ...otherSectionProps }) => {
                   return (
                       <MenuItem key={id} {...otherSectionProps} />
                   );
                })
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    categories: selectMenuDirectoryCategories
});

export default connect(mapStateToProps)(MenuDirectory);