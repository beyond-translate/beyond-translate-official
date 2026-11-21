---
title: Privacy
description: What Beyond Translate touches, where that data goes, and this website's own privacy boundary.
---

This page explains how the Beyond Translate extension handles data, and how this website behaves.

## Keys and credentials

API keys, cloud access keys, cloud-drive authorization, GitHub tokens, WebDAV passwords and the data key are stored only in the extension's local storage. Content scripts cannot read them, and the settings page and test results never write credentials to logs or error messages.

## Translation requests

When translating, the selected text is sent to the translation service you chose:

- With Google Translate or Bing Translate, the text goes to that service's free endpoint.
- With Google Cloud Translation, Azure Translator, Alibaba Cloud Machine Translation or Volcengine Machine Translation, the text goes to your own cloud account.
- With fallback translation enabled, full-page paragraphs that still fail after the model recovers are sent to the chosen fallback machine translation service.

Firefox's installation data-collection declaration describes this behavior. The extension never records the source page.

## Cache, notebook and page archive

- The translation cache is local and only reuses successful translations. It never enters backups or sync, and it does not record the source page.
- The notebook stores words and sentences you add yourself; it does not record the source page.
- The page archive stores full-page translations locally. Whether a page is archived is decided by your manual action or by site rules.

## Backup and sync

Extension settings, the notebook and the page archive can be packed into an encrypted `.zip` backup, or uploaded manually to Gist, Dropbox, Google Drive, OneDrive or WebDAV. Backup and sync files are always encrypted with a data key; upload, download, history and restore happen only when the user starts them.

Sync credentials stay on the device and never enter backups. Gist sync contains only settings and the notebook; cloud-drive sync contains the same encrypted backup package.

## Site access permission

The extension is granted the `<all_urls>` host permission once at installation. It is needed because selection and full-page translation must run on any site, and translation requests must reach the user's chosen model endpoints (including local services and custom Base URLs) and sync backends.

If site access is revoked, translation fails. An **Authorize** button appears at the top of the settings page and in test results; clicking it grants access again.

## License

License state, activation email, license credential and refresh key are stored only on the device and never enter backups or sync.

During activation, the extension sends the email and device name to the license service. Opening the license page triggers at most one check per day; there is no background polling, and no license request is made before activation. Deactivating the device clears the local credential and email and releases a device slot; the local data is cleared even if the license service cannot be reached.

## Purchases and orders

When you buy a license on this site, the purchase page sends your purchase email, offering, payment method, transaction number and human-verification token to the Beyond Translate license service, which uses them to review the payment and issue the license. Order data is not used for marketing and never enters the extension.

The purchase page loads Cloudflare Turnstile for human verification. It is the only third-party script on this site and loads only while sales are open; when sales are closed, the purchase page loads no Turnstile and sends no request to the license service.

## This website

Pages other than the purchase page use no cookies, load no third-party analytics or advertising scripts and collect no visitor data. Fonts, scripts and styles load only from this site, with no external CDN; while sales are open, the purchase page loads Cloudflare Turnstile for human verification. The search index ships with the site.

The machine translation guides link to Google, Microsoft, Alibaba Cloud and Volcengine websites; their own privacy policies apply there.

## Changes and contact

This page is updated whenever the relevant features or data flows change. Questions or problems about privacy can be raised in the [public feedback repository](https://github.com/beyond-translate/feedback/issues).
