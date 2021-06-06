import { selectShopCategory } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";

import {CategoryContainer, CategoryItemsContainer, CategoryTitleContainer} from "./collection.styles";

const CollectionPage = ({ shopCategory }) => {
    const { title, items } = shopCategory;
    return (
        <CategoryContainer>
            <CategoryTitleContainer>{title}</CategoryTitleContainer>
            <CategoryItemsContainer>
                {
                    items.map(item => (<CollectionItem className={'collection-item'} key={item.id} item={item} />))
                }
            </CategoryItemsContainer>
        </CategoryContainer>
    );
}

const mapStateToProps = (state, ownProps) => ({
    shopCategory: selectShopCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CollectionPage);