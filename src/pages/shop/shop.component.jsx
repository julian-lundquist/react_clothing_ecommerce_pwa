import * as React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {Route} from "react-router";
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux";

import {ShopPageContainer} from "./shop.styles";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import {createStructuredSelector} from "reselect";
import { fetchShopItemsStartAsync } from "../../redux/shop/shop.actions";
import {selectIsShopFetching, selectIsShopItemsLoaded} from "../../redux/shop/shop.selectors";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchShopItemsStartAsync } = this.props;
        fetchShopItemsStartAsync();
    }

    render() {
        const { match } = this.props;

        return (
            <ShopPageContainer>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
            </ShopPageContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchShopItemsStartAsync: () => dispatch(fetchShopItemsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);