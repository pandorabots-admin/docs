# Updating the Docs #

### Adding a Page ###

There are two steps to adding a new page:
- Add your new page in `.md` format to the `pages` directory.
- Add an entry to the `navigation` directory to set up sidebar links.

#### Step 1 - Creating your page ####

##### Front Matter #####

At the top of each markdown file under `pages`, you'll see a section that looks like this:

~~~
---
permalink: /social-messaging/
layout: default
---
~~~

This is the page's "Front Matter", which is how Jekyll allows configuration of the page's location and metadata.

The only required fields for our purposes are the `permalink`, which defines the specific path for the page, and the `layout`, which is currently always `default`. This tells Jekyll to use `_layouts/default.html` as the base html for your page.

##### Page Content #####

The format for your page content should be something like this:

~~~
{% include sidebar.md %}
<div markdown="1" class="pb-docs__content">
  -PAGE MARKDOWN HERE-
</div>
~~~

The first line tells Jekyll to include the navigation menu in the generated html.

The HTML div wrapping around your markdown is for page formatting. Note the `markdown="1"` attribute: This tells Jekyll to read the contents of an HTML element as markdown and not HTML.

#### Step 2 - Adding navigation to your page ####

Under the `navigation` directory, there are separate subdirectories for each section of the side nav. Find the section you want your link to appear under, and create a new markdown file.

##### Front Matter #####

Front Matter for side nav links looks something like this:

~~~
---
title: Social Messaging
permalink: /docs/social-messaging/
url: /social-messaging/
order_number: 3
---
~~~

Jekyll uses the `permalink` and `url` for different purposes, but the only difference should be the inclusion of the `/docs/` prefix under the permalink entry. The `title` variable represents the visible link text. The `order_number` variable is optional - if excluded, the links in the directory will be ordered alphabetically.

##### Page Content #####

A simple link only requires the above Front Matter - no page content is necessary. To have links collapsed under a top level link, a bulleted list can be supplied as the page content.

See below for an example:

~~~
* [Core Concepts](/docs/building-bots/tutorial/#core-concepts)
* [Platform Components](/docs/building-bots/tutorial/#platform-components)
<li markdown="1">
* [Basic AIML Training](/docs/building-bots/tutorial/#basic-aiml-training)
    * [Categories](/docs/building-bots/tutorial/#bat-categories)
    * [Wildcards](/docs/building-bots/tutorial/#bat-wildcards)
    * [Variables](/docs/building-bots/tutorial/#bat-variables)
    * [Recursion and Reduction](/docs/building-bots/tutorial/#recursion-and-reduction)
    * [Sets and Maps](/docs/building-bots/tutorial/#sets-and-maps)
    * [Context](/docs/building-bots/tutorial/#context)
    * [Learning](/docs/building-bots/tutorial/#learning)
    * [Revisiting Key Platform Components](/docs/building-bots/tutorial/#revisiting-key-platform-components)
</li>
* [Additional AIML Features](/docs/building-bots/tutorial/#additional-aiml-features)
* [Next Steps: Deploying Your Bot](/docs/building-bots/tutorial/#next-steps)
* [Updating your Bot](/docs/building-bots/tutorial/#updating-your-bot)
~~~

To create links nested deeper than one level, the link and its children need to be wrapped in `<li markdown="1">`, as seen above.
