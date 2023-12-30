
import axios from "axios";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "./types";

export const login = (paylod) => async (dispatch) => {
  const { email, password } = paylod;
  try {
    const body = JSON.stringify({ email, password });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("http://localhost:5000/auth", body, config);
    console.log("this is res",res);
    dispatch({type:LOGIN_SUCCESS,payload:res.data})
  } catch (e) {
    console.log(e);
    dispatch({type:LOGIN_FAIL})
  }
};
