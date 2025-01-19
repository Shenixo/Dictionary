const TextToSpeech = ({ }) => {
    const speakText = () => {
        const utterance = SpeechSynthesisUtterance(text)
        utterance.lang = "en-US"
    }
    return (
    <div>
      
    </div>
    )
    
};
export default TextToSpeech;
