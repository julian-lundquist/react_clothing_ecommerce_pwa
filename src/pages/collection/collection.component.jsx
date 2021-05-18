import './collection.scss';
import { selectShopCategory } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ shopCategory }) => {
    const { title, items } = shopCategory;
    return (
        <div className={'category'}>
            <h2 className={'title'}>{title}</h2>
            <div className={'items'}>
                {
                    items.map(item => (<CollectionItem className={'collection-item'} key={item.id} item={item} />))
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    shopCategory: selectShopCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CollectionPage);