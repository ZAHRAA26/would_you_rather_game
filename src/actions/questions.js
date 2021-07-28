import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestion({
      optionOneText,
      optionTwoText,
      authedUser,
    }).then((question) => dispatch(addQuestion(question)));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}
export function handleAnswerQuestion({ qid, answer }) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(answerQuestion({ authedUser, qid, answer }));
    return saveQuestionAnswer({ authedUser, qid, answer });
  };
}
