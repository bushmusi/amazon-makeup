import axios from 'axios';

const CATEGORY_REQUEST = 'CATEGORY_REQUEST';
const CATEGORY_SUCCESS = 'CATEGORY_SUCCESS';
const CATEGORY_FAILURE = 'CATEGORY_FAILURE';
const CATEGORY_FILTER = 'CATEGORY_FILTER';

const initState = {
  category: {
    blush: 78,
    bronzer: 69,
    eyebrow: 49,
    eyeliner: 148,
    foundation: 166,
    lip_liner: 29,
    lipstick: 154,
    nail_polish: 60,
  },
  loading: false,
  error: '',
};
function catRequest() {
  return {
    type: CATEGORY_REQUEST,
  };
}

function catSuccess(res) {
  const catObj = {
    blush: 0,
    bronzer: 0,
    eyebrow: 0,
    eyeliner: 0,
    foundation: 0,
    lip_liner: 0,
    lipstick: 0,
    nail_polish: 0,
  };
  res.map((item) => {
    if (item.product_type in catObj) {
      const num = +catObj[item.product_type];
      catObj[item.product_type] = num + 1;
    }
    return item;
  });
  return {
    type: CATEGORY_SUCCESS,
    payload: catObj,
  };
}

function catFailure(err) {
  return {
    type: CATEGORY_FAILURE,
    payload: err,
  };
}

export function catFilter(data) {
  return {
    type: CATEGORY_FILTER,
    payload: data,
  };
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload,
      };
    case CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CATEGORY_FILTER:
      return {
        ...state,
        loading: false,
        category: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export function getCategoryData() {
  const url = 'https://makeup-api.herokuapp.com/api/v1/products.json';
  return (dispatch) => {
    dispatch(catRequest());
    axios.get(url).then(
      (res) => {
        dispatch(catSuccess(res.data));
      },
    ).catch(
      (err) => dispatch(catFailure(err)),
    );
  };
}
