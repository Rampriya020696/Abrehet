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
      category
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
      category
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
      category
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
      Status
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
      Status
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
      Status
      id
      createdAt
      updatedAt
      usersOrdersId
    }
  }
`;
export const createMenuType = /* GraphQL */ `
  mutation CreateMenuType($input: CreateMenuTypeInput!) {
    createMenuType(input: $input) {
      id
      name
      icon
    }
  }
`;
export const updateMenuType = /* GraphQL */ `
  mutation UpdateMenuType($input: UpdateMenuTypeInput!) {
    updateMenuType(input: $input) {
      id
      name
      icon
    }
  }
`;
export const deleteMenuType = /* GraphQL */ `
  mutation DeleteMenuType($input: DeleteMenuTypeInput!) {
    deleteMenuType(input: $input) {
      id
      name
      icon
    }
  }
`;
export const createMyCustomType = /* GraphQL */ `
  mutation CreateMyCustomType($input: CreateMyCustomTypeInput!) {
    createMyCustomType(input: $input) {
      id
      title
      content
      price
      rating
    }
  }
`;
export const updateMyCustomType = /* GraphQL */ `
  mutation UpdateMyCustomType($input: UpdateMyCustomTypeInput!) {
    updateMyCustomType(input: $input) {
      id
      title
      content
      price
      rating
    }
  }
`;
export const deleteMyCustomType = /* GraphQL */ `
  mutation DeleteMyCustomType($input: DeleteMyCustomTypeInput!) {
    deleteMyCustomType(input: $input) {
      id
      title
      content
      price
      rating
    }
  }
`;
export const createMenu = /* GraphQL */ `
  mutation CreateMenu($input: CreateMenuInput!) {
    createMenu(input: $input) {
      id
      name
      icon
    }
  }
`;
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu($input: UpdateMenuInput!) {
    updateMenu(input: $input) {
      id
      name
      icon
    }
  }
`;
export const deleteMenu = /* GraphQL */ `
  mutation DeleteMenu($input: DeleteMenuInput!) {
    deleteMenu(input: $input) {
      id
      name
      icon
    }
  }
`;
export const createResource = /* GraphQL */ `
  mutation CreateResource($input: CreateResourceInput!) {
    createResource(input: $input) {
      id
      signup
      login
    }
  }
`;
export const updateResource = /* GraphQL */ `
  mutation UpdateResource($input: UpdateResourceInput!) {
    updateResource(input: $input) {
      id
      signup
      login
    }
  }
`;
export const deleteResource = /* GraphQL */ `
  mutation DeleteResource($input: DeleteResourceInput!) {
    deleteResource(input: $input) {
      id
      signup
      login
    }
  }
`;
export const createBanner = /* GraphQL */ `
  mutation CreateBanner($input: CreateBannerInput!) {
    createBanner(input: $input) {
      id
      title
      content
      image
    }
  }
`;
export const updateBanner = /* GraphQL */ `
  mutation UpdateBanner($input: UpdateBannerInput!) {
    updateBanner(input: $input) {
      id
      title
      content
      image
    }
  }
`;
export const deleteBanner = /* GraphQL */ `
  mutation DeleteBanner($input: DeleteBannerInput!) {
    deleteBanner(input: $input) {
      id
      title
      content
      image
    }
  }
`;
