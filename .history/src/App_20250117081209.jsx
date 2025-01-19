import "./App.css";
import Home from "./Pages/Home";
import {DictionaryProvider} from "./Context/DictionaryContext";

function App() {
  return (
      <DictionaryProvider>
        <Home />
      </DictionaryProvider>
  );
}

export default App;
