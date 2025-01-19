/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { DictionaryContext, useSearchContext } from "../../Context/DictionaryContext";

const Body = () => {
    const {word} = useSearchContext(DictionaryContext);
  const result = useSearchContext();
  return (
      <div>
          <Box >
              
              <Typography sx={{fontSize: "4rem", fontWeight: "600"}} variant="h1">{ result.word}</Typography>
          </Box>
    </div>
  );
};

export default Body;
