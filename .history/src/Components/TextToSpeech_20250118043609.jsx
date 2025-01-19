import { useSearchContext } from "../Context/DictionaryContext";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const TextToSpeech = () => {
    const { result } = useSearchContext();
    const speakText = () => {
        const utterance = SpeechSynthesisUtterance(result)
        utterance.lang = "en-US"
        window.speechSynthesis.speak(utterance)
    }
    return (
    <div>
            <PlayArrowIcon onClick={ } />
    </div>
    )
    
};
export default TextToSpeech;
