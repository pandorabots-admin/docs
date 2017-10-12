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

###### ![](https://lh6.googleusercontent.com/w2kudeyyH0OxdGIzXMi6ZBllQvCseFVcr03RKvu1pp9h5ybUZY8Rx3p04Nybc4ZHcwoREc3P-Q90-l8Qeh-UiurJoxuzWm0y2kgPnEruHxZbySFXpUWq7W-Ik9XTdNtO4xJRmTG5klc)

###### "Echoing" Wildcards

You can "echo" the words captured by the wildcard from within the template using the &lt;star/&gt; tag. For example:

```
<category>
<pattern>MY NAME IS *</pattern>
<template>Hello, <star/>.</template>
</category>
```

**Human:** My name is Daniel.  
**Bot:** Hello, Daniel.

###### Multiple Wildcards

You can have more than one wildcard per pattern. You can also echo multiple wildcards in your pattern by using `<star index="x"/>`, where **x** corresponds to the index number \(position in the sentence\) of the wildcard:

```
<category>
<pattern>MY NAME IS * AND I AM * YEARS OLD</pattern>
<template>Hi <star/>. I am also <star index=“2”/> years old!</template>
</category>
```

---

#### Variables

###### What are Variables?

In computer programming, a variable is a symbol whose value can be changed.

AIML has variables as well. These can be used to store information about your bot, user, or anything else you would like. There are three types of variables:

* **Properties:** global constants for the bot. These can only by changed by the botmaster.
* **Predicates**: global variables for the bot. These are usually set by the client during conversation when a template is activated. 
* **Local Variables:** the same as predicates except their scope is limited to one category. 

###### Using Properties

You can use a property to store your bot's age. Create a new property with the name "age" and the value "8". Then, insert this category:

```
<category>
<pattern>HOW OLD ARE YOU</pattern>
<template>I am <bot name=“age”/> years old.</template>
</category>
```

**Human:** How old are you?  
**Bot:** I am 8 years old.

\#\#\#How to create a property file using NEW UI MISSING!

###### Setting Predicates

Using a predicate variable, you can write a category that will store the name of the client. This category will store the client's name under a predicate called "name":

```
<category>
<pattern>MY NAME IS *</pattern>
<template>Nice to meet you, <set name=“name”><star/></set></template>
</category>
```

\#\#\#Where client name is available on a Messaging Platform, should Pandorabots auto-set name predicate for client?

Note how the user of the `*` wildcard and `<star/>` allows you to write a single category that will capture any name!

###### Recalling Predicates

Once you have set a predicate, it can be recalled elsewhere in your AIML.

```
<category>
<pattern>WHAT IS MY NAME</pattern>
<template>Your name is <get name=“name”/>.</template>
</category>
```

If you have set the predicate using the category in the previous example above, this will now recall the value of the predicate called "name".

In combination, the previous two examples would enable the following conversation:

**Human:** My name is Daniel.  
**Bot:** Nice to meet you, Daniel.  
**Human:** What is my name?  
**Bot:** Your name is Daniel.

###### Using `var`

Local variables work almost exactly like predicates, but their scope is limited to a single category. These are different than predicates, which can be recalled at any time during the conversation. For example:

```
<category>
<pattern>THE APPLE IS *</pattern>
<template>
<think><set var=“color”><star/></set></think>
I like <get var= “color”> apples.
</template>
</category>
```

We will revisit local variables in more detail in the section on "Context."

---

#### Recursion and Reduction

###### What is Recursion?

In AIML, you can define a template that calls another category.

This has a wide range of uses:

* Simplifying an input using fewer words
* Linking many synonymous inputs to the same template
* Correcting spelling errors made by the client
* Replacing colloquial expression with proper English
* Removing unnecessary words from the input \(_Reduction_\)

About half of the categories in a bot use recursion in some way.

###### The `<srai>` Tag

The `<srai>` tag tells the bot to look for another category:

```
<category>
<pattern>HELLO</pattern>
<template><srai>HI</srai></template>
</category>
```

If this category is matched \(i.e., the input is "Hello"\), the bot will recurse. Before returning some text, it will first look for a different category that matches HI.

###### Using `<srai>`

The &lt;srai&gt; tag effectively translates the input that matches the categories below to "Hi", contained in the terminal category.

```
<category>
<pattern>HELLO</pattern>
<template><srai>HI</srai></template>
</category>

<category>
<pattern>HI THERE</pattern>
<template><srai>HI</srai></template>
</category>

<category>
<pattern>HOWDY</pattern>
<template><srai>HI</srai></template>
</category>

:

<category>
<pattern>HI</pattern>
<template>Hi, how are you?</template>
</category>
```

The pattern in the terminal category is also commonly known as the _**Intent**_**, which is the canonical form of what the words being used fundamentally mean**. In this case, `<srai>` is the method for specifying that Hello, Hi There, and Howdy, all mean the same thing as "Hi" \(which we humans generally intend as a Greeting\). Much of the work in bot development involves capturing all the different way we humans say the same thing insofar as it relates to your domain, which is why it is so important to regularly review your chatlogs and continously improve your bot over time.

###### Common Misspellings & Colloquial Expressions

People are bad at spelling and typing, which may cause your bot to fail when trying to find a match. You can use &lt;srai&gt; to account for common spelling mistakes:

```
<category>
<pattern>HOW R U</pattern>
<template><srai>HOW ARE YOU</srai></template>
</category>
```

###### Synonyms

You can also use `<srai>` in conjunction with wildcards to define synonymous words or phrases:

```
<category>
<pattern>_ DAD *</pattern>
<template><srai><star/> FATHER <star index=“2”/></srai></template>
</category>
```

Anytime the user input contains the word "dad", the bot will replace it with "father" and recuse using the same input.

###### Why Synonyms?

Thesaurus.com lists 52 synonyms for the word “good”. To account for this, you would need 52 additional categories for every one that contains the word “good”.

If your bot has 100 patterns that contain the word “good”, that’s 5200 additional categories you would have to write. Using the synonyms technique, you can reduce that number to just 52.

_NOTE: once a word has been defined as a synonym, you cannot use it in patterns. The leading underscore \`_\` ensures that the bot translates the synonym before doing anything else.\_

###### Reduction

We can also use `<srai>` to remove unnecessary words from the input.

```
<category>
<pattern>I SEE NOW THAT YOU ARE *</pattern>
<template><srai>YOU ARE <star/></srai></template>
</category>
```

Reductions make writing AIML and adding to your bot a far more enjoyable process. The more reductions you have, the better your bot will be at providing relevant matches.

###### Returning Text and Recursing

The previous examples of `<srai>` have directly returned no text of their own. You template, however, can return both text and `<srai>` tags.

```
<category>
<pattern>HOWDY</pattern>
<template>
<srai>HELLO</srai>
Are you a cowboy?
</template>
</category>
```

---

#### Sets and Maps

###### Sets

An AIML Set is a list of unique text strings. You can create a set using the File drop-down in the Editor.

\#\#\#Add image

A set called "colors" might contain the following:

* red
* orange
* yellow
* green
* blue
* purple
* ...

Sets are used to dramatically reduce your bot's overall categories. Consider the following conversation:

**Human:** Is green a color?  
**Bot:** Yes, green is a color.  
**Human:** Is blue a color?  
**Bot:** Yes, blue is a color.  
**Human:** Is peanut butter a color?  
**Bot:** No, peanut butter is not a color.

Imagine how many categories would be needed to cover every color in the spectrum!

Instead of giving each color its own category, we can create a set that contains a number of colors, and write a single category that checks to see if the user's input contained a color in the set.

This category will only be matched _if_ the user's input does, in fact, contain one of the colors in the set. If the user's input does not contain one of the colors listed in the set, the category will not be matched.

###### How Sets Work

The set functions like a wildcard. It captures one or more words found in the user's input.

The name of the relevant set file is placed between the `<set>` tags.

```
<category>
<pattern>IS <set>colors</set> A COLOR</pattern>
<template>Yes, <star/> is a color.</template>
</category>
```

If the input contained a string not found in the set, then that pattern would not form a match. To account for this possibility, we can provide a default answer using a `*` wildcard.

```
<category>
<pattern>IS <set>colors</set> A COLOR</pattern>
<template>Yes, <star/> is a color.</template>
</category>

<category>
<pattern>IS * A COLOR</pattern>
<template>No, <star/> is not a color.</template>
</category>
```

The first category will match if the input contains a string found in the set.

The second category will match if the input contains a string NOT found in the set.

###### More on Sets

Sets take precedence over \* and ^, but can be overridden by `_`, `#`, and an exact word match.

The input captured by the `<set>` tags can be echoed using the `<star/>` tag, just like a wildcard can be echoed.

```
<category>
<pattern>IS <set>colors</set> A COLOR</pattern>
<template>Yes, <star/> is my favorite color!</template>
</category>
```

Set files are a simple string array and are written in the following format:

```
[[ "Austin" ], ["Baltimore"], [ "Chicago" ], [ "Dallas"]]
```

###### Maps

A map is a list of key-value pairs used to form associations between words. You can create a map using the Files drop-down in the editor.

A map called "statecapitals" might look like this:

* California: Sacramento
* New York: Albany
* Texas: Austin
* ...

Maps are accessed from within the template. They are used in conjunction with a set that contains a list of its keys \(the words on the left of the colon above\). For example, a set that corresponds to the "statecapitals" map would be called "states":

* California
* New York
* Texas
* ...

###### Maps: Test Case

Consider the following conversation:

**Human:** What is the capital of California?  
**Bot:** Sacramento is the capital of California.  
**Human:** What is the capital of New York?  
**Bot:** Albany is the capital of New York.  
**Human:** What is the capital of Texas?  
**Bot:** Austin is the capital of Texas.

We can enable this conversation with a single category, one set, and one map:

```
<category>
<pattern>WHAT IS THE CAPITAL OF <set>states</set></pattern>
<template>
<map name=“statecapitals”><star/></map> is the capital of <star/>
</template>
</category>
```

Feel free to try creating the set and map files we discussed, and then add this category to your AIML. Your bot will now be able to relay the capital of the states listed in your set and map.

###### More on Maps

Like sets, we can include a "default" category when the wildcard contents do not match an item in the map.

```
<category>
<pattern>WHAT IS THE CAPITAL OF *</pattern>
<template>
I don’t know what the capital of <star/> is.
</template>
</category>
```

**Human:** What is the capital of Pennsyltucky?  
**Bot:** I don't know what the capital of Pennsyltucky is.

Map files are simple key-value pairs in an array, and are written in the following format:

```
[["Texas" , "Austin"], ["California" , "Sacramento"]]
```

###### Built-in Sets and Maps

Pandorabots has some pre-built sets and maps that are not visible from the editor.

\#\#\#Is this still true in uUI?

`<set>number</set>` - matches any natural number

`<map name=”successor”>` - maps any number n to n+1

`<map name=”predecessor”>` - maps any number to n-1

`<map name=”plural”>` - \(attempts to\) find the plural form of a singular noun \(English only\)

`<map name=”singular”>` - \(attempts to\) find the singular form of a plural noun \(English only\)

---

#### Context

###### What is Context?

When humans have a conversation, we are able to remember the things that have been previously said.

**Human 1:** Do you like coffee?  
**Human 2:** Yes.

Human 1 knows that "Yes" is a response to their question, because they have said it in particular context.

There are several features in AIML that allow you to provide context within your category.

###### The`<that>` Tag

The &lt;that&gt; tag, which sits between the pattern and template, enables the bot to remember that last sentence it uttered.

A category containing a `<that>` statement will ONLY be matched if the contents between the tags match the last sentence given by the bot.

This allows you to have many duplicate patterns which, depending on the previous response, will trigger different templates.

###### Using `<that>`

In the example below, the second category is bound to a particular context. It will only be matched _if_ the last sentence the bot said was "Do you like coffee?".

```
<category>
<pattern>^ COFFEE ^</pattern>
<template>Do you like coffee?</template>
</category>

<category>
<pattern>YES</pattern>
<that>DO YOU LIKE COFFEE</that>
<template>Do you prefer dark or medium roast?</template>
</category>
```

**Human:** I should drink some coffee.  
**Bot:** Do you like coffee?  
**Human:** Yes.  
**Bot:** Do you prefer dark or medium roast?

###### More on `<that>`

The previous sentence stated by your bot will be stripped of punctuation when read by a category referencing if with `<that>` tags.

The new category will also ignore differences in capitalization / non-capitalized letters, and will expect any normalization you have specified in the normal.substituion file.

For these reasons, you must write the contents of your `<that>` tags like you write patterns: no punctuation, all capital letters, and normalized. If you `<that>` tags are failing, it is usually because one of these three items is amiss.

Note: `<that>` tags can also contain wildcards! Values for `<that>` variables are only valid within the scope of the active conversation.

###### Topic

There is a built-in predicate variable called `topic`. Categories can be grouped together based on different values for `topic`. These categories can only be matched if the topic predicate has been set to a certain value.

`Topic` allows your bot to keep context for longer than one interaction \(the function of the `<that>`tag\). This can also be used to write duplicate patterns whose templates vary depending on the context of the conversation.

###### Using Topic

**Step 1:**

First, you need a category that sets the topic predicate. The following example would set the topic to "coffee":

```
<category>
<pattern>CAN WE TALK ABOUT COFFEE</pattern>
<template>Do you like <set name=“topic”>coffee</set>?</template>
</category>
```

**Step 2:**

Now, you can group together categories within the coffee topic. \_Note that `<topic>` tags appear outside the categories. \_In AIML 2.0, `<topic>` can appear inside the category, like `<that>`.

```
<topic name= “coffee”>

<category>
<pattern>I LIKE THE TASTE</pattern>
<template>I love how coffee tastes.</template>
</category>

<category>
<pattern>IT IS TOO BITTER</pattern>
<template>Maybe you should drink tea.</template>
</category>

</topic>
```

The patterns above will _only match if_ the topic has been set to "coffee." If no category within the topic tags forms a match with the input, the input will match a category with no topic specified.

**\#\#\#\(By default, that = topic = \*\) &lt;set name="topic"&gt;&lt;/set&gt; --&gt; topic="unknown"**

###### More on `<topic>`

The default value of topic is `*`. If you set a topic with no value \(i.e., `<set name="topic"></set>`\) the value will be "unknown."

Values for topic variables are only within the scope of an active conversation.

###### Conditionals

The values of predicates and local variables provide a third type of context in AIML. Using the `<condition>` tag, a bot can respond differently to the same input depending on the value of a predicate or local variable. 

The concept is the same as an IF - THEN - ELSE statement found in most programming languages.

###### Conditionals: Test Case I

Consider the following:

**Human:** Today is Monday.  
**Bot:** The start of the work week!  
**Human: **Today is Tuesday.  
**Bot: **Tuesday already?  
**Human:** Today is Wednesday.  
**Bot: **Humpday, we're halfway to the weekend!  
  
The bot response is _conditioned_ on the day of the week. Using the &lt;condition&gt; tag enables this with a single category. 







