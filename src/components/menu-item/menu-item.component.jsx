import { withRouter } from "react-router";
import {
    MenuItemBackgroundImageContainer,
    MenuItemContainer,
    MenuItemContent, MenuItemContentSubtitle,
    MenuItemContentTitle
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <MenuItemContainer size={size} onClick={ () => { history.push(`${match.url}${linkUrl}`) }  }>
            <MenuItemBackgroundImageContainer className={'background-image'} imageUrl={imageUrl}/>
            <MenuItemContent className={'content'}>
                <MenuItemContentTitle>{title.toUpperCase()}</MenuItemContentTitle>
                <MenuItemContentSubtitle>Shop Now</MenuItemContentSubtitle>
            </MenuItemContent>
        </MenuItemContainer>
    );
}

export default withRouter(MenuItem);