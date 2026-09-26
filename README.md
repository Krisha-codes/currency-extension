# Currency Exchange Converter — Chrome Extension

A simple Chrome extension that converts an amount from a chosen currency into USD using live exchange rates.

## Features
- Pick a currency (EUR, CAD, GBP, JPY, INR) and enter an amount
- Converts it to USD using the API Ninjas Exchange Rate API
- Runs as a popup extension in Chrome

## How to run it locally
1. Clone this repo
2. Get a free API key from [API Ninjas](https://api-ninjas.com)
3. Add your API key in `exchange.js` (replace the `apiKey` value)
4. Go to `chrome://extensions` in Chrome
5. Turn on **Developer mode** (top right)
6. Click **Load unpacked** and select this project folder
7. Click the extension icon in your toolbar to use it

## Built with
- HTML, CSS, JavaScript
- Chrome Extensions (Manifest V3)
- API Ninjas Exchange Rate API

## What I learned
- How Chrome extensions are structured (manifest, popup, content/background scripts)
- Debugging with Chrome's extension error console and DevTools
- Working with fetch and async API responses
