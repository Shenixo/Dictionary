/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

const SearchBar = () => {
    const [word, setWord] = useState("")
    const [result, setResult] = useState("")
    const [loading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const handleUserInput = (e) => {
      setWord(e.target.value)
    }
    const handleSearch = (word) => {
        const response = axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((response) => )
        const data = response.data
        console.log(data)
    }
  return (
      <div>
          
      <TextField
        fullWidth
        placeholder="Search..."
       onChange={handleUserInput}
        sx={{
          background: "#f4f4f4",
          margin: "46px 0",
          borderRadius: "1rem",
            border: "none", 
            outline: "none"
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <BiSearch sx={{cursor: "pointer"}} onClick={() => handleSearch(word)} size={22} style={{ color: "#D1A1D6" }} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
