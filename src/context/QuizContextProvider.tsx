import { ReactNode, createContext, useReducer } from "react";
import {
  QuizReducer,
  QuizReducerActionType,
  QuizState,
} from "../features/quiz";

export const QuizContext = createContext({
  quizData: QuizState,
  dispatch: (action: QuizReducerActionType) => {},
});

type Props = {
  children: ReactNode;
};

function QuizContextProvider({ children }: Props) {
  const [quizData, dispatch] = useReducer(QuizReducer, QuizState);
  return (
    <QuizContext.Provider value={{ quizData, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export default QuizContextProvider;