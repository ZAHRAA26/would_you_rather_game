import { ADD_QUESTION_TO_USER, RECEIVE_USERS } from "../actions/users";
import { ANSWER_QUESTION } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case ADD_QUESTION_TO_USER:
      const { id, author } = action;
      debugger;

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id]),
        },
      };
    default:
      return state;
  }
}
