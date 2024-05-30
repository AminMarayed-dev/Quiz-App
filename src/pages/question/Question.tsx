import { useContext, useState } from "react";
import { QuizContext } from "../../context/QuizContextProvider";
import { QuizActionTypesEnum } from "../../features/quiz";

function Question() {
  const { quizData, dispatch } = useContext(QuizContext);
  const [indexQ, setIndexQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer((prevAnswer) => answer);
  };

  const options = [
    quizData.questions[indexQ].correct_answer,
    ...quizData.questions[indexQ].incorrect_answers,
  ];

  return (
    <>
      <div className="flex flex-col gap-6 w-2/3">
        <h3 className="bg-green-500 min-h-[15vh] px-3 py-2 rounded-lg">
          {quizData.questions[indexQ]?.question}
        </h3>
        <div className="flex flex-col gap-2">
          {options.map((option, index) => (
            <button
              key={index}
              className={`${
                selectedAnswer === option
                  ? option === quizData.questions[indexQ].correct_answer
                    ? "bg-green-300"
                    : "bg-red-500"
                  : "bg-white"
              } px-2 py-1 rounded-lg cursor-pointer text-left w-full`}
              onClick={() => {
                handleAnswerClick(option);
                if (option === quizData.questions[indexQ].correct_answer) {
                  // quizData.score++;
                  dispatch({
                    type: QuizActionTypesEnum.SET_SCORE,
                    payload: { score: quizData.score },
                  });
                } else {
                  quizData.score;
                }
              }}
            >
              {index + 1}. {option}
            </button>
          ))}
          <div className="flex flex-row justify-between mt-2 items-center">
            <p className="text-white">
              Question {indexQ + 1} of {quizData.questions.length}
            </p>
            <button
              className="text-white bg-blue-600 px-2 py-1 rounded-lg"
              onClick={() => {
                setIndexQ(indexQ + 1);
                if (indexQ === quizData.questions.length - 1) {
                  dispatch({
                    type: QuizActionTypesEnum.CHANGE_PAGE,
                    payload: {
                      page: "result",
                      questionsList: quizData.questions,
                    },
                  });
                }
              }}
            >
              {indexQ !== quizData.questions.length - 1
                ? "Next Question"
                : "Show Result"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;
