let isAutoPauseEnabled = false; // Track if auto-pause is enabled
let focusListener; // Store the focus listener for removal
let blurListener; // Store the blur listener for removal

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.autoPauseEnabled !== undefined) {
        isAutoPauseEnabled = request.autoPauseEnabled; // Update the state

        if (isAutoPauseEnabled) {
            console.log('Auto-pause is enabled.');
            handleAutoPause(); // Add event listeners to pause/resume the video
        } else {
            console.log('Auto-pause is disabled.');
            removeAutoPause(); // Remove the event listeners
        }
        sendResponse({ status: "State updated" });
    }
});

function handleAutoPause() {
    const video = document.querySelector('video');
    if (!video) return;

    focusListener = function() {
        video.play();
    };

    blurListener = function() {
        video.pause();
    };

    window.addEventListener('focus', focusListener); // Listen for focus event
    window.addEventListener('blur', blurListener); // Listen for blur event
}

function removeAutoPause() {
    if (focusListener) {
        window.removeEventListener('focus', focusListener);
        focusListener = null; // Clear the listener reference
    }
    if (blurListener) {
        window.removeEventListener('blur', blurListener);
        blurListener = null; // Clear the listener reference
    }
}
