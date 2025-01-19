/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import {
  DictionaryContext,
  useSearchContext,
} from "../../Context/DictionaryContext";

const Body = () => {
  const { result } = useSearchContext();

  if (!result) {
    return <div>...</div>;
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "20px",
          justifyContent: "space-between",
          marginBottom: "1.3rem",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "600",
              fontFamily: "'Merriweather', serif",
            }}
            variant="h1"
          >
            {result.word || "No word available"}
          </Typography>
        </Box>

        <Box>
          {result.phonetics?.some((el) => el.audio) && (
            <audio controls>
              <source
                src={result.phonetics.find((el) => el.audio)?.audio}
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          )}
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: "1rem",
          fontWeight: "400",
          fontFamily: "'Merriweather', serif",
          color: "#a445ed",
        }}
        variant="p"
      >
        {result.phonetic || "No phonetic available"}
      </Typography>

      <Box sx={{ marginTop: "20px" }}>
        {result.meanings?.map((meaning, index) => (
          <Box key={index} sx={{ marginBottom: "20px" }}>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: "500",
                fontFamily: "'Merriweather', serif",
                marginBottom: "10px",
              }}
              variant="h6"
            >
              {meaning.partOfSpeech || "No part of speech available"}
            </Typography>
            {meaning.definitions.map((definition, defIndex) => (
              <Box key={defIndex} sx={{ marginBottom: "10px" }}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontFamily: "'Merriweather', serif",
                  }}
                >
                  • {definition.definition || "No definition available"}
                </Typography>
                {definition.example && (
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      fontStyle: "italic",
                      fontFamily: "'Merriweather', serif",
                    }}
                  >
                    {/* Example: "{definition.example}" */}
                  </Typography>
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
