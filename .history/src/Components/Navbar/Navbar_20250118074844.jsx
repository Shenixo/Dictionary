import { Box, Switch, Typography } from "@mui/material";
import { IoMoonOutline } from "react-icons/io5";
import { RiBookLine } from "react-icons/ri";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useContext } from "react";
import { DictionaryContext } from "../../Context/DictionaryContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { onToggle, handleToggle } = useContext(DictionaryContext);

  const animationVariants = {
    // Transition for the light mode icon: rotates from 0 to 360 degrees
    onLightMode: {
      rotate: 360,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5,
      },
    },
    // Transition for the dark mode icon: rotates from 180 to 0 degrees
    onDarkMode: {
      rotate: 180,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5,
      },
    },
    // Visibility control for the icons
    iconVisible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    iconHidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
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
            {/* The toggle switch */}
            <Switch onClick={handleToggle} />

            {/* Icon that controls visibility and rotation */}
            <motion.div
              initial={onToggle ? "iconHidden" : "iconVisible"}
              animate={onToggle ? "iconVisible" : "iconHidden"}
              variants={animationVariants}
            >
              {!onToggle ? (
                <LightModeOutlinedIcon size={30} color="gray" />
              ) : (
                <IoMoonOutline size={30} color="gray" />
              )}
            </motion.div>

            {/* Rotating the container for proper positioning after animation */}
            <motion.div
              initial={onToggle ? "onLightMode" : "onDarkMode"}
              animate={onToggle ? "onDarkMode" : "onLightMode"}
              variants={animationVariants}
              style={{ position: "absolute" }} 
            >
              <div />
            </motion.div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
