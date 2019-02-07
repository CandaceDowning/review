import axios from "axios";
const initialState = {
  user: {},
  error: ""
};

//action variable declaration
const SIGN_UP = "SIGN_UP";
const LOGIN = "LOG_IN";
const GET_USER = "GET_USER";

// action creators take information from the front end and passes to payload
export function signup(username, password) {
  return {
    type: SIGN_UP,
    payload: axios.post("/auth/signup", { username, password })
  };
}

export function login(username, password) {
  return {
    type: LOGIN,
    payload: axios.post("/auth/login", { username, password })
  };
}

export function getUser(){
    return{
        type:GET_USER,
        payload: axios.get('/auth/user')
    }
}


//reducer gets the payload from the action creator above and checks below for a match below (pending, fulfilled, or pending) call for information comes back where action.type matches and then either pushes a loading message for pending, sets the state to the new information for fulfilled, or a warning message for errors.  
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${SIGN_UP}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
      case `${LOGIN}_FULFILLED`:
      return {
          
          ...state,
          user: action.payload.data
      };
      case `${LOGIN}_REJECTED`:
      return {
          ...state,
          error: "Username or Password is incorrect"
      };
      case `${GET_USER}_FULFILLED`:
      return {
          ...state,
          user: action.payload.data
      }
    default:
      return state;
  }
}
