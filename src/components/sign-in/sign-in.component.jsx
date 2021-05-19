import * as React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import {SignInButtonsContainer, SignInContainer, SignInTitle} from "./sign-in.styles";

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

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (e) {
            console.log('Error: ', e)
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type={'email'} name={'email'} label={'email'} value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput type={'password'} name={'password'} label={'password'} value={this.state.password} handleChange={this.handleChange} required />
                    <SignInButtonsContainer>
                        <CustomButton type={'submit'}>Sign In</CustomButton>
                        <CustomButton type={'button'} onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </SignInButtonsContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default SignInComponent;