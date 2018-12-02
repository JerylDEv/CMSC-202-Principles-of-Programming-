function registerForPushNotification() {
	console.log('Register button pressed');
	window.plugins.OneSignal.registerForPushNotifications();
	// Only works if user previously subscribed and you used setSubscription(false) below
	window.plugins.OneSignal.setSubscription(true);
}

function getIds() {
	window.plugins.OneSignal.getIds(function(ids) {
		document.getElementById('OneSignalUserId').innerHTML = 'UserId: ' + ids.userId;
		document.getElementById('OneSignalPushToken').innerHTML = 'PushToken: ' + ids.pushToken;
		console.log('getIds: ' + JSON.stringify(ids));
		alert('userId = ' + ids.userId + '\npushToken = ' + ids.pushToken);
	});
}

function sendTags() {
	window.plugins.OneSignal.sendTags({ PhoneGapKey: 'PhoneGapValue', key2: 'value2' });
	alert('Tags Sent');
}

function getTags() {
	window.plugins.OneSignal.getTags(function(tags) {
		alert('Tags Received: ' + JSON.stringify(tags));
	});
}

function deleteTags() {
	window.plugins.OneSignal.deleteTags([ 'PhoneGapKey', 'key2' ]);
	alert('Tags deleted');
}

function promptLocation() {
	window.plugins.OneSignal.promptLocation();
	// iOS - add CoreLocation.framework and add to plist: NSLocationUsageDescription and NSLocationWhenInUseUsageDescription
	// android - add one of the following Android Permissions:
	// <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
	// <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
}

function syncHashedEmail() {
	window.plugins.OneSignal.syncHashedEmail('example@google.com');
	alert('Email synced');
}

function postNotification() {
	window.plugins.OneSignal.getIds(function(ids) {
		var notificationObj = {
			contents: { en: 'message body' },
			include_player_ids: [ ids.userId ]
		};
		window.plugins.OneSignal.postNotification(
			notificationObj,
			function(successResponse) {
				console.log('Notification Post Success:', successResponse);
			},
			function(failedResponse) {
				console.log('Notification Post Failed: ', failedResponse);
				alert('Notification Post Failed:\n' + JSON.stringify(failedResponse, null, 2));
			}
		);
	});
}

function setSubscription() {
	window.plugins.OneSignal.setSubscription(false);
}

function setEmail() {
	console.log('Setting email: ' + document.getElementById('email').value);
	window.plugins.OneSignal.setEmail(
		document.getElementById('email').value,
		function() {
			console.log('Successfully set email');
		},
		function(error) {
			alert('Encountered an error setting email: \n' + JSON.stringify(error, null, 2));
		}
	);
}

function logoutEmail() {
	console.log('Logging out of email');
	window.plugins.OneSignal.logoutEmail(
		function(successResponse) {
			console.log('Successfully logged out of email');
		},
		function(error) {
			alert('Failed to log out of email with error: \n' + JSON.stringify(error, null, 2));
		}
	);
}
