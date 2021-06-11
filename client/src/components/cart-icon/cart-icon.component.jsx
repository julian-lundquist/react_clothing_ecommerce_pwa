import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

import {CartIconContainer, ItemCountContainer, ShoppingIconContainer, selectItemCountStyles} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIconContainer />
            <ItemCountContainer onChange={() => selectItemCountStyles(itemCount)}> {itemCount > 0 ? itemCount : ''} </ItemCountContainer>
        </CartIconContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);