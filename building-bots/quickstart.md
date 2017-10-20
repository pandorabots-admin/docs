# Quickstart

###### Access the interactive Quickstart from the user icon drop-down menu, or follow the instructions below.

---

#### \(1\)

#### AIML

Artificial Intelligence Markup Language \(AIML\) is an XML-based scripting for building chatbots that is easy for anyone to learn, even if you aren’t a programmer!

AIML uses pattern matching to match an INPUT from the end-user chatting with your bot to the**pattern**, the text between the pattern tags. Once an input matches a pattern, an OUTPUT specified by the**template**, the text between the template tags, is produced. Together, pattern template pairs form a category: i.e., a rule for how your chatbot should respond to clients.

```
Opening tag          →    <category> 
Matched INPUT        →      <pattern>HI</pattern> 
Defines bot OUTPUT   →      <template>Hello, world!</template> 
Closing tag          →    </category>
```

In this example, if the user says “Hi!” \(in any form, patterns are case and punctuation insensitive\), your bot will respond with “Hello, world!”

![](/assets/AIML Visual %281%29.png)

---

#### \(2\)

#### Wildcards

Wildcards allow your bot to respond to inputs containing certain keywords without having to write out all possible permutations of a phrase. In the following example, the "\*" wildcard matches one or more words, so if the user says "Hi there!" or "Hi robot!" or "Hi what's going on?" the template will still be returned:

```
<category>
    <pattern>HI *</pattern>
    <template>Hello, world!</template>
</category>
```

There are four different types of wildcards you can learn more about later in[Docs](http://docs.pandorabots.com/tutorials/wildcards/)or Tutorials. For now, we're going to get you started with your first bot and give you a tour of some of the most useful features of the UI. Let's get started!

---

#### \(3\)

Create a new bot, name it, and select the language \(AIML can be written in any natural language\).

---

#### \(4\)

The first stop of the tour is the Edit page, where you can create and edit AIML files, as well as the other major types of bot files.

---

#### \(5\)

Go to Edit Page

---

#### \(6\)

Welcome to the Edit page! We're going to walk you through creating your first AIML file as well as writing a few key categories that will allow you and others to talk to you bot.

---

#### \(7\)

Use the File Menu to create a new AIML file called "greetings"

---

#### \(8\)

Copy the code for the following category into the text editor, making sure to insert it between the start and end &lt;aiml&gt; tags:

```
<category>
    <pattern>HI</pattern>
    <template>Hello, world!</template>
</category>
```

Once completed, save your file via the "File" dropdown menu.

---

#### \(9\)

The Talk Button allows you to talk to your bot as if you were the client. Open a new chat and type “Hi” \(or “hi” or “HI”\) and you should receive the response you just coded, “Hello, world!”

---

#### \(10\)

Congratulations, you've just created your first category! Now, try adding a \* wildcard to the pattern after HI, allowing it to match phrases that start with the word "Hi". It should look like this:

```
<category>
    <pattern>HI *</pattern>
    <template>Hello, world!</template>
</category>
```

Save your file, then try typing "Hi there.", "Hi robot!",or "Hi, what's up?". With the new category, all three should return "Hello, world!".

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

Log review is a critical aspect of bot development. It allows you to identify inputs you did not anticipate and update your bot based on what people are actually saying. It’s impossible to invent a conversational bot in a vacuum, and important to update your bot on a regular basis.

Unread conversations will appear in**bold**, and the colororangeindicates that the conversation contains at least one input that triggered the UDC, meaning your bot did not have an answer for the client’s input.

Go ahead and click on the log item, which represents the earlier chats we had with your bot.

---

#### \(16\)

This is the message history between your bot and the client. Interactions with orange borders highlight the input-output pair that triggered the UDC, and represent the highest priority log items to correct.

Clicking "Show Metadata" will reveal more information about the interaction, including a timestamp, the pattern that matched, the THAT \(the bot's memory of its previous output, the last sentence it uttered\), the TOPIC \(which can be defined so context persists\), and, finally, the file containing the category activated by the input.

Next up on the tour is the "Deploy" dashboard.

---

#### \(17\)

Go to Deploy page.

---

#### \(18\)



