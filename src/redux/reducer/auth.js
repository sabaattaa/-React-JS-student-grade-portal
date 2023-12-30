import { LOGIN_SUCCESS, LOGIN_FAIL } from "../action/types";
const initialState = { user: "", role: "" };
export default function foo(state = initialState, action) {
  const { type, payload } = action;
  console.log(type, "this is pyload",payload);

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        user: payload.user,
        role: payload.user.role,
      };
    case LOGIN_FAIL:
      return state;
    default:
      return state;
  }
}
