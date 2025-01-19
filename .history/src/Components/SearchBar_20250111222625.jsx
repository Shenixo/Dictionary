import React from "react";
import { TextField, InputAdornment, Paper } from "@mui/material";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
      <div>
          
      <Paper
        fullWidth
        placeholder="Search..."
        variant="filled"
        sx={{
          background: "#f4f4f4",
          margin: "46px 0",
          borderRadius: "1rem",
            border: "none", 
          "&:focus-within": {
              border: "2px solid #D1A1D6", 
              outline: "none"
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
    </Paper>
  );
};

export default SearchBar;
