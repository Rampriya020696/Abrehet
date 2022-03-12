/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPayment = /* GraphQL */ `
  mutation CreatePayment($input: PaymentInput) {
    createPayment(input: $input) {
      statusCode
      body
    }
  }
`;
export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
      id
      title
      content
      country
      createdAt
      updatedAt
    }
  }
`;
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
      id
      title
      content
      country
      createdAt
      updatedAt
    }
  }
`;
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
      id
      title
      content
      country
      createdAt
      updatedAt
    }
  }
`;
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      email
      phone
      name
      address
      other
      orders {
        items {
          userID
          phone
          name
          address
          city
          Products
          id
          createdAt
          updatedAt
          usersOrdersId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      email
      phone
      name
      address
      other
      orders {
        items {
          userID
          phone
          name
          address
          city
          Products
          id
          createdAt
          updatedAt
          usersOrdersId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      email
      phone
      name
      address
      other
      orders {
        items {
          userID
          phone
          name
          address
          city
          Products
          id
          createdAt
          updatedAt
          usersOrdersId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      userID
      phone
      name
      address
      city
      Products
      id
      createdAt
      updatedAt
      usersOrdersId
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      userID
      phone
      name
      address
      city
      Products
      id
      createdAt
      updatedAt
      usersOrdersId
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      userID
      phone
      name
      address
      city
      Products
      id
      createdAt
      updatedAt
      usersOrdersId
    }
  }
`;
