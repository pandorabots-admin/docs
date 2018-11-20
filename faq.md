#Frequently Asked Questions

######_Can't find the answer to your question below? Email us at support@pandorabots.com_
___
###AIML

**What is AIML?**

Artificial Intelligence Markup Language (AIML) is a simple, XML-based scripting language and the open standard for writing chatbots. We recommend taking the *Quick Start* (accessible via the user icon drop-down menu) to learn AIML basics and [Bot Building 101](/building-bots/tutorial-building-bots-on-the-pandorabots-platform.md) for a deeper dive.

**What is the difference between AIML 1.0 and AIML 2.0?**

The AIML 2.0 specification introduces a number of new features to the language that dramatically improve the natural language processing power of chatbots. The current Pandorabots AIML interpreter is backwards compatible with AIML 1.0, so platform users can make full use of any AIML 1.x bot files. However, it does not currently support Javascript. For more details, please read Dr. Richard Wallace's full [AIML 2.0 specification](https://docs.google.com/a/pandorabots.com/document/d/1wNT25hJRyupcG51aO89UcQEiG-HkXRXusukADpFnDs4/pub).

**What happened to the AIML 1.0 platform? **

You can still access the AIML 1.0 platform [here](https://www.pandorabots.com/botmaster/en/home). However, it is no longer supported as of 2015 and all existing users will be eventually upgraded to the 2.0 service. We encourage you to upgrade and note that the current platform is backwards compatbile with AIML 1.0 so you can easily upgrade by uploading your files. 

**How can I address common AIML related alerts / errors?**

* Make sure that your bot is compiled without AIML compile errors. You can see your bot's compile status on Left Navigation Bar. If your bot is uncompiled, view the error message to see how to fix your AIML error. Sometimes the error is not known but a position number returned corresponds to the character position in the file where the compiler encountered the error. You must fix the error before you can talk to your bot.  
 

* Next, take a look at your code. One common problem is having multiple categories with the same pattern. The AIML interpreter prioritizes categories from bottom to top, within each individual file as well as in the file list itself, based on file load order. If you do have duplicate patterns, the one appearing lowest in a file or in the files list will be matched first. You can fix this by removing the unwanted category. You can also debug your bot by using the trace feature found on the chat widget. Utilizing this feature allows you to see the series of categories that are engaged by a particular input, rather than just the bot's final response. 

* Even if the category you were expected to match is in a file last uploaded, it is possible that higher priority wildcards may also be matching a pattern that you aren't expected, or if topics are being used, the pattern isn't matching within the topic (or that) elements.

* Another common problem involves inadvertently setting the bot off into an infinitely recursive loop. This occurs when a category reduces the input in such a way that it feeds back into itself. This type of recursion is allowed in AIML loops, but if no breakpoint exists, the loop will never end, and the bot will respond with "Too much recursion in AIML." You can fix this type of error by visiting the offending categories, and ensuring that any <srai> output will not match the same category. 

* Finally, unexpected bot responses may be due to normalization. The Pandorabots platform performs pre-processing using the normal.substitution file (if applicable) to substitute end-user input. Normalization also applies to THAT tags. Make sure your pattern or that tags are normalized for pattern-matching if you are using normal.substitution file in your bot.

**What AIML Libraries are available?**

Pandorabots offers free, open source libraries (like Rosie, ALICE, and Base Bot) in addition to premium libraries and modules (like the Mitsuku Module) available for an additional montly fee. Contact us to learn more. 

**What tags are supported in AIML?**

Please visit the AIML Reference section of the _Pandorabots Documentation_ for a full ist of supported tags. 
___
###API

**What is an API alert?**

When your application gets close to or exceeds a limitation you will be alerted via email and it will be included as an alert on your Account Page. Please see the _Limits_ section for more questions about limitations.

**What is an application (app) ID and user key?**

To access the API you need both a user key and application ID for authentication. Your user key must never be shared with anyone else, and if you ever have reason to believe that it has been compromised, regenerate the key on your Account Page.

**How can I find my user key?**

You may find your user key (and regenerate it) on your Account Page, and under the "Custom Application" Integration on the Deploy page. 

**How can I find my app ID?**

You may find your app ID under the "Custom Application" Integration on the Deploy page. Note that your application ID is also the same as your user name (and will take the form of "un" followed by a string of numbers).

**I'm not a developer - can I use the API?**

The API is designed with developers in mind but user friendly tools like the Pandorabots _Command Line Interface_ are accessible for any motivated self-starter eager to study the documentation!
___
###Bots

**How do I create a bot?**

Create a new bot by clicking on the "+" icon next to "My Bots" on the Left Navigation bar. 

**Can I host my own bot?**

Sure! There are a number of open source AIML interpreters available in the wild of varying degrees of quality and continuing support (i.e., use at your own risk!). You can download your bot files at any time via the Editor. 

However, you cannot license and download an on premise version of the Pandorabots Platform, which is a strictly SaaS offering that requires expertise to run. Unless you are highly advanced technically and have lots of time to spare building an interpreter from scratch or modifying a deprecated code base, we highly recommend using our best in class interpreter-as-a-service.

**What do the bot indicator lights mean?**

* Green: Your bot is compiled and should be responsive to clients on whatever channels it is deployed to.
* Yellow: There are differences between the version of the bot you are currently editing on the _Staging Server_ and the bot that is live to the public on the _Production Server_. Push any new changes live by clicking the _Publish_ button in the upper right hand corner of the _Editor_, but not before thoroughly testing your bot for any breaking changes!
* Red: Your bot has compile errors that need to be addressed before it can function properly. 

**What does it mean if my bot is compiled / uncompiled?**

There is a green indicator light next to your bot, meaning that it is currently _compiled_, i.e., working. If your bot becomes uncompiled (meaning something is broken!), a red indicator light will appear, along with the menu item “Compile.” Clicking on “Compile” will display compilation errors (often caused by malformed AIML such as missing tags or syntax errors). Fixing the errors and saving (or clicking on “Compile”) will re-compile your bot.

**Can I create a bot in any language?**

AIML can be written in almost any natural language. Segmentation is required for some languages - please contact us to learn more about our machine learning based segementer and other language-specific tools. 
___
###Integrations

**What Integrations are available?**

Visit the _Deploy Page_ to see a list of available integrations, which provide an easy way to publish your bot on third party channels like popular voice and messaging platforms. 

**What Integrations will be available in the future?**

Supported Integrations are determined by a variety of factors including, but not limited to, technical feasibility, ecosystem demand, and platform partner relationships. If you wish to see support added for a channel that is not currently available, please email us at support@pandorabots.com and we'd be happy to consider your request.

**Are custom Integrations available?**

Yes, Pandorabots can develop and provide custom integrations for Enterprise Tier platform users. All other users are welcome to roll their own and integrate bots hosted on the platform into their application using our RESTful API.
___
###Limits

**What is the max file size I can upload?**

The maximum file size for upload is 2MB.

**What is the max number of concurrent queries?**

There is no maximum number of concurrent requests imposed on the Free and Developer Tiers per se, but if you anticipate generating more than 200 requests per second, please let us know. Generally speaking, chatbots generating a high volume of messages qualify for the Enterprise Tier, which is designed to flexibly handle as many concurrent requests as may be required by you application. Please note that certain Messaging Platforms also enforce their own rate limits - visit their policies directly for more details.

**Why is the default max queries 100,000 per month?**

The default exists for two reasons: (1) To protect any platform users whose bots experience a sudden, unanticipated surge in popularity from paying more than $225/month; and (2) Because any entity that anticipates more monthly traffic likely qualifies for the Enterprise Tier. You may contact us via email at support@pandorabots.com to request adjustments to your monthly maximum messages, and learn more about which plan is right for you.

**How can I adjust my max monthly limit?**

Please email us at support@pandorabots.com to inquire about adjusting your monthly limit up or down. Note: customers who anticipate exceeding certain volumes may necessitate an upgrade to the Enterprise Tier.

**What is the average response time for bots?**

The average bot response time is 0.3 seconds (300 milliseconds). Exceptionally large bots can also take a bit longer to initially load into memory. Additional latency can occur due to third party factors such as the deployment platform or client's network connection.

**What is the average uptime for the system?**

We strive for service level uptimes of at least 99.5% for all users. However, only the Enterprise Tier guarantees uptime levels of 99.5% or higher.

**Is there a limit to how many bots I can create?**

The Free Tier allows up to 2 bots; the Developer Tier allows up to 10 bots; and the Enterprise Tier includes a custom configuration to accommodate the number of bots required by your application.

**Where are my chatlogs from last month?**

Chatlog data and monthly statistics are only available dating back the previous 30 days. You may download your logs at any time from the Logs page. If you require longer or custom storage, dashboards, or analytics, please contact us to inquire about the Enterprise Tier.
___
###Pricing

**What is a "message"?**

A "message" is one input/output interaction between a client (the person chatting with your bot) and your deployed production bot. Any messages between exchanged with your staging bot during development within the Sandbox are free of charge, as is all other usage of the Sandbox to develop your bot.

**What is included in the Free Tier?**

The Free Tier provides unlimited Sandbox or _Staging_ access to the platform, meaning that you can develop, test, and review logs for up to two bots for free! Once you are ready to unleash your bots to the public, a valid credit card will be required to access the deployment features of the platform, but you can still enjoy up to 1,000 queries per month for free in production. If and when the sum total of your bots exceed 1,000 queries in a given month, you will be charged at a rate of $0.0025 (USD) per query. Users who input a credit card will automatically have access to the Developer Tier.

**What is included in the Developer Tier?**

The Developer Tier includes all the features of the Free Tier plus up to 10 bots per month, email support, access to deployment features of the platform, and up to 100,000 queries per month.

**Why is a credit card required to access certain features?**

The paywall barrier to making your bot publicly available is part of an effort to maintain high quality standards for bots published on the platform. _Your credit card will only ever be billed for usage that is not covered by the free tier_, meaning that you can still test and access all platform features for free up to a certain volume (1,000) of monthly messages. And, while we'd love to make everything free, there are commercial realities involved in running a bootstrapped business. We hope you enjoy the service and find it valuable enough to consider supporting our efforts.

**When will Pandorabots charge my credit card?**

Our billing cycle is monthly using UTC time. Charges are typically made on the 7th of each month for the previous monthly charges.

**How do I track monthly charges and access invoices?**

You can track your monthly usage (updated in real time) and associated charges to date by visiting your Account page, where you may also access your monthly invoices.

**Do you offer student discounts?**

Please have your organization or department head email us with any relevant details and we will consider the request.

**How can I update my credit card information?**

Visit the Account Page to update (or delete) your credit card and other personal information on file. 
___

###Privacy, Security & Legal

**Is the Pandorabots Platform HIPPA compliant?**

The Pandorabots platform is not HIPPA compliant by default, but higher levels of security and compliance are available at the Enterprise Tier. Please contact us for further details. 

**How is my data used and stored?**

Please read our Privacy Policy for further details.

**Do I own my bot?**

Yes, all the code you develop using our platform is owned by you or your organization, except in certain cases such as when you have chosen to make your code open source. 

**My bot was deleted!**

Bots that violate our Terms of Service can be deleted any time at Pandorabots' discretion. If you believe your bot or account were deleted for some other reason, please contact us at support@pandorabots.com.

As a general policy, we recommend routinely backing up your bot files. You may download a zip file any time from the Files tab in the Editor. 

___
###User Interface

**What is the Editor?**

The Editor is your gateway to creating and maintaining bot files. It is an embedded version of the ACE editor and is optimized for editing AIML files.

**What is the Deploy page?**

The Deploy page provides access to a variety of Integrations, which are easy methods for publishing your bot on third party channels.

**What is the Logs page?**

The Logs Page provides chatlogs (i.e., conversations clients have had qith your bot) dating back 30 days. Chatlogs are indispensable for improving your bot, and you should review them regularly and make updates accordingly. You may download your logs at any time using the Download Icon on the Logs Page.

**What are "Integrations"?**

Integrations, accessible via the Deploy Page, are easy methods for publishing your bot on third party channels.

**What is the Clubhouse?**

The Clubhouse is a place where you can publish your bot-in-progress for other users to talk to, and chat with their bots as well. It's a great way to exchange logs and feedback and foster the community! 

**What is the Directory?**

The Directory is similar to the Clubhouse except that instead of making your bot available exclusively to other platform users, it allows you to list your bot for the general public to discover and chat with via [directory.pandorabots.com](/directory.pandorabots.com).

**What are Libraries?**

Libraries are open source AIML files you can modify or incorporate into your chatbot to avoid "re-inventing the wheel." If you have created a collection of AIML files you would like us to consider listing as an available library, please contact us! 

**What are Modules?**

Modules are similar to libraries insofar as they allow you to extend your chatbot with pre-written AIML code, but unlike open libraries the code is a "black box" to protect the author of the module's IP. Because modules often consist of valuable or proprietary code, there may be a fee entailed with usage.

**Why are some features locked?**

Certain advanced and premium features provided by the interface require a valid credit card on file to access. We give away as many free tools and services and open source software as possible, but still need to gainfully employ the people who work hard to make these available for you! We hope you'll find the service valuable and consider supporting our efforts.

**What does it mean if a feature is "Coming Soon"?**

Features labeled as "Coming Soon" are on our roadmap and development is often in progress, meaning the feature should be available in a forthcoming release within several weeks. This is our way of sharing our short-term, public roadmap with you. If you have a feature request, don't hesitate to let us know!

