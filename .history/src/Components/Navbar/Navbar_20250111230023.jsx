import { Box, Switch, ToggleButton, Typography } from "@mui/material";
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
        <RiBookLine size={30} color="gray" />
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Typography sx={{fontWeight: "bold"}}>Font switcher</Typography>
          <Box sx={{ display: "flex", borderLeft: "1px solid #cccccc", alignItems: "center", gap: "10px" }}>
            <Switch />
            <IoMoonOutline size={30} color="gray" />
            helo
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
