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
        <div>
            {props.smurfs.map(smurf => (
                <div>
                    <p>{smurf.name}</p>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
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