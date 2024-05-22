export type Iquestion = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type PageType = "home" | "setup" | "question" | "result";

export type StateType = {
  currentPage: PageType;
  questions: Iquestion[];
  currentPageIndex: number;
  score: number;
};

export const QuizState:StateType = {
  currentPage:'home',
  questions:[],
  currentPageIndex:0,
  score:0
}

export enum QuizActionTypesEnum {
  "CHANGE_PAGE" = "CHANGE_PAGE",
  "SET_SCORE" = "SET_SCORE",
}

export type QuizReducerActionType = {
  type: QuizActionTypesEnum.CHANGE_PAGE;
  payload: { page: PageType; questions?: Iquestion };
};

export function QuizReducer(state: StateType, { type, payload }:QuizReducerActionType) {
  switch (type) {
    case QuizActionTypesEnum.CHANGE_PAGE:
      return { ...state, currentPage:payload.page}
  }
}
