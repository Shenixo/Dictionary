import { useContext } from "react";
import { DictionaryContext } from "../../Context/DictionaryContext";

const Body = () => {
    const { word, result, loading, error } = useContext(DictionaryContext);   
  return (
    <div>
          <h1>{ result.Results.word}</h1>
    </div>
  )
}

export default Body
