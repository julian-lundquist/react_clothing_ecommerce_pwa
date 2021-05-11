import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

let count = 0;

const CartIcon = () => {
    return (
        <div className={'cart-icon'}>
            <ShoppingIcon className={'shopping-icon'} />
            <span className={`${count > 9 ? 'item-count-double-digit' : ''} ${count > 99 ? 'item-count-triple-digit' : ''} item-count-single-digit item-count`}>{count}</span>
        </div>
    );
};

export default CartIcon;