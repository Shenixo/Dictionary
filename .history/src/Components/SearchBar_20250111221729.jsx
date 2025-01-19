import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div>
      <TextField
        fullWidth
        placeholder="Search..."
        sx={{
          background: "#f4f4f4",
          margin: "46px 0",
          borderRadius: "1rem",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <BiSearch size={25} style={{ color: "#D1A1D6" }} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
