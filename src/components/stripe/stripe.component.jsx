import './stripe.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import CustomButton from "../custom-button/custom-button.component";

const CheckoutDisplay = ({total}) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                className={'stripe-inputs'}
                options={{
                    style: {
                        base: {
                            fontSize: '22px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#9099a3',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <CustomButton type="submit" disabled={!stripe}>
                Pay ${total}
            </CustomButton>
        </form>
    );
};

const stripePromise = loadStripe('pk_test_51IqrBVBKQUM0yehkYlfWbvYUhSXGa0GxbVv8JWRXP5ZOCEEc2yijCBXdSP1K7rKkQmktrZxPNZPKNCJLwLLIkqOk00cLAYfNDW');

const StripeCheckout = ({ total }) => (
    <Elements stripe={stripePromise}>
        <CheckoutDisplay total={total} />
    </Elements>
);

export default StripeCheckout;