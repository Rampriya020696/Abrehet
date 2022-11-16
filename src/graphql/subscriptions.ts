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
export const onCreateMenuType = /* GraphQL */ `
  subscription OnCreateMenuType($id: ID, $name: String, $icon: String) {
    onCreateMenuType(id: $id, name: $name, icon: $icon) {
      id
      name
      icon
    }
  }
`;
export const onUpdateMenuType = /* GraphQL */ `
  subscription OnUpdateMenuType($id: ID, $name: String, $icon: String) {
    onUpdateMenuType(id: $id, name: $name, icon: $icon) {
      id
      name
      icon
    }
  }
`;
export const onDeleteMenuType = /* GraphQL */ `
  subscription OnDeleteMenuType($id: ID, $name: String, $icon: String) {
    onDeleteMenuType(id: $id, name: $name, icon: $icon) {
      id
      name
      icon
    }
  }
`;
export const onCreateMyCustomType = /* GraphQL */ `
  subscription OnCreateMyCustomType(
    $id: ID
    $title: String
    $content: String
    $price: Int
    $rating: Float
  ) {
    onCreateMyCustomType(
      id: $id
      title: $title
      content: $content
      price: $price
      rating: $rating
    ) {
      id
      title
      content
      price
      rating
    }
  }
`;
export const onUpdateMyCustomType = /* GraphQL */ `
  subscription OnUpdateMyCustomType(
    $id: ID
    $title: String
    $content: String
    $price: Int
    $rating: Float
  ) {
    onUpdateMyCustomType(
      id: $id
      title: $title
      content: $content
      price: $price
      rating: $rating
    ) {
      id
      title
      content
      price
      rating
    }
  }
`;
export const onDeleteMyCustomType = /* GraphQL */ `
  subscription OnDeleteMyCustomType(
    $id: ID
    $title: String
    $content: String
    $price: Int
    $rating: Float
  ) {
    onDeleteMyCustomType(
      id: $id
      title: $title
      content: $content
      price: $price
      rating: $rating
    ) {
      id
      title
      content
      price
      rating
    }
  }
`;
export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu(
    $id: ID
    $title: String
    $content: String
    $price: Int
    $rating: Float
  ) {
    onCreateMenu(
      id: $id
      title: $title
      content: $content
      price: $price
      rating: $rating
    ) {
      id
      name
      icon
    }
  }
`;
export const onUpdateMenu = /* GraphQL */ `
  subscription OnUpdateMenu(
    $id: ID
    $title: String
    $content: String
    $price: Int
    $rating: Float
  ) {
    onUpdateMenu(
      id: $id
      title: $title
      content: $content
      price: $price
      rating: $rating
    ) {
      id
      name
      icon
    }
  }
`;
export const onDeleteMenu = /* GraphQL */ `
  subscription OnDeleteMenu(
    $id: ID
    $title: String
    $content: String
    $price: Int
    $rating: Float
  ) {
    onDeleteMenu(
      id: $id
      title: $title
      content: $content
      price: $price
      rating: $rating
    ) {
      id
      name
      icon
    }
  }
`;
export const onCreateResource = /* GraphQL */ `
  subscription OnCreateResource($id: ID, $signup: String, $login: String) {
    onCreateResource(id: $id, signup: $signup, login: $login) {
      id
      signup
      login
    }
  }
`;
export const onUpdateResource = /* GraphQL */ `
  subscription OnUpdateResource($id: ID, $signup: String, $login: String) {
    onUpdateResource(id: $id, signup: $signup, login: $login) {
      id
      signup
      login
    }
  }
`;
export const onDeleteResource = /* GraphQL */ `
  subscription OnDeleteResource($id: ID, $signup: String, $login: String) {
    onDeleteResource(id: $id, signup: $signup, login: $login) {
      id
      signup
      login
    }
  }
`;
export const onCreateBanner = /* GraphQL */ `
  subscription OnCreateBanner(
    $id: ID
    $title: String
    $content: String
    $image: String
  ) {
    onCreateBanner(id: $id, title: $title, content: $content, image: $image) {
      id
      title
      content
      image
    }
  }
`;
export const onUpdateBanner = /* GraphQL */ `
  subscription OnUpdateBanner(
    $id: ID
    $title: String
    $content: String
    $image: String
  ) {
    onUpdateBanner(id: $id, title: $title, content: $content, image: $image) {
      id
      title
      content
      image
    }
  }
`;
export const onDeleteBanner = /* GraphQL */ `
  subscription OnDeleteBanner(
    $id: ID
    $title: String
    $content: String
    $image: String
  ) {
    onDeleteBanner(id: $id, title: $title, content: $content, image: $image) {
      id
      title
      content
      image
    }
  }
`;
