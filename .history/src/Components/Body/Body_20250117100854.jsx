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
    </div>
  );
};

export default Body;
