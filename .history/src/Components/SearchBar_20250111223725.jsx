/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
    const [word, setWord] = useState("")
    const [result, setResult] = use
    const handleUserInput = (e) => {
      setWord(e.target.value)
    }
    const handleSearch = (word) => {

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
