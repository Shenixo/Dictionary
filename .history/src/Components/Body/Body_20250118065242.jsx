/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { DictionaryContext, useSearchContext } from "../../Context/DictionaryContext";
import TextToSpeech from "../TextToSpeech";

const Body = () => {
  const { onToggle } = useContext(DictionaryContext); // Get the toggle state from context
  const { result } = useSearchContext();

  // Return a message if no result is found
  if (!result) {
    return <div>Search for a word...</div>;
  }

  // Define color variables based on the theme
  const textColor = onToggle ? "#ffffff" : "#2b2b2b"; // Light text for dark mode, dark text for light mode
  const backgroundColor = onToggle ? "#333333" : "#ffffff"; // Dark background for dark mode, light background for light mode
  const accentColor = onToggle ? "#9758bf" : "#a445ed"; // Accent color for dark mode, light mode
  const boxColor = onToggle ? "#555" : "#e9d0fa"; // Adjust box background for dark mode

  return (
    <div style={{ backgroundColor: backgroundColor, color: textColor, minHeight: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "-30px",
          justifyContent: "space-between",
          marginBottom: "2px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "700",
              fontFamily: "'Merriweather', serif",
              color: textColor,
            }}
            variant="h1"
          >
            {result.word || "No word available"}
          </Typography>
        </Box>
        <Box
          sx={{
            background: boxColor,
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            lineHeight: "10px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextToSpeech />
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: "1rem",
          fontWeight: "600",
          fontFamily: "'Merriweather', serif",
          color: accentColor,
        }}
        variant="p"
      >
        {result.phonetic || "No phonetic available"}
      </Typography>

      <Box sx={{ marginTop: "20px" }}>
        {result.meanings?.map((meaning, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                margin: "1.9rem 0",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  fontFamily: "'Playwrite AU SA', serif",
                  marginBottom: "10px",
                  color: textColor,
                }}
                variant="h5"
              >
                {meaning.partOfSpeech || "No part of speech available"}
              </Typography>
              <hr
                style={{
                  border: "none",
                  height: "1px",
                  width: "100%",
                  background: onToggle ? "#666" : "#ebebeb", // Lighter lines for dark mode
                }}
              />
            </Box>
            <Typography
              sx={{
                marginBottom: "2rem",
                display: "block",
                color: accentColor,
                fontWeight: "600",
                fontSize: "1rem",
              }}
              variant="p"
            >
              Meaning:
            </Typography>
            {meaning.definitions.map((definition, defIndex) => (
              <Box key={defIndex} sx={{ marginBottom: "10px" }}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "300",
                    color: onToggle ? "#dddddd" : "#333333", // Light text for dark mode
                    fontFamily: "'Merriweather', serif",
                  }}
                >
                  • {definition.definition || "No definition available"}
                </Typography>
                {definition.example && (
                  <Box sx={{ margin: "1rem 0" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontStyle: "italic",
                        fontFamily: "'Playwrite AU SA', serif",
                        fontWeight: "700",
                        color: onToggle ? "#f1f1f1" : "#000000", // Light text for dark mode
                      }}
                    >
                      Example:
                    </Typography>
                    <Typography
                      sx={{ fontFamily: "'Merriweather', serif", color: textColor }}
                      variant="span"
                    >
                      {definition.example}
                    </Typography>
                  </Box>
                )}
                {definition.synonyms && definition.synonyms.length > 0 && (
                  <Box sx={{ margin: "1rem 0" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontStyle: "italic",
                        fontFamily: "'Playwrite AU SA', serif",
                        fontWeight: "600",
                        color: textColor,
                      }}
                    >
                      synonyms:
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Merriweather', serif",
                        fontWeight: "600",
                        color: accentColor,
                      }}
                      variant="span"
                    >
                      {definition.synonyms.join(", ")}
                    </Typography>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Body;
