import {createStructuredSelector} from "reselect";
import {selectIsShopItemsLoaded} from "../../redux/shop/shop.selectors";
import {compose} from "redux";
import {connect} from "react-redux";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsShopItemsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    LoadingSpinner
)(CollectionPage);

export default CollectionPageContainer;