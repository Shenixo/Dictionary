import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div>
      <TextField
        fullWidth
        placeholder="Search..."
        variant="outlined" // Removes default border and outline
        sx={{
          background: "#f4f4f4",
          margin: "46px 0",
          borderRadius: "1rem",
          "&:focus-within": {
            borderColor: "#D1A1D6", // Adds purple border on focus
            outline: "none",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <BiSearch size={22} style={{ color: "#D1A1D6" }} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
