import { useContext } from "react";

const Body = () => {
    useContext
    const {word, result, loading, error} = useContext(DictionaryContext);   
  return (
    <div>
          <h1>{ result.word}</h1>
    </div>
  )
}

export default Body
