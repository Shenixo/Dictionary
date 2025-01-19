const TextToSpeech = ({ }) => {
    const speakText = () => {
        const utterance = SpeechSynthesisUtterance(text)
        utterance.lang = "en-US"
        window.speechSynthesis
    }
    return (
    <div>
      
    </div>
    )
    
};
export default TextToSpeech;
