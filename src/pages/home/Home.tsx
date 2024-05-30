import { useContext } from "react";
import { QuizContext } from "../../context/QuizContextProvider";
import Setup from "../setup/Setup";
import Question from "../question/Question";
import Result from "../result/Result";
import Welcome from "../welcome/Welcome";

function Home() {
  const { quizData } = useContext(QuizContext);
  let content;

  if (quizData.currentPage === "home") {
    content = <Welcome />;
  } else if (quizData.currentPage === "setup") {
    content = <Setup />;
  } else if (quizData.currentPage === "question") {
    content = <Question />;
  } else if (quizData.currentPage === "result") {
    content = <Result />;
  }

  return <>{content}</>;
}

export default Home;
