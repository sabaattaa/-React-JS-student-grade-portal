import axios from "axios";
import {
  STU_COMPLAINTS,
  STU_INFO,
  STU_PAYMENTS,
  STU_REQUEST,
  STU_TRANSCRIPT,
} from "./types";

export const studentInfo = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/studentInfo");
    console.log("this is res", res);
    dispatch({ type: STU_INFO, payload: res.data });
  } catch (e) {
    console.log(e);
  }
};

export const transcript = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/transcript");
    console.log("this is res", res);
    dispatch({ type: STU_TRANSCRIPT, payload: res.data });
  } catch (e) {
    console.log(e);
  }
};

export const payment = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/payments");
    console.log("this is res", res);
    dispatch({ type: STU_PAYMENTS, payload: res.data });
  } catch (e) {
    console.log(e);
  }
};

export const request = () => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/request");
    console.log("this is res", res);
    dispatch({ type: STU_REQUEST, payload: res.data });
  } catch (e) {
    console.log(e);
  }
};

export const complaints = () => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/complaint");
    console.log("this is res", res);
    dispatch({ type: STU_COMPLAINTS, payload: res.data });
  } catch (e) {
    console.log(e);
  }
};
