import CollectionItem from "../collection-item/collection-item.component";

import {CollectionPreviewContainer, CollectionItemTitle, CollectionItemPreview} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
    return (
        <CollectionPreviewContainer>
            <CollectionItemTitle>{title.toUpperCase()}</CollectionItemTitle>
            <CollectionItemPreview>
                {
                    items.filter((item, index) => index < 4).map((item) => {
                       return (
                           <CollectionItem key={item.id} item={item} />
                       );
                    })
                }
            </CollectionItemPreview>
        </CollectionPreviewContainer>
    );
}

export default CollectionPreview;