import axios from "axios";

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_REQUEST_SUCCESS';
const FETCH_FAILURE = "FETCH_REQUEST_FAILURE";

const initState = {
    products: [],
    loading: false,
    error: ''
}

function fetchRequest(){
    return {
        type: FETCH_REQUEST
    }
}

function fetchSuccess(data) {
    return {
        type: FETCH_SUCCESS,
        payload: data
    }
}

function fetchFailure(msg) {
    return {
        type: FETCH_FAILURE,
        payload: msg
    }
}

export default function reducer(state= initState,action) {
    switch(action.type) {
        case FETCH_REQUEST:
            return {
                state,
                loading: true
            }
        case FETCH_SUCCESS:
            return {
                state,
                products: action.payload,
                loading: false
            }
        case FETCH_FAILURE:
            return {
                state,
                error: action.payload
            }
        default:
            return {
                state
            }
    }
}

export function fetchByProductType(type) {
    const url = "http://makeup-api.herokuapp.com/api/v1/products.json";
    return (dispatch) => {
        dispatch(fetchRequest())
        axios.get(`${url}?product_type=${type}`).then(
            res => dispatch(fetchSuccess(res.data))
        ).catch(
            err => dispatch(fetchFailure(err))
        )
    }
}