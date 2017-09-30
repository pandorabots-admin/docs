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

## Platform Components

#### Log In

The Pandorabots platform supports OAuth \(single sign-on\) via Google, Facebook, Twitter, Yahoo, and Github. You may also create an account using an email address and password. Upon initial log in, you will be assigned a username \(taking the form of "unXXXXXXXX"\) and prompted to create your first bot. Bot names must be 3-64 characters in length and lowercase alphanumeric. Together, your username and botname form a unique identifier for your bot, also known as your "botid."

#### Bot Creation

To create a new bot, use the "+" button next to **My Bots** on the left navigation panel. Note that AIML can be written in almost any natural language, and you can select the language for your bot from a drop-down upon creation. \(For Asian and other languages that require segmentation, Pandorabots offers a machine learning-based segmenter as a service; email us to learn more\).

\#\#\#Selecting starter libraries like Rosie

#### Bot Statistics

Clicking on **My Bots **on the left navigation panel will display some key global statistics for all of your bots for the past 30 days. These include total _Interactions_, _Clients_, _Sessions_, and the average number of _Interactions/Session_. In the broader ecosystem, "Interactions/Session" is also sometimes known as _Turns per Conversation \_or_ TPC\_, and is a stat botmasters measure and reference to highlight client engagement with their chatbot.

Clicking on the name of each individual bot will display the same four individual statistics for that specific bot.

Platform users who require more in-depth analytics can plug in additional third-party analytics engines of their choosing.

#### Bot Editing

Selecting the name of an individual bot on the left navigation panel will open a drop-down menu consisting of several components, including: _Edit_, _Deploy_, _Logs_, and _Delete_. The **Editor **is your gateway to creating and maintaining your bot files.

\#\#\#Download bot files

\#\#\#Staging v. Production

#### Bot Deployment

The **Deployment Page**, accessible via the _Deploy_ link under each individual bot name displayed on the left nav, lists a variety of _Integrations_. Integrations provide an easy method for deploying your bot to popular third party platforms and channels like Facebook Messenger and the Web.

