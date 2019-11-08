---
permalink: /live-training/
layout: default
---

<div markdown="1" class="pb-docs__content">

# Live Training

#### _Interact in real-time conversations with end users while creating bot responses._

---

# What is Live Training?

Live Training is a tool that allows you to pause bot responses to interact with the end user directly. The human written responses are then saved to your bot in the pand_livetraining file.

The feature is intended for conversation designers, or the person responsible for dat-to-day bot updates. The person writing the human responses should do so in the voice of the chatbot.

## Why would you use Live Training

Live Training has two primary use cases. The first is to build out a bot quickly using internal clients and testers. The testers can simulate customer conversations, and the conversation designer can write back responses to those inputs. This can yield an initial set of intents required by the chatbot to cover, and the conversation designer can adjust the automatically saved responses to match broader patterns.

In a similar fashion, Live Training is great for post-release chatbot building. Internal testers will not know exactly what end users will actually say. It will allow you to release earlier with the ability to monitor and step into conversations where your bot is not yet built to cover.


---

# Definitions

**Bot Active**

The bot is responding as normal. This is the default state for any deployed bot.

**Bot Paused**

The bot will not respond to incoming end user inputs. End user inputs will still be logged, but there will not be a bot response. The bot should only be paused when there is an active human agent engaged in the conversation.

The bot is paused on a per-conversation basis. Pausing the bot in one conversation with a user will not pause the bot for other conversations. The bot will remain active for other conversations.

**Live Training Takeover**

A human agent has sent a response to the end user. This will trigger three things. First, the bot will pause for the current conversation. Second, Live Training will send a message to the end user stating that the bot has been paused. This message can be configured in the Live Training settings. Third, the human agent response will be sent to the user.

**Bot Reactivated**

The bot has become active again. This can be done by flipping the toggle from Bot Paused to Bot Active in the conversation frame. Bot reactivation will trigger a message from Live Training that the bot has become active again. This message is configurable in Live Training settings.

**Live Training Inactivity**

If the human agent is not active on the Pandorabots platform for 15 minutes, the bot will automatically reactivate itself. You can configure a separate message for inactivity in the Live Training settings.

## Notes

You cannot have a human agent and a bot active in the same conversation at the same time.

---

#Client Names

The client names are only intended to help you keep track of the separate conversations. They are randomly generated from a short list of adjectives and nouns that are mostly robot related.

</div>
