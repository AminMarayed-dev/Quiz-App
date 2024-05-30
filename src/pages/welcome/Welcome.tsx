import { useContext } from "react";
import { QuizActionTypesEnum } from "../../features/quiz";
import { QuizContext } from "../../context/QuizContextProvider";

function Welcome() {
    const { dispatch } = useContext(QuizContext);
  return (
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
    <img
      src="/src/assets/icons8-rocket-100.png"
      alt=""
      className="w-[60px] h-[60px]"
    />
  </>
  )
}

export default Welcome