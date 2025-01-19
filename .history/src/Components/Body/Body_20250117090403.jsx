/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { DictionaryContext, useSearchContext } from "../../Context/DictionaryContext";

const Body = () => {
    const {word} = useSearchContext(DictionaryContext);
  const result = useSearchContext();
  return (
      <div>
          <Box>
              
          </Box>
      <h1>{result.word}</h1>
    </div>
  );
};

export default Body;
