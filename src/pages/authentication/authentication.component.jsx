import './authentication.scss';
import SignInComponent from "../../components/sign-in/sign-in.component";
import SignUpComponent from "../../components/sign-up/sign-up.component";

const AuthenticationPage = () => (
    <div className={'authentication-page'}>
        <SignInComponent />
        <SignUpComponent />
    </div>
);

export default AuthenticationPage;