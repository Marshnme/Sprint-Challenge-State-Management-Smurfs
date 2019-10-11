import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchSmurfs} from "../actions";


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
        <div className="smurf-holder">
            {props.smurfs.map(smurf => (
                <div className="spec-smurf" key={smurf.id}>
                    <p>Name: {smurf.name}</p>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                </div>
            ))}
        </div>
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