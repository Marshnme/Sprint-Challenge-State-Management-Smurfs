import axios from "axios";
import {values} from "../components/SmurfForm";


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


export const SHOW_SMURFS = "SHOW_SMURFS";

export const showSmurfs = () => dispatch => {
    dispatch({TYPE:SHOW_SMURFS});

}





export const POST_SMURF = 'START_FETCHING';
export const POST_SUCCESS = 'FETCH_SUCCESS';
export const POST_FAILURE = 'FETCH_FAILURE';

// export const postSmurf = () => dispatch =>{
//     dispatch({POST_SMURF});
//         axios
//     // values is our object with all our data on it.
//             .post("http://localhost:3333/smurfs", values)
//             .then(res => {
//                 dispatch({type:POST_SUCCESS, payload:values})
//                 console.log(res);
//             })
//             .catch(err => dispatch ({type: POST_FAILURE, payload: err.repsponse}));
// }