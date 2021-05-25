import * as React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import {SignInButtonsContainer, SignInContainer, SignInTitle} from "./sign-in.styles";
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";

class SignInComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props;

        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type={'email'} name={'email'} label={'email'} value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput type={'password'} name={'password'} label={'password'} value={this.state.password} handleChange={this.handleChange} required />
                    <SignInButtonsContainer>
                        <CustomButton type={'submit'}>Sign In</CustomButton>
                        <CustomButton type={'button'} onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                    </SignInButtonsContainer>
                </form>
            </SignInContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignInComponent);