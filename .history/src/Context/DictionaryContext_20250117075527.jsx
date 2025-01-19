const DictionaryContext = () => {
    const [word, setWord] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleUserInput = (e) => {
        setWord(e.target.value);
    }
  return (
    <div>
      
    </div>
  )
}

export default DictionaryContext
