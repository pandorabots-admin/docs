# Building Bots on the Pandorabots Platform

###### A tutorial for writing bots using the AIML 2.0 scripting language and the Pandorabots User Interface

---

## Core Concepts

Bot Development consists of a relationship between the following three entities:

* _**chatbot\(n.\) **or** bot\(n.\)**_** - **a computer program designed to simulate conversation with a human end-user via voice or textual inputs

* _**botmaster\(n.\)**_** - **a person who creates, develops, and maintains the code and content that make up a chatbot

* _**client\(n.\) **_**- **a person chatting with a bot

The Pandorabots Platform is a feature-rich user interface designed to help you, the botmaster, create AIML-based chatbots.

* _**AIML\(n.\) **_**- **Artificial Intelligence Markup Language: the simple open standard language in which Pandorabots are written

Experienced AIML writers may choose to use their favorite text editor instead of this UI, but many find the features in this UI indispensable for bot creation, deployment, and maintenance.

---

## Platform Components

#### Log In

The Pandorabots platform supports OAuth \(single sign-on\) via Google, Facebook, Twitter, Yahoo, and Github. You may also create an account using an email address and password. Upon initial log in, you will be assigned a username \(taking the form of "unXXXXXXXX"\) and prompted to create your first bot. Bot names must be 3-64 characters in length and lowercase alphanumeric. Together, your username and botname form a unique identifier for your bot, also known as your "botid."

#### Bot Creation

To create a new bot, use the "+" button next to **My Bots** on the left navigation panel. Note that AIML can be written in almost any natural language, and you can select the language for your bot from a drop-down upon creation. \(For Asian and other languages that require segmentation, Pandorabots offers a machine learning-based segmenter as a service; email us to learn more\).

\#\#\#Selecting starter libraries like Rosie

#### Bot Statistics

Clicking on **My Bots **on the left navigation panel will display some key global statistics for all of your bots for the past 30 days. These include total _Interactions_, _Clients_, _Sessions_, and the average number of _Interactions/Session_. In the broader ecosystem, "Interactions/Session" is also sometimes known as _Turns per Conversation _\("_TPC_"\), and is a stat botmasters measure and reference to highlight client engagement with their chatbot.

Clicking on the name of each individual bot will display the same four individual statistics for that specific bot.

Platform users who require more in-depth analytics can plug in additional third-party analytics engines of their choosing.

#### Bot Editing

Selecting the name of an individual bot on the left navigation panel will open a drop-down menu consisting of several components, including: _Edit_, _Deploy_, _Logs_, and _Delete_. The **Editor **is your gateway to creating and maintaining your bot files.

\#\#\#Download bot files

\#\#\#Staging v. Production

#### Bot Training via the Chat Widget

In the lower right hand corner of the interface, you may have noticed a circular chat icon. Clicking on this icon will allow you to chat with your bot as if you were the client from almost everywhere in the interface. This **Chat Widget **has several useful features that are vital for debugging and improving your bot.

* Edit Icon
* Advanced Alter
* View MetaData
* Trace
* Reset Bot Memory

#### Bot Log Review

\#\#\#

#### Bot Deployment

The **Deployment Page**, accessible via the _Deploy_ link under each individual bot name displayed on the left nav, lists a variety of _Integrations_. Integrations provide an easy method for deploying your bot to popular third party platforms and channels like Facebook Messenger and the Web. Supported Integrations are determined by a variety of factors including, but not limited to, technical feasibility, ecosystem demand, and platform partner relationships. If you wish to see support added for a channel that is not currently available, please email us at support@pandorabots.com and we'd be happy to consider your request.

Pandorabots also provides a RESTful API, meaning developer users can integrate their chatbot into any application. Please refer to the API REFERENCE section for a list of [API Endpoints](/api-endpoints.md), [SDKs](/sdks.md), and more. You may locate your _Application ID _\(_"App ID"_\), which is the same as your username, and your _User Key_, by clicking on the "API Keys" button next to the "Custom Application" integration.

\#\#\#_Note: A number of features on the Deployment Page require entry of a valid credit card to access. Your card will only be billed for usage that isn't covered by the _[_Free Tier_](/faq.md#pricing).

#### The Clubhouse

The Deployment Page provides an option to publish your bot to **The Clubhouse**, which will make your bot available to chat with other platform users. In the Clubhouse, accessible via the left nav, you can also chat with other bots whose botmasters have chosen to make their works-in-progress visible. This is a great way to collect chatlogs from other platform users to leverage for improving your bot prior to making it public, and to pay back the favor by chatting with their bots as well.

---

## Basic AIML Training

#### Input Pre-Processing

###### Normalization

Corrects some spelling errors and colloquialisms \(e.g. "wanna" --&gt;"want to"\)

* Substitutes words for common emoticons \(e.g. ":-\)" --&gt;"SMILE"\)

* Expands contractions \(e.g. "isn't" --&gt;"is not"\)

* Removes intra-sentence punctuation \(e.g. "Dr. Wallace lives on St. John St. --&gt;"Dr Wallace lives on St John St."\)

We refer to the above substitution steps as Normalization.

These substitutions are contained in a substitution file called normal.substitution.

###### Sentence Splitting

Normalization also splits sentences based on predefined punctuation characters ".", "!", and "?". It also removes these punctuation marks once the sentences have been split, leaving the inputs punctuation-free.

The bot responds to each sentence individually and forms a result by combining the responses together.

You can customize which punctuation marks determine the end of a sentence by modifying the value of the "sentence-splitting" property in your bot's properties file.

---

#### Categories

###### The AIML File

Create a new AIML files under the Files drop-down within the Editor. When selecting your new files, you'll notice that the Editor comes pre-populated with some code:

```
<?xml version="1.0" encoding="UTF-8"?>
<aiml version="2.0">
<!-- insert your AIML categories here -->
</aiml>
```

###### XML Primer

AIML is an extension of a standard called XML.

It is written using "tags" \(code\) and text, which should be familiar to anyone with HTML experience.

Some tags comes in pairs, with some context \(text and/or other tags\) appearing between, for example:

```
<template>Some string goes here</template>
```

Other tags are "self-closing" and do not require a partner or an inner string, for example:

```
<get name=“age” />
```

###### The AIML File

A category is the basic unit of knowledge in AIML.

A category always contains an input _pattern_ and a response _template_. Categories are sometimes also described as _rules_, which you as the botmaster specify to describe how the chatbot should respond to client inputs.

Generally, the more categories you have, the more robust your chatbot will be.

###### Hello World Example

Let's take a closer look at the fundamental components of a category: the pattern and template.

**&lt;pattern&gt;            
**Matches what the user says.

**&lt;template&gt;            
**What the bot replies.

Code example:

```
<category>
<pattern>HI</pattern>
<template>Hello world!</template>
</category>
```

The above code would result in the following exchange between your bot and the client:

**Human:** Hi  
**Bot: **Hello world!

###### Explaining the "tags"

**&lt;category&gt;**  
Delineates the beginning and end of a category, which is a unit of knowledge for your bot.

**&lt;pattern&gt;HI&lt;/pattern&gt;**  
Defines a pattern that matches a certain input from the client.  
_Note: AIML matching is case insensitive, meaning it does not differentiate between capital and lowercase letters. So, if the client said either "hi" or "HI," the bot would still match this category. Using all caps to write the pattern is a convention adopted to make the code more readable. _

**&lt;template&gt;Hello world!"&lt;/template&gt;**  
Defines the bot's response to the matched pattern. Case does matter in the template! Your bots response will be returned to the client exactly as written between the template tags.

**&lt;/category&gt;**  
Marks the end of the category.

###### Pattern Matching

The bot will search through all of its categories to form a match with the user input.

**IMPORTANT!** Remember that the _input pre-processor strips the input of all punctuation_. Therefore, you must not include punctuation marks in your patterns!

**WRONG:**

```
<pattern>What is your name?</pattern>
```

**  CORRECT:**

```
<pattern>WHAT IS YOUR NAME</pattern>
```

###### HTML Markup

HTML is also an extension of XML.

You can use HTML to markup your bot’s responses \(templates\) with the appropriate formatting.

You can also use HTML to include images and hyperlinks that lead to other websites. [See this page](http://www.w3schools.com/html/html_basic.asp) for some HTML basics.

For example, the &lt;br/&gt; HTML tag allows you to insert line breaks in the text.

```
<category>
<pattern>WHO ARE YOU</pattern>
<template>I am a bot.<br/> I live in a computer.
</template>
</category>
```

**Human: **Who are you?  
**Bot:** I am a bot.  
        I live in a computer.

###### The Ultimate Default Category \(UDC\)

What if the user input does not match any of the patterns you have defined?

The _Ultimate Default Category \(UDC\)_ is used by the bot to provide an answer if no other suitable category can be matched. The \* in this case will match anything undefined.

```
<category>
<pattern>*</pattern>
<template>I have no answer for that.</template>
</category>
```

###### Randomized Responses

You can use the **&lt;random&gt; **tag to provide many different responses for the same input pattern. This is especially useful in the UDC because it can provide some variation to the default answer.

```
<category>
<pattern>*</pattern>
<template>
<random>
<li>What was that?</li>
<li>I don’t understand</li>
<li>Can you say that more clearly?</li>
</random>
</template>
</category>
```

In the above example, each time a category is matched, the bot will pick one of the list elements \(&lt;li&gt;\) at random as it's response.

---

#### Wildcards

###### Wildcard Basics

In the UDC, we used an asterisk \(\*\) in the pattern to capture the user’s input. This symbol, in AIML, is known as a _wildcard_.

Wildcards are used to capture many inputs using only a single category.

###### The `*` Wildcard

The `*` symbol is able to capture **1 or more words** in the user input.

```
<pattern>HELLO *</pattern>
```

This pattern would match all of the following inputs:

* Hello there!
* Hello Daniel.
* Hello my good friend.

This pattern would **NOT** match the word "Hello" by itself, because there must be at least one word captured by the `*` to form a match.

###### The `^` Wildcard

The `^` symbol is also a wildcard, however, it can capture 0 or more words.

```
<pattern>HELLO ^</pattern>
```

** ** This pattern would match all of the following inputs:

* Hello.
* Hello there!
* Hello Daniel.
* Hello my good friend.

###### Matching Priority

What if both `HELLO *`** **and `HELLO ^`** **exist? Which one will form a match?

Wildcards are ranked in order of priority, so that certain patterns will take precedence over others.

The ^ has a higher priority, so if the input is "Hello there", then `HELLO ^` would be matched first.

###### Exact Matches

If a pattern forms an exact match with the input, the exact match category will take precedence over any containing the `^` or `*` wildcards that it could potentially match.

So, if the input is "Hello there", and the pattern `HELLO THERE` exists, it will match before the other wildcard patterns `HELLO ^` and `HELLO *`.

###### The `_` and `#` Wildcards

There are two other wildcards, `_` and `#`. These wildcards take the highest priority when matching.

Even if the input forms an exact match with a pattern, the match can be overridden by a pattern containing one of these wildcards.

```
<pattern>HELLO _</pattern>
```

If the input is "Hello there", the pattern above will form a match even if `<pattern>HELLO THERE</pattern>` has been defined.

The `_` wildcard is a "1 or more" wildcard, like `*`

The `#` wildcard is a "0 or more" wildcard, like `^`

###### Wildcard Matching Priority

The graphic below shows the matching priority for all four wildcards, along with a pattern that contains an exact match:

#### `HELLO #`**  &gt;  **`HELLO _`**  &gt;  **`HELLO THERE`**  &gt;  **`HELLO ^`**  &gt;  **`HELLO *`

**IMPORTANT!** Be very careful when using `#` and `_`, because they will override all other patterns you may wish to match!

###### Highest Priority Matching

Sometimes, there is an exact match that we would like to take highest priority, overriding the `_` or `#` wildcards. we can use the `$` sign to signify that a pattern will be matched first given a particular word.

For example, `<pattern>$WHO IS MIKE</pattern>` matches "Who is Mike?", and `<pattern>_ MIKE</pattern>` matches all other inputs ending with "Mike".

Note that `$` is _not_ a wildcard. It is a marker that says "for this particular word\(s\) - "WHO" in the example above - override the category that would have been otherwise matched.

###### Visualizing Matching Priority

All of the bot's AIML categories are loaded into a structure called the _Graphmaster._ The order in which patterns take matching priority can be visualized in the Graphmaster:

![](https://lh6.googleusercontent.com/w2kudeyyH0OxdGIzXMi6ZBllQvCseFVcr03RKvu1pp9h5ybUZY8Rx3p04Nybc4ZHcwoREc3P-Q90-l8Qeh-UiurJoxuzWm0y2kgPnEruHxZbySFXpUWq7W-Ik9XTdNtO4xJRmTG5klc)

