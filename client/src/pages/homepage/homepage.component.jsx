import './homepage.scss'

import MenuDirectory from "../../components/menu-directory/menu-directory.component";
import {HomePageContainer} from "./homepage.styles";

const HomePage = () => {
    return (
        <HomePageContainer>
            <MenuDirectory />
        </HomePageContainer>
    );
}

export default HomePage;