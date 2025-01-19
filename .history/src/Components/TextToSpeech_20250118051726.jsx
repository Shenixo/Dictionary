import { useSearchContext } from "../Context/DictionaryContext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const TextToSpeech = () => {
  const { result } = useSearchContext();

  const wordToRead = () => {
    if (!result || !result.meanings) {
      console.error("No meanings available in the result");
      return "";
    }
    const ReadOutLoud = result.meanings.map((meaning) =>
      meaning.definitions.map((def) => def.definition).join(". ")
    );
    return ReadOutLoud.join(". ");
  };

  const definition = wordToRead();

  const speakText = () => {
    if (!definition) {
      console.error("No text available to speak");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(definition);
    utterance.lang = "en-GB"; 
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <PlayArrowIcon onClick={speakText} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default TextToSpeech;
