const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on this port ' + port);
});

app.post('/payment',async (req, res) => {
    const body = {
        address: req.body.address,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        totalPrice: req.body.totalPrice,
        token: req.body.token
    }

    try {
        const customer = await stripe.customers.create({
            address: body.address,
            description: body.name + ' Test Customer (created for API docs)',
            email: body.email,
            name: body.name,
            phone: body.phone,
            shipping: {
                address: body.address,
                name: body.name,
                phone: body.phone
            }
        });

        // attaches token which contains card details to the customer as default payment method
        await stripe.customers.createSource(
            customer?.id,
            { source: body.token.id }
        );

        const charge = await stripe.charges.create({
            amount: body.totalPrice,
            currency: 'usd',
            customer: customer?.id,
            // source: 'tok_amex',
            description: 'My First Test Charge (created for API docs)',
        });

        // console.log(charge);

        res.status(200).send({ success: { customer, charge } });
    } catch (e) {
        res.status(500).send({ error: e })
    }

    // const session = await stripe.checkout.sessions.create({
    //     success_url: 'https://localhost/success',
    //     cancel_url: 'https://localhost/cancel',
    //     payment_method_types: ['card'],
    //     line_items: [
    //         {price: 'amount', quantity: 2},
    //     ],
    //     mode: 'payment',
    //     // client_reference_id: customer?.id,
    //     customer: customer?.id
    // });
    //
    // console.log(session);

    // await stripe.customers.createSource(
    //     customer?.id,
    //     {
    //         source: body.token_id,
    //     },
    //     function(err, source) {
    //         // asynchronously called
    //         console.log(source)
    //         console.log(customer)
    //     }
    // );

    // stripe.paymentIntents.create(body, (stripeErr, stripeRes) => {
    //     if (stripeErr) {
    //         res.status(500).send({ error: stripeErr });
    //     } else {
    //         res.status(200).send({ success: stripeRes });
    //     }
    // });
});