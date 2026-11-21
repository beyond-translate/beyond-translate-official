---
title: 'Get a Volcengine Machine Translation Access Key'
description: 'Translate with the official Volcengine Machine Translation API: create an IAM sub-user and an Access Key.'
---

The Machine translation tab in Beyond Translate can use the official Volcengine Machine Translation API. It runs on your own Volcengine account, so it is not subject to the free endpoints’ rate limits, and usage and charges are billed to your account.

## Free tier and billing

- The first **2 million characters per month** are free, settled daily. Beyond that, usage is billed pay-as-you-go (currently CNY 49 per million characters, with no tiers).
- Only postpaid billing is offered: once the balance goes negative, the service is stopped by noon the next day at the latest, and availability is not guaranteed while the account is in arrears. **Keep an eye on your usage to avoid unexpected charges.**
- Full-page translation uses characters in proportion to the amount of text on the page; long pages and repeated retranslation add up.
- These figures were checked on 2026-11-06; the [official billing page](https://docs.volcengine.com/docs/MachineTranslation/Productbilling?lang=zh) is authoritative.
- The extension sends up to 5 requests at a time by default and slows down automatically when rate-limited.

## Steps

1. Sign in to [Volcengine](https://www.volcengine.com/) and complete identity verification.
2. Open the [Machine Translation console](https://console.volcengine.com/translate) and activate the service.
3. Create a dedicated **IAM sub-user** for the extension rather than using your main account’s keys (see below).
4. Create a key for that sub-user: open it under **Identity management → Users**, choose **Keys → New key**, then copy the **Access Key ID** and **Secret Access Key**. The Secret is shown only once, so save it right away.

After applying, save the credentials in the [secure note](../#secure-note).

## Use a sub-user with machine-translation-only permission

An access key is a long-lived credential; if it leaks, others can use up your quota. A sub-user limited to machine translation keeps the damage small:

1. Under **Identity management → Users**, create a user and tick **Programmatic access**.
2. Add only the machine translation system policy **TranslateFullAccess** (search for it under the user’s **Permissions → Add permissions**).
3. Do not grant that user any other permission.

## Use it in the extension

1. Open the extension’s settings, go to the Machine translation tab under Translation services.
2. On the Volcengine Machine Translation row choose **Configure**, enter the Access Key ID and Secret Access Key, and choose **Test**. The test translates a single word and uses a few characters of quota.
3. After the test passes, it appears in the default, selection and full-page service pickers. Clearing either field removes it from the pickers, and any slot that selected it falls back to the default rule.

The key is stored in the extension settings and travels with encrypted backups and sync; it never appears in logs or error messages. The region is fixed to North China (cn-north-1), so there is nothing to fill in.

## Common errors

| Message                            | Cause and fix                                                                                     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------- |
| The Access Key was rejected        | Wrong ID or Secret, Machine Translation not activated, or the sub-user lacks TranslateFullAccess. |
| The request signature has expired  | Your computer’s clock is off; fix the date and time, then retry.                                  |
| Quota used up or too many requests | The free allowance is gone or requests are too frequent; wait, or check usage in the console.     |
| Target language not supported      | Volcengine cannot translate into that language; pick another or use a different service.          |
