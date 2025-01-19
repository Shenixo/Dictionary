/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { useSearchContext } from "../../Context/DictionaryContext";
import { useRef, useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import TextToSpeech from "../TextToSpeech";

const Body = () => {
  const audioRef = useRef(null);
  const { result } = useSearchContext();

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (audioRef.current && result?.phonetics?.some((el) => el.audio)) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [result]);

  if (!result) {
    return <div>Search for a word...</div>;
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
              color: "#2b2b2b",
            }}
            variant="h1"
          >
            {result.word || "No word available"}
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#e9d0fa",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
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
          color: "#a445ed",
        }}
        variant="body1"
      >
        {result.phonetic || "No phonetic available"}
      </Typography>
      {result.phonetics?.map((phonetic, index) =>
        phonetic.audio ? (
          <audio key={index} ref={audioRef} src={phonetic.audio} preload="auto" />
        ) : null
      )}
      <Box sx={{ marginTop: "20px" }}>
        {result.meanings?.map((meaning, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                margin: "2rem 0",
              }}
            >
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
              <hr
                style={{
                  border: "none",
                  height: "1px",
                  width: "100%",
                  background: "#ebebeb",
                }}
              />
            </Box>
            <Typography
              sx={{
                marginBottom: "2rem",
                display: "block",
                color: "#000000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
              variant="body1"
            >
              Meaning:
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
                  <Box sx={{ margin: "1rem 0" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontStyle: "italic",
                        fontFamily: "'Playwrite AU SA', serif",
                        fontWeight: "600",
                      }}
                    >
                      Example:
                    </Typography>
                    <Typography
                      sx={{ fontFamily: "'Merriweather', serif" }}
                      variant="body2"
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
                      }}
                    >
                      Synonyms:
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Merriweather', serif",
                        fontWeight: "600",
                        color: "#9758bf",
                      }}
                      variant="body2"
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
