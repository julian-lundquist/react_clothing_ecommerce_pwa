import './stripe.scss';
import React, {useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import CustomButton from "../../components/custom-button/custom-button.component";

import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000';

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#1898ed',
            color: '#424770',
            fontWeight: 'bold',
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '19px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': {
                color: '#fce883',
            },
            '::placeholder': {
                color: '#9099a3',
            },
        },
        invalid: {
            iconColor: '#9e2146',
            color: '#9e2146',
        },
    }
};

const Field = ({
                   label,
                   id,
                   type,
                   placeholder,
                   required,
                   autoComplete,
                   value,
                   onChange,
               }) => (
    <div className={'FormRow'}>
        <label htmlFor={id} className="FormRowLabel">
            {label}
        </label>

        {
            label.toLowerCase() == 'phone' ? (
                <div className={'PhoneNumberRow'}>
                    <PhoneInput
                        country={'us'}
                        preferredCountries={['us', 'ca', 'au', 'cn']}
                        disableDropdown={true}
                        disableCountryCode={true}
                        style={{ display: 'flex' }}
                        className={'FormRowInput'}
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        autoComplete={autoComplete}
                        value={value}
                        onChange={onChange}
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: false
                        }}
                        isValid={(value, country) => {
                            if (value.match(/12345/)) {
                                return 'Invalid value: '+value+', '+country.name;
                            } else if (value.match(/1234/)) {
                                return false;
                            } else {
                                return true;
                            }
                        }}
                    />
                </div>
            ) : (
                <input
                    className={'FormRowInput'}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    autoComplete={autoComplete}
                    value={value}
                    onChange={onChange}
                />
            )
        }
    </div>
);

const ErrorMessage = ({children}) => (
    <div className="ErrorMessage" role="alert">
        <svg width="16" height="16" viewBox="0 0 17 17">
            <path
                fill="#FFF"
                d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
            />
            <path
                fill="#6772e5"
                d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
            />
        </svg>
        {children}
    </div>
);

const ResetButton = ({onClick}) => (
    <button type="button" className="ResetButton" onClick={onClick}>
        <svg width="32px" height="32px" viewBox="0 0 32 32">
            <path
                fill="#FFF"
                d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"
            />
        </svg>
    </button>
);

const CheckoutDisplay = ({total}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [cardComplete, setCardComplete] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [billingDetails, setBillingDetails] = useState({
        email: '',
        phone: '',
        name: '',
    });

    const processTransaction = async () => {
        // await stripe.createPaymentMethod({
        //     type: 'card',
        //     card: elements.getElement(CardElement),
        //     billing_details: billingDetails,
        // }).then(result => {
        //     if (result.error) {
        //         setError(result.error);
        //     } else {
        //         console.log(result.paymentMethod);
        //         console.log(total)
        //         setPaymentMethod(result.paymentMethod);
        //     }
        // });


        await stripe.createToken(elements.getElement(CardElement)).then((result) => {
            if (result.error) {
                setError(result.error);
            } else {
                let token = result.token;
                console.log(token);
                axios.post('/payment',{
                    amount: total * 100,
                    token
                }).then(res => {
                    console.log(res);
                })
            }
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        if (error) {
            elements.getElement('card').focus();
            return;
        }

        if (cardComplete) {
            setProcessing(true);
        }

        await processTransaction();

        await setProcessing(false);
    };

    const reset = () => {
        setError(null);
        setProcessing(false);
        setPaymentMethod(null);
        setBillingDetails({
            email: '',
            phone: '',
            name: '',
        });
    };

    return paymentMethod ? (
        <div className="Result">
            <div className="ResultTitle" role="alert">
                Payment successful
            </div>
            <div className="ResultMessage">
                Thanks for trying Stripe Elements. No money was charged, but we
                generated a PaymentMethod: {paymentMethod.id}
            </div>
            <ResetButton onClick={reset} />
        </div>
    ) : (
        <form className="Form" onSubmit={handleSubmit}>
            <fieldset className={'FormGroup'}>
                <Field
                    label="Name"
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    autoComplete="name"
                    value={billingDetails.name}
                    onChange={(e) => {
                        setBillingDetails({...billingDetails, name: e.target.value});
                    }}
                />
                <Field
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    required
                    autoComplete="email"
                    value={billingDetails.email}
                    onChange={(e) => {
                        setBillingDetails({...billingDetails, email: e.target.value});
                    }}
                />
                <Field
                    label={'Phone'}
                    id={'phone'}
                    type={'tel'}
                    placeholder={'(312) 231-1233'}
                    required
                    autoComplete={'tel'}
                    value={billingDetails.phone}
                    onChange={(e) => {
                        setBillingDetails({...billingDetails, phone: e});
                    }}
                />
            </fieldset>

            <CardElement
                className={'stripe-inputs'}
                options={CARD_OPTIONS}
                onChange={e => {
                    setError(e.error)
                    setCardComplete(e.complete)
                }}
            />

            {error && <ErrorMessage>{error.message}</ErrorMessage>}
            <CustomButton type={'submit'} error={error} disabled={processing || !stripe}>
                { processing ? 'Processing...' : `Pay $${total}` }
            </CustomButton>

            <div className={'test-payment-warning'}>
                *When testing a payment, the card number must be...*
                <br/>
                Card: 4242 4242 4242 4242
                <br/>
                Exp: Any valid date
                <br/>
                CVV: Any
            </div>
        </form>
    );
}

const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
        },
    ],
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IqrBVBKQUM0yehkYlfWbvYUhSXGa0GxbVv8JWRXP5ZOCEEc2yijCBXdSP1K7rKkQmktrZxPNZPKNCJLwLLIkqOk00cLAYfNDW');

const StripeCheckout = ({ total }) => (
    <div className={'CheckoutWrapper'}>
        <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
            <CheckoutDisplay total={total} />
        </Elements>
    </div>
);

export default StripeCheckout;