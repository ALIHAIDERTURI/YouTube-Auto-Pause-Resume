chrome.runtime.onInstalled.addListener(() => {
    // Set default autoPauseEnabled state to false
    chrome.storage.local.set({ autoPauseEnabled: false }, () => {
        console.log("Auto pause feature is disabled by default.");
    });
});
