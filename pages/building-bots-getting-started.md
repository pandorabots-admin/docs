---
permalink: /building-bots/
layout: default
---

<div markdown="1" class="pb-docs__content">

# Getting started with chatbot development {#getting-started-with-chatbot-development}

If you’ve found this tutorial, you hopefully know what a chatbot is and what Pandorabots can do to help you build and deploy one.

For those of you who don’t know, a chatbot is an application that can have a conversation in natural language. You can say something to the bot, and the bot will parse your input and provide the most relevent response it can. This type of application is known as the stimulus response model.

## What is Pandorabots? {#what-is-pandorabots}

Pandorabots offers a cloud-based chatbot compiler and runtime. Our platform is the most popular implementation of the AIML 2.0 language, which is used to actually create the bot. Once you’ve deployed your code to our servers, your chatbot will be accessible via our Talk API. This allows you to integrate your bot into any application that can make an HTTP request.

This tutorial will focus on how to actually develop the bot. We will be talking primarily about AIML, and how to organize your code into organized, reusable modules for maximum efficiency.

## What is AIML? {#what-is-aiml}

AIML is an acronym for “artificial intelligence markup language,” and is the primary language used currently by the Pandorabots platform. It is an extension of XML.

## Hello world! {#hello-world}

Let’s begin with everyone’s favorite lesson when learning a new programming language. Create a file called`main.aiml`and paste in the following text:

~~~
<?xml version="1.0" encoding="utf-8" ?>
<aiml version="2.0">

<category>
  <pattern>HI</pattern>
  <template>Hello world!</template>
</category>

</aiml>
~~~

Save this file to your bot, and now try talking to it:

> **Human**: Hi  
> **Bot**: Hello world!

Let’s break down the file, line by line, to better understand the structure of an AIML file:

~~~
<?xml version="1.0" encoding="utf-8" ?>
~~~

This line declares your file as an XML document. While this is unecessary from the point of view of the Pandorabots platform, it actually enables features in your text editor that can be of great help during AIML development. You don’t have to take advantage of this, but we generally suggest that you include the declaration.

~~~
<aiml version="2.0">
~~~

This line declares the file as an AIML document. This line is required by the AIML compiler on our platform. All of your AIML code will appear between this and the final line, which marks the end of the AIML document.

~~~
<category>
~~~

This line marks the beginning of our first [category](/docs/aiml-reference/#category), which is the base unit of code in an AIML based chatbot. Each category defines an input \([pattern](/docs/aiml-referemce/#pattern)\) and an output \([template](/docs/aiml-referemce/#template)\).

~~~
<pattern>HI</pattern>
~~~

This is the category’s [pattern](/docs/aiml-reference/#pattern) element. The pattern defines some input text. When you say something to the bot, it will evaluate all of its categories until it finds one whose pattern matches the input. In this example, our category will be matched when the user’s input is “HI”.

~~~
<template>Hello world!</template>
~~~

The template defines an action that the bot should take when a category has been matched. In this example, the action to return the text “Hello world!” to the person speaking with the bot.

~~~
</category>
~~~

This marks the end of our category. You can insert new categories below this, as long as they appear before the closing AIML tag.

~~~
</aiml>
~~~

This marks the end of the AIML document.

## Moving forward {#moving-forward}

Your next stop should be [Bot Building 101](/docs/building-bots/tutorial/) where you can master both AIML and Platform basics.

</div>
