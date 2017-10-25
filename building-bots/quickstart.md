# Quickstart

###### Access the interactive Quickstart from the user icon drop-down menu, or follow the instructions below.

---

#### \(1\)

#### AIML

Artificial Intelligence Markup Language \(AIML\) is an easy-to-learn chatbot scripting language. **Inputs** from C_lients_ \(people chatting with your _Bot_\) are pattern-matched to **outputs** defined by you, the _Botmaster_, in blocks of code called _Categories_.

![](/assets/AIML Visual %281%29.png)

> **Client:** Hi Bot!  
> **Bot:** Hello world!

In the next five minutes, you will learn how to create, edit, chat with, update, and publish a bot using this interface.

---

#### \(2\)

Create and name a new bot, leaving the default language _English_ and Content _Blank Bot_.

---

#### \(4\)

The first stop of the tour is the _Editor,_ where you can create and edit AIML and other bot files. Please click on **Edit** beneath your Bot's Name to navigate to the Editor.

---

#### \(6\)

Welcome to the Editor! This is where you will write AIML files and categories that will allow you and others to talk to you bot.

---

#### \(7\)

Use the File Menu to create a new AIML file called _greetings_.

---

#### \(8\)

Copy the code for the following category into the text editor, making sure to insert it between the start `<aiml>` and end `</aiml>` tags:

```
<category>
    <pattern>HI</pattern>
    <template>Hello, world!</template>
</category>
```

Once completed, save your file via the "File" drop-down menu.

---

#### \(9\)

The _Chat Widget_ allows you to talk to your bot as if you were the client. Open a new chat and type _Hi_ \(or “hi” or “HI” since pattern matching is case-insensitive\) and you should receive the response you just coded, “Hello, world!”

---

#### \(10\)

Congratulations, you've just created your first category! Now, try adding a \* wildcard to the pattern after HI, allowing it to match phrases that start with the word _Hi_. It should look like this:

```
<category>
    <pattern>HI *</pattern>
    <template>Hello, world!</template>
</category>
```

Save your file, then test out a few phrases that start with _Hi_, all of which should return "Hello, world!"

---

#### \(11\)

Well done! Now it's time to define what's known as the Ultimate Default Category \(UDC\), which is what your bot will say to the client if it fails to find a match for the client's input.

First, create a new file called udc.aiml

---

#### \(12\)

Copy the following category into the file:

```
<category>
    <pattern>*</pattern>
    <template>I'm still in training and don't have an answer yet.</template>
</category>
```

The "\*" wildcard in the pattern will match any input of one or more words, meaning anything the client enters that doesn't have a category defined already will match and return the template text. Save the file, then try typing anything other than "hi" to your bot.

---

#### \(13\)

With the UDC defined, your bot now has a sensible response to any input it does not have a specific answer to.

However, we need to be able to see what inputs triggered the UDC if we want our bot to grow more intelligent. To do this, we need to learn about log review.

---

#### \(14\)

Go to the Logs Page.

---

#### \(15\)

Log review is a critical aspect of bot development. It allows you to identify inputs you did not anticipate and update your bot based on what people are actually saying. Bot development is an iterative process that requires continuous, regular development over time to improve the system. Logs are only stored dating back 30 days, but you can download your logs any time from here.

Unread conversations will appear in **bold**, and the color orange indicates that the conversation contains at least one input that triggered the UDC, meaning your bot did not have an answer for the client’s input.

Go ahead and click on the log item, which represents the earlier chats you had with your bot.

---

#### \(16\)

This is the message history between your bot and the client. Interactions with orange borders highlight the input-output pair that triggered the UDC, and represent the highest priority log items to correct.

Clicking _Show Metadata_ will reveal more information about the interaction, including a timestamp, the pattern that matched, the THAT \(the bot's memory of its previous output, the last sentence it uttered\), the TOPIC \(which can be defined so context persists\), and, finally, the file containing the category activated by the input.

Next up on the tour is the "Deploy" dashboard, which provides some easy methods to publish your bot and start collecting logs from actual clients.

---

#### \(17\)

Go to Deploy page.

---

#### \(18\)

The Deploy Dashboard provides a variety of methods for publishing your chatbot.

Developers may use the Pandorabots API to integrate their bot into any application.

Integrations provide an easy way launch your bot on various supported channels, including popular voice and messaging apps, your webpage, or our internal platform development zone: the Pandorabots Clubhouse.

---

#### \(19\)

Go to Clubhouse.

---

#### \(20\)

The Clubhouse is a botmaster only space where you can beta test your work in progress in a controlled environment, collect chatlogs to review and improve your bot, and pay back the favor by chatting with other people's bots.

The number displayed next to your botname represents the number of unread logs, Click on your bot's name to view other key usage stats.

---

#### \(21\)

Usage statistics like total number of monthly interactions, clients, sessions, and the average interactions per session will be displayed dating back 30 days. Selecting “My Bots” will display overall monthly interaction usage for all your bots.

---

#### \(22\)

One more thing. There is a green indicator light next to your bot, meaning it is _Compiled_, i.e., functioning normally.

If this light turns red, your bot is _Uncompiled_, meaning something is broken. Clicking “Compile” will display compilation errors \(often caused by malformed AIML such as missing tags or syntax errors\). Fixing the errors and saving \(or clicking “Compile” again\) will re-compile your bot.

If your bot is deployed, a yellow light will appear when there are differences between the _Sandbox_ version of the bot you are editing, and the _Production_ version available to the general public. Clicking Publish will push saved changes live to production.

---

#### \(23\)

Congratulations! You've just learned the fundamental basics to developing AIML bots on the Pandorabots platform. As a next step, we highly recommend the [Bot Building 101](/building-bots/tutorial-building-bots-on-the-pandorabots-platform.md) Tutorial, and encourage you to explore additional resources in the Help section.

Or, you can return to the Editor to try writing more categories. Creating a new bot and adding the "Small Talk" library, which will enable your bot to handle basic chitchat, is also a good way to get further acquainted with the code.

\[Return to Editor\] \[Bot Building Tutorial\]

