import { useSearchContext } from "../Context/DictionaryContext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const TextToSpeech = () => {
  const { result } = useSearchContext();

  const speakText = () => {
    if (!result || !result.word) {
      console.error("No text available to speak");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(result.defination); 
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
