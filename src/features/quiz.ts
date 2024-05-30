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
  currentQuestionIndex: number;
  score: number;
};

export const QuizState: StateType = {
  currentPage: "home",
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
};

export enum QuizActionTypesEnum {
  "CHANGE_PAGE" = "CHANGE_PAGE",
  "SET_SCORE" = "SET_SCORE",
}

export type QuizReducerActionType =
  | {
      type: QuizActionTypesEnum.CHANGE_PAGE;
      payload: { page: PageType; questionsList?: Iquestion[]};
    }
  | {
      type: QuizActionTypesEnum.SET_SCORE;
      payload: { score: number };
    };

export function QuizReducer(
  state: StateType,
  { type, payload }: QuizReducerActionType
) {
  switch (type) {
    case QuizActionTypesEnum.CHANGE_PAGE:
      return {
        ...state,
        currentPage: payload.page,
        questions: payload.questionsList,
      };
    case QuizActionTypesEnum.SET_SCORE:
      return { ...state, score: payload.score++ };
  }
}
