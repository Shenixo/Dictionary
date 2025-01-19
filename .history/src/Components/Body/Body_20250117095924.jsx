/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { DictionaryContext, useSearchContext } from "../../Context/DictionaryContext";

const Body = () => {
    const {word} = useSearchContext(DictionaryContext);
  const result = useSearchContext();
  return (
      <div>
          <Box sx={{display: "flex",  alignItems: "center", gap: "20px", marginTop: "20px", justifyContent: "space-between", }}>
              <Typography sx={{ fontSize: "3rem", fontWeight: "600", fontFamily: "'Merriweather', serif", }} variant="h1">{result.word}</Typography>
          </Box>
                <Typography sx={{ fontSize: "1.5rem", fontWeight: "400", fontFamily: "'Merriweather', serif", }} variant="p">{result.phonetic}</Typography>
    </div>
  );
};

export default Body;
