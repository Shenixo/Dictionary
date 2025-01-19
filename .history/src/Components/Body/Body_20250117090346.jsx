/* eslint-disable react/prop-types */
import { Container } from "@mui/material";
import { DictionaryContext, useSearchContext } from "../../Context/DictionaryContext";

const Body = () => {
    const {word} = useSearchContext(DictionaryContext);
  const result = useSearchContext();
  return (
      <div>
          <Container>
              
      <h1>{result.word}</h1>
          </Container>
    </div>
  );
};

export default Body;
