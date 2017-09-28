# About the Pandorabots API

The Pandorabots API allows you to integrate our bot hosting service and natural language processing engine into your own application.

The current offering allows you to create a bot, upload files, compile, talk to a bot \(in a variety of ways\), and delete a bot.

Please take some time to read over the documentation below.

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

### Active Docs {#activedocs}

Explore each API resource below and test them out using your own parameters.

Steps to Basic Bot Deployment:  
1\) [Create a bot](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/createBot)  
2\) Upload bot file\(s\)\*\*  
3\) [Compile bot](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/compileBot)  
4 \)[Talk to your bot](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/talkBot)

\*\*NOTE: The current standard of open source Swagger.js has a bug causing a problem with file upload. There is a current workaround implemented; if you want to use this interface for uploading a file, you will need to copy the file content into the input field. For file upload, we recommend using our own[CLI](https://medium.com/pandorabots-blog/introducing-the-pandorabots-cli-215ed9d637af)or a REST client of your choice \(e.g. Postman Chrome extension\).

**HOSTNAME:**aiaas.pandorabots.com

* * [Show/Hide](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3)
  * [List Operations](https://developer.pandorabots.com/docs#)
  * [Expand Operations](https://developer.pandorabots.com/docs#)
  * [Raw](https://developer.pandorabots.com/swagger/spec/pandorabots_api_swagger_1_3.json)

  * * ### [GET](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/listBots)[/bot/{app\_id}](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/listBots)

      * [List of bots](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/listBots)
  * * ### [PUT](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/createBot)[/bot/{app\_id}/{botname}](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/createBot)

      * [Create a bot](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/createBot)
  * * ### [DELETE](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/deleteBot)[/bot/{app\_id}/{botname}](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/deleteBot)

      * [Delete a bot](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/deleteBot)
  * * ### [GET](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/listBotFiles)[/bot/{app\_id}/{botname}](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/listBotFiles)

      * [List of bot files](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/listBotFiles)
  * * ### [PUT](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/uploadFile1)[/bot/{app\_id}/{botname}/{file-kind}/{filename}](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/uploadFile1)

      * [Upload a bot file \(AIML, set, substitution, map\)](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/uploadFile1)
  * * ### [PUT](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/uploadFile2)[/bot/{app\_id}/{botname}/{file-kind}](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/uploadFile2)

      * [Upload a bot file \(pdefaults, properties\)](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/uploadFile2)
  * * ### [DELETE](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/deleteBotFile1)[/bot/{app\_id}/{botname}/{file-kind}/{filename}](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/deleteBotFile1)

      * [Delete a bot file \(AIML, set, map, substitution\)](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/deleteBotFile1)
  * * ### [DELETE](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/deleteBotFile2)[/bot/{app\_id}/{botname}/{file-kind}](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/deleteBotFile2)

      * [Delete a bot file \(pdefaults, properties\)](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/deleteBotFile2)
  * * ### [GET](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/getBotFile1)[/bot/{app\_id}/{botname}/{file-kind}/{filename}](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/getBotFile1)

      * [Retrieve a bot file \(AIML, set, map, substitution\)](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/getBotFile1)
  * * ### [GET](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/getBotFile2)[/bot/{app\_id}/{botname}/{file-kind}](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/getBotFile2)

      * [Retrieve a bot file \(pdefaults, properties\)](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/getBotFile2)
  * * ### [GET](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/compileBot)[/bot/{app\_id}/{botname}/verify](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/compileBot)

      * [Compile a bot](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/compileBot)
  * * ### [POST](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/talkBot)[/talk/{app\_id}/{botname}](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/talkBot)

      * [Talk to a bot](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/talkBot)
  * * ### [POST](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/debugBot)[/talk/{app\_id}/{botname}](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/debugBot)

      * [Debug a bot conversation](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/debugBot)
  * * ### [POST](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/atalkBot)[/atalk/{app\_id}/{botname}](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/atalkBot)

      * [Anonymous Talk](https://developer.pandorabots.com/docs#!/pandorabots_api_swagger_1_3/atalkBot)

###  {#sdks}



