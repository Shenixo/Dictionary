import { TextField } from "@mui/material";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div>
      <TextField
        sx={{
          width: "100%",
          background: "#f4f4f4",
          margin: "46px 0",
          border: "1px solid #f4f4f4",
          borderRadius: "1rem",
          outline: "none",
        }}
          />
          <BiSearch size={26} color="purple" />
    </div>
  );
};

export default SearchBar;
