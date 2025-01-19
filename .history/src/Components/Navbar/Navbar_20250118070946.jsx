import { Box, Switch, Typography } from "@mui/material";
import { IoMoonOutline } from "react-icons/io5";
import "./Navbar.css";
import { RiBookLine } from "react-icons/ri";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useContext } from "react";
import { DictionaryContext } from "../../Context/DictionaryContext";
import {motion} from "framer-motion"
const Navbar = () => {
  const { onToggle, handleToggle } = useContext(DictionaryContext)
  const animationVariants = {
    onDarkMode: { rotate: "90deg", scale: [1.05, 1.07, 1] },
    onLightMode: {rotate: "-90deg", scale: [1.05, 1.07, 1]}
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
            <motion.span
              initial={onToggle ? "onDarkMode" : "onLightMode"}
              animate={onToggle ? "onDarkMode" : "onLightMode"}
              variants={animationVariants}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {onToggle ? (
                <IoMoonOutline size={30} color="gray" />
              ) : (
                <LightModeOutlinedIcon size={30} color="gray" />
              )}
            </motion.span>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
