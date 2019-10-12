import React,{useEffect} from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import {connect} from "react-redux";
import {fetchSmurfs} from "../actions";

    const SmurfForm = () => {
        return (
            <>
            <h1>Want to add a smurf?</h1>
            <Form >
                <Field type="text" name="name" placeholder="Name..."/> 
                <Field type="text" name="age" placeholder="Age..."/>
                <Field type="text" name="height" placeholder="Height..."/>   
                <button type="submit">Submit!</button>
            </Form>
            </>
        )
        }
    const FormikSmurfForm = withFormik({
        mapPropsToValues({name, age, height}){
            return{
                name: name || "",
                age: age || "",
                height: height || "",
            };
        },
        handleSubmit(values) {
            console.log("values", values);
            axios
              // values is our object with all our data on it.
                .post("http://localhost:3333/smurfs", values)
                .then(res => {
                
                console.log(res);
            })
                .catch(err => console.log(err.response));
        }
    })(SmurfForm)
// export default FormikSmurfForm


const mapStateToProps = state => {
    return {
        smurfs: state.smurf.smurfs,
        isFetching: state.smurf.isFetching,
        error: state.smurf.error
    }
}
export default connect(mapStateToProps, 
    {fetchSmurfs}
)(FormikSmurfForm);