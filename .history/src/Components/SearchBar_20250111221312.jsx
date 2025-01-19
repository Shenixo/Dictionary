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
          startAdornment: (
            <InputAdornment position="end">
              <BiSearch size={20} color="purple" />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
