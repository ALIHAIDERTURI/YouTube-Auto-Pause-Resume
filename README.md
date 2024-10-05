# YouTube Auto Pause & Resume Chrome Extension

**YouTube Auto Pause & Resume** is a simple and efficient Chrome extension designed to automatically pause YouTube videos when you switch tabs or applications and resume them when you return to the YouTube tab. It provides an easy-to-use interface to enable or disable this feature at any time.

## Features

- Automatically pauses YouTube videos when you leave the tab or switch applications using `Alt+Tab`.
- Automatically resumes the video when you return to the YouTube tab.
- Popup interface allows you to enable or disable the feature.
- Works on all YouTube videos.

## How It Works

The extension uses the `visibilitychange` event in the content script to detect when the current tab with a YouTube video is hidden or visible, allowing it to automatically pause or resume the video. The popup provides an interface to enable or disable this functionality.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ALIHAIDERTURI/youtube-auto-pause-extension.git
    ```

2. Open **Google Chrome** and navigate to `chrome://extensions/`.

3. Toggle the **Developer Mode** switch in the top-right corner.

4. Click on the **Load unpacked** button and select the folder containing the extension files.

5. The extension will now be installed and visible in your browser toolbar.

## Usage

1. Open any **YouTube video** in a Chrome tab.
2. Click the **YouTube Auto Pause & Resume** extension icon in your Chrome toolbar to open the popup.
3. Toggle the **"Enable Auto Pause"** or **"Disable Auto Pause"** button as per your preference.
4. When enabled, the video will automatically pause when you switch to another tab or application and resume when you come back.

## Contributing

We welcome contributions to enhance the extension's functionality! If you have suggestions, feel free to open an issue or submit a pull request.
