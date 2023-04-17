


export const CUSTOMER_SUPPORT_EMAIL_ID = 'mesob@mesobstore.com';
export const CHECKOUT_API_URL = 'https://25u2tyctv3.execute-api.us-east-1.amazonaws.com/staging';
export const SEND_MAIL_API_URL = 'https://q0v1vrhy5g.execute-api.us-east-1.amazonaws.com/staging'

export const api_send_mail = async (payload) => {
    const uri = SEND_MAIL_API_URL;
    const response = await fetch(uri, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    }).then((res) => res.json());
    return response;
};



// KLARNA
const KLARNA_ENDPOINT = 'https://api.playground.klarna.com'

const username = '';
const password = '';

const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Basic" + Buffer.from(username + ":" + password).toString('base64');


export const api_klarna_session = async (payload) => {
    const uri = `${KLARNA_ENDPOINT}/payments/v1/sessions`;
    const response = await fetch(uri, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
    }).then((res) => res.json());
    return response;
};


export const api_klarna_order = async (payload, orderToken) => {
    const uri = `${KLARNA_ENDPOINT}/v1/authorizations/${orderToken}/order`;
    const response = await fetch(uri, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
    }).then((res) => res.json());
    return response;
};
