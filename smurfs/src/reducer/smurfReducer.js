import {START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, POST_SMURF, POST_SUCCESS, POST_FAILURE, } from "../actions";
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

        case POST_SMURF:
                return {
                    ...state,
                    isPosting:true,
                    error:""
        
                }
        case POST_SUCCESS:
                return {
                    ...state,
                    isPosting: false,
                    smurfs: [...state.smurfs, action.payload],
                    error:""
                }
        case POST_FAILURE:
                return {
                    ...state,
                    isPosting:false,
                    error:action.payload
                }
        default:
            return state
    }
}