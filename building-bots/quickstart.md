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

#### \(2 - @+ Create Bot Button\)

Create and name a new bot, leaving the default language _English_ and Content _Blank Bot_.

![](/assets/createabot.png)

---

#### \(3 - @Editor\)

Our first stop is the _Editor,_ where you can create and edit AIML and other bot files. Click **Edit** beneath your Bot's Name to navigate to the Editor.

![](/assets/editor.png)![](/assets/theeditor.png)

---

#### \(4 - @File Tab\)

The Editor is where you will write AIML files and categories that will allow you and others to talk to you bot.

Use the File Menu to create a new AIML file called _greetings_.

![](/assets/filetab.png)![](/assets/greetings.png)

---

#### \(5\)

Copy the code for the following category into the text editor in between the start `<aiml>` and end `</aiml>` tags:

```
<category>
    <pattern>HI</pattern>
    <template>Hello, world!</template>
</category>
```

![](/assets/firstcat1.png)![](/assets/firstcat2.png)

Once completed, save your file via the "File" drop-down menu.

![](/assets/filesave.png)

---

#### \(6\)

The _Chat Widget_ allows you to talk to your bot as if you were the client. Open a new chat and type _Hi_ \(or “hi” or “HI” since pattern matching is case-insensitive\) and you should receive the response you just coded, “Hello, world!”

![](/assets/chatwidget.png)

---

#### \(7\)

Congratulations on creating your first category! Now, add a `*` wildcard to the pattern after HI, which will enable matching any phrase that starts with _Hi_. It should look like this:

```
<category>
    <pattern>HI *</pattern>
    <template>Hello, world!</template>
</category>
```

![](/assets/star.png)

Save your file, then test out any phrase that starts with hi \(e.g., _Hi there!_\) in the Chat Widget, which should return "Hello, world!"

![](/assets/chatwidget2.png)

---

#### \(8\)

Next, we need to define the Ultimate Default Category \(UDC\), which is how your bot will respond when it cannot find a match.

First, create a new file called udc.aiml

![](/assets/udc.png)

---

#### \(9\)

Copy the following category into the file:

```
<category>
    <pattern>*</pattern>
    <template>I'm still in training and don't have an answer yet.</template>
</category>
```

![](/assets/udc2.png)

The `*` wildcard in the pattern will match any input of one or more words, meaning anything the client enters that doesn't have a category defined already will match and return the template text. Save the file, then try typing anything other than "hi" to your bot.

![](/assets/udc3.png)

---

#### \(10\)

With the UDC defined, your bot now has a fallback response to any input for which is does not have a specific answer.

Reviewing client inputs that trigger the UDC allows you to train your bot to grow more intelligent over time. Log review, accomplished via the Logs page, is a critical aspect of bot development, which is a continuous, iterative process.

---

#### \(11\)

Go to the Logs.

![](/assets/logs.png)

---

#### \(12\)

Chat logs are displayed dating back 30 days and available for download.

![](/assets/logsdl.png)

Unread conversations appear in **bold**. Orange conversations contain at least one input that triggered the UDC, meaning your bot did not have an answer for the client’s input.

Click on the log item to open your message history with the bot.

![](/assets/openlog.png)

---

#### \(13\)

Orange highlighted input-output pairs that triggered the UDC are the highest priority log items to correct.

Clicking _Show Metadata_ will reveal more information about the interaction, including a timestamp, the pattern that matched, the THAT \(the bot's memory of its previous output, the last sentence it uttered\), the TOPIC \(which can be defined so context persists\), and, finally, the file containing the category activated by the input.

![](/assets/metadata.png)

When you are ready to start collecting logs from actual clients, you can publish your bot via the Deploy page.

---

#### \(14 - @Deploy Page\)

Go to Deploy.

---

#### \(15\)

There are a number of ways to make your bot public, including an API for developers and _Integrations. _

![](/assets/deploy.png)

Integrations provide an easy method to launch your bot on various supported channels. These range from popular voice and messaging apps, to webpages and Pandorabots' internal platform development zone: the Clubhouse.

![](/assets/publish.png)

---

#### \(16\)

Go to the Clubhouse.

---

#### \(17\)

The Clubhouse lets you beta test your bot-in-progress in a botmaster-only environment. Here, you can collect chatlogs to review and improve your bot, and pay back the favor by chatting with other people's bots.

![](/assets/clubhouse.png)

---

#### \(18 - @Botname\)

The number of unread logs will be displayed next to your bot's name. Click on your bot's name to view other key stats.

![](/assets/stats.png)

---

#### \(19\)

Usage statistics like total number of monthly interactions, clients, sessions, and the average interactions per session are displayed dating back 30 days. Selecting “My Bots” will display these overall statistics for all your bots.

![](/assets/mybotstats.png)

---

#### \(20\)

One more thing. The green indicator light next to your bot means it is _Compiled_, i.e., functioning normally.

If this turns red, your bot is _Uncompiled_, meaning something is broken. Clicking “Compile” will display compilation errors \(often caused by malformed AIML such as missing tags or syntax errors\). Fixing the errors and clicking _save_ or _compile_ will re-compile your bot.

![](/assets/uncompiled.png)![](/assets/fix.png)![](/assets/compiled.png)

If your bot is deployed, a yellow light will appear when there are differences between the _Sandbox_ version of the bot you are editing, and the _Production_ version available to the general public. Clicking _Publish_ will push saved Sandbox changes live to production.

---

#### \(21\)

Congratulations! You've just learned the fundamental basics for building AIML bots on the Pandorabots platform. As a next step, we highly recommend the tutorial [Bot Building 101](/building-bots/tutorial-building-bots-on-the-pandorabots-platform.md), and encourage you to explore additional resources in the Help section.

Creating a new bot and adding the "Small Talk" library, which will enable your bot to handle basic chitchat, is also a good way to further familiarize yourself with AIML code, or you can simply keep adding categories to your current bot via the Editor.

\[Return to Editor\] \[Bot Building Tutorial\]

