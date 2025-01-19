import "./App.css";
import Home from "./Pages/Home";
import DictionaryContext from "./Context/DictionaryContext";
import DictionaryProv

function App() {
  return (
      <DictionaryContext>
        <Home />
      </DictionaryContext>
  );
}

export default App;
