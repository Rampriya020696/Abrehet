const aws = require('aws-sdk');
const ses = new aws.SES();

exports.handler = async event => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      //console.log(streamedItem.dynamodb);
      //const candidateName = streamedItem.dynamodb.NewImage.name.S
      //const candidateEmail = streamedItem.dynamodb.NewImage.email.S
      const obj = streamedItem.dynamodb.NewImage;
      const products = obj.Products.M;
      let str = 'total money: ' + products.total.S;
      str += '\naddress: ' + obj.address.S;
      str += '\ncity: ' + obj.city.S;
      str += '\nphone: ' + obj.phone.S;
      str += '\nname: ' + obj.name.S;
      str += '\n\nitems:';
      for (let i = 0; i < products.cart.L.length; i++) {
        let val = products.cart.L[i];
        str +=
          '\ntitle: ' +
          val.M.item.M.title.S +
          ' | quantity: ' +
          val.M.quantity.N +
          ' | price: ' +
          val.M.item.M.price.S;
      }
      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [process.env.SES_EMAIL],
          },
          Source: process.env.SES_EMAIL,
          Message: {
            Subject: {Data: 'An Order was placed by ' + obj.name.S},
            Body: {
              Text: {Data: str},
            },
          },
        })
        .promise();
    }
  }
  return {status: 'done'};
};
