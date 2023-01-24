/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type PaymentInput = {
  amount?: number | null,
  total?: number | null,
  name?: string | null,
  email?: string | null,
};

export type PaymentResult = {
  __typename: "PaymentResult",
  statusCode?: number | null,
  body?: string | null,
};

export type CreateProductsInput = {
  id?: string | null,
  title: string,
  category: string,
  content: string,
  country?: string | null,
  categories?: Array< ModelIDInput | null > | null,
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

export type ModelProductsConditionInput = {
  title?: ModelStringInput | null,
  category?: ModelStringInput | null,
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

export type Products = {
  __typename: "Products",
  id: string,
  title: string,
  category: string,
  content: string,
  country?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductsInput = {
  id: string,
  title?: string | null,
  category?: string | null,
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
  orders?: ModelOrderConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type Order = {
  __typename: "Order",
  userID?: string | null,
  phone?: string | null,
  name?: string | null,
  address?: string | null,
  city?: string | null,
  senderAddress?: string | null,
  isSender?: boolean | null,
  Products?: string | null,
  Status?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  usersOrdersId?: string | null,
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

export type CreateOrderInput = {
  userID?: string | null,
  phone?: string | null,
  name?: string | null,
  address?: string | null,
  city?: string | null,
  senderAddress?: string | null,
  isSender?: boolean | null,
  Products?: string | null,
  Status?: string | null,
  id?: string | null,
  usersOrdersId?: string | null,
};

export type ModelOrderConditionInput = {
  userID?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  city?: ModelStringInput | null,
  isSender?: ModelBooleanInput | null,
  senderAddress?: ModelStringInput | null,
  Products?: ModelStringInput | null,
  Status?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
  usersOrdersId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateOrderInput = {
  userID?: string | null,
  phone?: string | null,
  name?: string | null,
  address?: string | null,
  city?: string | null,
  Products?: string | null,
  Status?: string | null,
  id: string,
  usersOrdersId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateMenuTypeInput = {
  id: string,
  name?: string | null,
  icon?: string | null,
};

export type MenuType = {
  __typename: "MenuType",
  id: string,
  name?: string | null,
  icon?: string | null,
};

export type UpdateMenuTypeInput = {
  id: string,
  name: string,
  icon?: string | null,
};

export type DeleteMenuTypeInput = {
  id: string,
  name: string,
};

export type CreateMyCustomTypeInput = {
  title: string,
  content: string,
  price?: number | null,
  rating?: number | null,
};

export type MyCustomType = {
  __typename: "MyCustomType",
  id: string,
  title: string,
  content: string,
  price?: number | null,
  rating?: number | null,
};

export type UpdateMyCustomTypeInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  price?: number | null,
  rating?: number | null,
};

export type DeleteMyCustomTypeInput = {
  id: string,
};

export type CreateMenuInput = {
  title: string,
  content: string,
  price?: number | null,
  rating?: number | null,
  des?: string | null,
};

export type Menu = {
  __typename: "Menu",
  id: string,
  name: string,
  icon?: string | null,
  des?: string | null,
};

export type UpdateMenuInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  price?: number | null,
  rating?: number | null,
};

export type DeleteMenuInput = {
  id: string,
};

export type CreateResourceInput = {
  signup: string,
  login: string,
};

export type Resource = {
  __typename: "Resource",
  id: string,
  signup: string,
  login: string,
};

export type UpdateResourceInput = {
  id: string,
  signup?: string | null,
  login?: string | null,
};

export type DeleteResourceInput = {
  id: string,
};

export type CreateBannerInput = {
  title?: string | null,
  content?: string | null,
  image?: string | null,
};

export type Banner = {
  __typename: "Banner",
  id: string,
  title?: string | null,
  content?: string | null,
  image?: string | null,
};

export type UpdateBannerInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  image?: string | null,
};

export type DeleteBannerInput = {
  id: string,
};

export type CreateOnBoardingInput = {
  title: string,
  image: string,
  subtitle: string,
  backgroundColor?: string | null,
};

export type OnBoarding = {
  __typename: "OnBoarding",
  id: string,
  title: string,
  image: string,
  subtitle: string,
  backgroundColor?: string | null,
};

export type UpdateOnBoardingInput = {
  id: string,
  title?: string | null,
  image?: string | null,
  subtitle?: string | null,
  backgroundColor?: string | null,
};

export type DeleteOnBoardingInput = {
  id: string,
};

export type ModelProductsFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  category?: ModelStringInput | null,
  categories?: ModelIDInput | null,
  content?: ModelStringInput | null,
  country?: ModelStringInput | null,
  and?: Array< ModelProductsFilterInput | null > | null,
  or?: Array< ModelProductsFilterInput | null > | null,
  not?: ModelProductsFilterInput | null,
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

export type ModelOrderFilterInput = {
  userID?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  city?: ModelStringInput | null,
  Products?: ModelStringInput | null,
  Status?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
  usersOrdersId?: ModelIDInput | null,
};

export type TableMenuTypeFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  icon?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
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
};

export type TableStringFilterInput = {
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
};

export type MenuTypeConnection = {
  __typename: "MenuTypeConnection",
  items?:  Array<MenuType | null > | null,
  nextToken?: string | null,
};

export type TableMyCustomTypeFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
  content?: TableStringFilterInput | null,
  price?: TableIntFilterInput | null,
  rating?: TableFloatFilterInput | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type TableFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type MyCustomTypeConnection = {
  __typename: "MyCustomTypeConnection",
  items?:  Array<MyCustomType | null > | null,
  nextToken?: string | null,
};

export type TableMenuFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
  content?: TableStringFilterInput | null,
  price?: TableIntFilterInput | null,
  rating?: TableFloatFilterInput | null,
};

export type MenuConnection = {
  __typename: "MenuConnection",
  items?:  Array<Menu | null > | null,
  nextToken?: string | null,
};

export type TableResourceFilterInput = {
  id?: TableIDFilterInput | null,
  signup?: TableStringFilterInput | null,
  login?: TableStringFilterInput | null,
};

export type ResourceConnection = {
  __typename: "ResourceConnection",
  items?:  Array<Resource | null > | null,
  nextToken?: string | null,
};

export type TableBannerFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
  content?: TableStringFilterInput | null,
  image?: TableStringFilterInput | null,
};

export type BannerConnection = {
  __typename: "BannerConnection",
  items?:  Array<Banner | null > | null,
  nextToken?: string | null,
};

export type TableOnBoardingFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
  image?: TableStringFilterInput | null,
  subtitle?: TableStringFilterInput | null,
  backgroundColor?: TableStringFilterInput | null,
};

export type OnBoardingConnection = {
  __typename: "OnBoardingConnection",
  items?:  Array<OnBoarding | null > | null,
  nextToken?: string | null,
};

export type CreatePaymentMutationVariables = {
  input?: PaymentInput | null,
};

export type CreatePaymentMutation = {
  createPayment?:  {
    __typename: "PaymentResult",
    statusCode?: number | null,
    body?: string | null,
  } | null,
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
    category: string,
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
    category: string,
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
    category: string,
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
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
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
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
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
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    userID?: string | null,
    phone?: string | null,
    name?: string | null,
    address?: string | null,
    city?: string | null,
    senderAddress?: string | null,
    isSender?: boolean | null,
    Products?: string | null,
    Status?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    usersOrdersId?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    userID?: string | null,
    phone?: string | null,
    name?: string | null,
    address?: string | null,
    city?: string | null,
    senderAddress?: string | null,
    isSender?: boolean | null,
    Products?: string | null,
    Status?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    usersOrdersId?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    userID?: string | null,
    phone?: string | null,
    name?: string | null,
    address?: string | null,
    city?: string | null,
    senderAddress?: string | null,
    isSender?: boolean | null,
    Products?: string | null,
    Status?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    usersOrdersId?: string | null,
  } | null,
};

export type CreateMenuTypeMutationVariables = {
  input: CreateMenuTypeInput,
};

export type CreateMenuTypeMutation = {
  createMenuType?:  {
    __typename: "MenuType",
    id: string,
    name?: string | null,
    icon?: string | null,
  } | null,
};

export type UpdateMenuTypeMutationVariables = {
  input: UpdateMenuTypeInput,
};

export type UpdateMenuTypeMutation = {
  updateMenuType?:  {
    __typename: "MenuType",
    id: string,
    name?: string | null,
    icon?: string | null,
  } | null,
};

export type DeleteMenuTypeMutationVariables = {
  input: DeleteMenuTypeInput,
};

export type DeleteMenuTypeMutation = {
  deleteMenuType?:  {
    __typename: "MenuType",
    id: string,
    name?: string | null,
    icon?: string | null,
  } | null,
};

export type CreateMyCustomTypeMutationVariables = {
  input: CreateMyCustomTypeInput,
};

export type CreateMyCustomTypeMutation = {
  createMyCustomType?:  {
    __typename: "MyCustomType",
    id: string,
    title: string,
    content: string,
    price?: number | null,
    rating?: number | null,
  } | null,
};

export type UpdateMyCustomTypeMutationVariables = {
  input: UpdateMyCustomTypeInput,
};

export type UpdateMyCustomTypeMutation = {
  updateMyCustomType?:  {
    __typename: "MyCustomType",
    id: string,
    title: string,
    content: string,
    price?: number | null,
    rating?: number | null,
  } | null,
};

export type DeleteMyCustomTypeMutationVariables = {
  input: DeleteMyCustomTypeInput,
};

export type DeleteMyCustomTypeMutation = {
  deleteMyCustomType?:  {
    __typename: "MyCustomType",
    id: string,
    title: string,
    content: string,
    price?: number | null,
    rating?: number | null,
  } | null,
};

export type CreateMenuMutationVariables = {
  input: CreateMenuInput,
};

export type CreateMenuMutation = {
  createMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    icon?: string | null,
    des?: string | null,
  } | null,
};

export type UpdateMenuMutationVariables = {
  input: UpdateMenuInput,
};

export type UpdateMenuMutation = {
  updateMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    icon?: string | null,
    des?: string | null,
  } | null,
};

export type DeleteMenuMutationVariables = {
  input: DeleteMenuInput,
};

export type DeleteMenuMutation = {
  deleteMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    icon?: string | null,
    des?: string | null,
  } | null,
};

export type CreateResourceMutationVariables = {
  input: CreateResourceInput,
};

export type CreateResourceMutation = {
  createResource?:  {
    __typename: "Resource",
    id: string,
    signup: string,
    login: string,
  } | null,
};

export type UpdateResourceMutationVariables = {
  input: UpdateResourceInput,
};

export type UpdateResourceMutation = {
  updateResource?:  {
    __typename: "Resource",
    id: string,
    signup: string,
    login: string,
  } | null,
};

export type DeleteResourceMutationVariables = {
  input: DeleteResourceInput,
};

export type DeleteResourceMutation = {
  deleteResource?:  {
    __typename: "Resource",
    id: string,
    signup: string,
    login: string,
  } | null,
};

export type CreateBannerMutationVariables = {
  input: CreateBannerInput,
};

export type CreateBannerMutation = {
  createBanner?:  {
    __typename: "Banner",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
  } | null,
};

export type UpdateBannerMutationVariables = {
  input: UpdateBannerInput,
};

export type UpdateBannerMutation = {
  updateBanner?:  {
    __typename: "Banner",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
  } | null,
};

export type DeleteBannerMutationVariables = {
  input: DeleteBannerInput,
};

export type DeleteBannerMutation = {
  deleteBanner?:  {
    __typename: "Banner",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
  } | null,
};

export type CreateOnBoardingMutationVariables = {
  input: CreateOnBoardingInput,
};

export type CreateOnBoardingMutation = {
  createOnBoarding?:  {
    __typename: "OnBoarding",
    id: string,
    title: string,
    image: string,
    subtitle: string,
    backgroundColor?: string | null,
  } | null,
};

export type UpdateOnBoardingMutationVariables = {
  input: UpdateOnBoardingInput,
};

export type UpdateOnBoardingMutation = {
  updateOnBoarding?:  {
    __typename: "OnBoarding",
    id: string,
    title: string,
    image: string,
    subtitle: string,
    backgroundColor?: string | null,
  } | null,
};

export type DeleteOnBoardingMutationVariables = {
  input: DeleteOnBoardingInput,
};

export type DeleteOnBoardingMutation = {
  deleteOnBoarding?:  {
    __typename: "OnBoarding",
    id: string,
    title: string,
    image: string,
    subtitle: string,
    backgroundColor?: string | null,
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
    category: string,
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
      category: string,
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
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
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

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    userID?: string | null,
    phone?: string | null,
    name?: string | null,
    address?: string | null,
    city?: string | null,
    senderAddress?: string | null,
    isSender?: boolean | null,
    Products?: string | null,
    Status?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    usersOrdersId?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      userID?: string | null,
      phone?: string | null,
      name?: string | null,
      address?: string | null,
      city?: string | null,
      senderAddress?: string | null,
      isSender?: boolean | null,
      Products?: string | null,
      Status?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      usersOrdersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMenuTypeQueryVariables = {
  id: string,
  name: string,
};

export type GetMenuTypeQuery = {
  getMenuType?:  {
    __typename: "MenuType",
    id: string,
    name?: string | null,
    icon?: string | null,
  } | null,
};

export type ListMenuTypesQueryVariables = {
  filter?: TableMenuTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenuTypesQuery = {
  listMenuTypes?:  {
    __typename: "MenuTypeConnection",
    items?:  Array< {
      __typename: "MenuType",
      id: string,
      name?: string | null,
      icon?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMyCustomTypeQueryVariables = {
  id: string,
};

export type GetMyCustomTypeQuery = {
  getMyCustomType?:  {
    __typename: "MyCustomType",
    id: string,
    title: string,
    content: string,
    price?: number | null,
    rating?: number | null,
  } | null,
};

export type ListMyCustomTypesQueryVariables = {
  filter?: TableMyCustomTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMyCustomTypesQuery = {
  listMyCustomTypes?:  {
    __typename: "MyCustomTypeConnection",
    items?:  Array< {
      __typename: "MyCustomType",
      id: string,
      title: string,
      content: string,
      price?: number | null,
      rating?: number | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMenuQueryVariables = {
  id: string,
};

export type GetMenuQuery = {
  getMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    icon?: string | null,
    des?: string | null,
  } | null,
};

export type ListMenusQueryVariables = {
  filter?: TableMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenusQuery = {
  listMenus?:  {
    __typename: "MenuConnection",
    items?:  Array< {
      __typename: "Menu",
      id: string,
      name: string,
      icon?: string | null,
      des?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetResourceQueryVariables = {
  id: string,
};

export type GetResourceQuery = {
  getResource?:  {
    __typename: "Resource",
    id: string,
    signup: string,
    login: string,
  } | null,
};

export type ListResourcesQueryVariables = {
  filter?: TableResourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourcesQuery = {
  listResources?:  {
    __typename: "ResourceConnection",
    items?:  Array< {
      __typename: "Resource",
      id: string,
      signup: string,
      login: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetBannerQueryVariables = {
  id: string,
};

export type GetBannerQuery = {
  getBanner?:  {
    __typename: "Banner",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
  } | null,
};

export type ListBannersQueryVariables = {
  filter?: TableBannerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBannersQuery = {
  listBanners?:  {
    __typename: "BannerConnection",
    items?:  Array< {
      __typename: "Banner",
      id: string,
      title?: string | null,
      content?: string | null,
      image?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetOnBoardingQueryVariables = {
  id: string,
};

export type GetOnBoardingQuery = {
  getOnBoarding?:  {
    __typename: "OnBoarding",
    id: string,
    title: string,
    image: string,
    subtitle: string,
    backgroundColor?: string | null,
  } | null,
};

export type ListOnBoardingsQueryVariables = {
  filter?: TableOnBoardingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOnBoardingsQuery = {
  listOnBoardings?:  {
    __typename: "OnBoardingConnection",
    items?:  Array< {
      __typename: "OnBoarding",
      id: string,
      title: string,
      image: string,
      subtitle: string,
      backgroundColor?: string | null,
    } | null > | null,
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
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
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
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
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
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    userID?: string | null,
    phone?: string | null,
    name?: string | null,
    address?: string | null,
    city?: string | null,
    senderAddress?: string | null,
    isSender?: boolean | null,
    Products?: string | null,
    Status?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    usersOrdersId?: string | null,
  } | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    userID?: string | null,
    phone?: string | null,
    name?: string | null,
    address?: string | null,
    city?: string | null,
    senderAddress?: string | null,
    isSender?: boolean | null,
    Products?: string | null,
    Status?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    usersOrdersId?: string | null,
  } | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    userID?: string | null,
    phone?: string | null,
    name?: string | null,
    address?: string | null,
    city?: string | null,
    senderAddress?: string | null,
    isSender?: boolean | null,
    Products?: string | null,
    Status?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    usersOrdersId?: string | null,
  } | null,
};

export type OnCreateMenuTypeSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  icon?: string | null,
};

export type OnCreateMenuTypeSubscription = {
  onCreateMenuType?:  {
    __typename: "MenuType",
    id: string,
    name?: string | null,
    icon?: string | null,
  } | null,
};

export type OnUpdateMenuTypeSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  icon?: string | null,
};

export type OnUpdateMenuTypeSubscription = {
  onUpdateMenuType?:  {
    __typename: "MenuType",
    id: string,
    name?: string | null,
    icon?: string | null,
  } | null,
};

export type OnDeleteMenuTypeSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  icon?: string | null,
};

export type OnDeleteMenuTypeSubscription = {
  onDeleteMenuType?:  {
    __typename: "MenuType",
    id: string,
    name?: string | null,
    icon?: string | null,
  } | null,
};

export type OnCreateMyCustomTypeSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  price?: number | null,
  rating?: number | null,
};

export type OnCreateMyCustomTypeSubscription = {
  onCreateMyCustomType?:  {
    __typename: "MyCustomType",
    id: string,
    title: string,
    content: string,
    price?: number | null,
    rating?: number | null,
  } | null,
};

export type OnUpdateMyCustomTypeSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  price?: number | null,
  rating?: number | null,
};

export type OnUpdateMyCustomTypeSubscription = {
  onUpdateMyCustomType?:  {
    __typename: "MyCustomType",
    id: string,
    title: string,
    content: string,
    price?: number | null,
    rating?: number | null,
  } | null,
};

export type OnDeleteMyCustomTypeSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  price?: number | null,
  rating?: number | null,
};

export type OnDeleteMyCustomTypeSubscription = {
  onDeleteMyCustomType?:  {
    __typename: "MyCustomType",
    id: string,
    title: string,
    content: string,
    price?: number | null,
    rating?: number | null,
  } | null,
};

export type OnCreateMenuSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  price?: number | null,
  rating?: number | null,
};

export type OnCreateMenuSubscription = {
  onCreateMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    icon?: string | null,
    des?: string | null,
  } | null,
};

export type OnUpdateMenuSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  price?: number | null,
  rating?: number | null,
};

export type OnUpdateMenuSubscription = {
  onUpdateMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    icon?: string | null,
    des?: string | null,
  } | null,
};

export type OnDeleteMenuSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  price?: number | null,
  rating?: number | null,
};

export type OnDeleteMenuSubscription = {
  onDeleteMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    icon?: string | null,
    des?: string | null,
  } | null,
};

export type OnCreateResourceSubscriptionVariables = {
  id?: string | null,
  signup?: string | null,
  login?: string | null,
};

export type OnCreateResourceSubscription = {
  onCreateResource?:  {
    __typename: "Resource",
    id: string,
    signup: string,
    login: string,
  } | null,
};

export type OnUpdateResourceSubscriptionVariables = {
  id?: string | null,
  signup?: string | null,
  login?: string | null,
};

export type OnUpdateResourceSubscription = {
  onUpdateResource?:  {
    __typename: "Resource",
    id: string,
    signup: string,
    login: string,
  } | null,
};

export type OnDeleteResourceSubscriptionVariables = {
  id?: string | null,
  signup?: string | null,
  login?: string | null,
};

export type OnDeleteResourceSubscription = {
  onDeleteResource?:  {
    __typename: "Resource",
    id: string,
    signup: string,
    login: string,
  } | null,
};

export type OnCreateBannerSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  image?: string | null,
};

export type OnCreateBannerSubscription = {
  onCreateBanner?:  {
    __typename: "Banner",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
  } | null,
};

export type OnUpdateBannerSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  image?: string | null,
};

export type OnUpdateBannerSubscription = {
  onUpdateBanner?:  {
    __typename: "Banner",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
  } | null,
};

export type OnDeleteBannerSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  image?: string | null,
};

export type OnDeleteBannerSubscription = {
  onDeleteBanner?:  {
    __typename: "Banner",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
  } | null,
};

export type OnCreateOnBoardingSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  image?: string | null,
  subtitle?: string | null,
  backgroundColor?: string | null,
};

export type OnCreateOnBoardingSubscription = {
  onCreateOnBoarding?:  {
    __typename: "OnBoarding",
    id: string,
    title: string,
    image: string,
    subtitle: string,
    backgroundColor?: string | null,
  } | null,
};

export type OnUpdateOnBoardingSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  image?: string | null,
  subtitle?: string | null,
  backgroundColor?: string | null,
};

export type OnUpdateOnBoardingSubscription = {
  onUpdateOnBoarding?:  {
    __typename: "OnBoarding",
    id: string,
    title: string,
    image: string,
    subtitle: string,
    backgroundColor?: string | null,
  } | null,
};

export type OnDeleteOnBoardingSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  image?: string | null,
  subtitle?: string | null,
  backgroundColor?: string | null,
};

export type OnDeleteOnBoardingSubscription = {
  onDeleteOnBoarding?:  {
    __typename: "OnBoarding",
    id: string,
    title: string,
    image: string,
    subtitle: string,
    backgroundColor?: string | null,
  } | null,
};
