import React from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
// import {connect} from "react-redux";
// import {fetchSmurfs} from "../actions";


    const SmurfForm = ({values, status }) => {
        return (
            <>
            <h1>Want to add a smurf?</h1>
            <Form>
                <Field type="text" name="name" placeholder="Name..."/> 
                <Field type="text" name="age" placeholder="Age..."/>
                <Field type="text" name="height" placeholder="Height..."/>   
                <button type="submit">Submit!</button>
            </Form>
            </>
        )
    };


    const FormikSmurfForm = withFormik({
        mapPropsToValues({name, age, height}){
            return{
                name: name || "",
                age: age || "",
                height: height || "",
            };
        },
        handleSubmit(values, { setStatus }) {
            console.log("values", values);
            axios
              // values is our object with all our data on it.
                .post("http://localhost:3333/smurfs", values)
                .then(res => {
                setStatus(res.data);
                console.log(res);
            })
                .catch(err => console.log(err.response));
        }
    })(SmurfForm)


    export default FormikSmurfForm;
