import './collection-overview.scss';
import CollectionPreview from "../collection-preview/collection-preview.component";
import * as React from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCategoryItemsArray} from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ categoryItems }) => {
    return (
        <div className={'collections-overview'}>
            {
                categoryItems.map(({id, ...otherCollectionProps}) => {
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    );
                })
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    categoryItems: selectCategoryItemsArray
});

export default connect(mapStateToProps)(CollectionOverview);