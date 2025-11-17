Payback Auto-Coupon Activator – Chrome Extension

Automatically activates all available PAYBACK eCoupons on www.payback.de
 — including partner coupon pages.
The extension searches for all “Jetzt aktivieren” buttons (even inside Shadow DOM components) and activates every available coupon automatically.

Features

✔ Auto-activates all PAYBACK coupons
✔ Supports partnerId pages, e.g.
    https://www.payback.de/coupons?partnerId=REWE
✔ Works with dynamic content and Shadow DOM
✔ Detects and clicks all “Jetzt aktivieren” buttons
✔ No configuration needed
✔ 100% client-side, no external servers
✔ Open-source, transparent JavaScript


Installation (Developer Mode)

1. Download or clone this repository.
2. Open Chrome and go to:

    chrome://extensions

3. Enable Developer Mode (top-right).
4. Click Load unpacked.
5. Select the folder containing:

    manifest.json
    content.js

The extension will load instantly.


How It Works ?

PAYBACK often renders coupon cards using Web Components and Shadow DOM, so normal querySelectorAll will not find the activation buttons.

This extension:

- Recursively walks the DOM and all shadowRoots
- Finds buttons whose text contains “Jetzt aktivieren”
- Clicks them automatically
- Repeats the scan several times to catch late-loaded coupons


Files

manifest.json

- Defines permissions, content scripts, and URL matching:

    Runs on
    https://www.payback.de/coupons*
    https://www.payback.de/ecoupons*

- Injects the script automatically when coupon pages load


content.js

- The main logic:
- Deep DOM traversal
- Shadow DOM scanning
- Automatic coupon activation
- Logging via DevTools console


Debugging

If activation does not start:

- Open DevTools → Console
- Refresh the page
- Check if this message appears:

    Payback Extension Loaded

- If not, the extension is not injected → check your manifest.
- If yes, but coupons don’t activate → send me the console output and I’ll adjust the selectors.


Disclaimer

This extension:

- Does not store your login credentials
- Does not communicate with external servers
- Only runs on payback.de
- Only automates manual clicking you would normally perform yourself
- Use at your own responsibility and ensure compliance with PAYBACK’s website terms.


Contributing

Pull requests are welcome.
You can improve:
- Additional selector logic
- UI popup for manual activation
- Icon set
- Multi-language support

License

- MIT License.
- Free to use, modify, and distribute.