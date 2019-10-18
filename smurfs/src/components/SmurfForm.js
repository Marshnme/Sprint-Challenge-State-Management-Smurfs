import React,{useState, useEffect} from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import {connect} from "react-redux";
import {postSmurf} from "../actions";

    const SmurfForm = (props) => {
    console.log("props",props);
        const [form, setForm] = useState({name:"", age: "", height:""});


    const handleChanges = e =>  {   
        setForm({...form, [e.target.name]: e.target.value})
            
                
        };

            const onSubmit = e => {
                e.preventDefault();
                props.postSmurf(form);
            }


        return (
            <>
            <h1>Want to add a smurf?</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" onChange={handleChanges} value={form.name} placeholder="Name..."/> 
                <input type="text" name="age" onChange={handleChanges} value={form.age} placeholder="Age..."/>
                <input type="text" name="height" onChange={handleChanges} value={form.height} placeholder="Height..."/>   
                <button type="submit">Submit!</button>
            </form>
            </>
        )
        }
    


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
)(SmurfForm);