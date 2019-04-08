---
permalink: /modules/
layout: default
---

{% include sidebar.md %}
<div markdown="1" class="pb-docs__content">

# Modules
#### Plug-and-play modules for extending your bot's capabilities.

___

# OpenWeather {#open-weather}

Certain dynamic information like the weather may be difficult or impossible to hard-code in AIML in advance. Enter bot modules, a handy solution for interfacing with third-party APIs, external knowledge or back-end databases, and more.

The OpenWeather Bot is a utility bot module that allows you to access [OpenWeatherMap.org](http://www.openweathermap.org/api){:target="_blank"} current weather information through their Weather API. *To request alpha access, email info at pandorabots dot com and include your application ID.*

Before getting started, familiarize yourself with the `<sraix>` [element](/docs/aiml-reference/#sraix), and sign up for your own [free (or paid) plan](http://openweathermap.org/appid){:target="_blank"}  at OpenWeatherMap.org.

Note: when using utility bot modules to access third party APIs, in addition to needing an account with that service provider you should familiarize yourself with any rate or other limitations. Some third-party services may cause additional latency in bot responses.

### Initial Setup in your Bot Properties ###

When first creating your bot, a default bot properties file is automatically created. We recommend adding three bot properties to this file to keep track of your specific values needed to make use of the module:

* Utility bot identifier - **utility/openweather**
* OpenWeather API Key - you must sign up for a weather API key at [OpenWeatherMap.org](http://openweathermap.org/appid){:target="_blank"}
* Units format - the OpenWeather utility bot supports units format: **imperial** (i.e. Fahrenheit, feet, etc), **metric** (Celsius, meters) or **kelvin**.  

For example, try adding the following parameters to your bot properties file:  

    [  
      ["myweatherutilitybot","utility/openweather"],   
      ["myweatherapikey","{appid}"],  
      ["myunitsformat","imperial"],
      ...
    ]

NOTE: Replace `{appid}` with your weather API key received from OpenWeather.org.

### Utility Bot Usage ###

CURRENT  *{query}* *{location}* OWMAPPID *{appid}* UNITSFORMAT *{metric, kelvin, or imperial}*

### Example Canonical Category ###
If you added your module parameters into your bot properties files:

    <category>
      <pattern>XOPENWEATHER *</pattern>
      <template><sraix><bot><bot name="myweatherutilitybot"/></bot>CURRENT <star/> OWMAPPID <bot name="myweatherapikey" /> UNITSFORMAT <bot name="myunitsformat" /></sraix></template>
    </category>

Alternatively you can include the values directly into your category such as:

    <category>
       <pattern>XOPENWEATHER *</pattern>
       <template><sraix bot="utility/openweather">CURRENT <star/> OWMAPPID {appid} UNITSFORMAT imperial</sraix></template>
    </category>

### Queries ###

<table class="table table-striped table-bordered">
<tr><th>Query Description</th><th>Query Syntax</th></tr>
<tr><td>general weather condition (icon)</td><td>WEATHER <i>{location}</i></td></tr>
<tr><td>temperature (F, default or C, or Kelvin)</td><td>TEMP <i>{location}</i></td></tr>
<tr><td>cloudiness</td><td>CLOUDS <i>{location}</i></td></tr>
<tr><td>time of sunrise (UTC)</td><td>SUNRISE <i>{location}</i></td></tr>
<tr><td>time of sunset (UTC)</td><td>SUNSET <i>{location}</i></td></tr>
<tr><td>wind direction (cardinal)</td><td>WINDDIR <i>{location}</i></td></tr>
<tr><td>wind speed</td><td>WINDSPEED <i>{location}</i></td></tr>
<tr><td>atmospheric pressure (hPa)</td><td>PRESSURE <i>{location}</i></td></tr>
<tr><td>humidity (%)</td><td>HUMIDITY <i>{location}</i></td></tr>
<tr><td>visibility (feet, default or metric: meters)</td><td>VISIBILITY <i>{location}</i></td></tr>
<tr><td></td><td></td></tr>
</table>

#### Interaction Examples ####

**Input:** xopenweather weather mumbai  
**Output:** Sky is Clear  

**Input:** xopenweather temp beijing  
**Output:** 39.18    

**Input:** XOPENWEATHER WINDDIR DEATH VALLEY  
**Output:** SE  

**Input:** XOPENWEATHER Humidity Miami FL  
**Output:** 65  


### Guidelines ###

#### Alternate Responses: ####
Open Weather utility bot may respond in unexpected ways, such as:

* Invalid query: blank response
* Invalid units format: response returned in imperial format
* Ambiguous location: `Multiple Candidates. Please provide more information to narrow down`
For example, San Diego will return this response, so you would need to include more information, e.g. San Diego, TX or San Diego CA
* No information available for that query: `nil`
* Missing / invalid utility bot: `SRAIXFAILED`  Please check to make sure you are providing the correct utility module bot name in your sraix category.

### Example Reductions: ###

You can reduce a natural language query to a open weather utility bot query. For example, using `<srai>` to your canonical category:

    <category>
      <pattern>WHAT IS THE CURRENT WEATHER IN *</pattern>
      <template><srai>XOPENWEATHER WEATHER <star /></srai></template>
    </category>

or if you want to return a different response:

    <category>
      <pattern>WHAT IS IT LIKE IN *</pattern>
      <template><srai>XOPENWEATHER CLOUDS <star/></srai></template>
    </category>

or if you want to make a change to units format for a single query:

    <category>
      <pattern>WHAT IS THE METRIC TEMP IN *</pattern>
      <template>
        <sraix><bot><bot name="myweatherutilitybot"/></bot>
			CURRENT TEMP <star/> OWMAPPID <bot name="myweatherapikey" /> UNITSFORMAT metric
		</sraix>
      </template>
    </category>

##### Interaction Examples: #####
*NOTE: these examples below assumes  you have standard normal.substitution file that processes contractions like "what's"*

**Input:** What's the current weather in Boston?  
**Output:** Multiple Candidates. Please provide more information to narrow down  

**Input:** What's the current weather in Boston, MA  
**Output:** scattered clouds  

**Input:** What's it like in Tokyo?  
**Output:** clear sky  

**Input:** What's the metric temp in Beijing?  
**Output:** 3.99  

___

# Mitsuku {#mitsuku}

The Mitsuku Module is a bot module ported from the award-winning [Mitsuku chatbot](http://www.mitsuku.com/). It was designed as an integration in a bot network, to serve as a personality layer or general knowledge/conversational back-end. Bot modules abstract a lot of the work that goes into creating a robust, fully-featured chatbot system.

Use of the Mitsuku Module is available as a premium add-on to select [AIaaS plans](https://developer.pandorabots.com/#plans). *Please contact [info@pandorabots.com](info@pandorabots.com) for pricing and additional details.*

## Credentials

Following purchase and setup, you will receive a custom set of credentials required to make calls to the Mitsuku Module. These can be retrieved from your application details page at [chatbots.io](https://developer.pandorabots.com/){:target="_blank"}, as Mitsuku Module.

You should store these as a bot property in your bot’s .properties file:

`[["mitsukumodule", "<Mitsuku Module Credentials>"]]`

## Routing to Mitsuku

In order to integrate the Mitsuku Module with your bot, you’ll have to include some AIML to route inputs from your users. The `<sraix>` element tells your bot to send some text to another bot on the server:

    <!-- mitsukumodule request handler from routes.aiml -->
    <category>
      <pattern>XMITSUKUMODULE *</pattern>
      <template><srai>XMITSUKUMODULE XRESPONSE <sraix><bot><bot name="mitsukumodule"/></bot><star/></sraix> XENDX</srai></template>
    </category>

    <!-- mitsukumodule response handlers from routes.aiml -->
    <category>
      <pattern>XMITSUKUMODULE XRESPONSE * XENDX</pattern>
      <template><star/></template>
    </category>

The routing category determines how your bot will decide when to send an input to the Mitsuku Module.

    <!-- ultimate default category from pand_system.aiml -->
    <category>
      <pattern>*</pattern>
      <template><srai>XMITSUKUMODULE <star/></srai></template>
    </category>

In this basic example, the Mitsuku Module is attached to the default category. Whenever your bot fails to find a better match for an input, this category will be matched. If this was the only category contained by your bot, everything you say to it would automatically redirect to the module.

You can target more specific inputs by using context and pattern-matching. For example, you could use the topic tag to forward all soccer related conversation to the Mitsuku Module:

    <topic name="soccer">
    <category>
      <pattern>*</pattern>
      <template><srai>XMITSUKUMODULE RESPONSE <sraix><bot><bot name="mitsukumodule"></bot><star/></sraix> XENDX</srai></template>
    </category>
    </topic>

## Name override (OPTIONAL)

You can override the Mitsuku Module’s name by wrapping the <sraix> element described above in the <denormalize> tag:

    <!-- Modified request handler for mitsukumodule in routes.aiml -->
    <category>
      <pattern>XMITSUKUMODULE *</pattern>
      <template><srai>XMITSUKUMODULE XRESPONSE <denormalize><sraix><bot><bot name="mitsukumodule"/></bot><star/></sraix></denormalize> XENDX</srai></template>
    </category>

Then, modify the denormal.substitutions file to include the following key-value pair as a substitution (use your intended name as the second item):

    [
      ["Mitsuku", "Alice"],
      ...
    ]

Now, any time the module returns some text that contains the word Mitsuku, the denormalize tag will replace the word with the name you specified.

Please note that while you can override her name in this manner, the Mitsuku personality is not changeable. She will continue to be a young woman from the UK with a sassy personality regardless of the name change!

## Custom response handling (OPTIONAL)

You also have the option to intercept a response from Mitsuku module before it is returned to your end user. This allows you to give your bot different behavior depending on what the module returns:

    <!-- mitsukumodule request handler from routes.aiml -->
    <category>
      <pattern>XMITSUKUMODULE *</pattern>
      <template><srai>XMITSUKUMODULE XRESPONSE <sraix><bot><bot name="mitsukumodule" /></bot><star/></sraix> XENDX </srai></template>
      </category>

From the initial routing AIML described above, you’ll notice that the `<sraix>` route to the Mitsuku Module is wrapped in an `<srai>` tag. This allows you to redirect module’s response to another category in your bot, for additional processing before a response is returned to the user. We’ve prepended the string XMITSUKUMODULE to mark inputs that have been received by Mitsuku Module.

    <!-- "response handler" in routes.aiml -->
    <category>
      <pattern>XMITSUKUMODULE XRESPONSE * XENDX</pattern>
      <template><star/></template>
    </category>

This category will now capture all responses returned by the module. You can then write additional patterns beginning with XMITSUKUMODULE to capture certain responses. For example, to handle a recursion error gracefully:

    <category>
      <pattern>XMITSUKUMODULE XRESPONSE TOO MUCH RECURSION IN AIML XENDX</pattern>
      <template>I’m sorry, I am pretty busy right now.</template>
    </category>

    <category>
      <pattern>SRAIXFAILED</pattern>
      <template>I’m sorry, I am pretty busy right now.</template>
    </category>

## Predicates

For information on getting and setting predicates in your own bot, please take a look at our [tutorial](/docs/building-bots/tutorial/) on the subject.

Predicates can be stored in either your own bot or in Mitsuku, however, the two bots will not have direct access to each other’s variables. This prevents a bot from “leaking” information about its user to other bots. All variables will be resolved locally in a bot before a string is passed to another bot via `<sraix>`.

The Mitsuku Module contains a wealth of AIML that sets predicates during conversation, mostly regarding personal details about the end user (age, location, gender, etc.). You can issue the input “CLIENT PROPERTIES” to Mitsuku Module to get client predicates it currently has stored.

## Properties

The hardwired properties of the Mitsuku Module can also be displayed by entering bot input "BOT PROPERTIES".

## Next Steps

Email info@pandorabots.com for pricing and additional support questions during setup.

</div>
