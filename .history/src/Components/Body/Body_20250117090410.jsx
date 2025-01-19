/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { DictionaryContext, useSearchContext } from "../../Context/DictionaryContext";

const Body = () => {
    const {word} = useSearchContext(DictionaryContext);
  const result = useSearchContext();
  return (
      <div>
          <Box >
              
      <h1>{result.word}</h1>
          </Box>
    </div>
  );
};

export default Body;
