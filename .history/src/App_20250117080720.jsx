import "./App.css";
import Home from "./Pages/Home";
import DictionaryContext from "./Context/DictionaryContext";

function App() {
  return (
    <>
      <DictionaryContext>
        <Home />
      </DictionaryContext>
    </>
  );
}

export default App;
