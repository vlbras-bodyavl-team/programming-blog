import { useReducer } from "react";
import { IPost } from "../interfaces";

export enum REDUCER_ACTION_TYPE {
  SET_TITLE,
  SET_TOPIC,
  SET_CONTENT,
}

export interface ReducerAction {
  type: REDUCER_ACTION_TYPE;
  payload: string;
  payloadWholePost?: IPost;
}

export interface PostState {
  title: string;
  topic: string;
  content: string;
}

const reducer = (state: PostState, action: ReducerAction): PostState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_TITLE:
      return { ...state, title: action.payload };
    case REDUCER_ACTION_TYPE.SET_TOPIC:
      return { ...state, topic: action.payload };
    case REDUCER_ACTION_TYPE.SET_CONTENT:
      return { ...state, content: action.payload };
  }
};

export const usePost = () => {
  const initialState: PostState = {
    title: "",
    topic: "",
    content: "",
  };
  return useReducer(reducer, initialState);
};
