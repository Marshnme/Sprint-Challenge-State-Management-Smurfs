import axios from "axios";
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchSmurfs = () => dispatch => {
    dispatch({type:START_FETCHING});
        axios
            .get("http://localhost:3333/smurfs")
            .then(res =>{
                console.log(res);
                dispatch({type:FETCH_SUCCESS, payload:res.data})
            })
            .catch(err => dispatch({type: FETCH_FAILURE, payload: err.response}));
}
// export const SHOW_SMURFS = "SHOW_SMURFS";
// export const showSmurfs = () => dispatch => {
//     dispatch({TYPE:SHOW_SMURFS});

// }
export const POST_SMURF = 'START_POSTING';
export const POST_SUCCESS = 'FETCH_SUCCESS';
export const POST_FAILURE = 'FETCH_FAILURE';

export const postSmurf = (value) => dispatch =>{
    console.log("post value",value)
    dispatch({type:POST_SMURF});
        axios
            .post("http://localhost:3333/smurfs", value)
            .then(res => {
                console.log("post res",res)
                dispatch({type:POST_SUCCESS, payload:res.data})
                
            })
            .catch(err => dispatch ({type: POST_FAILURE, payload: err.repsponse}));
}