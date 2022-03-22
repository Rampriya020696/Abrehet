import { FETCH_DATA, ROW_CLICK, CHANGE_DATA, SWITCH } from "./types";
import axios from 'axios';
import { API,graphqlOperation } from 'aws-amplify'
import { createProducts, updateProducts, deleteProducts, deleteOrder, updateOrder } from '../graphql/mutations'
import { listProducts,getProducts } from '../graphql/queries'
import { listOrders,getOrder } from '../graphql/queries'

export const queryData = (key = "", val = "") => async (dispatch) => {
  dispatch({ type: "query_data", payload: {[key]: val} });
};

const mapOrders = res2 => {
  return res2.data.listOrders.items.map(val=>{
    let obj = {};
    obj.name = val.name;
    obj.phone = val.phone;
    obj.city = val.city;
    obj.address = val.address;
    obj.Status = val.Status;
    obj.id = val.id
    let deconstruct = JSON.parse(val.Products);
    obj.total = deconstruct.total;
    obj.cart = '';
    deconstruct.cart.forEach(val => {
      obj.cart +=
        'title: ' +
        val.item.price +
        ' | quantity: ' +
        val.quantity +
        ' | id: ' +
        val.id + '\n';
    });
    return obj;
  });
}

export const fetchData = (key = "", val = "") => async (dispatch) => {
  let result;
  if(localStorage.getItem("type") === "Orders"){
    result = await API.graphql({query: listOrders});
    result = mapOrders(result);
  } else {
    result = await API.graphql({query: listProducts, variables:{filter: {category: {eq: localStorage.getItem("type")}}}});
    result = result.data.listProducts.items.map(val=>JSON.parse(val.content));
  }
  /*await result.forEach(async element => {
    let objDetails = element;
    delete objDetails.createdAt;
    delete objDetails.updatedAt;
    delete objDetails.total;
    delete objDetails.cart;
    objDetails["Status"] = "Ordered";
    await API.graphql({query:updateOrder,variables:{input:objDetails}});
  });*/
  console.log(result);
  dispatch({ type: FETCH_DATA, payload: {data: result} });
};

export const changeData = (obj={}) => async (dispatch) => {
  console.log(obj);
  let resp;
  let objDetails = {};
  let res;
  if(localStorage.getItem("type") === "Orders"){
    let toChange = await API.graphql(graphqlOperation(getOrder,{id:obj.id}));
    toChange = toChange.data.getOrder;
    delete toChange.usersOrdersId;
    delete toChange.updatedAt;
    delete toChange.createdAt;
    console.log(toChange);
    toChange.Status = obj.Status;
    toChange.name = obj.name;
    toChange.phone = obj.phone;
    toChange.city = obj.city;
    toChange.address = obj.address;
    console.log(toChange);
    res = await API.graphql(({query:updateOrder,variables:{input:toChange}}))
    console.log(res);
    resp = await API.graphql({query: listOrders});
    resp = mapOrders(resp);
  } else {
    objDetails.content = JSON.stringify(obj);
    objDetails.id = obj.id;
    objDetails.title = obj.title;
    if(obj.country) objDetails.country = obj.country;
    console.log(objDetails);
    let toChange= await API.graphql(graphqlOperation(getProducts,{id:obj.id}));
    console.log(toChange);
    objDetails._version = toChange._version;
    res = await API.graphql({query:updateProducts,variables:{input:objDetails}, authMode: "AMAZON_COGNITO_USER_POOLS"});
    console.log(res);
    resp = await API.graphql({query: listProducts, variables:{filter: {category: {eq: localStorage.getItem("type")}}}});
    resp = resp.data.listProducts.items.map(val=>JSON.parse(val.content));
  }
  dispatch({ type: ROW_CLICK, payload: res });
  dispatch({ type: FETCH_DATA, payload: {data: resp}  });

}

export const deleteData = (obj="") => async (dispatch) => {
  console.log(obj);
  console.log({id:obj.id});
  let resp;
  if(localStorage.getItem("type") === "Orders"){
    let toDelete = await API.graphql(graphqlOperation(getOrder,{id:obj.id}));
    console.log(toDelete);
    let res = await API.graphql(({query:deleteOrder,variables:{input:{id:toDelete.data.getOrder.id}}}))
    console.log(res);
    resp = await API.graphql({query: listOrders});
    resp = mapOrders(resp);
  } else {
    let toDelete = await API.graphql(graphqlOperation(getProducts,{id:obj.id}));
    console.log(toDelete);
    let res = await API.graphql(({query:deleteProducts,variables:{input:{id:toDelete.data.getProducts.id}}, authMode: "AMAZON_COGNITO_USER_POOLS"}))
    console.log(res);
    resp = await API.graphql({query: listProducts, variables:{filter: {category: {eq: localStorage.getItem("type")}}}});
    resp = resp.data.listProducts.items.map(val=>JSON.parse(val.content));
  }
  //dispatch({ type: ROW_CLICK, payload: res });"The variables input contains a field name 'title' that is not defined for input object type 'DeleteProductsInput' "
  dispatch({ type: FETCH_DATA, payload: {data: resp}  });
}

export const addData = (obj={}) => async (dispatch) => {
  console.log(obj);
  let objDetails = {}
  let resp;
  if(localStorage.getItem("type") === "Orders"){
    console.log("invalid action");
  } else {
    objDetails.content = JSON.stringify(obj);
    objDetails.id = obj.id;
    objDetails.title = obj.title;
    objDetails.category = localStorage.getItem("type");
    if(obj.country) objDetails.country = obj.country;
    console.log(objDetails);
    let res = await API.graphql({query:createProducts, variables:{input:objDetails}, authMode: "AMAZON_COGNITO_USER_POOLS"})
    console.log(res);
    resp = await API.graphql({query: listProducts, variables:{filter: {category: {eq: localStorage.getItem("type")}}}});
    resp = resp.data.listProducts.items.map(val=>JSON.parse(val.content));
  }
  dispatch({ type: ROW_CLICK, payload: {link:"/table", num:""} });
  dispatch({ type: FETCH_DATA, payload: {data: resp}  });
}

export const rowClick = (obj = {link:"/table", num:""}) => async(dispatch) =>{
  console.log(obj);
  if(obj.num !== -1){
    let result;
    if(localStorage.getItem("type") === "Orders"){
      result = await API.graphql({query: listOrders});
      result = mapOrders(result);
    } else {
      result = await API.graphql({query: listProducts, variables:{filter: {category: {eq: localStorage.getItem("type")}}}});
      result = result.data.listProducts.items.map(val=>JSON.parse(val.content));
    }
    console.log(result[obj.num]);
    dispatch({ type: FETCH_DATA, payload: {data: result[obj.num]} });
  }
  dispatch({ type: ROW_CLICK, payload: obj });
};

export const Switch = (val) => async(dispatch) =>{
  //console.log(JSON.parse(localStorage.getItem("ids")),localStorage.getItem("type"));
  if(val !== "Orders"){
    await localStorage.setItem("ids", JSON.stringify(["id","title","country","description","image","images","options","ratings","price","oldPrice","avgRating"]));
    await localStorage.setItem("type", val);
  } else {
    await localStorage.setItem("ids", JSON.stringify(['name', 'phone', 'city', 'address', 'Status', 'total', 'cart']));
    await localStorage.setItem("type", val);
  }
  window.location.reload();
  dispatch({ type: SWITCH, payload: val });
};