// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Products, Users } = initSchema(schema);

export {
  Products,
  Users
};