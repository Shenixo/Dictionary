import { TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <div>
      <TextField
        sx={{
          width: "100%",
          background: "#f4f4f4",
          borderRadius: "18px",
                  margin: "46px 0",
                  border: "none",
          outline: "none"
        }}
      />
    </div>
  );
};

export default SearchBar;
