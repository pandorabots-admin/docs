---
permalink: /aiml-libraries/
layout: default
---

{% include sidebar.md %}
<div markdown="1" class="pb-docs__content">

# AIML Libraries

#### _Standard libraries for performing various utilities like basic math, string, and boolean functions, and more._

---

### AIML Standard Library {#aiml-standard-library}

The following are standard library AIML categories \(Github repo: [aimlstandardlibrary.aiml](http://github.com/pandorabots/aiml-utilities)\). These include some math, boolean and string operations, and other basic operations that can be used for more complex AIML programming involving SRAI handling of end-user input. Some of these are base operations used by other operations.

In Syntax column, replace {} with actual values. See Example column for input/output result examples.

| Operation | Syntax | Description | Example |
| :--- | :--- | :--- | :--- |
| False | XFALSE {input} | Returns FALSE for any input. | **INPUT: **XFALSE true **OUTPUT: **FALSE  **INPUT: **XFALSE hello there **OUTPUT: **FALSE |
| True | XTRUE {input} | Returns TRUE for any input. | **INPUT: **XTRUE false **OUTPUT: **TRUE  **INPUT: **XTRUE hello there **OUTPUT: **TRUE |
| Number | XNUMBER {input} | Returns the input if it is a number. Otherwise, it will return your bot's UDC response. Limited to positive numbers only. | **INPUT: **XNUMBER 3 **OUTPUT: **3  **INPUT: **XNUMBER hello there **OUTPUT: **I don't have an answer for that. |
| String | XSTRING {input} | Returns the input as a normalized string. | **INPUT: **XSTRING yum@goodeats.com **OUTPUT: **yum at goodeats dot com  **INPUT: **XSTRING Hello there. **OUTPUT: **Hello there |
| True if True | XISTRUE {input} | Returns TRUE if the input string is true. | **INPUT: **XISTRUE true **OUTPUT: **TRUE  **INPUT: **XISTRUE 6 **OUTPUT: **FALSE |
| True if False | XISFALSE {input} | Returns TRUE if the input string is false. | **INPUT: **XISFALSE true **OUTPUT: **FALSE  **INPUT: **XISFALSE false **OUTPUT: **TRUE |
| True if Number | XISNUMBER {input} | Returns TRUE if the input string is a number, and FALSE if it is not. Limited to positive integers only. | **INPUT: **XISNUMBER 236 **OUTPUT: **TRUE  **INPUT: **XISNUMBER telegram **OUTPUT: **FALSE |
| Check Data Type \(Number, String, Boolean\) | XTYPEOF {input} | Returns datatypes XNUMBER, XSTRING, or XBOOL depending upon the type. Limited to positive integers only. | **INPUT: **XTYPEOF true **OUTPUT: **XBOOL  **INPUT: **XTYPEOF Now is the time **OUTPUT: **XSTRING  **INPUT: **XTYPEOF 34235 **OUTPUT: **XNUMBER |
| Addition | XADD {number} XS {number} | Returns sum of two numbers. Limited to positive integers only. | **INPUT: **XADD 45 XS 132 **OUTPUT: **177  **INPUT: **XADD 1 XS 1 **OUTPUT: **2 |
| Subtraction | XSUB {number} XS {number} | Returns difference of two numbers. Limited to positive integers only. Returns 0 if result would be negative. | **INPUT: **XADD 67 XS 1 **OUTPUT: **66  **INPUT: **XADD 45 XS 132 **OUTPUT: **0 |
| Multiplication | XMUL {number} XS {number} | Returns product of two numbers. Limited to positive integers only. | **INPUT: **XMUL 3 XS 5 **OUTPUT: **15  **INPUT: **XMUL 0 XS 5 **OUTPUT: **0 |
| Division | XDIV {number} XS {number} | Returns the quotient of two numbers. Limited to positive integer values. The decimal value will be truncated \(rounded down\). Returns infinite if trying to divide by zero. | **INPUT: **XDIV 11 XS 3 **OUTPUT: **3  **INPUT: **XDIV 4 XS 0 **OUTPUT: **infinite |
| Modulo operation | XMOD {number} XS {number} | Returns the remainder after division of one number by another. Limited to positive integer values. | **INPUT: **XMOD 11 XS 3 **OUTPUT: **2  **INPUT: **XMOD 10 xs 5 **OUTPUT: **0 |
| Less than | XLT {number} XS {number} | Returns TRUE if first number is less than second number. Otherwise, returns FALSE. Limited to positive integer values. | **INPUT: **xlt 88 xs 123 **OUTPUT: **TRUE  **INPUT: **XLT 10 XS 3 **OUTPUT: **FALSE |
| Greater than | XGT {number} XS {number} | Returns TRUE if first number is greater than second number. Otherwise, returns FALSE. Limited to positive integer values. | **INPUT: **xgt 88 xs 88 **OUTPUT: **FALSE  **INPUT: **XGT 10 XS 3 **OUTPUT: **TRUE |
| Less than or Equal to | XLE {number} XS {number} | Returns TRUE if first number is less than or equal to second number. Otherwise, returns FALSE. Limited to positive integer values. | **INPUT: **XLE 44 XS 44 **OUTPUT: **TRUE  **INPUT: **XLE 5 XS 2 **OUTPUT: **FALSE |
| Greater than or Equal to | XGE {number} XS {number} | Returns TRUE if first number is greater than or equal to second number. Otherwise, returns FALSE. Limited to positive integer values. | **INPUT: **XGE 3 XS 3 **OUTPUT:**TRUE  **INPUT: **XGE 23 XS 582 **OUTPUT: **FALSE |
| String Concatenation | XADD {string} XS {string} | Returns combination of two strings. | **INPUT: **XADD Betty XS Boop **OUTPUT: **BettyBoop |
| String Equals | XEQ {string} XS {string} | Returns TRUE if first string is the same as second string. Otherwise, returns FALSE. Capitalization is not considered. | **INPUT: **XEQ john XS John **OUTPUT: **TRUE  **INPUT: **XEQ fish XS fishing **OUTPUT: **FALSE |
| String Not Equal | XNE {string} XS {string} | Returns TRUE if first string is not the same as second string. Otherwise, returns FALSE. Capitalization is not considered. | **INPUT: **XNE john XS John **OUTPUT: **FALSE  **INPUT: **XNE fish XS fishing **OUTPUT: **TRUE |
| NOT operation | XNOT {input} | Returns TRUE if input is false, and vice versa. If input is not boolean, returns FALSE. | **INPUT: **XNOT true **OUTPUT: **FALSE  **INPUT: **XNOT false **OUTPUT: **TRUE |
| Count characters | XLENGTH {string} | Returns number of characters in the string. Note that space characters are not counted, if there are more than one word in the string. | **INPUT: **XLENGTH hello **OUTPUT: **5  **INPUT: **XLENGTH hello there **OUTPUT: **10 |
| Random Number | XRANDOM | Returns a random single digit number, 0-9 inclusive. | **INPUT: **XRANDOM **OUTPUT: **9 |
| Extract substring | XSUBSTRING {input} XS {number} | Returns a substring from the input starting after the first N characters. | **INPUT: **XSUBSTRING rosemary XS 4 **OUTPUT: **mary |
| Maximum Number | XMAX {number} {number} ... {number} | Returns the maximum value from a list of numbers. Limited to positive integer numbers. | **INPUT: **XMAX 10 3 7 2 **OUTPUT:**10  **INPUT: **XMAX 10 10 **OUTPUT:**10 |
| First word | XCAR {sentence} | Returns the first word of a string. Limited to a single sentence. | **INPUT: **XCAR How are you? **OUTPUT: **How |
| Remaining words after first | XCDR {sentence} | Returns the remainder of the words after stripping out the first word. Limited to a single sentence. | **INPUT: **XCDR How are you? **OUTPUT: **are you |
| Concatenate strings | XIMPLODE {input1} {input2} .. | Returns a string with input strings combined. Limited to a single sentence. | **INPUT: **XIMPLODE hello there stranger **OUTPUT: **hellotherestranger |
| Reverse words | XREVERSE {string} | Returns a string with words in reverse order. | **INPUT: **XREVERSE parkbench picnic **OUTPUT: **picnic parkbench  **INPUT: **XREVERSE one two three **OUTPUT:** three two one |
| NULL | XBLACKHOLE {input} | Returns nothing back in bot response | **INPUT: **XBLACKHOLE **OUTPUT:** |
| Output string N times | XLOOP {string} XS {number} | Returns string value concatenated multiple times. Note: does not work if string includes sentence splitting characters. | **INPUT: **XLOOP bot XS 4 **OUTPUT: **botbotbotbot  **INPUT: **XLOOP I like you XS 2 **OUTPUT: **I like youI like you |
| Word Count | XCOUNT {string} | Returns number of words in input string. Words are delimited by space and special characters that have been normalized. | **INPUT: **XCOUNT now is the time **OUTPUT: **4  **INPUT: **XCOUNT My email is cup@me.com **OUTPUT: **8 |

---

### Using Rosie (AKA Small Talk) {#using-rosie}

_**Update:**_ _We will occasionally push changes to the Rosie repository to improve the existing content. We highly suggest that you watch the project on _[_Github_](https://github.com/pandorabots/rosie)_ to keep track of future updates._

_Unless otherwise noted, future updates to Rosie will be placed in **z\_update.aiml**. If you are already working with a version of Rosie, you should upload only this file to your bot. This will allow you to get the updates without overwriting files you may have done custom work on._

Original platform users may be wondering where they can access pre-written AIML \(like Dr. Wallace’s ALICE bot\) to use as base content for their bot. We provide such open-source AIML content to save users the hassle of “reinventing the wheel”  by recreating basic functionality.

Enter [Rosie](https://github.com/pandorabots/rosie): she’s free to download, a fork of the ALICE 2.0 project, and optimized for use on the Pandorabots Platform. These files are automatically uploaded into your bot when you select the Small Talk content option. This post will show you how to start building a custom chatbot on top of the Rosie “brain.”

Here are the different files you’ll find in Rosie:

## Properties \(rosie.properties\)

A property is a variable that is global to all users of a bot. Generally, properties are used to store information about your bot: it’s name, age, status, etc. Rosie comes with an extensive properties file that you can edit to easily customize your bot’s personality. This is a great place to get started exploring Rosie’s capabilities. Try giving the pre-existing properties some custom values, or add new properties as you see fit.

## Bot information \(bot\_profile.aiml, personality.aiml\)

These two files contain categories that actually implement the variables you have defined in the properties file. For example, Rosie comes preloaded with a property named “job”, and the property is integrated in a category found in bot\_profile.aiml:

~~~
<category><pattern>JOB</pattern>
<template>I am a full-time <bot name="job"/>.</template>
</category>
~~~

Now, when the JOB pattern is matched, the category will give a response that contains whatever value you have assigned the “job” property in the rosie.properties file.

Most of the fun in bot development is not only picking out custom property values for your bot, but also customizing the templates in which these values are returned. For example, I might edit the above category to add a little more flair to my bot:

~~~
<category><pattern>JOB</pattern>
<template>By day, I am a <bot name="job"/>. At night, I crawl the internet looking for pictures of cats wearing funny hats.</template>
</category>
~~~

## Client information \(client\_profile.aiml\)

Pandorabots are amazing because of their uncanny ability to remember personal information about the people talking to them. These pieces of information are stored as predicate variables, which are local to the particular client. The client\_profile.aiml file contains mostly categories designed to both set and recall these predicates in the course of conversation:

~~~
<category><pattern>I AM FROM *</pattern>
<template>Is that where you live now?  <think><set name="birthplace"><star/></set></think></template>
</category>
<category><pattern>MY BIRTHPLACE</pattern>
<template><get name="birthplace"/></template>
</category>
~~~

This is another great file to customize, by changing the existing templates, or by adding new categories that set new predicates about your user.

## Contextual categories \(udc.aiml, that.aiml, train.aiml\)

The ultimate default category \(UDC\) is designed to give a response when your bot was unable to match the user’s input with any other category. If your bot is in its beginning stages of development, the UDC will be an indispensable tool.

~~~
<category><pattern>*</pattern>
<template>I didn’t understand that!</template>
</category>
~~~

You can customize this file by changing the default list elements in the UDC template, or by adding your own additional list elements.

The that.aiml file is included mostly as an example of what can be done with context in AIML using the `<that>` tag. The `<that>` tag is used to attach a category to the previous answer given by a bot; in other words, a category with a `<that>` tag can only be matched if the the previous response matches the contents of `<that>`. For example:

~~~
<category><pattern>YES</pattern>
<that>IS IT A NICE PLACE</that>
<template>What do you like best about it?</template>
</category>
~~~

Out of context, the input “yes” could be referring to anything. This category’s `<that>` tag, however, places the yes in the context of the bot’s previous response \(IT IS A NICE PLACE\).

The that.aiml file included contains a number of these useful context categories. Feel free to delete, edit, or add more context categories!

Finally, the train.aiml file is designed for you to easily take advantage of the AIML 2.0 `<learn>` tag, which allows a client to generate a new category during conversation.

## Environment configuration \(config.aiml, rosie.pdefaults\)

The configuration file is designed with the application developer in mind. It allows you to set a predicate based on the environment to which the bot is being talked to \(browser, mobile, screenless, etc.\).

Think about it this way: let’s say I have a category that displays a picture of a cat when activated. What if there is no screen interface for my bot? You can use the “env” predicate in categories whose response depends on the condition of the client’s environment. Here’s an example from bot\_profile.aiml:

~~~
<category><pattern>PIC</pattern>
<template>
<condition name="env">
<li value="browser">My picture: <bot name="picture"/></li>
<li>You'll have to connect me to a browser if you want to see a picture.</li>
</condition>
</template>
</category>
~~~

The default value of the “env” predicate is “browser”. If the value of “env” is browser, the bot will respond with the first list item. If the “env” predicate is set to anything else, the second list item will serve as the response.

You can use the categories found in config.aiml to set these types of predicates. You can then write AIML categories whose response is dependent on the value of these predicates:

~~~
<category><pattern>XSET ENV *</pattern>
<template>Environment is <set name="env"><star/></set></template>
</category>
~~~

## Utilities \(date.aiml, dialog.aiml, roman.aiml, utilities.aiml\)

These files are all tools and utilities that allow your bot to perform various functions. The date.aiml file, for example, allows you to type SEASON and receive the current season \(based on the current date\).

The AIML found is these files is very useful for any bot developer. You shouldn’t have to modify these files, but if you do, you’ll probably want to avoid changing anything other than template-side contents.

## Filters \(inappropriate.aiml, insults.aiml, profanity.aiml\)

These files act as filters when someone talking to the bot is attempting to say something “naughty.” Depending on what type of bot you are building, you may or may not want to include these files. They are quite comprehensive, so we included them in Rosie’s core.

Rosie’s UDC contains a randomized list of responses. Robust chatbots will often have hundreds of potential responses in this list. Rosie’s UDC has about 50 different responses; you may edit these and add to the list as you see fit.

## Reductions \(reductions1.aiml, reductions2.aiml, reductions\_update.aiml\)

Try asking Rosie about her job:

What is your job? I am a full-time chatbot.  
Do you have a job? I am a full-time chatbot.

The reason these inputs are able to match our JOB category is because Rosie is chalk-full of useful reduction categories that simplify common inputs into succinct denominations. In other words, Rosie will automatically translate DO YOU HAVE A JOB and WHAT IS YOUR JOB to the much simpler JOB. By modifying the template of the single JOB category, we can effectively modify the answer given to a large number of inputs.

The bulk of Rosie \(and ALICE\) is made up of these reduction categories. For example, here are some categories from reductions1.aiml:

~~~
<category><pattern>WHAT COUNTRY AM I *</pattern>
<template><srai>MY COUNTRY </srai></template>
</category>
<category><pattern>WHAT COUNTRY ARE WE *</pattern>
<template><srai>MY COUNTRY </srai></template>
</category>
<category><pattern>WHAT COUNTRY ARE WE IN</pattern>
<template><srai>MY COUNTRY </srai></template>
</category>
<category><pattern>WHAT COUNTRY IS THIS</pattern>
<template><srai>MY COUNTRY </srai></template>
</category>
~~~

These categories reduce similar inputs to the simple pattern MY COUNTRY. You can modify the bot’s response to all four of these patterns by finding the MY COUNTRY category and changing the contents of its template.

Although the reductions files are at the heart of Rosie’s prowess with natural language understanding, you will most likely not have to edit anything in these files. However, it would be beneficial to skim through to get a feel for the types of reductions that are implemented in Rosie.

## Sets and Maps

Finally, Rosie contains a large number of set and map files that were inherited from ALICE 2.0. Some of these are implemented in the AIML, others are not; but because they are such valuable resources for pattern matching and storing key-value pairs, they are included.

## Substitutions

Rosie comes preloaded with all the same substitution files found when you create a new bot on the [Pandorabots Platform](https://home.pandorabots.com).

Start using Rosie now by downloading the [github files](https://github.com/pandorabots/rosie) and uploading them to a bot on the [Pandorabots Platform](https://home.pandorabots.com).

</div>
