const buy = async (model, context) => {
  const customer = await stripe.customers.create({
    name: user.firstName || '',
    // temp adding  address to handle indian rule
    address: {
      line1: '510 Townsend St',
      postal_code: '98140',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  });

  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2020-08-27'},
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: coin.coins,
    description: 'social services',
    // temp adding  address to handle indian rule
    shipping: {
      name: 'Jenny Rosen',
      address: {
        line1: '510 Townsend St',
        postal_code: '98140',
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
      },
    },
    currency: 'inr',
    customer: customer.id,
    payment_method_types: [model.paymentMethod],
  });

  const payment = await new db.payment({
    user: user.id,
    coin: coin.id,
    pi: paymentIntent.id,
    status: paymentIntent.status,
    customerId: customer.id,
    amount: coin.price,
  }).save();

  log.end();
  return {
    paymentIntent: paymentIntent.client_secret,
    status: paymentIntent.status,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: '',
  };
};

// User name  speryamo@gmail.com
// Pass: 816HelenSewitSara

// Console sign-in URL

// https://807954077262.signin.aws.amazon.com/console
// User name

// abrehet-2.0
// Console password

// ]i4E9Q@e
// Hide

// Access key
// AKIA3YHOQ2ZHAI23VLOI
// Secret access key
// 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

import fetch from 'node-fetch';

async function run() {
  const resp = await fetch(`https://api.klarna.com/payments/v1/sessions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      acquiring_channel: 'ECOMMERCE',
      attachment: {
        body: '{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}',
        content_type: 'application/vnd.klarna.internal.emd-v2+json',
      },
      billing_address: {
        attention: 'Attn',
        city: 'London',
        country: 'GB',
        email: 'test.sam@test.com',
        family_name: 'Andersson',
        given_name: 'Adam',
        organization_name: 'string',
        phone: '+44795465131',
        postal_code: 'W1G 0PW',
        region: 'OH',
        street_address: '33 Cavendish Square',
        street_address2: 'Floor 22 / Flat 2',
        title: 'Mr.',
      },
      custom_payment_method_ids: ['string'],
      customer: {
        date_of_birth: '1978-12-31',
        gender: 'male',
        last_four_ssn: 'string',
        national_identification_number: 'string',
        organization_entity_type: 'LIMITED_COMPANY',
        organization_registration_id: 'string',
        title: 'Mr.',
        type: 'organization',
        vat_id: 'string',
      },
      design: 'string',
      locale: 'en-US',
      merchant_data:
        '{"order_specific":[{"substore":"Women\'s Fashion","product_name":"Women Sweatshirt"}]}',
      merchant_reference1: 'ON4711',
      merchant_reference2: 'hdt53h-zdgg6-hdaff2',
      merchant_urls: {
        confirmation: 'https://www.example-url.com/confirmation',
        notification: 'https://www.example-url.com/notification',
        push: 'https://www.example-url.com/push',
        authorization: 'https://www.example-url.com/authorization',
      },
      options: {
        color_border: '#FF9900',
        color_border_selected: '#FF9900',
        color_details: '#FF9900',
        color_text: '#FF9900',
        radius_border: '5px',
      },
      order_amount: 2500,
      order_lines: [
        {
          image_url: 'https://www.exampleobjects.com/logo.png',
          merchant_data:
            '{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}',
          name: 'Running shoe',
          product_identifiers: {
            brand: 'shoe-brand',
            category_path: 'Shoes > Running',
            global_trade_item_number: '4912345678904',
            manufacturer_part_number: 'AD6654412-334.22',
            color: 'white',
            size: 'small',
          },
          product_url: 'https://.../AD6654412.html',
          quantity: 1,
          quantity_unit: 'pcs',
          reference: 'AD6654412',
          tax_rate: 1900,
          total_amount: 2500,
          total_discount_amount: 500,
          total_tax_amount: 475,
          type: 'physical',
          unit_price: 2500,
          subscription: {
            name: 'string',
            interval: 'DAY',
            interval_count: 1,
          },
        },
      ],
      order_tax_amount: 475,
      purchase_country: 'GB',
      purchase_currency: 'GBP',
      shipping_address: {
        attention: 'Attn',
        city: 'London',
        country: 'GB',
        email: 'test.sam@test.com',
        family_name: 'Andersson',
        given_name: 'Adam',
        organization_name: 'string',
        phone: '+44795465131',
        postal_code: 'W1G 0PW',
        region: 'OH',
        street_address: '33 Cavendish Square',
        street_address2: 'Floor 22 / Flat 2',
        title: 'Mr.',
      },
      intent: 'buy',
    }),
  });

  const data = await resp.json();
  console.log(data);
}

run();
