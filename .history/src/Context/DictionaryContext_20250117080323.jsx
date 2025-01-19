import axios from "axios";
import { Children, createContext } from "react";
const DictionaryContext  = createContext();
const DictionaryProvider = ({children}) => {
    const [word, setWord] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleUserInput = (e) => {
        setWord(e.target.value);
    }
    const handleSearch = async (word) => {
        setIsLoading(true)
        setError("")
        try {
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const data = response.data[0]
            console.log("data", data)
            console.log("response", response)
            setResult(data)
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }
    const contextValue = {
        handleUserInput,
        handleSearch,
        word,
        loading,
        result
    }
  return (
    <DictionaryContext.Provider value={contextValue}>
      {children}
    </DictionaryContext.Provider>
  )
}

export default DictionaryProvider
