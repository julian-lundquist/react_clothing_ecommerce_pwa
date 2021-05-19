import SignInComponent from "../../components/sign-in/sign-in.component";
import SignUpComponent from "../../components/sign-up/sign-up.component";

import {AuthenticationPageContainer} from "./authentication.styles";

const AuthenticationPage = () => (
    <AuthenticationPageContainer>
        <SignInComponent />
        <SignUpComponent />
    </AuthenticationPageContainer>
);

export default AuthenticationPage;