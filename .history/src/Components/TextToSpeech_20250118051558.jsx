import { useSearchContext } from "../Context/DictionaryContext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const TextToSpeech = () => {
  const { result } = useSearchContext();

  const wordToRead = () => {
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
    const utterance = new SpeechSynthesisUtterance("I AM A m");
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <PlayArrowIcon onClick={speakText} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default TextToSpeech;
