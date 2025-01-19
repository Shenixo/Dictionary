/* eslint-disable react/prop-types */
import { useSearchContext } from "../../Context/DictionaryContext";

const Body = () => {
    const {word} 
  const result = useSearchContext();
  return (
    <div>
      <h1>{result.word}</h1>
    </div>
  );
};

export default Body;
