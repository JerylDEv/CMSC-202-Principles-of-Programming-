// Note: the onLoad() and onDeviceReady() functions are in the html file

function takePhoto() {
    let options = {
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        cameraDirection: Camera.Direction.Back,
        saveToPhotoAlbum: true
    };

    navigator.camera.getPicture(
        function cameraSuccess(imageURI) {
            displayImage(imageURI);
        },
        cameraError,
        options
    );
}

function cameraError(error) {
    alert('An error has occured. ' + error);
}

function displayImage(imageURI) {
    var imageDisplay = document.getElementById('picture-display');

    imageDisplay.classList.add('img-center');

    // Style the Image Height and Width
    imageDisplay.style.height = '300px';
    imageDisplay.style.width = '300px';

    // Display the Image source
    imageDisplay.src = imageURI;
}

function getPhoto(source) {
    navigator.camera.getPicture(displayImage, cameraError, {
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: source
    });
}