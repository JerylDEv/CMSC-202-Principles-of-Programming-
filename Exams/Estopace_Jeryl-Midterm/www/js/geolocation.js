// Note: the onLoad() and onDeviceReady() functions are in the html file

// Setting the Location Accuracy to High
function onRequestSuccess() {
	// alert('Successfully requested accuracy: ' + success.message);
	alert(
		'\nThe Location mode is properly set. You may now use the Geolocation feature of this app.\n\nTurn on your Mobile data or connect to a Wifi to improve the accuracy of the feature.'
	);
	document.getElementById('geolocation-button').addEventListener('click', getCurrentLocation);
}

function onRequestFailure() {
	// alert('Accuracy Request failed: error code=' + error.code + '; error message=' + error.message);
	if (
		confirm(
			'\nThe Geolocation feature of this app will not work if you do not set the Location mode to "High Accuracy". \n\nWould you like to navigate to the Location settings page and do this manually?'
		)
	) {
		cordova.plugins.diagnostic.switchToLocationSettings();
		document.getElementById('geolocation-button').addEventListener('click', getCurrentLocation);
	} else {
		alert(`\nThe Geolocation feature of this app may not work since the Location Mode is not properly set.`);
	}
}

function getCurrentLocation() {
	function onSuccess(position) {
		var d = new Date(position.timestamp);

		var successmsg = `<div align="left">
            Longitude: ${position.coords.longitude}&deg; <br /> 
            Latitude: ${position.coords.latitude}&deg; <br /> 
            Altitude: ${position.coords.altitude || 0} meters <br /> 
            Accuracy: ${position.coords.accuracy || 0} meters <br /> 
            Timestamp: ${d.toLocaleString()} <div/>`;

		var currentGeolocationDisplay = document.getElementById('geolocation-dialog-display');
		currentGeolocationDisplay.innerHTML = successmsg;
	}

	// onError Callback receives a PositionError object
	function onError(error) {
		var errormsg = `<div align="left">
            Code: ${error.code} <br />
            Message: ${error.message} <br />
            Please set your Location mode to "High Accuracy". <div/>`;

		var currentGeolocationDisplay = document.getElementById('geolocation-dialog-display');
		currentGeolocationDisplay.innerHTML = errormsg;
	}

	var options = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };

	navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

	// Refer to the Template ID
	var dialog = document.getElementById('geolocation-dialog-id');

	if (dialog) {
		dialog.show();
	} else {
		ons.createElement('geolocation-dialog-template.html', { append: true }).then(function(dialog) {
			dialog.show();
		});
	}
}
