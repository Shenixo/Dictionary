/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext } from "react";
import { useState, useContext } from "react";
const DictionaryContext = createContext(undefined);
const useSearchContext = () => {
    const result = useContext(DictionaryContext); 
    if (result === undefined) {
        throw new Error("useSearchContext must be used within a SearchProvider");  
    }
    return result
}
const DictionaryProvider = ({ children }) => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleUserInput = (e) => {
    setWord(e.target.value);
  };
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevents form from reloading the page
    setLoading(true); // Indicate the search is in progress
    setError(""); // Clear any previous errors
  
    if (!word.trim()) {
      setError("Please enter a word to search.");
      setLoading(false);
      return;
    }
  
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setResult(response.data[0]); // Save the result to state
    } catch (err) {
      setError("Unable to fetch data. Please try again.",err);
    } finally {
      setLoading(false); // Indicate that the search is complete
    }
  };
  
  
  const contextValue = {
    handleUserInput,
    handleSearch,
    word,
    loading,
    result,
    error,
  };
  return (
    <DictionaryContext.Provider value={contextValue}>
      {children}
    </DictionaryContext.Provider>
  );
};
export  { DictionaryProvider, DictionaryContext, useSearchContext };
