import * as React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {Route} from "react-router";
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux";

import {ShopPageContainer} from "./shop.styles";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import {createStructuredSelector} from "reselect";
import { fetchShopItemsStartAsync } from "../../redux/shop/shop.actions";
import {selectIsShopFetching} from "../../redux/shop/shop.selectors";

const CollectionOverviewWithSpinner = LoadingSpinner(CollectionOverview);
const CollectionPageWithSpinner = LoadingSpinner(CollectionPage);

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchShopItemsStartAsync } = this.props;
        fetchShopItemsStartAsync();
    }

    render() {
        const { match, isShopFetching } = this.props;

        return (
            <ShopPageContainer>
                <Route exact path={`${match.path}`} render={ (props) => <CollectionOverviewWithSpinner isLoading={isShopFetching} {...props} /> } />
                <Route path={`${match.path}/:categoryId`} render={ (props) => <CollectionPageWithSpinner isLoading={isShopFetching} {...props} /> } />
            </ShopPageContainer>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isShopFetching: selectIsShopFetching
});

const mapDispatchToProps = dispatch => ({
    fetchShopItemsStartAsync: () => dispatch(fetchShopItemsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);