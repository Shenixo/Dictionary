import { Box, Switch, Typography } from "@mui/material";
import { IoMoonOutline } from "react-icons/io5";
import { RiBookLine } from "react-icons/ri";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useContext } from "react";
import { DictionaryContext } from "../../Context/DictionaryContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { onToggle, handleToggle } = useContext(DictionaryContext);

  // Animation variants with opacity transition and rotation
  const animationVariants = {
    // Animation for Dark Mode
    onDarkMode: {
      rotate: 180,
      opacity: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30, 
        duration: 0.5
      },
    },
    // Animation for Light Mode
    onLightMode: {
      rotate: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30, 
        duration: 0.5 
      },
    },
  };

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
            <motion.div
              initial={onToggle ? "onLightMode" : "onDarkMode"}
              animate={onToggle ? "onDarkMode" : "onLightMode"}
              variants={animationVariants}
            >
              {/* Toggling between icons */}
              {!onToggle ? (
                <LightModeOutlinedIcon size={30} color="gray" />
              ) : (
                <IoMoonOutline size={30} color="gray" />
              )}
            </motion.div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
