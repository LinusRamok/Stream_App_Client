import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_STREAMS,
  CREATE_STREAMS,
  DELETE_STREAMS,
  EDIT_STREAM,
  FETCH_STREAM,
} from "./type";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
