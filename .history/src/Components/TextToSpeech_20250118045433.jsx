import { useSearchContext } from "../Context/DictionaryContext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const TextToSpeech = () => {
  const { result } = useSearchContext();

  const speakText = () => {
    if (!result || !result.word) {
      console.error("No text available to speak");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(result.definition); 
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

    const wordToRead = () => {
        const ReadOutLoud = result.meaning.map((definition) => {
            return definition
        })
        return 
    }
    const 
    console.log()
  return (
    <div>
      <PlayArrowIcon onClick={speakText} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default TextToSpeech;
