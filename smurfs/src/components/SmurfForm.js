import React,{useState, useEffect} from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import {connect} from "react-redux";
import {postSmurf} from "../actions";

    const SmurfForm = (props) => {
    console.log("props",props);
        const [form, setForm] = useState({name:"",age:"",height:""});

       

        // useEffect(() => {
        //     status && setForm(form => [...form, status]);
        // }, [status]);

    // const handleChanges = e =>  {   
    //     setForm({...form, [e.target.name]: e.target.value})
            
                
    //     };

            // const onSubmit = e => {
            //     e.preventDefault();
            //     setForm(props.values)
            //     props.postSmurf(form);
            // }

            // onSubmit={onSubmit}
        return (
            <>
            <h1>Want to add a smurf?</h1>
            <Form >
                <Field type="text" name="name" placeholder="Name..."/> 
                <Field type="text" name="age"  placeholder="Age..."/>
                <Field type="text" name="height" placeholder="Height..."/>   
                <button type="submit">Submit!</button>
            </Form>
            </>
        )
        }
        // <Field type="text" name="name" onChange={handleChanges} value={form.name} placeholder="Name..."/> 
        // <Field type="text" name="age" onChange={handleChanges} value={form.age} placeholder="Age..."/>
        // <Field type="text" name="height" onChange={handleChanges} value={form.height} placeholder="Height..."/>


        const FormikSmurfForm = withFormik({
            
            mapPropsToValues({name,age,height,postSmurf}){
                return {
                    name: name || "",
                    age: age || "",
                    height: height || "",
                    postSmurf: postSmurf
                }
            },
            handleSubmit(values,props){
                
                console.log(" HNDL props",props)
                console.log(" HNDL values",values)
                values.postSmurf({name:values.name,age:values.age,height:values.height} )
            }
        })(SmurfForm)

const mapStateToProps = state => {
    return {
        smurfs: state.smurf.smurfs,
        isFetching: state.smurf.isFetching,
        error: state.smurf.error,
        isPosting: state.smurf.isPosting

    }
}
export default connect(mapStateToProps, 
    {postSmurf}
)(FormikSmurfForm);