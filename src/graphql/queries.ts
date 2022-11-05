/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
      id
      title
      category
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
        category
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
      Status
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
        Status
        id
        createdAt
        updatedAt
        usersOrdersId
      }
      nextToken
    }
  }
`;
export const getMenuType = /* GraphQL */ `
  query GetMenuType($id: ID!, $name: String!) {
    getMenuType(id: $id, name: $name) {
      id
      name
      icon
    }
  }
`;
export const listMenuTypes = /* GraphQL */ `
  query ListMenuTypes(
    $filter: TableMenuTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        icon
      }
      nextToken
    }
  }
`;
export const getMyCustomType = /* GraphQL */ `
  query GetMyCustomType($id: ID!) {
    getMyCustomType(id: $id) {
      id
      title
      content
      price
      rating
    }
  }
`;
export const listMyCustomTypes = /* GraphQL */ `
  query ListMyCustomTypes(
    $filter: TableMyCustomTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyCustomTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        price
        rating
      }
      nextToken
    }
  }
`;
export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
      id
      name
      icon
    }
  }
`;
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: TableMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        icon
      }
      nextToken
    }
  }
`;
export const getResource = /* GraphQL */ `
  query GetResource($id: ID!) {
    getResource(id: $id) {
      id
      signup
      login
    }
  }
`;
export const listResources = /* GraphQL */ `
  query ListResources(
    $filter: TableResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        signup
        login
      }
      nextToken
    }
  }
`;
export const getBanner = /* GraphQL */ `
  query GetBanner($id: ID!) {
    getBanner(id: $id) {
      id
      title
      content
      image
    }
  }
`;
export const listBanners = /* GraphQL */ `
  query ListBanners(
    $filter: TableBannerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBanners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        image
      }
      nextToken
    }
  }
`;
