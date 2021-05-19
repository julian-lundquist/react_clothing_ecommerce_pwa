import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
    CollectionFooterContainer,
    CollectionItemContainer,
    CollectionNameContainer, CollectionPriceContainer, CustomAddCartButton,
    ImageContainer
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
    const { id, name, imageUrl, price } = item;
    return (
        <CollectionItemContainer key={id}>
            <ImageContainer className={'image'} imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <CollectionNameContainer>{ name }</CollectionNameContainer>
                <CollectionPriceContainer>${ price }</CollectionPriceContainer>
            </CollectionFooterContainer>
            <CustomAddCartButton className={'custom-button'} onClick={() => addItem(item)} inverted> Add to cart </CustomAddCartButton>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);