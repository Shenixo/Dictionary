/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

const SearchBar = () => {
 use
const {handleUserInput, handleSearch, word, loading, result, error} = useContext(DictionaryContext);
 

  return (
    <div>
      <TextField
        fullWidth
        placeholder="Search..."
        value={word}
        onChange={handleUserInput}
              sx={{
            padding: ".3rem",
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
