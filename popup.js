// Function to update the button text based on the current state
function updateButtonText(isEnabled) {
    const button = document.getElementById('toggle');
    button.textContent = isEnabled ? 'Disable Auto Pause' : 'Enable Auto Pause';
}

// Load the state when the popup is opened
chrome.storage.local.get(['autoPauseEnabled'], (result) => {
    const isEnabled = result.autoPauseEnabled !== undefined ? result.autoPauseEnabled : false; // default to false
    updateButtonText(isEnabled);
});

// Add click event listener to the button
document.getElementById('toggle').addEventListener('click', () => {
    // Toggle the state
    chrome.storage.local.get(['autoPauseEnabled'], (result) => {
        const currentState = result.autoPauseEnabled !== undefined ? result.autoPauseEnabled : false; // Get current state
        const newState = !currentState; // Toggle the state

        // Update the storage
        chrome.storage.local.set({ autoPauseEnabled: newState }, () => {
            updateButtonText(newState);

            // Send message to content script to enable/disable auto-pause
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                if (tabs.length > 0) {
                    chrome.tabs.sendMessage(tabs[0].id, { autoPauseEnabled: newState }, (response) => {
                        if (chrome.runtime.lastError) {
                            // console.error(chrome.runtime.lastError);
                        } else {
                            console.log("Response from content script:", response);
                        }
                    });
                }
            });
        });
    });
});
