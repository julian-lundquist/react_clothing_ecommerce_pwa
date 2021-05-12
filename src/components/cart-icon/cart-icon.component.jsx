import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className={'cart-icon'} onClick={toggleCartHidden}>
            <ShoppingIcon className={'shopping-icon'} />
            <span className={`${itemCount > 9 ? 'item-count-double1-digit' : ''} ${itemCount > 19 ? 'item-count-double2-digit' : ''}
                              ${itemCount > 99 ? 'item-count-triple1-digit' : ''} ${itemCount > 199 ? 'item-count-triple2-digit' : ''} item-count-single-digit item-count`}>{itemCount}</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);