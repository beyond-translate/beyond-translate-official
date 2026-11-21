---
title: 'Get a Google Cloud Translation API key'
description: 'Translate with the official Google Cloud Translation (Basic v2) API: create an API key, restrict it and set a budget alert.'
---

The Machine translation tab in Beyond Translate can use the official Google Cloud Translation API (Basic, v2). It runs on your own Google Cloud account, so it is not subject to the free endpoints’ rate limits, and usage and charges are billed to your account.

## Free tier and billing

- Includes **500,000 free characters per month**, resetting at the start of each month and not carrying over.
- Usage beyond the free allowance is billed pay-as-you-go (currently $20 per million characters).
- **Cloud Translation requires an active billing account linked to the project**, even while usage stays inside the free allowance. Without an active billing account, API requests and activation are rejected. Linking a billing account requires an internationally enabled credit card (e.g. Visa, MasterCard); a temporary pre-authorization hold may be made, but no actual charge is incurred within the free allowance.
- Full-page translation consumes characters in proportion to the page text, so long pages and repeated retranslation add up. Set a budget alert right after setup (see below).
- These figures were checked on 2026-11-07; the [official pricing page](https://cloud.google.com/translate/pricing) is authoritative.
- The default quota is high (about 6 million characters per minute). The extension sends up to 10 requests at a time by default and slows down automatically when rate-limited.

## Steps

1. Sign in to the [Google Cloud console](https://console.cloud.google.com/).
2. Create a new project in the project picker at the top (e.g. `beyond-translate`), or select an existing one.
3. Open the project’s [Billing page](https://console.cloud.google.com/billing) and link the project to an active billing account. If you do not have one, follow the on-screen instructions to add a credit card and activate an account.
4. Open the [Cloud Translation API page](https://console.cloud.google.com/apis/library/translate.googleapis.com), ensure your target project is selected at the top, and click **Enable**. (If no billing account is linked, a prompt will block activation until linked).
5. Once enabled, go to **APIs & Services → Credentials** ([Credentials page](https://console.cloud.google.com/apis/credentials)).
6. Click **Create credentials** at the top, and choose **API key**.
7. For security, immediately restrict the scope of this key (see below).
8. Copy the generated API key.

After applying, save the credentials in the [secure note](../#secure-note).

## Restrict API key permissions (Security best practice)

An API key is a long-lived credential. If leaked, it could potentially be used to call other paid APIs on your account. Restricting the key keeps the impact minimal:

1. In the credentials list, click the newly created API key to edit it.
2. Under **API restrictions**, select **Restrict key**.
3. In the dropdown list, select only **Cloud Translation API**, then click **Save**.
4. With this restriction in place, the key can only be used for translation requests and cannot access other Google Cloud APIs.

## Use it in the extension

1. Open the extension’s settings, and go to the Machine translation tab under the Translation services section.
2. On the Google Cloud Translation row, click **Configure**, paste the API key in the dialog, and click **Test**. The test translates a single word and uses a few characters of quota.
3. Once the test passes, it appears in the default, selection, and full-page translation service pickers. Clearing the key removes it from the pickers, and any slot that used it falls back to the default rules.

The key is stored in the extension configuration and travels with encrypted backups and sync; it never appears in logs or error messages.

## Set a budget alert

Create a budget on the [Budgets & alerts page](https://console.cloud.google.com/billing/budgets) with a monthly amount and alert thresholds you are comfortable with (such as $5 or $10). Budget alerts only send email notifications; they do not stop the service. For a hard cap, lower the daily character quota for Cloud Translation on the [Quotas page](https://console.cloud.google.com/iam-admin/quotas).

## Common errors

| Message                                                 | Cause and fix                                                                    |
| ------------------------------------------------------- | -------------------------------------------------------------------------------- |
| The API key was rejected (API key not valid)            | The key was copied incompletely or deleted. Copy it again.                       |
| Cloud Translation API is not enabled                    | Enable the API in the project from step 4; it can take a minute or two to apply. |
| Request rejected because billing is required            | The project has no active billing account linked. Complete step 3.               |
| Quota used up or too many requests (Rate / Daily Limit) | Try again later, or check and adjust the quota on the Quotas page.               |
