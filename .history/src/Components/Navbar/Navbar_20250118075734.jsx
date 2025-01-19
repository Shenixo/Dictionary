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
    // Animation for light mode icon (fades in and rotates)
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
    // Animation for dark mode icon (fades out and rotates)
    onDarkMode: {
      rotate: 0,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5,
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
          marginRight: "100px",
          position: "relative"
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
              position: "relative",  
            }}
          >
            <Switch onClick={handleToggle} />

            <motion.div
              initial={onToggle ? "onDarkMode" : "onLightMode"}
              animate={onToggle ? "onLightMode" : "onDarkMode"}
              variants={animationVariants}
              style={{
                position: "absolute",  
                zIndex: onToggle ? 1 : 0,  
              }}
            >
              <LightModeOutlinedIcon size={30} color="gray" />
            </motion.div>

            <motion.div
              initial={onToggle ? "onLightMode" : "onDarkMode"}
              animate={onToggle ? "onDarkMode" : "onLightMode"}
              variants={animationVariants}
              style={{
                position: "absolute",  
                zIndex: onToggle ? 0 : 1,  
              }}
            >
              <IoMoonOutline size={30} color="gray" />
            </motion.div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
