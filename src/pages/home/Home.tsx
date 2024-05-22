import { useContext } from "react";
import { QuizContext } from "../../context/QuizContextProvider";
import Setup from "../setup/Setup";
import { QuizActionTypesEnum } from "../../features/quiz";

function Home() {
  const { quizData, dispatch } = useContext(QuizContext);
  let content;

  if (quizData.currentPage === "home") {
    content = (
      <>
        <h3 className="mb-20 text-white">Welcome To Quiz App</h3>
        <button
          onClick={() =>
            dispatch({
              type: QuizActionTypesEnum.CHANGE_PAGE,
              payload: { page: "setup" },
            })
          }
          className="text-white"
        >
          Get Start
        </button>
        <img src="/src/assets/icons8-rocket-100.png" alt="" className="w-[60px] h-[60px]"/>
      </>
    );
  } else if (quizData.currentPage === "setup") {
    content = <Setup />;
  } else {
    content = "nothing";
  }

  return <>{content}</>;
}

export default Home;