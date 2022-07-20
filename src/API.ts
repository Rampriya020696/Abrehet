/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductsInput = {
  id?: string | null,
  title: string,
  content: string,
  country?: string | null,
};

export type ModelProductsConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  country?: ModelStringInput | null,
  and?: Array< ModelProductsConditionInput | null > | null,
  or?: Array< ModelProductsConditionInput | null > | null,
  not?: ModelProductsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Products = {
  __typename: "Products",
  id: string,
  title: string,
  content: string,
  country?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductsInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  country?: string | null,
};

export type DeleteProductsInput = {
  id: string,
};

export type CreateUsersInput = {
  email: string,
  phone?: string | null,
  name?: string | null,
  address?: string | null,
  other?: string | null,
  id?: string | null,
};

export type ModelUsersConditionInput = {
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  other?: ModelStringInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
};

export type Users = {
  __typename: "Users",
  email: string,
  phone?: string | null,
  name?: string | null,
  address?: string | null,
  other?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUsersInput = {
  email?: string | null,
  phone?: string | null,
  name?: string | null,
  address?: string | null,
  other?: string | null,
  id: string,
};

export type DeleteUsersInput = {
  id: string,
};

export type ModelProductsFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  country?: ModelStringInput | null,
  and?: Array< ModelProductsFilterInput | null > | null,
  or?: Array< ModelProductsFilterInput | null > | null,
  not?: ModelProductsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProductsConnection = {
  __typename: "ModelProductsConnection",
  items:  Array<Products | null >,
  nextToken?: string | null,
};

export type ModelUsersFilterInput = {
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  other?: ModelStringInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
};

export type CreateProductsMutationVariables = {
  input: CreateProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type CreateProductsMutation = {
  createProducts?:  {
    __typename: "Products",
    id: string,
    title: string,
    content: string,
    country?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductsMutationVariables = {
  input: UpdateProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type UpdateProductsMutation = {
  updateProducts?:  {
    __typename: "Products",
    id: string,
    title: string,
    content: string,
    country?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductsMutationVariables = {
  input: DeleteProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type DeleteProductsMutation = {
  deleteProducts?:  {
    __typename: "Products",
    id: string,
    title: string,
    content: string,
    country?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    email: string,
    phone?: string | null,
    name?: string | null,
    address?: string | null,
    other?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    email: string,
    phone?: string | null,
    name?: string | null,
    address?: string | null,
    other?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    email: string,
    phone?: string | null,
    name?: string | null,
    address?: string | null,
    other?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProductsQueryVariables = {
  id: string,
};

export type GetProductsQuery = {
  getProducts?:  {
    __typename: "Products",
    id: string,
    title: string,
    content: string,
    country?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductsConnection",
    items:  Array< {
      __typename: "Products",
      id: string,
      title: string,
      content: string,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUsersQueryVariables = {
  id: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    email: string,
    phone?: string | null,
    name?: string | null,
    address?: string | null,
    other?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      email: string,
      phone?: string | null,
      name?: string | null,
      address?: string | null,
      other?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    email: string,
    phone?: string | null,
    name?: string | null,
    address?: string | null,
    other?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    email: string,
    phone?: string | null,
    name?: string | null,
    address?: string | null,
    other?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    email: string,
    phone?: string | null,
    name?: string | null,
    address?: string | null,
    other?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
