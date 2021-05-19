import CollectionPreview from "../collection-preview/collection-preview.component";
import * as React from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopItemsArray} from "../../redux/shop/shop.selectors";

import {CollectionOverviewContainer} from "./collection-overview.styles";

const CollectionOverview = ({ shopItems }) => {
    return (
        <CollectionOverviewContainer>
            {
                shopItems.map(({id, ...otherCollectionProps}) => {
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    );
                })
            }
        </CollectionOverviewContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    shopItems: selectShopItemsArray
});

export default connect(mapStateToProps)(CollectionOverview);