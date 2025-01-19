import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div>
      <TextField
        fullWidth
        placeholder="Search..."
        variant="outlined"
        sx={{
          background: "#f4f4f4",
          margin: "46px 0",
          borderRadius: "1rem",
          border: "none", // Removes the default border
          outline: "none", // Removes the default outline
          "&:hover": {
            borderColor: "none", // Removes border on hover
          },
          "&.Mui-focused": {
            border: "2px solid #D1A1D6", // Adds purple border on focus
            outline: "none", // Ensures no outline when focused
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
