const TextToSpeech = ({ }) => {
    const { result } = useSearchContext();
    const speakText = () => {
        const utterance = SpeechSynthesisUtterance(result)
        utterance.lang = "en-US"
        window.speechSynthesis.speak(utterance)
    }
    return (
    <div>
      
    </div>
    )
    
};
export default TextToSpeech;
