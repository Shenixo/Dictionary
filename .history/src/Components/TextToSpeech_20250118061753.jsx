import { useState } from "react";
import { useSearchContext } from "../Context/DictionaryContext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const TextToSpeech = () => {
  const [onRead, setOnRead] = useState(false);
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

  const definition = wordToRead();

  const speakText = () => {
    if (!definition) {
      console.error("No text available to speak");
      return;
    }

    setOnRead(true); 

    const utterance = new SpeechSynthesisUtterance(definition);
    utterance.lang = "en-NG";
    utterance.onend = () => setOnRead(false); // Mark as 'not reading' when speech ends

    window.speechSynthesis.speak(utterance);
  };

  const cancelSpeech = () => {
    window.speechSynthesis.cancel(); // Cancel the speech
    setOnRead(false); // Reset the state to not reading
  };

  return (
    <div>
      {!onRead ? (
        <PlayArrowIcon
          onClick={speakText}
          style={{ cursor: "pointer", color: "#a646eb", fontSize: "2.4rem" }}
        />
      ) : (
        <PauseIcon
          onClick={cancelSpeech}
          style={{ cursor: "pointer", color: "#a646eb", fontSize: "2.4rem" }}
        />
      )}
    </div>
  );
};

export default TextToSpeech;
