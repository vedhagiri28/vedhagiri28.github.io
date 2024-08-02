document.addEventListener('DOMContentLoaded', () => {
    const typedTextElement = document.getElementById('typed-text');
    const textToType = "Hello, welcome to the typing effect!";
    const typingSpeed = 100; // milliseconds

    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            typedTextElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        }
    }

    typeText();
});
