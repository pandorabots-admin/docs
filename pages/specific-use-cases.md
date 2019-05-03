---
permalink: /building-bots/use-cases/
layout: default
---

<div markdown="1" class="pb-docs__content">

# Specific Use Cases

#### _Example AIML and guidance for building bots for specific use cases._

---

# Developing a simple FAQ chatbot in AIML {#faq}

A Frequently Asked Questions \(FAQ\) chatbot connected to a messaging platform or to your website, is a great use case for a Pandorabot. We’ve come up with an approach to build a quick FAQ chatbot. The purpose of this article is to step you through the thought process of this approach for a limited set of FAQs.

This process assumes you understand basic AIML terminology such as [categories](/docs/aiml-reference/#category), [symbolic reductions](/docs/aiml-reference/#srai) and [wildcards](/docs/aiml-reference/#wildcards).

## Step 1: Gather your list of questions and answers {#step-1-gather-your-list-of-questions-and-answers}

If you have chat or inquiry history with your customers, you might have a list of frequently asked questions, as well as the most common ways your customer asks a question that results in the same answer. For example, these questions may all result in the same answer as shown below:

* How do I sign up?
* How do I sign up for your services?
* I want to sign up now
* Where do I signup?
* Where do I sign up for your service?
* I don’t know how to sign up
* I’m having problems signing up

Example answer:

* Go to fabcompany.com/services and click the SIGN UP button in the middle of the page.

Make sure that all the questions you’ve listed actually map to the same answer. For instance, you might want to provide a different answer to “I’m having problems signing up”, such as “Please contact our support staff at XXX-XXX-XXXX”.

_Note_: using a chatbot to solicit more information from your customer to identify a problem is a different chatbot use case. These approaches can be combined into a single Pandorabots though!

## Step 2: Develop Canonical Forms {#step-2-develop-canonical-forms}

In the example above, you have one answer and at least 6 different ways to ask the same basic question about “sign up”. We call the base input, the canonical form \(also known as “intents”\).

You can pick one question as your canonical form, and build the base category:

~~~
<category>
  <pattern>HOW DO I SIGN UP</pattern>
  <template>Go to fabcompany.com/services and click the SIGN UP button in the middle of the page.</template>
</category>
~~~

Alternatively, we recommend using a naming convention with business name/department and type of question, such as FABSERVICESSIGNUP.

~~~
<category>
  <pattern>FABSERVICESSIGNUP</pattern>
  <template>Go to fabcompany.com/services and click the SIGN UP button in the middle of the page.</template>
</category>
~~~

## Step 3: Develop Symbolic Reductions {#step-3-develop-symbolic-reductions}

There are several ways to develop Symbolic Reductions \(the “many patterns, one reply” concept\) as shown below.

_Note on pattern and normalization_:  
Patterns must be stripped of punctuation and any other normalization that you have specified in your bot \(i.e. normal.substitution file\). For example, do not include “.” \(period\) or “?” \(question mark\) and also if you have the substitution in your normal file, “don’t” should be “DO NOT” in your pattern tags.

### Exact Match {#exact-match}

If you have a list from chat history, you can just keep adding each question as a symbolic reduction \(using [srai](/docs/aiml-reference/#srai) AIML tag\).

Example AIML would look like:

~~~
<category>
  <pattern>HOW DO I SIGN UP FOR YOUR SERVICES</pattern>
  <template><srai>FABSERVICESSIGNUP</srai></template>
</category>
<category>
  <pattern>I WANT TO SIGN UP NOW</pattern>
  <template><srai>FABSERVICESSIGNUP</srai></template>
</category>
<category>
  <pattern>WHERE DO I SIGNUP</pattern>
  <template><srai>FABSERVICESSIGNUP</srai></template>
</category>
     :
     :
~~~

This is simple but is not as flexible. This solution would not take into consideration typos or unconventional phrasing.

### Wildcards & Keywords {#wildcards--keywords}

Using [wildcards in AIML](/docs/building-bots/tutorial/#bat-wildcards) pattern matching for your symbolic reductions can be more flexible. Start by identifying common words \(i.e. keywords\) in all your questions with the same answers. For example:

~~~
<category>
  <pattern>_ SIGN UP _</pattern>
  <template><srai>FABSERVICESSIGNUP</srai></template>
</category>

<category>
  <pattern>_ SIGNUP _</pattern>
  <template><srai>FABSERVICESSIGNUP</srai></template>
</category>
~~~

These reductions would apply to all 6 of the original questions. You could even add reductions that addresses a very common misspelling of your keyword\(s\). For instance, the word “sign” is commonly misspelled as “sing” and “sigh”

~~~
<category>
  <pattern>_ SING UP _</pattern>
  <template><srai>FABSERVICESSIGNUP</srai></template>
</category>
<category>
  <pattern>_ SIGH UP _</pattern>
  <template><srai>FABSERVICESSIGNUP</srai></template>
</category>
~~~

The limitations of this approach is that it requires some human analysis, and too few words in the reduction can be less accurate. For instance, if someone inputs “I did sign up and hate it!”, the chatbot’s response would not work well if using the FABSERVICESIGNUP canonical form.

The great thing about AIML is that you can mix up these approaches building categories for your Pandorabot.

## Step 4: Putting it all together {#step-4-putting-it-all-together}

Follow this process for each question and answer pair. For example, try these additional questions on your own.

* How do I get paid?
* How do I cancel your services?
* I need to speak to a real person.
* Who is your CEO?

Add all your categories to your Pandorabot, compile and start training your bot to see if you can break it!

## TIPS TO STREAMLINE THIS PROCESS {#tips-to-streamline-this-process}

In the past, using a spreadsheet to automate building categories with AIML tags, and creating a tab-separated value file to upload into our bot on the dashboard made the process a bit easier. We now offer bot editting tools such as [Intents Tree](https://medium.com/pandorabots-blog/new-feature-visualize-your-aiml-26e33a590da1){:target="_blank"} and Beta feature Chat Design for a more visual experience.  

![](/docs/assets/img/csv.png)

---

# Building a Concierge-style bot {#concierge}

The “Concierge” chatbot is actually a network of bots designed for the purpose of making recommendations about a service or product to the customer. We’ve built a music concierge that can recommend songs and artists to you based on your mood or current activity.

The network is made of up three distinct bot types, each of which takes on a different role:

* Personal
* Comparison engine
* Artist “expert”

We’re going to take a look at how each of these bots work, as well as some of the AIML required for them to do so! Grab the code [here](https://github.com/pandorabots/concierge-network) to follow along.

The following AIML elements are featured heavily in this tutorial:

* [`<srai>`](/docs/aiml-refrence/#srai)
* [`<sraix>`](/docs/aiml-refrence/#sraix)
* [`<condition>`](/docs/aiml-refrence/#condition)
* [`<that>`](/docs/aiml-refrence/#that)
* [`<formal>`](/docs/aiml-refrence/#formal)

Make sure you are familiar with the high level concepts via the AIML Reference before you begin.

> **Note:** this music-oriented bot is just an example, but you can take these design patterns with you when building your own Concierge-style bot.

## Architecture![](/docs/assets/img/concierge.png)

The concierge bot network has a simple architecture that separates concerns by dividing tasks between the bots.

The\_Personal bot\_is the front-end for the network. This is the bot that your users will be talking to, and has the responsibility of storing information that your users share with it. This information can be reused later when making a recommendation.

The\_Comparison engine\_is a bot that mimics a database which organizes musicians by genre. This allows the network to make a recommendation based on the user’s preference for a particular artist. We’ve given you a “pure AIML” solution in this example, but in reality you will probably want the power of a query language like SQL to fetch data from your database. It is not designed to be “talked” to - rather, it can be used as a utility by the personal bot in an`<sraix>`block.

Finally, the\_Artist expert\_is a bot that is knowledgeable about a particular artist or musician. Again, this bot is not really designed to be talked to directly - it is just a bot that can return information that the Personal bot will share with the user.

## Comparison engine {#comparison-engine}

Let’s first take a look at the comparison engine so that we can have a little context for how the personal bot is used. The comparison engine is a bot that exposes two patterns to other bots.

The first pattern is XSIMILAR \*, which accepts the name of an artist in the wildcard. It will return the name of another artist that makes music in the same genre as the artist who was provided. For example:

~~~
Input: XSIMILAR Kendrick Lamar  
Output: Kanye West
~~~

> **Note:** the X prefix in some patterns is used to indicate that a pattern is intended to be a “private” category - in other words, these categories are used by the bot and it is not expected the user will ever type something like XSIMILAR. You may create your own private categories in this vein, and may use anything in the place of X \(say, your initials\), so long as the text is highly unlikely to appear in a user input.

The second pattern is XRANDOM \* BLOCK ^, which accepts the name of a genre, and returns a random artist from that genre. The BLOCK ^ portion is designed so that you may optionally block an artist from being selected.

~~~
Input: XRANDOM hiphop BLOCK Tyga
Output: Iggy Azalea
~~~

You’ll also notice the use of the`<set>`tags in the pattern of these categories. Each set file \(classical.set, edm.set, etc.\) is just a grouping of artists by genre. To add more artists to the comparison engine, just find the correct set and add their name to the end!

This bot is really a “utility” - in other words, it’s not meant to be contacted directly by your user. Instead, it is to be used via`<sraix>`in another bot. Careful placement in the template of your calling bot can yield seamless insertion of the output of the utility bot:

~~~
<category>
  <pattern>I LIKE TO LISTEN TO DRAKE</pattern>
  <template>
    If you like Drake, you might also like <sraix bot="djf/musiccat">XSIMILAR DRAKE</sraix>
  </template>
</category>
~~~

## Artist expert {#artist-expert}

As an example of an “expert” bot, we’ve also included a bot that has some information specific to an artist. Drakebot only has 2 categories:

~~~
<category>
  <pattern>XBIO</pattern>
  <template>
    Aubrey Drake Graham (born October 24, 1986) is a Canadian rapper,
    singer, songwriter and actor. He was born in Toronto, Ontario. He first
    garnered recognition for his role as Jimmy Brooks on the television series
    Degrassi: The Next Generation. He later rose to prominence as a rapper,
    releasing several mixtapes before signing to Lil Wayne's Young Money
    Entertainment in June 2009.
  </template>
</category>

<category>
  <pattern>XRANDOMSONG</pattern>
  <template>
    <random>
      <li>0 To 100</li>
      <li>The Motto</li>
      <li>Marvin's Room</li>
      <li>Hold On, We're Going Home</li>
      <li>Worst Behavior</li>
      <li>6 God</li>
    </random>
  </template>
</category>
~~~

The first category is an example of how you might return some biographical information about the artist in question. The second category is an example of how you might store additional information about an artist like their playlist - here, the category is designed to return the name of a random song. You could build on this by including a link to the song on a streaming service, which might actually play the song when you click.

This bot is also a utility - rather than talking to it directly, we can use`<sraix>`to call its private categories and insert its responses into another bot:

~~~
<category>
  <pattern>TELL ME ABOUT DRAKE</pattern>
  <template><sraix bot="djf/drakebot">XBIO</sraix></template>
</category>
~~~

## Personal bot {#personal-bot}

Now that we’ve explained some of the bots in our network, let’s take a look at the centerpiece: the_Personal bot_. The personal bot is perhaps the most important piece in the Concierge model - this bot is the user’s gateway to using other components like the comparison engine and the artist experts. The personal bot has access to information about the user, and can make decisions based on this information as to which bot may have a response to the user’s input.

This bot also contains many_reductions_, which are categories that attempt to “reduce” or parse what the user has said into something the bot might understand.

~~~
<category>
  <pattern>HELLO THERE</pattern>
<template><srai>HI</srai></template>
</category>
~~~

In this reduction, the pattern HELLO THERE does not return any text of its own, but instead uses`<srai>`to insert the return value of a different category \(HI\). We won’t be sharing all of these in the tutorial because that would make it far too long, but you can check them out in the code on Github.

The personal bot is made up of a number of AIML files:

* activity.aiml - make recommendations based on what the user is doing
* artists.aiml - talk about musicians
* main.aiml - ultimate default category, prompts
* mood.aiml - make recommendations based on the user’s mood
* recommend.aiml - make recommendations based on the user’s favorite artist

### main.aiml {#mainaiml}

~~~
<!-- UDC - catches inputs that don't match elsewhere -->
<category>
  <pattern>*</pattern>
  <template>I don't understand. Let's try something else. <srai>XPROMPT</srai></template>
</category>

<!-- HI - greetings redirect to XPROMPT -->
<category>
  <pattern>HI</pattern>
  <template>Hello there! <srai>XPROMPT</srai></template>
</category>

<!-- XPROMPT - prompts the user to give some information -->
<category>
  <pattern>XPROMPT</pattern>
  <template>
    <random>
      <li>How are you feeling?</li>
      <li>What are you up to right now?</li>
    </random>
  </template>
</category>
~~~

The goal of the Personal bot is to get some information from the user so that it can make a recommendation about what they should listen to. You’ll notice that the first two categories both end with`<srai>XPROMPT</srai>`, which is a design pattern we use to try and direct the conversation. You can use this all over your AIML codebase to “tack on” the bot’s question to the end of an output.

### recommend.aiml {#recommendaiml}

The personal bot also features a file recommend.aiml, which makes a recommendation to the user based on their favorite artist.

~~~
<category>
  <pattern>WHAT SHOULD I LISTEN TO</pattern>
  <template>
    <condition name="favoriteartist">
      <li value="unknown">Tell me one of your favorite artists.</li>
      <li><srai>XREC</srai></li>
    </condition>
  </template>
</category>
~~~

The bot relies on a predicate`favoriteartist`to make the recommendation. In the first category, the`<condition>`block runs a check on the existence of this predicate - if doesn’t exist, the bot will ask the user for that info. If it does exist, then the bot can move on the the`XREC`category to make the recommendation.

~~~
<category>
  <pattern>XREC</pattern>
  <template>
    If you like <formal><get name="favoriteartist"/></formal>, you might also like to listen to
    <sraix><bot><bot name="musiccat"/></bot>XSIMILAR <get name="favoriteartist"/></sraix>.
    Want to hear a track?
  </template>
</category>
~~~

It is at this point that the personal bot reaches out to another bot in its network. In this case, it is sending the user’s`favoriteartist`to the comparison engine bot, and inserting that bot’s response into its own. From the user’s perspective, there is only one bot, but in reality the two work together to form the network’s response.

~~~
User: What should I listen to?
Bot: Tell me one of your favorite artists.
User: Ed Sheeran.
Bot: If you like Ed Sheeran, you might also Sam Smith. Want to hear a track?
~~~

### mood.aiml {#moodaiml}

The categories in this file are designed to give the user a recommendation based on their current mood.

~~~
 <category>
  <pattern>HAPPY</pattern>
  <that>HOW ARE YOU FEELING</that>
  <template>Glad to hear it! You should listen to some <sraix bot="djf/musiccat">XRANDOM POP BLOCK</sraix> to complement your mood.</template>
</category>
~~~

All of these categories follow a similar model where the pattern is a different mood, and the response calls out to the comparison engine bot to get a random artist from a specific genre. If you remember our XPROMPT category, it will either return “What are you up to right now” or “How are you feeling?” - we use the`<that>`tag to ensure this category will only match if the latter was the last response given by the bot.

## activity.aiml {#activityaiml}

This file is similar to the mood component, except it attempts to make a recommendation based on the user’s current activity. This could be working, exercising, sleeping, etc. Depending on what the user is doing, the personal bot will again reach out to the comparison engine to get a random artist from a specified genre:

~~~
<category>
  <pattern>WORKING</pattern>
  <that>WHAT ARE YOU UP TO RIGHT NOW</that>
  <template>I find <sraix bot="djf/musiccat">XRANDOM CLASSICAL BLOCK</sraix> to be great background music when I am working.</template>
</category>
~~~

## artists.aiml {#artistsaiml}

The categories in this file are designed for interfacing with the artist expert.

~~~
<category>
    <pattern>TELL ME ABOUT *</pattern>
    <template><srai>XBIO <star/></srai></template>
  </category>

<category>
  <pattern>XBIO *</pattern>
  <template>
    <think><set var="artist"><map name="artists"><star/></map></set></think>
    <condition var="artist">
      <li value="unknown">I don't know much about that artist.</li>
      <li><sraix><bot><bot name="app-id"/>/<map name="artists"><star/></map></bot>BIO</sraix> Want to hear a <star/> song?</li>
    </condition>
  </template>
</category>

<category>
  <pattern>YES</pattern>
  <that>WANT TO HEAR A * SONG</that>
  <template>
    <sraix><bot><bot name="app-id"/>/<map name="artists"><thatstar/></map></bot>REC</sraix> - <formal><thatstar/></formal>
  </template>
</category>
~~~

Take a close look at the`<think>`tag in XBIO \*:

~~~
<think><set var="artist"><map name="artists"><star/></map></set></think>
~~~

This block of AIML sets a local variable whose value comes from the artists.map file, which is a sort of registry for all the artists expert bots in the network. This registry associates the artist’s name with the name of the artist expert bot.

~~~
[
  ["Drake", "djf/drakebot"]
]
~~~

Right now we only have one expert bot in the network, but the idea is that the bot might know about some artists, and might not know about others. In the case that the bot does not have access to an expert bot, the first`<li>`will be returned:

~~~
User: Tell me about Taylor Swift
Bot: I don't know much about that artist.
~~~

But if we have registered the artist bot in artists.map, then the second`<li>`will be returned and the bot will contact the artist bot for an answer.

~~~
User: Tell me about Drake
Bot: Aubrey Drake Graham (born October 24, 1986) is a Canadian rapper ...
~~~

## Final notes {#final-notes}

Hopefully you’ve already gotten your hands on the [code](https://github.com/pandorabots/concierge-network){:target="_blank"}. You can deploy this network yourself, just make sure to follow the directions in the Readme file to properly route your`<sraix>`calls!

</div>
