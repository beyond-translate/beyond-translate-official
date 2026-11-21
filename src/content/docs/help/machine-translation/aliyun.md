---
title: 'Get an Alibaba Cloud Machine Translation AccessKey'
description: 'Translate with the official Alibaba Cloud Machine Translation API: create a RAM sub-account and an AccessKey.'
---

The Machine translation tab in Beyond Translate can use the official Alibaba Cloud Machine Translation API (general edition). It runs on your own Alibaba Cloud account, so it is not subject to the free endpoints’ rate limits, and usage and charges are billed to your account.

## Free tier and billing

- The general edition includes **1 million free characters per month**, shared by the main account and its sub-accounts. The allowance resets at the start of each month and does not carry over.
- Beyond the free allowance, usage is billed pay-as-you-go (currently CNY 50 per million characters). Billing switches over the moment the allowance runs out, and the service stops as soon as the account balance goes negative. **Keep an eye on your usage to avoid unexpected charges.**
- Full-page translation uses characters in proportion to the amount of text on the page; long pages and repeated retranslation add up.
- These figures were checked on 2026-11-06; the [official billing page](https://help.aliyun.com/zh/machine-translation/product-overview/billing-overview) is authoritative.
- The extension sends up to 5 requests at a time by default and slows down automatically when rate-limited.

## Steps

1. Sign in to [Alibaba Cloud](https://www.alibabacloud.com/) and complete identity verification.
2. Open the [Machine Translation console](https://mt.console.aliyun.com/) and activate the **general edition**. Calls fail with an “account not activated” error until you do.
3. Create a dedicated **RAM sub-account** for the extension rather than using your main account’s AccessKey (see below).
4. Create an AccessKey for that sub-account: open the user in the [RAM console](https://ram.console.aliyun.com/users), choose **Create AccessKey**, then copy the **AccessKey ID** and **AccessKey Secret**. The Secret is shown only once, so save it right away.

After applying, save the credentials in the [secure note](../#secure-note).

## Use a sub-account with machine-translation-only permission

An AccessKey is a long-lived credential; if it leaks, others can use up your quota. A sub-account limited to machine translation keeps the damage small:

1. In the RAM console, create a user and tick **Permanent AccessKey access**.
2. Under **Permissions → Grant permission**, either grant the built-in system policy **`AliyunMTReadOnlyAccess`** (`alimt:Get*`, `alimt:List*`, which covers `GetBatchTranslate`) or create a custom policy that only allows the translation calls:

   ```json
   {
     "Version": "1",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": ["alimt:GetBatchTranslate", "alimt:TranslateGeneral"],
         "Resource": "*"
       }
     ]
   }
   ```

3. Do not grant that user any other permission.

## Use it in the extension

1. Open the extension’s settings, go to the Machine translation tab under Translation services.
2. On the Alibaba Cloud Machine Translation row choose **Configure**, enter the AccessKey ID and AccessKey Secret, and choose **Test**. The test translates a single word and uses a few characters of quota.
3. After the test passes, it appears in the default, selection and full-page service pickers. Clearing either field removes it from the pickers, and any slot that selected it falls back to the default rule.

The AccessKey is stored in the extension settings and travels with encrypted backups and sync; it never appears in logs or error messages.

## Common errors

| Message                            | Cause and fix                                                                                  |
| ---------------------------------- | ---------------------------------------------------------------------------------------------- |
| The AccessKey was rejected         | Wrong ID or Secret, Machine Translation not activated, or the sub-account lacks the policy.    |
| The request signature has expired  | Your computer’s clock is off by more than about 15 minutes; fix the date and time, then retry. |
| Quota used up or too many requests | The free allowance is gone or requests are too frequent; wait, or check usage in the console.  |
| Target language not supported      | Alibaba Cloud does not support that language; pick another or use a different service.         |
