import * as React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

import {SignInButtonsContainer, SignInContainer, SignInTitle} from "./sign-in.styles";
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";
import {useState} from "react";

const SignInComponent = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setUserCredentials({...userCredentials, [name]: value });
    }

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type={'email'} name={'email'} label={'email'} value={email} handleChange={handleChange} required />
                <FormInput type={'password'} name={'password'} label={'password'} value={password} handleChange={handleChange} required />
                <SignInButtonsContainer>
                    <CustomButton type={'submit'}>Sign In</CustomButton>
                    <CustomButton type={'button'} onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                </SignInButtonsContainer>
            </form>
        </SignInContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignInComponent);