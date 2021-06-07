import { fetchToken } from "./fetchToken"
import { fetchUser } from "./fetchUser";

export const fetchLogin = (user) => async (dispatch) => {
  try {
    const {payload} = await dispatch(fetchToken(user));
    if(payload.token !== undefined) await dispatch(fetchUser(payload.token))
  } catch(error) {}
};
