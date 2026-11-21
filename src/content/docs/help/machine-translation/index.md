---
title: Machine translation services
description: The free Google and Bing endpoints, the four official cloud APIs, their credentials and where to configure them.
---

> In most cases, machine translation services are faster, and their quality is good enough for everyday use. For reading, research and getting the gist of a page, start with machine translation; switch to a model provider when tone, terminology or long sentences need more care.

Beyond Translate ships with two kinds of machine translation: free endpoints that work out of the box, and official cloud APIs that use credentials you apply for yourself. Neither uses prompts or produces dictionary entries.

## Free endpoints

Google Translate and Bing Translate use public free endpoints. No API key is needed, and one of them is the default right after installation. A Simplified Chinese interface defaults to Bing Translate; other interfaces default to Google Translate. Once you add your first model entry, that model becomes the default.

The free endpoints have no service guarantee. They may be rate-limited, change their addresses or be temporarily unavailable. If one fails, switch to another service or configure an official API under Translation services.

## Official APIs

Official APIs run on your own cloud account, are not subject to the free endpoints' rate limits, and bill usage to your account. A service only appears in the translation service pickers after you fill in its credentials and pass the test.

| Service                                             | Credentials                       | Guide                                                   |
| --------------------------------------------------- | --------------------------------- | ------------------------------------------------------- |
| Google Cloud Translation (Basic v2)                 | API key                           | [Get a Google Cloud Translation API key](google-cloud/) |
| Azure Translator (v3)                               | Key + region                      | [Get an Azure Translator key and region](azure/)        |
| Alibaba Cloud Machine Translation (general edition) | AccessKey ID + Secret             | [Get an Alibaba Cloud AccessKey](aliyun/)               |
| Volcengine Machine Translation                      | Access Key ID + Secret Access Key | [Get a Volcengine Access Key](volcengine/)              |

## Secure note

Applying for an official API credential means a trip through a cloud console, and secrets are often shown only once. Save them in a password manager such as Bitwarden ([Firefox](https://addons.mozilla.org/firefox/addon/bitwarden-password-manager/)/[Chrome](https://chromewebstore.google.com/detail/bitwarden-password-manage/nngceckbapebfimnlniiiahkandclblb)/[Edge](https://microsoftedge.microsoft.com/addons/detail/bitwarden-free-password/jbkfoedolllekgbhcbcoahefnbanhhlh)): create a secure note named “Beyond Translate” and add a custom field for each name below; you can copy them as-is.

- `Google Cloud API Key`
- `Azure Translator Key`
- `Azure Translator Region`
- `Alibaba Cloud AccessKey ID`
- `Alibaba Cloud AccessKey Secret`
- `Volcengine AccessKey ID`
- `Volcengine Secret Access Key`
- `Beyond Translate Secret` (data encryption key; fill it in after enabling backups or sync)

The extension also stores credentials in its local configuration. They travel with encrypted backups and sync, never appear in logs or error messages, and are not exposed to content scripts. The secure note is an extra copy for reinstalling, switching devices, or managing the cloud resources later.

## Where to configure it

Open the extension's settings and go to the Machine translation tab under Translation services. Find the service, click **Configure**, paste the credentials and click **Test**. The test translates a single word and uses a few characters of quota.

Once the test passes, the service appears in the default, selection and full-page translation service pickers. Clearing the credentials removes it from the pickers, and any slot that used it falls back to the default rules.

## Fallback translation

When full-page translation uses a model entry, you can also choose a fallback machine translation service under Translation services. Paragraphs that still fail after the model recovers are translated by the fallback and shown normally, with a light underline; click such a paragraph to retranslate it with the model. Fallback translations are not written to the page archive.

Selection translation and dictionary entries never use the fallback, and neither does full-page translation when the selected service is already a machine translation service.
