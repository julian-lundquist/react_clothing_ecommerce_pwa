import './sign-up.scss';
import * as React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

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

        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (e) {
            console.log('Error: ', e)
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className={'sign-up'}>
                <h2 className={'title'}>I do not have an account</h2>
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
            </div>
        );
    }
}

export default SignUpComponent;