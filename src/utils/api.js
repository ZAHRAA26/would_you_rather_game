import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  formatQuestion,
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveQuestion(info) {
  //console.log('saving', info)
  return _saveQuestion(info);
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}

export function formatNewQuestion(info) {
  return formatQuestion(info);
}
