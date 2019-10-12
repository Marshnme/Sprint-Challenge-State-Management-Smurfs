import React from "react";
import {connect} from "react-redux";





 const Smurf = (props) => {
    return(
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
    {}
)(Smurf);
