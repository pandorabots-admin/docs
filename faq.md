#Frequently Asked Questions

######_Can't find the answer to your question below? Email us at support@pandorabots.com_

###AIML

**What is AIML?**

Artificial Intelligence Markup Language (AIML) is a simple, XML-based scripting language and the open standard for writing chatbots. We recommend the *Quick Start* to learn AIML basics and the *Tutorial* for a deeper dive.

**What is the difference between AIML 1.0 and AIML 2.0?**

The AIML 2.0 specification introduces a number of new features to the language that dramatically improve the natural language processing power of chatbots. The current Pandorabots AIML interpreter is backwards compatible with AIML 1.0, so platform users can make full use of any AIML 1.x bot files. However, it does not currently support Javascript. For more details, please read Dr. Richard Wallace's full [AIML 2.0 specification](https://docs.google.com/a/pandorabots.com/document/d/1wNT25hJRyupcG51aO89UcQEiG-HkXRXusukADpFnDs4/pub).

**What happened to the AIML 1.0 platform? **

You can still access the AIML 1.0 platform [here](https://www.pandorabots.com/botmaster/en/home). However, it is no longer supported as of 2015 and all existing users will be eventually upgraded to the 2.0 service. We encourage you to upgrade and note that the current platform is backwards compatbile with AIML 1.0 so you can easily upgrade by uploading your files. 

**How can I address common AIML related alerts / errors?**

* Make sure that your bot is compiled without AIML compile errors. You can see your bot's compile status on Left Navigation Bar. 

* Next, take a look at your code. One common problem is having multiple categories with the same pattern. The AIML interpreter prioritizes categories from bottom to top, within each individual file as well as in the file list itself. If you do have duplicate patterns, the one appearing lowest in a file or in the files list will be matched first. You can fix this by removing the unwanted category. You can also debug your bot by using the trace feature found on the chat widget. Utilizing this feature allows you to see the series of categories that are engaged by a particular input, rather than just the bot's final response. 

* Another common problem involves inadvertently setting the bot off into an infinitely recursive loop. This occurs when a category reduces the input in such a way that it feeds back into itself. This type of recursion is allowed in AIML loops, but if no breakpoint exists, the loop will never end, and the bot will respond with "Too much recursion in AIML." You can fix this type of error by visiting the offending categories, and ensuring that any <srai> output will not match the same category. 

**What AIML Libraries are available?**

Pandorabots offers free, open source libraries (like Rosie, ALICE, and Base Bot) in addition to premium libraries and modules (like the Mitsuku Module) avaiable for an additional montly fee. Contact us to learn more. 

**What tags are supported in AIML?**

Please visit the AIML Reference section of the _Pandorabots Documentation_ for a full ist of supported tags. 

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

###Bots

**How do I create a bot?**

Create a new bot by clicking on the "+" icon next to "My Bots" on the Left Navigation bar. 

**What do the bot indicator lights mean?**

* Green: Your bot is compiled and should be responsive to clients on whatever channels it is deployed to.
* Yellow: There are differences between the version of the bot you are currently editing on the _Staging Server_ and the bot that is live to the public on the _Production Server_. Push any new changes live by clicking the _Publish_ button in the upper right hand corner of the _Editor_, but not before thoroughly testing your bot for any breaking changes!
* Red: Your bot has compile errors that need to be addressed before it can function properly. 

**What does it mean if my bot is compiled / uncompiled?**

There is a green indicator light next to your bot, meaning that it is currently _compiled_, i.e., working. If your bot becomes uncompiled (meaning something is broken!), a red indicator light will appear, along with the menu item “Compile.” Clicking on “Compile” will display compilation errors (often caused by malformed AIML such as missing tags or syntax errors). Fixing the errors and saving (or clicking on “Compile”) will re-compile your bot.

**Can I create a bot in any language?**

AIML can be written in almost any natural language. Segmentation is required for some languages - please contact us to learn more about our machine learning based segementer and other language-specific tools. 

###Integrations

**What Integrations are available?**

Visit the _Deploy Page_ to see a list of available integrations, which provide an easy way to publish your bot on third party channels like popular voice and messaging platforms. 

**What Integrations will be available in the future?**

Supported Integrations are determined by a variety of factors including, but not limited to, technical feasibility, ecosystem demand, and platform partner relationships. If you wish to see support added for a channel that is not currently available, please email us at support@pandorabots.com and we'd be happy to consider your request.

**Are custom Integrations available?**

Yes, Pandorabots can develop and provide custom integrations for Enterprise Tier platform users. All other users are welcome to build roll their own and integrate bots hosted on the platform into their application using our RESTful API.

###Limits

**What is the max file size I can upload?**

The maximum file size for upload is 2MB.

**What is the max number of concurrent queries?**

The Free and Premium Tiers of the Pandorabots Platform available via this interaface can generally handle XXX simultaneous requests. The Enterprise Tier is designed to flexibly handle as many concurrent requests as may be required by your chatbot application. Please note that certain Messaging Platforms also enforce their own rate limits - visit their policies directly for more details.

**Why is the default max queries 100,000 per month?**



**How can I adjust my max monthly limit?**

Please email us at support@pandorabots.com to inquire about adjusting your monthly limit up or down. Note: customers who anticipate exceeding certain volumes may require an upgrade to the Enterprise Tier.

**What is the average response time for bots?**

The average bot response time is 0.3 seconds (300 milliseconds). Additional latency beyond can occur due to third party factors such as the deployment platform or client's network connection.

**What is the average uptime for the system?**

We strive for service level uptimes of 99.5% for all users. However, only the enterprise tier gaurentees uptime levels of 99.5% 

**Is there a limit to how many bots I can create?**



**Where are my chatlogs from last month?**

Chatlog data and monthly statistics are only available dating back the previous 30 days. You may download your logs at any time from the Logs page. If you require longer or customer storage, please contact us to inquire about the Enterprise Tier.

###Pricing

**What is included in the Free Tier?**



**Why is a credit card required to access certain features?**



**When will Pandorabots charge my credit card?**



**How do I track monthly charges and access invoices?**

You can track your monthly usage (updated in real time) and associated charges to date by visiting your account page, where you may also access your monthly invoices.

****



**Do you offer student discounts?**

Please have your organization or department head email us with any relevant details and we will consider the request.

**How can I remove my credit card information?**



**How can I update my credit card information?**



###Privacy, Security & Legal

**Is the Pandorabots Platform HIPPA compliant?**

The Pandorabots platform is not HIPPA compliant by default, but higher levels of security and compliance are available at the Enterprise Tier. Please contact us for further details. 

**How is my data used and stored?**

Please read our privacy policy for further details.

**Do I own my bot?**

Yes, all the code you develop using our platform is owned by you or your organization, except in certain cases such as when you have chosen to make your code open source. 

**My bot was deleted!**

Bots that violate our Terms of Service can be deleted any time at Pandorabots' discretion. If you believe your bot or account were deleted for some other reason, please contact us at support@pandorabots.com.

###Topic

**Question**

Answer

###User Interface

**What is the Editor?**



**What is the Deploy page?**



**What is the Logs page?**



**What are "Integrations"?**



**What is the Clubhouse?**



**Why are some features locked?**



**What is the Directory?**



**What are Libraries? **



**What are Modules?**



**What does it mean if a feature is "Coming Soon"?**

Features labeled as "Coming Soon" are on our roadmap and development is often in progress, meaning the feature should be available in a forthcoming release within several weeks. This is our way of sharing our short-term, public roadmap with you. If you have a feature request, don't hesitate to let us know!

