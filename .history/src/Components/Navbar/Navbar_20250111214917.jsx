import { Box, ToggleButton } from "@mui/material";
import { IoMoonOutline } from "react-icons/io5";
import "./Navbar.css";
import { RiBookLine } from "react-icons/ri";
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
              <RiBookLine size={20} color="gray" />
              <Box>
                  <span>serif</span>
                  <span>
                  <ToggleButton/>
                      
                  </span>
              </Box>
      </Box>
    </div>
  );
};

export default Navbar;
