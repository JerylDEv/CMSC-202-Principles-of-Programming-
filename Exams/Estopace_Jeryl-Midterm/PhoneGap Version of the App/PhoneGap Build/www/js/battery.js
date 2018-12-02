// I use this function for Debugging purpose.
function hello() {
    geolocation = 'hello :)';
    // alert('hello!!!!');
}

function batteryStatusMessage(status) {
    var message = '';

    if (status.isPlugged) {
        message = `Your battery level is ${status.level}% and it is charging.`;
    } else {
        message = `Your battery level is ${status.level}% and it is not charging.`;
    }

    var batteryStatusDisplay = document.getElementById('battery-dialog-display');
    batteryStatusDisplay.innerHTML = message;
}

function showBatteryDialogTemplate() {
    // Call the Battery Status Plugin
    window.addEventListener('batterystatus', batteryStatusMessage, false);

    // Refer to the Template ID
    var dialog = document.getElementById('battery-dialog-id');

    if (dialog) {
        dialog.show();
    } else {
        ons.createElement('battery-dialog-template.html', { append: true }).then(function(dialog) {
            dialog.show();
        });
    }
}

// This function is meant to hide dialogs thus the name. However, it can actually hide any element ids it refers to
function hideDialog(id) {
    document.getElementById(id).hide();
}