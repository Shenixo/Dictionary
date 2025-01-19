import { Box, Switch, ToggleButton, Typography } from "@mui/material";
import { IoMoonOutline } from "react-icons/io5";
import "./Navbar.css";
import { RiBookLine } from "react-icons/ri";
import LightModeIcon from '@mui/icons-material/LightMode';
// https://api.dictionaryapi.dev/api/v2/entries/en/word
import { useState } from "react";
const Navbar = () => {
  const [onToggle, setOnToggle] = useState(false)
  const handleToggle = () => {
    setOnToggle(!onToggle)
  }
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
          <Typography variant="p" sx={{ fontWeight: "600" }}>
            Serif
          </Typography>
          <Box
            sx={{
              display: "flex",
              borderLeft: "1px solid #cccccc",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Switch onClick={handleToggle} />
            {
              !onToggle ? 
            }
            <IoMoonOutline size={30} color="gray" />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
