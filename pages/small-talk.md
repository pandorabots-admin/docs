---
permalink: /building-bots/small-talk/
layout: default
---

{% include sidebar.md %}
<div markdown="1" class="pb-docs__content">

# Customizable Small Talk Content (aka Rosie)

Our open source small talk (or chitchat) content is a fork of the ALICE 2.0 project based on Dr. Wallace's ALICE bot, which we originally named "Rosie".

Here are the different files you’ll find in our small talk content.

## Properties

A property is a variable that is global to all users of a bot. Generally, properties are used to store information about your bot: 
it’s name, age, status, etc. Rosie comes with an extensive properties file that you can edit to easily customize your bot’s personality. 
This is a great place to get started exploring Rosie bot capabilities. Try giving the pre-existing properties some custom values, 
or add new properties as you see fit. Rosie's AIML files contain categories that actually implement the variables you have defined in the 
properties file. 

## Bot Profile (bot_profile.aiml)

Rosie comes preloaded with a property named “job”, and the property is integrated in a category found in bot_profile.aiml:

    <category><pattern>JOB</pattern> 
    <template>I am a full-time <bot name="job"/>.</template> 
    </category>

Now, when the JOB pattern is matched, the category will give a response that contains whatever value you have assigned the "job" 
property in the properties file.

Most of the fun in bot development is not only picking out custom property values for your bot, but also customizing the templates 
in which these values are returned. For example, I might edit the above category to add a little more flair to my bot:

   <category>
     <pattern>JOB</pattern> 
     <template>By day, I am a <bot name="job"/>. At night, I crawl the internet looking for pictures of cats wearing funny hats.</template> 
   </category>

## Client Profile (client_profile.aiml)  

Pandorabots are amazing because of their uncanny ability to remember personal information about the people talking to them. 
These pieces of information are stored as predicate variables, which are local to the particular client. 
The client_profile.aiml file contains mostly categories designed to both set and recall these predicates in the course of conversation:

    <category><pattern>I AM FROM *</pattern> 
    <template>Is that where you live now? <think><set name="birthplace"><star/></set></think></template> 
    </category> 
    <category><pattern>MY BIRTHPLACE</pattern> 
    <template><get name="birthplace"/></template> 
    </category>

This is another great file to customize, by changing the existing templates, or by adding new categories that set new predicates about your user.

## Contextual categories (udc.aiml, that.aiml, train.aiml)

The ultimate default category (UDC) is designed to give a response when your bot was unable to match the user's 
input with any other category. If your bot is in its beginning stages of development, the UDC will be an 
indispensable tool.

    <category><pattern>*</pattern> 
    <template>I didn't understand that!</template> 
    </category>

You can customize this file by changing the default list elements in the UDC template, or by adding your own additional 
list elements. The that.aiml file is included mostly as an example of what can be done with context in AIML 
using the <that> tag. The &lt;that&gt; tag is used to attach a category to the previous answer given by a bot; 
in other words, a category with a &lt;that&gt; tag can only be matched if the the previous response matches 
the contents. For example:

    <category><pattern>YES</pattern> 
    <that>IS IT A NICE PLACE</that> 
    <template>What do you like best about it?</template> </category>

Out of context, the input "yes" could be referring to anything. This category’s &lt;that&gt; tag, however, places the yes 
in the context of the bot's previous response (IT IS A NICE PLACE).  

The that.aiml file included contains a number of these useful context categories. Feel free to delete, edit, 
or add more context categories! 

Finally, the train.aiml file is designed for you to easily take advantage of the AIML 2.0 <learn> tag, 
which allows a client to generate a new category during conversation.

## Environment configuration (config.aiml, pdefaults)

The configuration file is designed with the application developer in mind. It allows you to set a predicate 
based on the environment to which the bot is being talked to (browser, mobile, screenless, etc.).
Think about it this way: let's say I have a category that displays a picture of a cat when activated. What 
if there is no screen interface for my bot? You can use the “env” predicate in categories whose response 
depends on the condition of the client’s environment. Here’s an example from bot_profile.aiml:

    <category><pattern>PIC</pattern> 
    <template> 
      <condition name="env"> 
        <li value="browser">My picture: <bot name="picture"/></li> 
        <li>You'll have to connect me to a browser if you want to see a picture.</li> 
      </condition> 
    </template> 
    </category>

The default value of the "env" predicate is "browser". For browser, the bot will respond with the first list 
item. If env is set to anything else, the second list item will serve as the response.

You can use the categories found in config.aiml to set these types of predicates. You can then write AIML 
categories whose response is dependent on the value of these predicates:

    <category><pattern>XSET ENV *</pattern> 
      <template>Environment is <set name="env"><star/></set></template>
    </category>

## Tools and Utilities

These files are all tools and utilities that allow your bot to perform various functions. 
The date.aiml file, for example, allows you to type SEASON and receive the current season 
(based on the current date). The AIML found is these files is very useful for any bot developer. 
You shouldn’t have to modify these files, but if you do, you’ll probably want to avoid changing 
anything other than template-side contents.

Rosie’s UDC contains a randomized list of responses. Robust chatbots will often have hundreds of 
potential responses in this list.  Rosie's UDC has about 50 different responses; you may edit these 
and add to the list as you see fit.

## Filters (inappropriate.aiml, insults.aiml, profanity.aiml)

These files act as filters when someone talking to the bot is attempting to say something inappropriate. 
Depending on what type of bot you are building, you may or may not want to include these files. 
They are quite comprehensive, so we included them.

## Reductions

Try asking Rosie about her job:  

    What is your job? I am a full-time chatbot.
    Do you have a job? I am a full-time chatbot.

The reason these inputs are able to match our JOB category is because Rosie is chalk-full of useful 
reduction categories that simplify common inputs into succinct denominations. In other words, 
Rosie will automatically translate DO YOU HAVE A JOB and WHAT IS YOUR JOB to the much simpler JOB. 
By modifying the template of the single JOB category, we can effectively modify the answer given 
to a large number of inputs.

The bulk of Rosie (and ALICE) is made up of these reduction categories. For example, here are some
categories from reductions1.aiml:

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

These categories reduce similar inputs to the simple pattern MY COUNTRY. You can modify the 
bot's response to all four of these patterns by finding the MY COUNTRY category and changing 
the contents of its template.

Although the reductions files are at the heart of Rosie’s prowess with natural language 
understanding, you will most likely not have to edit anything in these files. However, it 
would be beneficial to skim through to get a feel for the types of reductions that are implemented in Rosie.

## Sets and Maps

Finally, Rosie contains a large number of set and map files that were inherited from ALICE 2.0. 
Some of these are implemented in the AIML, others are not; but because they are such valuable 
resources for pattern matching and storing key-value pairs, they are included.

</div>

