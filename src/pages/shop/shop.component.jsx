import * as React from "react";

import './shop.scss';
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {Route} from "react-router";
import CollectionPage from "../collection/collection.component";
import { firestore, convertShopItemsSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import {updateShopItems} from "../../redux/shop/shop.actions";


class ShopPage extends React.Component {
    render() {
        const { match } = this.props;

        return (
            <div className={'shop-page'}>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
            </div>
        );
    }

    shopRefSub = null;

    componentDidMount() {
        const { updateShopItems } = this.props;
        const shopRef = firestore.collection('shopItems');

        this.shopRefSub = shopRef.onSnapshot(async snapshot => {
            const shopItemsMap = convertShopItemsSnapshotToMap(snapshot);
            updateShopItems(shopItemsMap);
        });
    }

    componentWillUnmount() {
        // this.shopRefSub
    }
}

const mapDispatchToProps = dispatch => ({
    updateShopItems: shopItemsMap => dispatch(updateShopItems(shopItemsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);