---
permalink: /social-messaging/
layout: default
---

<div markdown="1" class="pb-docs__content">
# Deploying your Rich Media bot on Social Messaging channels #

If you are building a bot you'd like to deploy on a social messaging channel using Rich Media AIML, you will need to be aware of some of the limitations on those channels compared to what the Pandorabots Chat Widget supports:

#### Button ####

All social messaging channels require that you have accompanying text before your buttons, and only supports a maximum of 3 buttons. Here is an example AIML of an accompany text (bolded) with max number of buttons:

~~~
<template>
What cheese is your favorite?
<button><text>Cheddar</text><postback>I LIKE CHEDDAR CHEESE</postback></button>
<button><text>Swiss</text><postback>I LIKE SWISS CHEESE</postback></button>
<button><text>Something else</text><postback>GO TO NEXT THING</postback></button>
</template>

~~~

PB Chat Widget can render the buttons without accompanying text and can support more than 3 buttons. For example, here is a valid bot response in AIML on the chat widget that would not work on other social messaging channels like Messenger, etc.:

~~~
<template>
<button><text>I like Brie</text><postback>I LIKE BRIE CHEESE</postback></button>
<button><text>I like Cheddar</text><postback>I LIKE CHEDDAR CHEESE</postback></button>
<button><text>I like Gouda</text><postback>I LIKE GOUDA CHEESE</postback></button>
<button><text>I like Swiss</text><postback>I LIKE SWISS CHEESE</postback></button>
<button><text>Other</text><postback>GO TO NEXT THING</postback></button>
<button><text>I don't like cheese</text><postback>GO TO NEXT THING</postback></button>
</template>
~~~

Twilio, Viber, and WeChat do not render tappable buttons but displays the action types as text, so postbacks do not work if you are using a different value than the text.

#### Reply ####

* Same limitations as Buttons, except social messaging channels support a maximum of 11 replies, 
* PB chat widget can support more than 11 replies.
* Unlike Buttons, Viber does support tappable suggested replies.

#### Carousel ####

* Social messaging channels support a maximum of 10 cards in a carousel except Viber which has a 6 item limit.
* PB Chat Widget can support more than 10 cards in a carousel
* Telegram does not support a horizontal carousel with swipeable cards
* Twilio, WeChat supports only vertical display text of the carousel titles and does not support tappable buttons.

#### Video ###

* All social messaging channels do not support embeddable videos, but will display video URL as a downloadable link
* PB chat widget supports embeddable videos

#### Delay ####

* Some, but not all, social messaging channels provide a visual indicator of a delay, such as "typing…"
* PB chat widget displays a visual indicator (animated dots) during the time delay

</div>
