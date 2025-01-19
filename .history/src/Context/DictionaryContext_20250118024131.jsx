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
  return result;
};
const DictionaryProvider = ({ children }) => {
  const [word, setWord] = useState("computer");
  const [result, setResult] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleUserInput = (e) => {
    setWord(e.target.value);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!word.trim()) {
      setError("Please enter a word to search.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setResult(response.data[0]); 
    } catch (err) {
      setError("Unable to fetch data. Please try again.", err);
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
export { DictionaryProvider, DictionaryContext, useSearchContext };
