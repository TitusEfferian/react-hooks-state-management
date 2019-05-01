import {
  REQUEST_POKE_DATA,
  REQUEST_POKE_FAILED,
  REQUEST_POKE_SUCCESS
} from "../actions/poke";

export const INITIAL_STATE = {
  data: undefined,
  loading: false,
  error: false
};

export const request = (state, action) => {
  return {
    data: undefined,
    loading: true,
    error: false
  };
};

export const success = (state, action) => {
  return {
    data: action.data,
    loading: false,
    error: false
  };
};

export const failed = (state, action) => {
  return {
    data: undefined,
    loading: false,
    error: true
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case REQUEST_POKE_DATA:
      return request(state, action);
    case REQUEST_POKE_SUCCESS:
      return success(state, action);
    case REQUEST_POKE_FAILED:
      return failed(state, action);
    default:
      return state;
  }
};
