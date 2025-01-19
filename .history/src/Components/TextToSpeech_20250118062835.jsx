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
  
    let textToRead = `${result.word}.`; 
  
    if (result.phonetic) {
      textToRead += ` Pronounced as: ${result.phonetic}.`;
    }
  
    result.meanings.forEach((meaning) => {
      if (meaning.partOfSpeech) {
        textToRead += `Part of speech: ${meaning.partOfSpeech}.`;
      }
  
      meaning.definitions.forEach((def) => {
        textToRead += ` Meaning: ${def.definition}.`;
  
        if (def.example) {
          textToRead += ` Example: ${def.example}.`;
        }
  
        if (def.synonyms && def.synonyms.length > 0) {
          textToRead += ` Synonyms: ${def.synonyms.join(", ")}.`;
        }
      });
    });
  
    return textToRead;
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
    utterance.onend = () => setOnRead(false); 

    window.speechSynthesis.speak(utterance);
  };

  const cancelSpeech = () => {
    window.speechSynthesis.cancel(); 
    setOnRead(false); 
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
