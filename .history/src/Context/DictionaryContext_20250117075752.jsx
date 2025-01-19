import axios from "axios";

const DictionaryContext = () => {
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
            console.log
        } catch (error) {
            
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default DictionaryContext
