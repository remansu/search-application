
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    const micButton = document.getElementById('mic');
    const searchBox = document.getElementById('search-box');

    micButton.addEventListener('click', () => {
        recognition.start();
    });

    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        searchBox.value = speechResult;

        console.log(`Recognized Speech: ${speechResult}`);
        performSearch(speechResult);
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        alert('Voice recognition failed. Please try again.');
    };

    function performSearch(query) {
        console.log(`Performing search for: ${query}`);

    }
} else {
    alert('Your browser does not support voice search. Please use a modern browser like Chrome or Edge.');
}
