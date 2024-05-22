import QuizContextProvider from "./context/QuizContextProvider";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <QuizContextProvider>
      <Layout>
        <Home />
      </Layout>
    </QuizContextProvider>
  );
}

export default App;
