const stripe = require('stripe')(
  'sk_test_51KZzWbAhBlpHU9kBq6SoffiI9NZAAaKW8xzhEaEGxKsfCjZRWhCbz1o8ac4oirHjk21aZ5KLp0fhlmuZK9XCohUv00JersS4js',
);

exports.handler = async (event, context) => {
  try {
    const amount = event.arguments.input.amount;
    const name = event.arguments.input.name;
    const email = event.arguments.input.email;

    const customer = await createCustomer(name, email);

    const session = await createCheckOutSession(amount, customer.id);

    return session;
  } catch (error) {
    console.log('er is een fout opgetreden', error);
  }
};

async function createCustomer(name, email) {
  return new Promise(function (resolve, reject) {
    stripe.customers
      .create({
        email: email,
        name: name,
      })
      .then(customer => {
        resolve(customer);
      })
      .catch(err => {
        // Error response
        reject(err);
      });
  });
}

async function createCheckOutSession(amount, customer) {
    //eslint-disable-line

  return new Promise(function (resolve, reject) {
    stripe.checkout.sessions
      .create({
        payment_method_types: ['card'],
        customer: customer,
        line_items: [
          {
            name: 'Buy your stuff here',
            amount: amount * 100,
            currency: 'usd',
            quantity: 1,
          },
        ],
        success_url:
          'https://staging.d3t4jm0uu1bb0n.amplifyapp.com/payment-success',
        cancel_url:
          'https://staging.d3t4jm0uu1bb0n.amplifyapp.com/payment-failure',
        locale: 'en',
      })
      .then(source => {
        // Success response
        const response = {
          statusCode: 200,
          body: JSON.stringify(source),
        };

        resolve(response);
      })
      .catch(err => {
        // Error response
        const response = {
          statusCode: 500,
          body: JSON.stringify(err.message),
        };

        reject(response);
      });
  });
}
