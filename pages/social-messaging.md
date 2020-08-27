---
permalink: /social-messaging/
layout: default
---

<div markdown="1" class="pb-docs__content">
# Deploying your Rich Media bot on Social Messaging channels #

If you are building a bot you'd like to deploy on a social messaging channel using Rich Media AIML, you will need to be aware of some of the limitations on those channels compared to what the Pandorabots Chat Widget supports:

#### Button ####

Here is an example AIML with multiple postback buttons:
~~~
:
<template>
What cheese is your favorite?
<button><text>Cheddar</text><postback>I LIKE CHEDDAR CHEESE</postback></button>
<button><text>Swiss</text><postback>I LIKE SWISS CHEESE</postback></button>
<button><text>Something else</text><postback>GO TO NEXT THING</postback></button>
</template>
:
~~~
Channel details:
* Social messaging channels require that you have accompanying text before your buttons. If you create a category without accompnaying text for your buttons, our system will provide a default text of "Pick:" so the social messaging channels do not reject this message. We recommend you always include accompany text as the example above "What cheese is your favorite?"
* Facebook Messenger only supports 3 buttons and a maximum of 20 characters in the text before cropping.
* Telegram supports more than 10 buttons but button text is cropped to display buttons horizontally.
* Twilio does not render tappable buttons. Postback buttons would not work, but URL buttons will display the button text and URL link, which is tappable
* Twitter DM supports more than 10 buttons but displays them under their input field box rather than in the chat feed.
* PB Chat Widget can render the buttons without accompanying text and can support more than 10 buttons. 

~~~
:
<template>
<button><text>I like Brie</text><postback>I LIKE BRIE CHEESE</postback></button>
<button><text>I like Cheddar</text><postback>I LIKE CHEDDAR CHEESE</postback></button>
<button><text>I like Gouda</text><postback>I LIKE GOUDA CHEESE</postback></button>
<button><text>I like Swiss</text><postback>I LIKE SWISS CHEESE</postback></button>
<button><text>Other</text><postback>GO TO NEXT THING</postback></button>
<button><text>I don't like cheese</text><postback>GO TO NEXT THING</postback></button>
</template>
:
~~~


#### Reply ####

* Social messaging channels require that you have accompanying text before your replies similar to buttons. 
* Facebook Messenger supports up to 11 replies (called quick replies) and do not persist once you select a reply.
* Telegram treats reply and buttons that same.
* Twilio does not render tappable replies.
* Twitter DM supports up to 20 predefined options presents as quick replies, rendered under the text input field.
* PB chat widget can support more than 11 replies and do not persist once you select a reply.
* Social messaging channels cannot mix Replies with other types of elements (without a `<split/>` between them)

#### Carousel ####

* Facebook Messenger supports a maximum of 10 cards in a carousel 
* Telegram and Twitter DM do not support a horizontal carousel with swipeable cards, carousels do not work as expected and are not recommended
* Twilio does not support carousel or card rich media element
* PB Chat Widget can support more than 10 cards in a carousel, using horizontal swipeable cards

#### Image ###

* Twilio does not support embeddable images, but will display image URL as a link

#### Video ###

* Twilio does not support embeddable videos, but will display video URL as a link

#### Delay ####

* Facebook Messenger, Telegram, and Twitter DM provide a visual indicator of a delay, such as "typing…" or animated dots
* Twilio supports delay but no visual indicator
* PB chat widget displays a visual indicator (animated dots) during the time delay

</div>
