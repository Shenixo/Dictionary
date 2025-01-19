/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

// Create the context
const DictionaryContext = createContext(undefined);

// Custom hook to use the context
const useSearchContext = () => {
  const result = useContext(DictionaryContext);
  if (result === undefined) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return result;
};

const DictionaryProvider = ({ children }) => {
  const [onToggle, setOnToggle] = useState(false);
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Toggle dark and light mode
  useEffect(() => {
    if (onToggle) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [onToggle]);

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

  const handleToggle = () => {
    setOnToggle(!onToggle);
  };

  const contextValue = {
    handleUserInput,
    handleSearch,
    word,
    loading,
    result,
    error,
    onToggle,
    handleToggle, 
  };

  return (
    <DictionaryContext.Provider value={contextValue}>
      {children}
    </DictionaryContext.Provider>
  );
};

export { DictionaryProvider, DictionaryContext, useSearchContext };
