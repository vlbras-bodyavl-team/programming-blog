import { useReducer } from "react";

export enum REDUCER_ACTION_TYPE {
  SET_EMAIL,
  SET_PASSWORD,
  SET_EMAIL_ERROR,
  SET_PASSWORD_ERROR,
}

interface ReducerAction {
  type: REDUCER_ACTION_TYPE;
  payload: string;
}

interface SignInState {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
}
const reducer = (state: SignInState, action: ReducerAction): SignInState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_EMAIL:
      return { ...state, email: action.payload };
    case REDUCER_ACTION_TYPE.SET_PASSWORD:
      return { ...state, password: action.payload };
    case REDUCER_ACTION_TYPE.SET_EMAIL_ERROR:
      return { ...state, emailError: action.payload };
    case REDUCER_ACTION_TYPE.SET_PASSWORD_ERROR:
      return { ...state, passwordError: action.payload };
  }
};

export const useSignIn = () => {
  const initialState: SignInState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  };
  return useReducer(reducer, initialState);
};
