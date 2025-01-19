const TextToSpeech = ({ }) => {
    const speakText = () => {
        const utterance = SpeechSynthesisUtterance(text)
        utterance.lang = "en-US"
        window.speechSynthesis.speak
    }
    return (
    <div>
      
    </div>
    )
    
};
export default TextToSpeech;
