import { Box, ToggleButton } from "@mui/material";
import { IoMoonOutline } from "react-icons/io5";
import "./Navbar.css";
import { RiBookLine } from "react-icons/ri";
// https://api.dictionaryapi.dev/api/v2/entries/en/word
const Navbar = () => {
  return (
    <div className="navbar">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <RiBookLine size={25} color="gray" />
        <Box sx={{display: "flex"}}>
          <span>serif</span>
          <span>
            <ToggleButton />
            <IoMoonOutline size={25} />
          </span>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
