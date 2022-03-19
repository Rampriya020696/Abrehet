// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Products, Users, Order, PaymentResult } = initSchema(schema);

export {
  Products,
  Users,
  Order,
  PaymentResult
};