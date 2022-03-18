/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
      id
      title
      content
      country
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        country
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        email
        phone
        name
        address
        other
        orders {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
