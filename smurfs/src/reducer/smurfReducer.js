import {START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE,SHOW_SMURFS} from "../actions";
const initialState = {
    smurfs: [],
    isFetching: false,
    error:'',
    isPosting: false,
}
export const smurfReducer = (state=initialState, action) => {
    switch(action.type){
        case START_FETCHING:
            return {
                ...state,
                isFetching:true,
                error:""
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs:  action.payload,
                error:""
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching:false,
                error:action.payload
            }

        case SHOW_SMURFS:
            return{
                ...state,
                isFetching:false,
                error:'',
                smurfs:state.smurfs
            }
        // case POST_SMURF:
        //         return {
        //             ...state,
        //             isPosting:true,
        //             error:""
        
        //         }
        // case POST_SUCCESS:
        //         return {
        //             ...state,
        //             isPosting: false,
        //             smurfs: [...state.smurfs, action.payload],
        //             error:""
        //         }
        // case POST_FAILURE:
        //         return {
        //             ...state,
        //             isPosting:false,
        //             error:action.payload
        //         }
        default:
            return state
    }
}