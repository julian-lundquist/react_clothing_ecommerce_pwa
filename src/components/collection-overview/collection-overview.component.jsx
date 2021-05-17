import './collection-overview.scss';
import CollectionPreview from "../collection-preview/collection-preview.component";
import * as React from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopItemsArray} from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ shopItems }) => {
    return (
        <div className={'collections-overview'}>
            {
                shopItems.map(({id, ...otherCollectionProps}) => {
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    );
                })
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    shopItems: selectShopItemsArray
});

export default connect(mapStateToProps)(CollectionOverview);