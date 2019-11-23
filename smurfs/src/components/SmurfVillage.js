import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchSmurfs} from "../actions";
import Smurf from "./Smurf";
const SmurfVillage = props => {
    console.log("village props", props)
    useEffect( () => {
        props.fetchSmurfs();
    },[])
    if(props.isFetching){
        return <h2>Loading...</h2>
    }
    return (
        <>
        <Smurf />
        </>
    )
}
const mapStateToProps = state => {
    return {
        smurfs: state.smurf.smurfs,
        isFetching: state.smurf.isFetching,
        error: state.smurf.error
    }
}
export default connect(mapStateToProps, 
    {fetchSmurfs}
)(SmurfVillage);