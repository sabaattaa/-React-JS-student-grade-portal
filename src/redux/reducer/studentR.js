import {
  STU_INFO,
  STU_TRANSCRIPT,
  STU_PAYMENTS,
  STU_REQUEST,
  STU_COMPLAINTS,
} from "../action/types";

const initialState = {
  stuInfo: "",
  transcriptInfo: "",
  paymentsInfo: "",
  requestInfo: "",
  complaintsInfo: "",
};

export default function StudentR(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case STU_INFO:
      console.log("paylod is", payload.studentInfo);
      return {
        ...state,
        stuInfo: payload.studentInfo,
      };
    case STU_TRANSCRIPT:
      return {
        ...state,
        transcriptInfo: payload.transcript,
      };
    case STU_PAYMENTS:
      return {
        ...state,
        paymentsInfo: payload.payments,
      };

    case STU_REQUEST:
      return {
        ...state,
        requestInfo: payload.request,
      };
    case STU_COMPLAINTS:
      return {
        ...state,
        complaintsInfo: payload.complaints,
      };

    default:
      return initialState;
  }
}
