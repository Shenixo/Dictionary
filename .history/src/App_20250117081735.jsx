import "./App.css";
import Home from "./Pages/Home";
import {DictionaryProvider} from "./Context/DictionaryContext";
import Body from "./Components/Body/Body";

function App() {
  return (
      <DictionaryProvider>
      <Home />
      <Body
      </DictionaryProvider>
  );
}

export default App;
