/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

const SearchBar = () => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle user input
  const handleUserInput = (e) => {
    setWord(e.target.value);
  };

  // Handle search and fetch data
  const handleSearch = async (word) => {
    setIsLoading(true);
    setError(null); // Reset error state on new search
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setResult(response.data[0]);
      setIsLoading(false);
    } catch (err) {
      setError("Error fetching data:", err);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <TextField
        fullWidth
        placeholder="Search..."
        value={word}
        onChange={handleUserInput}
        sx={{
          background: "#f4f4f4",
          margin: "46px 0",
          borderRadius: ".6rem",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none", 
            },
            "& input": {
              fontFamily: "'Merriweather', serif", 
              fontSize: "1.2rem",
              fontWeight: "600",
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <BiSearch
                sx={{ cursor: "pointer" }}
                onClick={() => handleSearch(word)}
                size={22}
                style={{ color: "#D1A1D6" }}
              />
            </InputAdornment>
          ),
        }}
      />

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {result && (
        <div>
          <h3>Results:</h3>
          <pre>{JSON.stringify(result, null, 4)}</pre>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
