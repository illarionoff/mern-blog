import { SET_POST, SET_EDIT_POST } from "../actions/types";

const initialState = {
  loading: false,
  currentPost: {},
  editPost: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        currentPost: action.payload
      };
    case SET_EDIT_POST:
      return {
        ...state,
        editPost: action.payload
      };
    default:
      return state;
  }
}
