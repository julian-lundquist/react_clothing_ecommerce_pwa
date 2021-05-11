import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

let count = 0;

const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className={'cart-icon'} onClick={toggleCartHidden}>
            <ShoppingIcon className={'shopping-icon'} />
            <span className={`${count > 9 ? 'item-count-double-digit' : ''} ${count > 99 ? 'item-count-triple-digit' : ''} item-count-single-digit item-count`}>{count}</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);