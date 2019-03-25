---
permalink: /api-basics/
layout: default
---

{% include sidebar.md %}
<div markdown="1" class="pb-docs__content">

# About The Pandorabots API

The Pandorabots API allows you to integrate our bot hosting service and natural language processing engine into your own application.  Using our Pandorabots Platform, you can manage all bot development on our user interface, and deploy your bot to production channels. For your custom application, it is recommended to only use the talk API to your production bot.

Our Legacy API platform offers API for the full bot development options: create a bot, upload files, compile, delete a bot, in addition to talk to a bot \(in a variety of ways\) since it is a separate platform with no user interface.

### Requirements {#reqs}

##### 1 - Bot Credentials

In order to connect to the Pandorabots API, you have to upgrade your Sandbox account to a Developer (or other paid) plan. Once you have successfully upgraded with a valid credit card, you can retrieve credentials for accessing your production bot(s) (`user_key` or `botkey`). This is required for all API calls, and should be kept secret.

##### 2 - Rate Limits

When you upgrade from a Sandbox account, you picked a plan that specified some limits on API and usage of our server. If you want to upgrade your plan or discuss customized options, feel free to contact [support@pandorabots.com](mailto:support@pandorabots.com)


</div>
