const {result} = use
const TextToSpeech = ({ }) => {
    const speakText = () => {
        const utterance = SpeechSynthesisUtterance(text)
        utterance.lang = "en-US"
        window.speechSynthesis.speak(utterance)
    }
    return (
    <div>
      
    </div>
    )
    
};
export default TextToSpeech;
