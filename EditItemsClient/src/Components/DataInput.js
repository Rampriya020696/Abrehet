import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Dropdown } from 'semantic-ui-react';
import 'react-widgets/dist/css/react-widgets.css';

console.log(localStorage.getItem("ids"));

const DropdownExampleSearchSelection = props => (
    <Dropdown
      selection {...props.input}
      value={props.input.value}
      onChange={(param,data) => {props.input.onChange(data.value)}}
      placeholder={props.label} 
      options={JSON.parse(localStorage.getItem("ids")).map((id) => {
        return { key: id, value: id, text:id};
    })}
    />
  )

let DataInput = (props) => {
  const { pristine, reset, submitting } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const handleChange = (event) => {
    //event.preventDefault();
    //console.log('Submitted!');
    //console.log(props.form.data.values.value);
    //props.queryData(props.form.data.values.key,props.form.data.values.value);
    //console.log(props.form.data.values.key+","+props.form.data.values.value);
  }

  return (
    <div style={{margin: "10px 10px 10px 10px"}}>
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="field" style={{width:"50%"}}>
            <Field
            name="key"
            component={DropdownExampleSearchSelection}
            label="key"
          />
            </div>

            <div className="field" style={{width:"50%"}}>
            <Field
            name="value"
            component="input"
            type="text"
            placeholder="value"
            onChange={handleChange}
          />
            </div>
        <button className="ui button" type="reset" onClick={async () => {
            //reset();
            //props.fetchData("","");
            //console.log(props);
            await props.rowClick({ link: "/add", num: -1});
            reset();
            }}>
          Add item
        </button>
        <button className="ui button" type="reset" onClick={async () => {
            //reset();
            //props.fetchData("","");
            //console.log(props);
            if(localStorage.getItem("type") === 'orders'){
              await props.Switch('products');
            } else {
              await props.Switch('orders');
            }
            reset();
            }}>
          Switch to {localStorage.getItem("type")}
        </button>
        </form>
    </div>
  );
};

function mapStateToProps({form}) {
    return {form};
  }

DataInput=connect(mapStateToProps, actions)(DataInput);

export default reduxForm({
    form: 'data' // a unique identifier for this form
  })(DataInput)