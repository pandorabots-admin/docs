---
permalink: /callapi/
layout: default
---

<div markdown="1" class="pb-docs__content">

# Call API

#### _Add external integrations and services directly from your bot._

---

# What is Call API?

Call API is an externsion of AIML 2.1, built into the Pandorabots platform. It allows bot developers to build API calls to external servies into their AIML. The AIML is interpreted as normal, and the calls are sent via the Pandorabots platform. Responses are then received by the Pandorabots platform and passed back to the bot, which interprets the response via AIML. Call API is not yet standardized, so it may not be portable to other AIML interpreters.

## Why would you use Call API

Call API has three primary purposes: to get dynamic data from an external source that you can't program into your bot (e.g. the weather or stock ticker price), to extend the knowledge and capabilites of your bot by referencing external sources (e.g. news site or Wikipedia), or to save information from users in a database that you control as part of a larger service (e.g. inputing location details for a catering event).

---

# Definitions

### &lt;callapi /&gt;
{: #callapi}

This is the wrapping tag for the Call API function. Everything happening with the API call will be within the opening and closing tag. You will need to set either a `var` or a predicate around the `callapi` tag to be able to process the response.

#### Attributes

`response_code_var`
This will be the http response code from the external service.

#### Usage

    <callapi response_code_var="response_code">
        <url>http://api.coindesk.com/v1/bpi/currentprice.json</url>
    </callapi>


## Notes

---

#Other

</div>
