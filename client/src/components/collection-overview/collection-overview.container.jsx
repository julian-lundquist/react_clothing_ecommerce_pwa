import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsShopFetching } from "../../redux/shop/shop.selectors";
import CollectionOverview from "./collection-overview.component";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";
import {compose} from "redux";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsShopFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    LoadingSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;