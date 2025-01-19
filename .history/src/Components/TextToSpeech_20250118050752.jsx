import { useSearchContext } from "../Context/DictionaryContext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const TextToSpeech = () => {
    const { result } = useSearchContext();
    
  const wordToRead = () => {
    const ReadOutLoud = result.meanings.map((meaning) => 
         meaning.definitions.map(def => {
            return def.definition.join(". ")
        })
    )
    return ReadOutLoud.join(". ")
}
const definition = wordToRead()
    console.log("readOutLoud", definition)
    
  const speakText = () => {
    if (!definition) {
        console.error("No text available to speak");
        return;
      }
    const utterance = new SpeechSynthesisUtterance(definition); 
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
