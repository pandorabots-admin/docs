---
permalink: /api-basics/
layout: default
---

{% include sidebar.md %}
<div class="pb-docs__content">

# About The Pandorabots API

###### Note: Currently, API access is only available by creating a separate account on [chatbots.io](/chatbots.io). By the end of 2017, you will be able to use the API in conjunction with the Pandorabots Platform UI available via [www.pandorabots.com](/www.pandorabots.com).

---

The Pandorabots API allows you to integrate our bot hosting service and natural language processing engine into your own application. The current offering allows you to create a bot, upload files, compile, talk to a bot \(in a variety of ways\), and delete a bot.

### Requirements {#reqs}

##### 1 - User Key

In order to connect to the Pandorabots API, you have to register for a plan and await approval from an administrator. Once your account and plan have been approved, you can retrieve your`user_key`. This is required for all API calls, and should be kept secret.

You should include your user key as a URL parameter to each API call that you make:

```
  user_key=USER-KEY
```

Your Application ID is required in the path of your request. This can be found on your application's page. You may have multiple bots under the same`app_id`.

##### 2 - Rate Limits

When you registered for an account, you picked a plan that specified some limits on API and usage of our server. If you want to upgrade your plan or discuss customized options, feel free to contact [support@pandorabots.com](mailto:support@pandorabots.com)

### Bot Files {#botFiles}

NOTE: This platform is independent of the [Playground](https://playground.pandorabots.com/). If you built bots on the Playground that you want to deploy on AIaaS, you will have to download your bot files, and create bots on AIaaS using the API.

AIML is a markup language that contains many rich features for creating chatbots. If you have written AIML before, or if you already have bot files, you can start from scratch and upload files via the API.

We have released a base bot called Rosie, which will serve as a great starting place for any bot developer. Rosie is a fork of the A.L.I.C.E. project, and is optimized for use on the Pandorabots platform. She comes preloaded with tons of reductions, sets, and maps, which means you won't have to reinvent the wheel in order to have a conversational bot.

[Download Rosie](https://github.com/pandorabots/rosie)

If you do not wish to use Rosie as a chatbot base, we suggest you at least grab the [substitution files available on Github](https://github.com/pandorabots/substitutions) and upload them to your bot. These files perform input pre-processing as well as allow certain string transformations to take place in AIML templates. Refer to [this blog post](http://blog.pandorabots.com/substitutions-and-sentence-splitting/) for more information regarding the use of substitutions and substitution files.

You may download the [AIML utilities repository](http://github.com/pandorabots/aiml-utilities) from our Github as well.

### Bot Compilation {#botCompile}

If you are a user of the Playground, one concept that may be unclear to you is that ofbot compilation. Each time you modify or upload a new file, the bot must be compiled before the changes are available during conversation.

If you have just created bot, you must compile it before using the Talk API.

If you have previously compiled a bot, but have since made changes or uploaded a new file, the changes will not be apparent until you re-compile the bot. You may still use the Talk API, however, you will be talking to the previously compiled version of the bot.

</div>
