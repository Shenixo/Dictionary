import { useSearchContext } from "../Context/DictionaryContext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const [onRead, setOnRead]
const TextToSpeech = () => {
  const { result } = useSearchContext();
  if (!("speechSynthesis" in window)) {
    console.error("Speech Synthesis is not supported in this browser.");
    return;
  }

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
    const ReadWordOnScreen = () => {
        const wordOnScreen = result.word
    }

  const definition = wordToRead();

  const speakText = () => {
    if (!definition) {
      console.error("No text available to speak");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(definition);
    utterance.lang = "en-GB";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <PlayArrowIcon
        onClick={speakText}
        style={{ cursor: "pointer", color: "#a646eb", fontSize: "2.4rem" }}
      />
    </div>
  );
};

export default TextToSpeech;
