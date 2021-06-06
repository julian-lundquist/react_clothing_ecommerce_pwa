import * as React from "react";
import {Route} from "react-router";
import { connect } from "react-redux";

import {ShopPageContainer} from "./shop.styles";
import { fetchShopItemsStart } from "../../redux/shop/shop.actions";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import {useEffect} from "react";

const ShopPage = ({ fetchShopItemsStart, match }) => {
    useEffect(() => {
        fetchShopItemsStart();
    }, [fetchShopItemsStart]);

    return (
        <ShopPageContainer>
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
        </ShopPageContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchShopItemsStart: () => dispatch(fetchShopItemsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);