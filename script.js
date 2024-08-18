function speak() {
    const textInput = document.getElementById('input').value;
    const speech = new SpeechSynthesisUtterance(textInput);
    window.speechSynthesis.speak(speech);
}