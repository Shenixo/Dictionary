/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import { DictionaryContext } from "../Context/DictionaryContext";

const SearchBar = () => {
  const { handleUserInput, handleSearch, word, loading, result, error } =
    useContext(DictionaryContext);
  return (
    <div>
      <form onSubmit={handleSearch}>
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
                fontWeight: "700",
                color: "#2b2b2b",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <BiSearch
                  sx={{ cursor: "pointer" }}
                  type="submit"
                  size={22}
                  style={{ color: "#D1A1D6" }}
                />
              </InputAdornment>
            ),
          }}
        />
        {loading && <div style={{ color: "blue", fontWeight: "bold" }}>Loading...</div>}
        {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
        {result && (
          <div style={{ marginTop: "20px" }}>
            <h3>Search Result:</h3>
            <p><strong>Word:</strong> {result.word}</p>
            <p><strong>Phonetics:</strong> {result.phonetics?.[0]?.text || "N/A"}</p>
            <p><strong>Meaning:</strong> {result.meanings?.[0]?.definitions?.[0]?.definition || "N/A"}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
