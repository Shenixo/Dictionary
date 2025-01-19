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
    // Rotate the icons with opacity transition
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
    // Icon Visibility: This handles the fade in/out of the icons during rotation
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
            <Switch onClick={handleToggle} />

            {/* Light Mode Icon */}
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

            {/* Icon Container with Rotation Animation */}
            <motion.div
              initial={onToggle ? "onLightMode" : "onDarkMode"}
              animate={onToggle ? "onDarkMode" : "onLightMode"}
              variants={animationVariants}
            >
              {/* This is the background that rotates while the icons change */}
              <div />
            </motion.div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
