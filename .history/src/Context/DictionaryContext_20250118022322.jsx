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
  const handleSearch = async (word, e) => {
    e.preventDefault();
  
    if (!word.trim()) {
      setError("Please enter a valid word to search.");
      return;
    }
  
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word.trim()}`
      );
      if (response.data && response.data.length > 0) {
        const data = response.data[0];
        console.log("data", data);
        console.log("response", response);
        setResult(data);
      } else {
        setError("No definitions found for the entered word.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setIsLoading(false);
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
