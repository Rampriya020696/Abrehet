/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
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
          Status
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
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
          Status
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
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
          Status
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      userID
      phone
      name
      address
      city
      Products
      Status
      id
      createdAt
      updatedAt
      usersOrdersId
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      userID
      phone
      name
      address
      city
      Products
      Status
      id
      createdAt
      updatedAt
      usersOrdersId
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      userID
      phone
      name
      address
      city
      Products
      Status
      id
      createdAt
      updatedAt
      usersOrdersId
    }
  }
`;
