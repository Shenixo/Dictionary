/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { DictionaryContext, useSearchContext } from "../../Context/DictionaryContext";

const Body = () => {
  const { word } = useSearchContext(DictionaryContext);
  const result = useSearchContext();

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {/* Word and Phonetic Display */}
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "600",
              fontFamily: "'Merriweather', serif",
            }}
            variant="h1"
          >
            {result.word}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "400",
              fontFamily: "'Merriweather', serif",
            }}
            variant="p"
          >
            {result.phonetic}
          </Typography>
        </Box>

        {/* Audio Player */}
        <Box>
          {result.phonetics &&
            result.phonetics.some((el) => el.audio) && (
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

      {/* Meanings and Examples */}
      <Box sx={{ marginTop: "20px" }}>
        {result.meanings &&
          result.meanings.map((meaning, index) => (
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
                {meaning.partOfSpeech}
              </Typography>
              {meaning.definitions.map((definition, defIndex) => (
                <Box key={defIndex} sx={{ marginBottom: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontFamily: "'Merriweather', serif",
                    }}
                  >
                    • {definition.definition}
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
