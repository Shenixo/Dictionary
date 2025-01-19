/* eslint-disable react/prop-types */
import { DictionaryContext, useSearchContext } from "../../Context/DictionaryContext";

const Body = () => {
    const result = useSearchContext()  
  return (
    <div>
          <h1>{ result.word}</h1>
    </div>
  )
}

export default Body
