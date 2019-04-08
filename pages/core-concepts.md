---
permalink: /core-concepts/
layout: default
---

{% include sidebar.md %}
<div markdown="1" class="pb-docs__content">

# Core Concept Deep Dives

#### _A closer look at how to leverage some key concepts in AIML._

---

# Predicates 101: Customize your bot's conversation {#predicates}

This tutorial will help you understand how to customize your bot's conversation for each of your end-users.

First, you will step through some simple AIML code, to explain how predicates \(and other AIML variables\) are used for this feature. Next, API requirements for identifying each end-user are covered.

# AIML

## What are variables in AIML?

In programming, a variable is a symbol whose value can be changed; AIML has variables as well. These can be used to store information about your bot, end-user \(AKA client\), or anything else you would like. There are 4 types:

* Properties - global constants for a bot. Can only be changed by the botmaster.
* Predicates - global variables for the bot. Usually set by the client when a template is activated.
* Local variables - which are just like predicates, except their scope is limited to one category.
* System built ins - `that` and `topic` are special type of variable that are usually set by the client when a template is activated. Note that these values are only valid during an active conversation, and are not persistent.

### Using Properties

For example, you can use a property to store your bot's age. Create a new property with the name "age" and the value "8" in your bot's properties file\*\*. Then insert this category:

~~~
<category>
<pattern>HOW OLD ARE YOU</pattern>
<template>I am <bot name="age" /> years old.</template>
</category>
~~~

_Human_: How old are you?  
_Bot_ : I am 8 years old.

Since this is a bot property, any client entering in this input will receive the same response. And since it is a constant, it can only be changed by updating the bot properties file, uploading the file, and re-compiling your bot.

\*\*Note that a default bot properties file is automatically created when you create a bot on Pandorabots bot hosting platform. Bot properties file format is a key/value pair array \(see [Rosie example](https://github.com/pandorabots/rosie/blob/master/lib/system/rosie.properties){:target="_blank"} for format\).

### Setting and Recalling Predicates

Using a predicate variable, you can write a category that will store, for example, the name of your client. This category will store the client's name under a predicate called "name":

~~~
<category>
<pattern>MY NAME IS *</pattern>
<template>Nice to meet you, <set name="name"><star /></set></template>
</category>
~~~

Note how the user of the \* wildcard and `<star />` tag allows you to write a single category that will capture any name!

Once you have set a predicate, it can be recalled elsewhere in your AIML.

~~~
<category>
<pattern>WHAT IS MY NAME</pattern>
<template>Your name is <get name="name" />.</template>
</category>
~~~

If you have set the predicate using the previous category, this will now recall the value of the predicate "name". If the predicate has **not** been set, then your bot will return the `default-get` value specified in your bot properties file. For example, by default it is set to "unknown".

The categories you have just written would enable a conversation like the one below:

_Human:_ My name is Daniel.  
_Bot:_ Nice to meet you, Daniel.

_Human:_ What is my name?  
_Bot:_ Your name is Daniel.

### Using var

Local variables work almost exactly like predicates, but their scope is limited to a single category. These are different from predicates, which can be recalled later in a conversation. Typically you would want to use this in some internal AIML coding not for the client to see.

Let's say you don't want your bot to return "Your name is unknown." in the case of a client asking without actually telling the bot their name. You can introduce the `<condition>` tag using a local variable called `checkname`, such as:

~~~
<category>
<pattern>WHAT IS MY NAME</pattern>
<template>
   <think><set var="checkname"><get name="name" /></set></think>
   <condition name="checkname">
     <li value="unknown">You haven't told me your name yet!</li>
     <li>Your name is <get var="checkname" />.</li>
   </condition>
</template>
</category>
~~~

Set the local variable to the value of the predicate `name` and use the `<condition>` tag to control the bot response. Once this interaction has been completed, `checkname` will no longer have a value associated with it.

### AIML Reference links

For more about the AIML tags used in this tutorial, please see the following AIML references:  
 [condition](/docs/aiml-reference/#condition)   \|   [get](/docs/aiml-reference/#get)   \|  [li](/docs/aiml-reference/#li)  \|  [set](/docs/aiml-reference/#set/)  \|  [think](/docs/aiml-reference/#think)

# API

## Saving predicates per clients using talk API

Now you have AIML code in your bot to set and retrieve predicates based on client \(AKA end-user\) talking to your bot.

In order to save a different value per client, in your application, when you use the Talk to a Bot API you must provide a `client_name` parameter in the talk request that is unique to each client.  Without a valid `client_name` parameter, predicates will be associated to your Pandorabots app\_id, causing unexpected responses. For example: User A says her name is Amy, User B then says his name is Ben. Then if both \(or any\) users ask what their name is, your bot will respond with the last predicate value saved, which would be Ben\).

If your bot is talking to random strangers that you want to be able to retain predicates only during an active conversation, but not long-term, you can create a random \(but unique\) value within your application that conforms to the `client_name parameter` format. For example, any number of 3-64 digits is a valid format so a random number generator starting at 100 could be a simple solution for your application. A random string generator could also work, as long as it conforms to the parameter format.

As long as the end-user is in an active conversation, all predicates that were set during the chat are preserved and can be recalled. As soon as the end-user stops interacting with the bot for an extended idle period \(typically 30-40 minutes\), their predicates will be cleared from bot memory.

## Saving persistent predicates for clients using Anonymous Talk API

If you want your bot to retain conversational elements long term, regardless if they are anonymous users, or known end-users, this can be achieved by requesting a Pandorabots generated client\_name with the anonymous talk API.

Please review this article about [Anonymous Talk API](/docs/related-articles/#managing-end-users) for more details.

---

# Substitutions and sentence splitting {#substitutions}

One feature that was introduced in AIML 2.0 is the substitution file. These files are used to modify text strings being passed through your bot in such a way that both the AIML interpreter and your client can parse their meanings.

Substitution files look a lot like map files, but serve a different function. They look for defined sets of characters in text strings, and replace those sets of characters with new values. Depending on the substitution file, this transformation can either occur before the bot attempts to form a match with an input, or in the bot's response itself. Here's a basic example:

Input: I am waiting for you.  
Output: You are waiting for me.

~~~
<category>
<pattern>I AM *</pattern>
<template>You are <person><star/></person></template>
</category>
~~~

The person tags found in the template denote that the bot should look for any words in the contained string that match one of the keys found in person.substitution. In this case, the contained string echoed by `<star/>` is "am waiting for you", and the word "you" can be found as a key in the person.substitution file. The bot will replace "you" with the value defined in the substitution file \("me"\), and return the modified response.

Some of the substitutions that come preloaded with your bot have actually always been a part of the Pandorabots platform, however, it wasn’t until AIML 2.0 that we were able to offer the ability to actually customize them. Although some users will have no need to change the contents of these files, there may come time when you wish to add or remove options.

**person.substitution**

This file contains substitutions between first and second person pronouns. The above example transforms the second person pronoun "you" to the first person pronoun "me". This also works in reverse:

Input: You are waiting for me.  
Output: I am waiting for you.

~~~
<category>
<pattern>YOU ARE *</pattern>
<template>I am <person><star/></person></template>
</category>
~~~

**person2.substitution**

This file is similar to person.substitution, but contains a few transformations between first and third person pronouns. These are rarely used in bots like Alice 2.0 and Rosie, but may come in handy.

Input: Give the password to me.  
Output: User has asked me to give the password to him or her.

~~~
<category>
<pattern>GIVE THE * TO *</pattern>
<template>User has asked me to give the <star/> to <person2><star index="2"/></person2></template>
</category>
~~~

**gender.substitution**

Transforms gender pronouns to the opposite gender. Also rarely used, but potentially useful.

Input: Does it belong to him?  
Bot: No, it belongs to her.

~~~
<category>
<pattern>DOES IT BELONG TO *</pattern>
<template>No, it belongs to <gender><star/></gender></template>
</category>
~~~

**normal.substitution**

The normal.substitution file functions a bit differently than the others, in that it can actually perform substitutions before the bot attempts to match the input to a pattern. This file is essentially a configuration file for the AIML preprocessor. Include this utility category in your bot:

Input: Say pandorabots.com.  
Output: pandorabots dot com

~~~
<category>
<pattern>SAY *</pattern>
<template><star/></template>
</category>
~~~

This simple category allows us to see the AIML preprocessor at work. The normal.substitution file defines the key ".com" with the value "dot com". By echoing the wildcard contents, we can see the "normalized" input string that matched the pattern. Try out some additional inputs to see other normalizations in action:

Input: Say I can’t hear you.  
Output: I can not hear you

Input: Say isn’t.  
Output: is not

Input: Say becasue.  
Output: because

You can see that this file was also designed to normalize contractions, as well as some commonly mistyped words. Expanding this file will greatly increase your bot’s ability to understand inputs even when typos are present!

Note: The category described here is a very useful utility for debugging your bot! It’s a great tool to have available for use during development.

Please make sure you review the default normal.substitution file to see how inputs will be normalized. Some of the default normalization may not work for your use case, and you have the ability to customize the file as needed \(removing substitutions, changing them or adding new ones\).

**denormal.substitution**

This file will "correct" normalizations done to your input, so that echoed inputs are returned with punctuation, etc. For example:

Input: Take me to pandorabots.com.  
Template: Redirecting to pandorabots.com

~~~
<category>
<pattern>TAKE ME TO *</pattern>
<template>Redirecting to <denormalize><star/></denormalize></template.
</category>
~~~

Without the denormalize tag, `<star/>` would have returned "pandorabots dot com" as in the previous example. Instead, we are substituting the string "dot" with a period, as the input was originally typed.

**Sentence splitting**

Our AIML interpreter attempts to form a match with each sentence found in the input. Most of the time, an input will only be one sentence long, but in the case that it is longer, we divide the input based on a hardcoded list of "sentence splitters". These are punctuation marks that generally mark the end of a sentence.

Our system gives control to bot developers. When you create a new bot, one of the default bot properties is called "sentence-splitters", and it includes the following items:

* **.** \(period\)
* **?** \(question mark\)
* **!** \(exclamation mark\)
* **。** \(Japanese full stop\)
* **？** \(full width question mark\)
* **！** \(full width exclamation mark\)

If you want to change your bot to support different sentence splitters, you will need to perform a couple changes to your bot files. For example, let’s say you want to define the semicolon as a sentence splitter:

Input: Hello; My name is Charles.  
Output: Hello. Nice to meet you, Charles.

~~~
<category>
<pattern>Hello</pattern>
<template>Hello.</template>
</category>

<category>
<pattern>My name is *</pattern>
<template>Nice to meet you, <set name="myname"><star/></set>.</template>
</category>
~~~

First, update your bot property to add the semicolon to the "sentence-splitters" property  
In the Playground Editor:

![]({{ site.baseurl }}/images/Screenshot-2014-10-14-at-5-27-26-PM-1.png)

Or, if you are updating the file in a text editor before uploading, add it to the JSON list item for "sentence-splitters".

~~~
[["name", "testbot"],
["default-get", "unknown"],
["default-property", "unknown"],
["default-map", "unknown"],
["sentence-splitters", ".!?。？！;"],
["learn-filename", "pand_learn.aiml"],
["max-learn-file-size", "1000000"]]
~~~

You will also need to update normal.substitution to reflect this addition. By default, normal.substitution replaces the semicolon with a single space. This substitution pair needs to be deleted in order for the semicolon to be identified as a sentence delimiter in our system.

**Big Picture**

Substitutions are especially handy if you have connected your bot to messaging services or social media platforms \(like [Twitter](http://blog.pandorabots.com/putting-your-pandorabot-on-twitter/){:target="_blank"}\), where user inputs can often be colloquial or include things like emoticons, abbreviations, and hashtags. Luckily, using substitutions to transform inputs that include something like a \#--&gt;HASHTAG, you can code your bot to recognize all these things and more!

---

# Wildcards in AIML {#wildcards}

The Ultimate Default Category \(UDC\) is used by the bot to provide an answer if no other suitable category can be matched.

~~~
<category>
<pattern>*</pattern>
<template>I have no answer for that.</template>
</category>
~~~

We use an asterisk `*` in the pattern to capture the user's input. This symbol in AIML is known as a wildcard.

Wildcards are used to capture many inputs using only a single category. There are a number of different wildcards that can be used in AIML. Please note that wildcards apply only to words and not characters within a word!

## The \* Wildcard

The `*` symbol is able to capture one \(1\) or more words in the user input

~~~
<pattern>HELLO *</pattern>
~~~

This pattern would match all of the following inputs:

Hello there!  
Hello Daniel.  
Hello my good friend.  
Hello, anyone there?

But **not** the word "Hello" by itself, because there must be at least one word captured by the `*` wildcard to form a match.

## The ^ Wildcard

The `^` symbol is also a wildcard, however, it can capture 0 or more words.

~~~
<pattern>HELLO ^</pattern>
~~~

This pattern would match all of the following inputs:

Hello.  
Hello there!  
Hello Daniel.  
Hello my good friend.  
Hello, anyone there?

What if both patterns exist? Which one will form a match?

#### HELLO \*

#### HELLO ^

Wildcards are ranked in order of priority, so that certain patterns will take precedence over others.

The `^` has higher priority, so if the input is "Hello there", the 2nd pattern would be matched.

## Exact Matches

If a pattern forms an exact match with the input, that category will take precendence  
over any containing the `^` or `*` wildcards that it could potentially match.

#### HELLO THERE

#### HELLO ^

#### HELLO \*

If the input is "Hello there", the first pattern will match before the other wildcard patterns.

## The \_ and \# Wildcards

There are two other wildcards, `_` and `#`. These wildcards take the highest priority  
when matching. Even if the input forms an exact match with a pattern, the match can be  
overridden by a pattern containing one of these wildcards.

#### HELLO \_

#### HELLO THERE

If the input is "Hello there", the first pattern will form a match.

`_` is a "1 or more" wildcard \(like `*`\)  
`#` is a "0 or more" wildcard \(like `^`\)

Be very careful when using these wildcards because they will override all other patterns, including exact match!

## Matching Priorities

This example shows the matching priority for all four wildcards, along with a pattern that contains an exact match.

### HELLO \# &gt; HELLO \_ **&gt;** HELLO THERE **&gt;** HELLO ^ **&gt;** HELLO \*

## Highest Priority Matching

Sometimes there is an exact match that we would like to take highest priority, overriding the `_` and `#` wildcards.  
We can use the $ sign to signify that a pattern will be matched first given a particular word.

~~~
<pattern>$WHO IS MIKE</pattern>
:
<pattern>_ MIKE</pattern>
~~~

The first pattern matches "Who is Mike?" while the second pattern matches all other inputs ending with "Mike".

Note, that the $ symbol is not a wildcard. It is a marker that says "for this particular word\(s\)  
\(e.g WHO\), override the category that would have otherwise been matched.

## Visualizing Matching Priority

All of the bot's AIML categories are loaded into a structure called the "Graphmaster." The order in which  
patterns take matching priority can be visualized in the Graphmaster:

![](/images/Graphmaster.png)![](https://lh6.googleusercontent.com/w2kudeyyH0OxdGIzXMi6ZBllQvCseFVcr03RKvu1pp9h5ybUZY8Rx3p04Nybc4ZHcwoREc3P-Q90-l8Qeh-UiurJoxuzWm0y2kgPnEruHxZbySFXpUWq7W-Ik9XTdNtO4xJRmTG5klc)

## Multiple Wildcards

You can have more than one wildcard per pattern. You can echo multiple wildcards in your  
pattern by using `<star index="x" />`, where x corresponds to the index number \(position in  
the sentence\) of the wildcard. Not including the index assumes the first wildcard. For example:

~~~
<category>
<pattern>MY NAME IS * AND I AM * YEARS OLD</pattern>
<template>Hi <star/>. I am also <star index="2" /> years old!</template>
</category>
~~~
</div>
