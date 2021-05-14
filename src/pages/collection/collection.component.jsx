import './collection.scss';
import {selectCategory} from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ categoryItem }) => {
    const { title, items } = categoryItem;
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
    categoryItem: selectCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CollectionPage);