import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className={'cart-icon'} onClick={toggleCartHidden}>
            <ShoppingIcon className={'shopping-icon'} />
            <span className={`${itemCount > 9 ? 'item-count-double1-digit' : ''} ${itemCount > 19 ? 'item-count-double2-digit' : ''}
                              ${itemCount > 99 ? 'item-count-triple1-digit' : ''} ${itemCount > 199 ? 'item-count-triple2-digit' : ''} item-count-single-digit item-count`}>{itemCount}</span>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);