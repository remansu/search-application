
const galleryIcon = document.getElementById('gallery');
const fileInput = document.getElementById('file-input');

galleryIcon.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
        console.log(`Selected file: ${selectedFile.name}`);
    }
});
