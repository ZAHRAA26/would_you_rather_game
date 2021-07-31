import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";
import { setAuthedUser } from "./authedUser";

// const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return async (dispatch, getState) => {
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    //
  };
  // return (dispatch) => {
  //   return getInitialData().then(({ users, questions }) => {
  //     // dispatch(setAuthedUser(AUTHED_ID));
  //   });
  // };
}
