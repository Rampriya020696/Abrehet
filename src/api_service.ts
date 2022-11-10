


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
