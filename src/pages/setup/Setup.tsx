import { useContext } from "react";
import { QuizContext } from "../../context/QuizContextProvider";
import { QuizActionTypesEnum } from "../../features/quiz";
import { PiPowerFill } from "react-icons/pi";

const options = {
  categories: [
    {
      text: "History",
      value: "history",
    },
    {
      text: "Sports",
      value: "history",
    },
    {
      text: "Cars",
      value: "history",
    },
  ],
  difficulty: [
    {
      text: "Easy",
      value: "easy",
    },
    {
      text: "Medium",
      value: "medium",
    },
    {
      text: "Hard",
      value: "hard",
    },
  ],
};
function Setup() {
  const { dispatch } = useContext(QuizContext);
  return (
    <>
      <h3 className="font-bold text-xl text-white">Setup Quiz</h3>
      <form
        className="flex flex-col gap-3 w-1/2"
        onSubmit={() => {
          dispatch({
            type: QuizActionTypesEnum.CHANGE_PAGE,
            payload: { page: "question" },
          });
        }}
      >
        <div className="flex flex-col gap-0.5">
          {" "}
          <label className="text-white">Number Of Question</label>
          <input
            type="number"
            className="px-2 py-0.5 outline-none rounded-md bg-yellow-400 placeholder:text-gray-500"
            placeholder="choose question between 5 to 50"
            min={5}
            max={50}
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <label className="text-white">Category</label>
          <select className="px-2 py-0.5 rounded-md bg-yellow-400 text-md outline-none">
            {options.categories.map((option, index) => (
              <option value={option.value} key={index}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-0.5">
          <label className="text-white">Difficulty</label>
          <select className="px-2 py-0.5 rounded-md bg-yellow-400 text-md outline-none">
            {options.difficulty.map((option, index) => (
              <option value={option.value} key={index}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
        <button className="w-full flex flex-col items-center" type="submit">
          <p>start</p>
          <PiPowerFill className="text-center text-4xl w-full cursor-pointer text-red-500" />
        </button>
      </form>
    </>
  );
}

export default Setup;
