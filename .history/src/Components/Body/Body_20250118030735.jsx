/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import {
    //   DictionaryContext,
  useSearchContext,
} from "../../Context/DictionaryContext";

const Body = () => {
  const { result } = useSearchContext();
  if (!result) {
    return <div>Search for something...</div>;
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
          marginBottom: ".8rem",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "700",
              fontFamily: "'Merriweather', serif",
              color: "#2b2b2b"
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
          fontWeight: "600",
          fontFamily: "'Merriweather', serif",
          color: "#a445ed",
        }}
        variant="p"
      >
        {result.phonetic || "No phonetic available"}
      </Typography>

      <Box sx={{ marginTop: "20px" }}>
        {result.meanings?.map((meaning, index) => (
          <Box key={index} >
            <Box sx={{display: "flex", alignItems: "center", gap: "20px", margin: "2rem 0"}}>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: "700",
                fontFamily: "'Playwrite AU SA', serif",
                  marginBottom: "10px",
              }}
              variant="h5"
            >
              {meaning.partOfSpeech || "No part of speech available"}
            </Typography>
              <hr style={{border: "none", height: "1px", width: "100%", background: "#ebebeb"}} />
            </Box>
            <Typography sx={{marginBottom: "2rem", display: "block",  color: "#000000", fontWeight: "600", fontSize: "1rem"}} variant="p">Meaning:</Typography>
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
                  <>
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      fontStyle: "italic",
                      fontFamily: "'Playwrite AU SA', serif",
                      fontWeight: "600"
                    }}
                    >
                    Example:
                  </Typography>
                  <Typography variant="span"> {definition.example}</Typography>
                    </>
                )}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <h3>Results:</h3>
            <pre>{JSON.stringify(result, null, 4)}</pre>
    </div>
  );
};

export default Body;