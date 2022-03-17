import { FETCH_DATA, ROW_CLICK, CHANGE_DATA, SWITCH } from "./types";
import axios from 'axios';
import { API,graphqlOperation } from 'aws-amplify'
import { createProducts, updateProducts, deleteProducts } from '../graphql/mutations'
import { listProducts,getProducts } from '../graphql/queries'

export const queryData = (key = "", val = "") => async (dispatch) => {
  dispatch({ type: "query_data", payload: {[key]: val} });
};

export const fetchData = (key = "", val = "") => async (dispatch) => {

  let result = await API.graphql({query: listProducts})
  result = result.data.listProducts.items.map(val=>JSON.parse(val.content));
  console.log(result);
  dispatch({ type: FETCH_DATA, payload: {data: result} });
};

export const changeData = (obj={}) => async (dispatch) => {
  console.log(obj);
  let objDetails = {}
  objDetails.content = JSON.stringify(obj);
  objDetails.id = obj.id;
  objDetails.title = obj.title;
  if(obj.country) objDetails.country = obj.country;
  console.log(objDetails);
  let toChange= await API.graphql(graphqlOperation(getProducts,{id:obj.id}));
  console.log(toChange);
  objDetails._version = toChange._version;
  let res = await API.graphql({query:updateProducts,variables:{input:objDetails}, authMode: "AMAZON_COGNITO_USER_POOLS"});
  console.log(res);
  let resp = await API.graphql({query: listProducts})
  resp = resp.data.listProducts.items.map(val=>JSON.parse(val.content));
  dispatch({ type: ROW_CLICK, payload: res });
  dispatch({ type: FETCH_DATA, payload: {data: resp}  });

}

export const deleteData = (obj="") => async (dispatch) => {
  console.log({id:obj.id});
  let toDelete = await API.graphql(graphqlOperation(getProducts,{id:obj.id}));
  console.log(toDelete);
  let res = await API.graphql(({query:deleteProducts,variables:{input:{id:toDelete.data.getProducts.id}}, authMode: "AMAZON_COGNITO_USER_POOLS"}))
  console.log(res);
  let resp = await API.graphql({query: listProducts})
  resp = resp.data.listProducts.items.map(val=>JSON.parse(val.content));
  //dispatch({ type: ROW_CLICK, payload: res });"The variables input contains a field name 'title' that is not defined for input object type 'DeleteProductsInput' "
  dispatch({ type: FETCH_DATA, payload: {data: resp}  });
}

export const addData = (obj={}) => async (dispatch) => {
  console.log(obj);
  let objDetails = {}
  objDetails.content = JSON.stringify(obj);
  objDetails.id = obj.id;
  objDetails.title = obj.title;
  if(obj.country) objDetails.country = obj.country;
  let res = await API.graphql({query:createProducts, variables:{input:objDetails}, authMode: "AMAZON_COGNITO_USER_POOLS"})
  console.log(res);
  let resp = await API.graphql({query: listProducts})
  resp = resp.data.listProducts.items.map(val=>JSON.parse(val.content));
  dispatch({ type: ROW_CLICK, payload: {link:"/table", num:""} });
  dispatch({ type: FETCH_DATA, payload: {data: resp}  });
}

export const rowClick = (obj = {link:"/table", num:""}) => async(dispatch) =>{
  console.log(obj);
  if(obj.num !== -1){
    let result = await API.graphql({query: listProducts})
    result = result.data.listProducts.items.map(val=>JSON.parse(val.content));
    dispatch({ type: FETCH_DATA, payload: {data: result[obj.num]} });
  }
  dispatch({ type: ROW_CLICK, payload: obj });
};

export const Switch = (val) => async(dispatch) =>{
  console.log(val);
  console.log(JSON.parse(localStorage.getItem("ids")),localStorage.getItem("type"));
  await localStorage.setItem("ids", JSON.stringify(["id","title","country","description","image","images","options","ratings","price","oldPrice","avgRating"]));
  await localStorage.setItem("type", val);
  window.location.reload();
  dispatch({ type: SWITCH, payload: val });
};