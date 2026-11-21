---
title: 'Get an Azure Translator key and region'
description: 'Translate with the official Azure Translator (v3) API: create a resource, choose the free F0 tier and enter the region.'
---

The Machine translation tab in Beyond Translate can use the official Azure Translator API (v3). It runs on your own Azure account, so it is not subject to the free endpoints’ rate limits, and usage and charges are billed to your account.

## Free tier and billing

- Includes the **Free F0** pricing tier with **2 million free characters per month**, resetting at the start of each month and not carrying over.
- **Protection against unexpected charges**: When the monthly 2 million characters limit is reached, the API directly returns errors (HTTP 403 / 429) and stops serving requests rather than automatically charging you. If higher throughput is needed, manual upgrade to the paid tier (S1, currently $10 per million characters) is required.
- **Azure subscription and billing rules**: Creating a Translator resource requires an Azure subscription. New accounts can apply for an **Azure Free Trial**:
  - The Free Trial subscription includes a default **$0 Spending Limit**.
  - Includes $200 in Azure credits for the first 30 days. When the credits run out or the 30-day trial expires, billable resources are paused; **your credit card will not be automatically charged** unless you explicitly upgrade to pay-as-you-go in the portal.
  - Translator F0 is part of Azure’s 55+ services that stay free even after the trial period.
- Full-page translation consumes characters in proportion to the page text, so long pages and repeated retranslation add up.
- These figures were checked on 2026-11-07; the [official pricing page](https://azure.microsoft.com/pricing/details/cognitive-services/translator/) is authoritative.
- The extension sends up to 10 requests at a time by default and slows down automatically when rate-limited.

## Steps

1. Sign in to the [Azure portal](https://portal.azure.com/).
2. Verify you have an active subscription: if you have none, click "Start with an Azure free trial" on the portal home page, and verify your phone number and credit card (credit cards are used for identity validation and are not charged during the free trial).
3. In the search box at the top, search for **Translator** (under Marketplace / Azure AI services) and click **Create**.
4. Configure the basic details:
   - **Subscription**: Select your active subscription (e.g. `Azure subscription 1`).
   - **Resource Group**: Click "Create new" or select an existing resource group (e.g. `rg-translator`).
   - **Region**: Choose `East Asia` (low latency in Asia) or another desired geographic region. **Note**: When creating a new resource group inline, do not select "Global" as resource groups require a physical location.
   - **Name**: Enter a globally unique alphanumeric name (e.g. `beyond-translator-test`).
   - **Pricing tier**: **Select `Free F0 (Up to 2M characters translated per month)`**.
5. Click **Review + create** at the bottom, wait for validation to pass, then click **Create**. Deployment typically takes 10 to 30 seconds.
6. When deployment finishes, navigate to the resource page.
7. In the left menu under the "Resource Management" section, click **Keys and Endpoint**.
8. Copy **KEY 1** (or KEY 2) and the **Location/Region** (e.g. `eastasia`).

After applying, save the credentials in the [secure note](../#secure-note).

## What to enter as the region

Enter the **Location/Region** value from the Keys and Endpoint page, lowercase and without spaces, for example `eastasia`, `westus2`, or `japaneast`. If the resource was created in the Global region, enter `global`. The region must match the region where the key was deployed, otherwise Azure will reject the request with a 401 unauthorized error.

## Use it in the extension

1. Open the extension’s settings, and go to the Machine translation tab under the Translation services section.
2. On the Azure Translator row, click **Configure**, paste the key, enter the region, and click **Test**. The test translates a single word and uses a few characters of quota.
3. Once the test passes, it appears in the default, selection, and full-page translation service pickers. Clearing the key removes it from the pickers, and any slot that used it falls back to the default rules.

The key and region are stored in the extension configuration and travel with encrypted backups and sync; they never appear in logs or error messages.

## Set a cost alert (paid tier)

If you upgrade the resource to the paid tier (S1) in the future, create a budget under **Cost Management + Billing → Budgets** with a monthly amount and alert thresholds you are comfortable with. Budget alerts only notify; they do not stop the service. The Free F0 tier does not incur charges.

## Common errors

| Message                                            | Cause and fix                                                                                         |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| The key was rejected, or the region does not match | The key was copied incompletely, or the region differs from the resource’s. Copy both again (step 8). |
| Quota used up or too many requests                 | The Free tier’s monthly 2M allowance is used up, or requests are too frequent. Wait, or switch to S1. |
