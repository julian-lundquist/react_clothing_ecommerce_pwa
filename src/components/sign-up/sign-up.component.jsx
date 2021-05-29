import * as React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import {SignUpContainer, SignUpTitle} from "./sign-up.styles";
import {signUpStart} from "../../redux/user/user.actions";
import { connect } from "react-redux";

class SignUpComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            return;
        }

        signUpStart({ displayName, email, password });
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className={'sign-up-form'} onSubmit={this.handleSubmit}>
                    <FormInput type={'text'} name={'displayName'} label={'displayName'} value={displayName} handleChange={this.handleChange} required />
                    <FormInput type={'email'} name={'email'} label={'email'} value={email} handleChange={this.handleChange} required />
                    <FormInput type={'password'} name={'password'} label={'password'} value={password} handleChange={this.handleChange} required />
                    <FormInput type={'password'} name={'confirmPassword'} label={'confirmPassword'} value={confirmPassword} handleChange={this.handleChange} required />

                    <div className={'buttons'}>
                        <CustomButton type={'submit'}>Sign Up</CustomButton>
                    </div>
                </form>
            </SignUpContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUpComponent);