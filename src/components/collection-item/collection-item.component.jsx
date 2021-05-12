import './collection-item.scss';
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
    const { id, name, imageUrl, price } = item;
    return (
        <div key={id} className={'collection-item'}>
            <div className={'image'} style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className={'collection-footer'}>
                <span className={'name'}>{ name }</span>
                <span className={'price'}>${ price }</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted> Add to cart </CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);