import { useReducer } from "react";

export enum REDUCER_ACTION_TYPE {
  SET_EMAIL,
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
  SET_EMAIL_ERROR,
  SET_PASSWORD_ERROR,
}

interface ReducerAction {
  type: REDUCER_ACTION_TYPE;
  payload: string;
}

interface SignUpState {
  email: string;
  password: string;
  confirmPassword: string;
  emailError: string;
  passwordError: string;
}
const reducer = (state: SignUpState, action: ReducerAction): SignUpState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_EMAIL:
      return { ...state, email: action.payload };
    case REDUCER_ACTION_TYPE.SET_PASSWORD:
      return { ...state, password: action.payload };
    case REDUCER_ACTION_TYPE.SET_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload };
    case REDUCER_ACTION_TYPE.SET_EMAIL_ERROR:
      return { ...state, emailError: action.payload };
    case REDUCER_ACTION_TYPE.SET_PASSWORD_ERROR:
      return { ...state, passwordError: action.payload };
  }
};

export const useSignUp = () => {
  const initialState: SignUpState = {
    email: "",
    password: "",
    confirmPassword: "",
    emailError: "",
    passwordError: "",
  };
  return useReducer(reducer, initialState);
};
