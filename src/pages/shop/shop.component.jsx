import * as React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {Route} from "react-router";
import CollectionPage from "../collection/collection.component";
import { firestore, convertShopItemsSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import {updateShopItems} from "../../redux/shop/shop.actions";

import {ShopPageContainer} from "./shop.styles";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

const CollectionOverviewWithSpinner = LoadingSpinner(CollectionOverview);
const CollectionPageWithSpinner = LoadingSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    shopRefSub = null;

    componentDidMount() {
        const { updateShopItems } = this.props;
        const shopRef = firestore.collection('shopItems');

        this.shopRefSub = shopRef.onSnapshot(async snapshot => {
            const shopItemsMap = convertShopItemsSnapshotToMap(snapshot);
            updateShopItems(shopItemsMap);
            this.setState({ loading: false });
        });
    }

    componentWillUnmount() {
        // this.shopRefSub
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <ShopPageContainer>
                <Route exact path={`${match.path}`} render={ (props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} /> } />
                <Route path={`${match.path}/:categoryId`} render={ (props) => <CollectionPageWithSpinner isLoading={loading} {...props} /> } />
            </ShopPageContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateShopItems: shopItemsMap => dispatch(updateShopItems(shopItemsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);