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
    // This defines the transition for the dark mode state
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
    // This defines the transition for the light mode state
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
    // Visibility control for icons
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

            {/* The rotating icon container */}
            <motion.div
              initial={onToggle ? "onLightMode" : "onDarkMode"}
              animate={onToggle ? "onDarkMode" : "onLightMode"}
              variants={animationVariants}
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
