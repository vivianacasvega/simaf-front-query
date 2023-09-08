import { initStateParametrization } from "./initState"
import {
  SET_MESSAGE_SUCCESS
} from "./actions";


export const parametrization = (state = initStateParametrization, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_MESSAGE_SUCCESS:
      return {
        ...state,
        messageSuccess: payload
      }
    default:
      return initStateParametrization
  }
}