import { useContext } from "react";
import { QuizContext } from "../../context/QuizContextProvider";
import { QuizActionTypesEnum } from "../../features/quiz";

function Result() {
  const { quizData, dispatch } = useContext(QuizContext);
  const score = quizData.score;
  const allQuestion = quizData.questions.length;
  const totalScorePrice = Math.floor((score / allQuestion) * 100);
  return (
    <div className="text-white flex flex-col items-center gap-14">
      <div className="flex flex-col items-center text-4xl gap-2">
        <span className="p-4 rounded-4xl text-8xl">
          {totalScorePrice >= 40 ? "😊" : "😢"}
        </span>
        <span>{totalScorePrice >= 40 ? "You Win" : "Try Mode"}</span>
      </div>
      <p>Your Score = {totalScorePrice}%</p>
      <button
        onClick={() =>
          dispatch({
            type: QuizActionTypesEnum.CHANGE_PAGE,
            payload: { page: "home" },
          })
        }
      >
        Again
      </button>
    </div>
  );
}

export default Result;
