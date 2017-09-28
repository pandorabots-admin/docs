---
layout: aiml
title: aiml
---

### &lt;aiml&gt;

The *AIML root element* delimits a block of AIML code. All other elements must be descendents of the root element.

#### Attributes

`version` (optional)
Specifies the AIML version that the document is written in.

#### Usage

    <?xml version="1.0" encoding="UTF-8"?>
    <aiml version="2.0">
    <!-- AIML code goes here -->
    </aiml>
---
layout: aiml
title: bot
---

### &lt;bot /&gt;

The *bot element* is used to recall custom bot properties defined in the `.properties` file. These variables are accessible to all users of the bot.

#### Attributes

`name` (required)  
Specifies the name of the property being recalled. If no property exists under the specified name, the bot element will return the value of the property named `default-property`.

#### Usage

    <category>
      <pattern>WHAT IS YOUR NAME</pattern>
      <template>My name is <bot name="name" /></template>
    </category>
---
layout: aiml
title: category
---

### &lt;category&gt;

The *category element* delimits a base unit of knowledge in an AIML-based chatbot. In a very broad sense, a single category accepts an input, and returns an output.

All AIML elements (with the exception of the AIML root element and the topic element) must be contained within a category block.

#### Usage

    <category>
    <pattern>HI</pattern>
    <template>Hello world!</template>
    </category>
---
layout: aiml
title: condition
---

### &lt;condition&gt;

The *condition element* is used to create an IF-THEN-ELSE type of control flow within a bot's response. This is done by checking the value of a variable, and returning a response depending on that value.

#### Attributes

You can choose whether your condition rests on a predicate or local variable, depending on the attribute you provide:

`name`    
Specifies the name of the predicate whose value will be checked.

`var`    
Specifies the name of the local variable whose value will be checked.

#### Usage

The condition element is used in conjunction with list elements written with `value` attributes. If the value of the predicate referenced in the condition element matches that of any list element's value, that list element will be returned.

If the list element contains no value attribute, it will be returned in the case that no other list elements match the predicate's value.

    <category>
    <pattern>DO YOU FIND ME ATTRACTIVE</pattern>
    <template>
      <condition name="gender">
        <li value="male">I find you very handsome.</li>
        <li value="female">I find you very pretty.</li>
        <li>I find you very attractive.</li>
      </condition>
    </template>
    </category>

In this example, the bot will check the value of a predicate named `gender`. In the case that the predicate's value is either `"male"` or `"female"`, one of the first two list elements will be returned. If neither of these conditions is met, then the third list element will be returned.

You can also use conditionals to check the status of a predicate, i.e. whether or not it has been set.

    <category>
    <pattern>WHAT IS MY NAME</pattern>
    <template>
    <condition name="firstname">
      <li value="unknown">You haven't told me your name.</li>
      <li>Your name is <get name="firstname" /></li>
    </condition>
    </template>
    </category>

NOTE: if a predicate hasn't been set with a value yet, the value will be "unknown" based on bot property `default-get`.

---
layout: aiml
title: date
---

### &lt;date /&gt;

Returns the date of the user's locale.

#### Attributes

`format` (optional)  
Specifies the format of the returned date. This can be written like arguments to UNIX's `strftime` function. More on this [here](http://pubs.opengroup.org/onlinepubs/007908799/xsh/strftime.html).

#### Usage

    <category>
    <pattern>WHAT IS THE DATE</pattern>
    <template>Today is <date format="%B %d, %Y" /></template>
    </category>
---
layout: aiml
title: denormalize
---

### &lt;denormalize&gt;


The *denormalize element* attempts to match its contents against the names of properties found in `denormal.substitution`. If a match is found, the denormalize element and its contents will be replaced by the property's value.

The properties found in `denormal.substitution` are used to reverse transformations done by `normal.substitution`.

#### Usage

During input pre-processing, `normal.subsitution` removes punctuation. We can see this by echoing the part of the input that originally contained some puncutation:

    <category>
    <pattern>SAY *</pattern>
    <template><star /></template>
    </category>

>**Input:** Say pandorabots.com  
**Output:** pandorabots dot com

This punctuation can be re-inserted by using the denormalize element:

    <category>
    <pattern>SAY *</pattern>
    <template><denormalize><star /></denormalize></template>
    </category>

>**Input:** Say pandorabots.com  
**Output:** pandorabots.com
---
layout: aiml
title: eval
---

### &lt;eval&gt;

The *eval element* is used to reference variables found in an outer category from within a nested category. This allows you to echo wildcard contents from an outer category from within a learn category.

Anything found within an eval element will be evaluated first, before the new category is created.

#### Usage

    <category>
    <pattern>THE * IS BLUE</pattern>
    <template>
      I will remember that the <star /> is blue.
      <learn>
        <category>
        <pattern>WHAT COLOR IS THE <eval><star /></eval></pattern>
        <template>The <eval><star /></eval> is blue</template>
        </category>
      </learn>
    </template>
    </category>

>**Input:** The sky is blue.  
**Output:** I will remember that the sky is blue.

>**Input:** What color is the sky?  
**Output:** The sky is blue.
---
layout: aiml
title: explode
---

### &lt;explode&gt;

The *explode element* is used to break a single word in to multiple words, by inserting spaces in between each character.

#### Usage

    <category>
    <pattern>EXPLODE *</pattern>
    <template><explode><star /></explode></template>
    </category>

>**Input:** Explode coffee  
**Output:** c o f f e e
---
layout: aiml
title: first
---

### &lt;first&gt;

The *first element* returns the first word found in its contents. This is an implementation of list processing in AIML.

#### Usage

    <category>
    <pattern>FIRST *</pattern>
    <template><first><star /></first></template>
    </category>

>**Input:** First a b c d  
**Output: a**
---
layout: aiml
title: formal
---

### &lt;formal&gt;

The *formal element* returns its contents with each word capitalized.

#### Usage

    <category>
    <pattern>FORMAL *</pattern>
    <template><formal><star /></formal></template>
    </category>

>**Input:** Formal george washington  
**Output:** George Washington
---
layout: aiml
title: gender
---

### &lt;gender&gt;

The *gender element* attempts to match its contents against the names of properties found in `gender.substitution`. If a match is found, the gender element and its contents will be replaced by the property's value.

The `gender.substitution` file contains properties whose names and values contain pronouns of opposite genders.

#### Usage

    <category>  
    <pattern>DOES IT BELONG TO *</pattern>  
    <template>No, it belongs to <gender><star/></gender></template>  
    </category>

>**Input:** Does it belong to her?  
**Output:** No, it belongs to him
---
layout: aiml
title: get
---

### &lt;get /&gt;

The *get element* is used to return the value stored in a variable.

#### Attributes

You can use the `<get />` element to retrieve bot predicates and local variables.

`name`  
Specifies the name of the predicate to recall. If the predicate does not yet have a value, then the get element will return the default value for that predicate as specified in the `.pdefaults` file. If no default is specified, then the get element will return the value of the property `default-get`.

`var`  
Similar to the `name` attribute, but returns the value of a local variable.

#### Usage

    <category>
    <pattern>WHAT IS MY NAME</pattern>
    <template><get name="name" /></template>
    </category>

    <category>
    <pattern>MY NAME IS *</pattern>
    <template>Nice to meet you, <set name="name"><star /></template>
    </category>

>**Input:** What is my name?  
**Output:** unknown  
**Input:** My name is Daniel.  
**Output:** Nice to meet you, Daniel.  
**Input:** What is my name?  
**Output:** Daniel.

As seen in the above example, the first category returns the `default-get` property value ("unknown") in the case that no custom predicate `name` has been set. Once the second category has been engaged, the get element returns the custom value of the predicate.

To avoid returning the value of `default-get`, you can use a condition element to first check whether or not a predicate has been set. By using a wildcard as the list element's `value` attribute, we can check for any value of the predicate other than an empty string.

    <category>
    <pattern>WHAT IS MY NAME</pattern>
    <template>
      <condition name="name">
        <li value="*"><get name="name" /></li>
        <li>You have not told me your name.</li>
      </condition>
    </template>
    </category>
---
layout: aiml
title: id
---

### &lt;id /&gt;

The *id element* returns the current `botid`, along with the `client_name` of whoever has issued the input. `botid` is the same as `app_id/botname`.

#### Usage

Here is an example of using the `<id/>` tag on the Playground, inside of a bot with
the app_id "Daniel" and botname "test":

    <category>
      <pattern>TEST ID</pattern>
      <template><id/></template>
    </category>

>**Input:** TEST ID  
**Output:** -playground-daniel/test/daniel
---
layout: aiml
title: input
---

### &lt;input /&gt;

The *input element* returns the entire user's input. This is distinct from the star element, which returns only contents captured by a wildcard in the matched pattern.

#### Usage

    <category>
    <pattern>Stop repeating me</pattern>
    <template><input /></template>
    </category>

>**Input:** Stop repeating me  
**Output:** Stop repeating me
---
layout: aiml
title: interval
---

### &lt;interval&gt;

The *interval element* is used in conjunction with the date element to calculate the difference between two different times/dates.

#### Attributes

`format`  
Specifies the format of the returned date. This can be written like arguments to UNIX's `strftime` function. More on this [here](http://pubs.opengroup.org/onlinepubs/007908799/xsh/strftime.html).

#### Child tags

`<from>`  
Specifies the date from which the interval should begin.

`<to>`  
Specifies the date at which the interval should end.

`<style>`  
Specifies the style in which the interval should be returned. Can contain `years`, `months`, `days`, or `seconds`.

#### Usage

To calculate the difference between the current date and the bot's birthdate, make sure to include a birthdate property in the `.properties` file, in a format that matches the format you intend to be working with.

    <category>
    <pattern>AGE IN YEARS</pattern>
    <template>
      <interval format="%B %d, %Y">
        <style>years</style>
        <from><bot name="birthdate"/></from>
        <to><date format="%B %d, %Y" /></to>
      </interval>
    </template>
    </category>

The style element specifies that the interval should be returned in years.
---
layout: aiml
title: learn
---

### &lt;learn&gt;

The *learn element* allows the user to generate new category blocks from within a conversation. This powerful introduced in AIML 2.0 allows users to actually teach the bot new information.

Categories generated by the learn element are stored in memory, and are only accessible with the `client_name` that was used to create them.

#### Usage

    <category>
    <pattern>I LIKE COFFEE</pattern>
    <template>
      I will remember that you like coffee.
      <learn>
        <category>
        <pattern>WHAT DO I LIKE</pattern>
        <template>You like coffee.</template>
        </category>
      </learn>
    </template>
    </category>

>**Input:** I like coffee.  
**Output:** I will remember that you like coffee.  
**Input:** What do I like?  
**Output:** You like coffee
---
layout: aiml
title: li
---

### &lt;li&gt;

The *list item element* can be a child of both `<condition>` and `<random>`. It allows you to attach mulitple responses, each of which is chosen under certain circumstances.

#### Attributes

`value` (optional)  
You may specify a value when the list item element is the child of a condition element. The list item element will be returned if the value matches that of the predicate referenced in the condition element.

#### Usage

Using `<li>` inside of a `<random>` element:

    <category>
      <pattern>HI</pattern>
      <template>
        <random>
          <li>Hello!</li>
          <li>Hola!</li>
          <li>Hallo!</li>
        </random>
      </template>
    </category>

Using `<li>` inside of a `<condition>` element:

    <category>
      <pattern>WHO AM I</pattern>      
      <template>
        <condition name="name">
          <li value="unknown">I don't know your name.</li>
          <li>Your name is <get name="name"/></li>
        </condition>
      </template>
    </category>

##### Attributes vs. Tags

In AIML 2.0, any value given by an XML attribute may also be expressed using a subtag of the same name. For example:

    <li value="x">   -->    <li><value>X</value>

This makes it possible to vary the values of attributes using XML expressions, for example:

    <category>
    <pattern>IS * EQUAL TO *</pattern>
    <template>
      <think><set var="star"><star/></set></think>
      <condition var="star">
        <li><value><star index="2"/></value>Yes.</li>
        <li>No.</li>
      </condition>
    </template>
    </category>
---
layout: aiml
title: loop
---

### &lt;loop /&gt;

The *loop element* is used to iterate over a set of list item elements that are contained in a condition block.

#### Usage

To use the loop element, you must have a list item element with a value, and a second one that has no specified value. The loop element will be a child of the second list item, signifying that each time the second item is returned by the condition block, a loop occurs.

This means that you can modify a variable (like a predicate) when the second condition is met. If the value of the new predicate matches that of the first list item, then the loop will break.

    <category>
    <pattern>COUNT TO <set>number</set></pattern>
    <template>
      <think><set name="count">0</set></think>
      <condition name="count">
        <li><value><star/></value></li>
        <li>
          <set name="count">
            <map><name>successor</name><get name="count"/></map>
          </set>
          <loop/>
        </li>
      </condition>
    </template>
    </category>

>**Input:** Count to 6  
**Output:** 1 2 3 4 5 6

This example takes advantage of the built in set `number`, which verifies am input word as a number, and the built in map `successor`, which maps integers to their successive integers.

Before the condition block, the `count` predicate is initialized with the value `0`. If the user input was `Count to 0`, then the first list item will be returned (echoing the number found in the input).

Otherwise, the second item will be returned, and the `count` predicate is reset as the successive integer to the one found in the input. The loop element will run the condition again, and will continue to return the second list item until the predicate count matches the value of `<star />`.
---
layout: aiml
title: lowercase
---

### &lt;lowercase&gt;

The *lowercase element* transforms all letters in its contents to lowercase.

#### Usage

    <category>
      <pattern>A B C</pattern>
      <template><lowercase><input/></lowercase></template>
    </category>

>**Input:** A B C  
**Output:** a b c
---
layout: aiml
title: map
---

### &lt;map&gt;

The *map element* is used to reference a `.map` file, which attempts to match the map element's contents to one of its own properties, returning the property's value. Maps are data structures that provide key-value pairs.

#### Built-in Maps

Pandorabots have some built-in maps that are not visible in the list of bot files:

    <map name="successor">     -- maps any number n to n+1
    <map name="predecessor">   -- maps any number to n-1
    <map name="plural">        -- (attempts to) find the plural form of a singular noun (English only).
    <map name="singular">      -- (attempts to) find the singular forms of a plural noun (English only).
    
#### Attributes

`name` (required)  
Specifies the name of the `.map` file to match contents against.

#### Usage

This example uses [state2capital.map](https://github.com/pandorabots/rosie/blob/master/lib/maps/state2capital.map) and [state.set](https://github.com/pandorabots/rosie/blob/master/lib/sets/state.set), both from the Rosie chatbot repository.

    <category>
    <pattern>WHAT IS THE CAPITAL OF <set>state</set></pattern>
    <template>
      <map name="state2capital"><star /></map> is the capital of <star />
    </template>
    </category>

>**Input:** What is the capital of California?  
**Output:** Sacramento is the capital of California

This category shows how maps and sets can be used in conjunction with each other to create "facts" in your bot's knowledge base. The `state.set` file is called in the pattern to verify that the user's input actually contained a state. If the wildcard contents does exist in the set file, it is then passed in as an input to `state2capital.map`. If it matches any of the keys in the map file, then the map element will return as associated value.

Like sets, we can include a "default" category when the wildcard contents does not match an item in the map.

    <category>
    <pattern>WHAT IS THE CAPITAL OF *</pattern>
    <template>I don't know the capital of <star/>.</template>
    </category>
    
>**Input**: What is the capital of Pennsyltucky?  
**Output**: I don't know the capital of Pennsyltucky.  

Map files are simple string array, such as: 

    [[“Texas”, "Austin"],[“California”, "Sacramento"]]  
---
layout: aiml
title: normalize
---

### &lt;normalize&gt;

The *normalize element* attempts to match the contents within the tags against the name of the properties found in ‘normal.substitution’.  If a match if found, the *normalize element* will replace the matching elements with the properties value.  

The properties found in the ‘normal.substitution’ file are used to modify every input that the bot may receive.

#### Usage

For when one is working with non-normalized information like information found in the *input element* as an example.  We can see this by trying to return this tag with and without the *normalize element*:

    <category>
    <pattern>THIS IS JOHN S</pattern>
    <template><input/></template>
    </category>

>**Input:** This is John’s.  
**Output:** This is John’s.

This output can be changed to be reflect a normalized input by using the normalize element. 

    <category>
    <pattern>THIS IS JOHN S</pattern>
    <template><normalize><input/></normalize></template>
    </category>

>**Input:** This is John’s.  
**Output:** This is John s

This can be helpful in scenarios where one is trying to train a bot with the *learn element*.

---
layout: aiml
title: pattern
---

### &lt;pattern&gt;

The *pattern element* is the block within each category that defines a linguistic pattern against which the user's input can be matched. The pattern may contain letters, numbers, spaces, and a number of other symbols including *wildcards*. 

The bot will search through all of its categories to form a match with the user input. 

#### Capitalization
AIML matching does not differentiate between capital and lowercase letters (i.e. if the client said either "hi" or "HI", the bot would match this category. Using all caps in the pattern is used to make the code more readable.

#### Normalization
Keep in mind, that the pre-processor strips the input of all punctuation, and other normalization substitutions. Therefore, as in the usage examples, do not include any periods, question marks etc. in the pattern tag. Also, you should include the normalized input, for instance "WHAT IS" rather than "WHAT'S".

#### Usage

    <category>
    <pattern>HI</pattern>
    <template>Hello there.</template>
    </category>
    
    <category>
    <pattern>WHAT IS YOUR NAME</pattern>
    <template>My name is Rosie</template>
    </category>
    

---
layout: aiml
title: person
---

### &lt;person&gt;

The *person element* attempts to match its contents against the `person.substitutions` file, which transforms pronouns between first and second person. If the contents forms a match with the name of a property in that file, then the person element and its contents will be replaced by the property's value.

#### Usage

    <category>
    <pattern>I AM *</pattern>  
    <template>You are <person><star/></person></template>  
    </category>

>**Input:** I am waiting for you  
**Output:** You are waiting for me

In the above example, the phrase "waiting for you" is echoed in the template using `<star />`. But because the tag descends from the person element, the pronoun "you" is transformed to "me".---
layout: aiml
title: person2
---

### &lt;person2&gt;

The *person2 element* is identical to the person element, however, it is used to transform pronouns between first and third person.

#### Usage

    <category>  
    <pattern>GIVE THE * TO *</pattern>  
    <template>User has asked me to give the <star/> to <person2><star index="2"/></person2></template>  
    </category>

>**Input:** Give the password to me  
**Output:** User has asked me to give the password to them
---
layout: aiml
title: program
---

### &lt;program&gt;

The *program element* returns the name and version number of the AIML interpreter being used.

#### Usage

Using this element on the [Playground](https://playground.pandorabots.com):

    <category>
    <pattern>PROGRAM</pattern>
    <template><program /></template>
    </category>

>**Input:** Program  
**Output:** Pandorabots AIML Interpreter 2.0

---
layout: aiml
title: random
---

### &lt;random&gt;

The *random element* can be used in conjunction with list item elements to provide a set of potential bot responses, one of which will be returned at random in the case that the category is matched.

This is a very useful tag to use in default categories, or categories that you think will be matched very often, because it can provide your bot with a less repetitive personality.

#### Usage
    <category>
    <pattern>*</pattern>
    <template>
      <random>
        <li>What was that?</li>
        <li>I don't understand.</li>
        <li>Can you say that in a different way?</li>
      </random>
    </template>
    </category>

For the [UDC](http://docs.pandorabots.com/tutorials/wildcards/), each time this category is matched, the bot will pick one of the list elements (`<li>`) at random as its response.

    <category>
    <pattern>HI</pattern>
    <template>
      <random>
        <li>Hello!</li>
        <li>Well hello there.</li>
        <li>Howdy.</li>
        <li>Good day.</li>
        <li>Hi, friend.</li>
      </random>
    </template>
    </category>

If the user's input is "HI", then one of the list item elements will be returned to the user at random.

---
layout: aiml
title: aiml
---

### &lt;aiml&gt;

The *AIML root element* delimits a block of AIML code. All other elements must be descendents of the root element.

#### Attributes

`version` (optional)
Specifies the AIML version that the document is written in.

#### Usage

    <?xml version="1.0" encoding="UTF-8"?>
    <aiml version="2.0">
    <!-- AIML code goes here -->
    </aiml>
---
layout: aiml
title: bot
---

### &lt;bot /&gt;

The *bot element* is used to recall custom bot properties defined in the `.properties` file. These variables are accessible to all users of the bot.

#### Attributes

`name` (required)  
Specifies the name of the property being recalled. If no property exists under the specified name, the bot element will return the value of the property named `default-property`.

#### Usage

    <category>
      <pattern>WHAT IS YOUR NAME</pattern>
      <template>My name is <bot name="name" /></template>
    </category>
---
layout: aiml
title: category
---

### &lt;category&gt;

The *category element* delimits a base unit of knowledge in an AIML-based chatbot. In a very broad sense, a single category accepts an input, and returns an output.

All AIML elements (with the exception of the AIML root element and the topic element) must be contained within a category block.

#### Usage

    <category>
    <pattern>HI</pattern>
    <template>Hello world!</template>
    </category>
---
layout: aiml
title: condition
---

### &lt;condition&gt;

The *condition element* is used to create an IF-THEN-ELSE type of control flow within a bot's response. This is done by checking the value of a variable, and returning a response depending on that value.

#### Attributes

You can choose whether your condition rests on a predicate or local variable, depending on the attribute you provide:

`name`    
Specifies the name of the predicate whose value will be checked.

`var`    
Specifies the name of the local variable whose value will be checked.

#### Usage

The condition element is used in conjunction with list elements written with `value` attributes. If the value of the predicate referenced in the condition element matches that of any list element's value, that list element will be returned.

If the list element contains no value attribute, it will be returned in the case that no other list elements match the predicate's value.

    <category>
    <pattern>DO YOU FIND ME ATTRACTIVE</pattern>
    <template>
      <condition name="gender">
        <li value="male">I find you very handsome.</li>
        <li value="female">I find you very pretty.</li>
        <li>I find you very attractive.</li>
      </condition>
    </template>
    </category>

In this example, the bot will check the value of a predicate named `gender`. In the case that the predicate's value is either `"male"` or `"female"`, one of the first two list elements will be returned. If neither of these conditions is met, then the third list element will be returned.

You can also use conditionals to check the status of a predicate, i.e. whether or not it has been set.

    <category>
    <pattern>WHAT IS MY NAME</pattern>
    <template>
    <condition name="firstname">
      <li value="unknown">You haven't told me your name.</li>
      <li>Your name is <get name="firstname" /></li>
    </condition>
    </template>
    </category>

NOTE: if a predicate hasn't been set with a value yet, the value will be "unknown" based on bot property `default-get`.

---
layout: aiml
title: date
---

### &lt;date /&gt;

Returns the date of the user's locale.

#### Attributes

`format` (optional)  
Specifies the format of the returned date. This can be written like arguments to UNIX's `strftime` function. More on this [here](http://pubs.opengroup.org/onlinepubs/007908799/xsh/strftime.html).

#### Usage

    <category>
    <pattern>WHAT IS THE DATE</pattern>
    <template>Today is <date format="%B %d, %Y" /></template>
    </category>
---
layout: aiml
title: denormalize
---

### &lt;denormalize&gt;


The *denormalize element* attempts to match its contents against the names of properties found in `denormal.substitution`. If a match is found, the denormalize element and its contents will be replaced by the property's value.

The properties found in `denormal.substitution` are used to reverse transformations done by `normal.substitution`.

#### Usage

During input pre-processing, `normal.subsitution` removes punctuation. We can see this by echoing the part of the input that originally contained some puncutation:

    <category>
    <pattern>SAY *</pattern>
    <template><star /></template>
    </category>

>**Input:** Say pandorabots.com  
**Output:** pandorabots dot com

This punctuation can be re-inserted by using the denormalize element:

    <category>
    <pattern>SAY *</pattern>
    <template><denormalize><star /></denormalize></template>
    </category>

>**Input:** Say pandorabots.com  
**Output:** pandorabots.com
---
layout: aiml
title: eval
---

### &lt;eval&gt;

The *eval element* is used to reference variables found in an outer category from within a nested category. This allows you to echo wildcard contents from an outer category from within a learn category.

Anything found within an eval element will be evaluated first, before the new category is created.

#### Usage

    <category>
    <pattern>THE * IS BLUE</pattern>
    <template>
      I will remember that the <star /> is blue.
      <learn>
        <category>
        <pattern>WHAT COLOR IS THE <eval><star /></eval></pattern>
        <template>The <eval><star /></eval> is blue</template>
        </category>
      </learn>
    </template>
    </category>

>**Input:** The sky is blue.  
**Output:** I will remember that the sky is blue.

>**Input:** What color is the sky?  
**Output:** The sky is blue.
---
layout: aiml
title: explode
---

### &lt;explode&gt;

The *explode element* is used to break a single word in to multiple words, by inserting spaces in between each character.

#### Usage

    <category>
    <pattern>EXPLODE *</pattern>
    <template><explode><star /></explode></template>
    </category>

>**Input:** Explode coffee  
**Output:** c o f f e e
---
layout: aiml
title: first
---

### &lt;first&gt;

The *first element* returns the first word found in its contents. This is an implementation of list processing in AIML.

#### Usage

    <category>
    <pattern>FIRST *</pattern>
    <template><first><star /></first></template>
    </category>

>**Input:** First a b c d  
**Output: a**
---
layout: aiml
title: formal
---

### &lt;formal&gt;

The *formal element* returns its contents with each word capitalized.

#### Usage

    <category>
    <pattern>FORMAL *</pattern>
    <template><formal><star /></formal></template>
    </category>

>**Input:** Formal george washington  
**Output:** George Washington
---
layout: aiml
title: gender
---

### &lt;gender&gt;

The *gender element* attempts to match its contents against the names of properties found in `gender.substitution`. If a match is found, the gender element and its contents will be replaced by the property's value.

The `gender.substitution` file contains properties whose names and values contain pronouns of opposite genders.

#### Usage

    <category>  
    <pattern>DOES IT BELONG TO *</pattern>  
    <template>No, it belongs to <gender><star/></gender></template>  
    </category>

>**Input:** Does it belong to her?  
**Output:** No, it belongs to him
---
layout: aiml
title: get
---

### &lt;get /&gt;

The *get element* is used to return the value stored in a variable.

#### Attributes

You can use the `<get />` element to retrieve bot predicates and local variables.

`name`  
Specifies the name of the predicate to recall. If the predicate does not yet have a value, then the get element will return the default value for that predicate as specified in the `.pdefaults` file. If no default is specified, then the get element will return the value of the property `default-get`.

`var`  
Similar to the `name` attribute, but returns the value of a local variable.

#### Usage

    <category>
    <pattern>WHAT IS MY NAME</pattern>
    <template><get name="name" /></template>
    </category>

    <category>
    <pattern>MY NAME IS *</pattern>
    <template>Nice to meet you, <set name="name"><star /></template>
    </category>

>**Input:** What is my name?  
**Output:** unknown  
**Input:** My name is Daniel.  
**Output:** Nice to meet you, Daniel.  
**Input:** What is my name?  
**Output:** Daniel.

As seen in the above example, the first category returns the `default-get` property value ("unknown") in the case that no custom predicate `name` has been set. Once the second category has been engaged, the get element returns the custom value of the predicate.

To avoid returning the value of `default-get`, you can use a condition element to first check whether or not a predicate has been set. By using a wildcard as the list element's `value` attribute, we can check for any value of the predicate other than an empty string.

    <category>
    <pattern>WHAT IS MY NAME</pattern>
    <template>
      <condition name="name">
        <li value="*"><get name="name" /></li>
        <li>You have not told me your name.</li>
      </condition>
    </template>
    </category>
---
layout: aiml
title: id
---

### &lt;id /&gt;

The *id element* returns the current `botid`, along with the `client_name` of whoever has issued the input. `botid` is the same as `app_id/botname`.

#### Usage

Here is an example of using the `<id/>` tag on the Playground, inside of a bot with
the app_id "Daniel" and botname "test":

    <category>
      <pattern>TEST ID</pattern>
      <template><id/></template>
    </category>

>**Input:** TEST ID  
**Output:** -playground-daniel/test/daniel
---
layout: aiml
title: input
---

### &lt;input /&gt;

The *input element* returns the entire user's input. This is distinct from the star element, which returns only contents captured by a wildcard in the matched pattern.

#### Usage

    <category>
    <pattern>Stop repeating me</pattern>
    <template><input /></template>
    </category>

>**Input:** Stop repeating me  
**Output:** Stop repeating me
---
layout: aiml
title: interval
---

### &lt;interval&gt;

The *interval element* is used in conjunction with the date element to calculate the difference between two different times/dates.

#### Attributes

`format`  
Specifies the format of the returned date. This can be written like arguments to UNIX's `strftime` function. More on this [here](http://pubs.opengroup.org/onlinepubs/007908799/xsh/strftime.html).

#### Child tags

`<from>`  
Specifies the date from which the interval should begin.

`<to>`  
Specifies the date at which the interval should end.

`<style>`  
Specifies the style in which the interval should be returned. Can contain `years`, `months`, `days`, or `seconds`.

#### Usage

To calculate the difference between the current date and the bot's birthdate, make sure to include a birthdate property in the `.properties` file, in a format that matches the format you intend to be working with.

    <category>
    <pattern>AGE IN YEARS</pattern>
    <template>
      <interval format="%B %d, %Y">
        <style>years</style>
        <from><bot name="birthdate"/></from>
        <to><date format="%B %d, %Y" /></to>
      </interval>
    </template>
    </category>

The style element specifies that the interval should be returned in years.
---
layout: aiml
title: learn
---

### &lt;learn&gt;

The *learn element* allows the user to generate new category blocks from within a conversation. This powerful introduced in AIML 2.0 allows users to actually teach the bot new information.

Categories generated by the learn element are stored in memory, and are only accessible with the `client_name` that was used to create them.

#### Usage

    <category>
    <pattern>I LIKE COFFEE</pattern>
    <template>
      I will remember that you like coffee.
      <learn>
        <category>
        <pattern>WHAT DO I LIKE</pattern>
        <template>You like coffee.</template>
        </category>
      </learn>
    </template>
    </category>

>**Input:** I like coffee.  
**Output:** I will remember that you like coffee.  
**Input:** What do I like?  
**Output:** You like coffee
---
layout: aiml
title: li
---

### &lt;li&gt;

The *list item element* can be a child of both `<condition>` and `<random>`. It allows you to attach mulitple responses, each of which is chosen under certain circumstances.

#### Attributes

`value` (optional)  
You may specify a value when the list item element is the child of a condition element. The list item element will be returned if the value matches that of the predicate referenced in the condition element.

#### Usage

Using `<li>` inside of a `<random>` element:

    <category>
      <pattern>HI</pattern>
      <template>
        <random>
          <li>Hello!</li>
          <li>Hola!</li>
          <li>Hallo!</li>
        </random>
      </template>
    </category>

Using `<li>` inside of a `<condition>` element:

    <category>
      <pattern>WHO AM I</pattern>      
      <template>
        <condition name="name">
          <li value="unknown">I don't know your name.</li>
          <li>Your name is <get name="name"/></li>
        </condition>
      </template>
    </category>

##### Attributes vs. Tags

In AIML 2.0, any value given by an XML attribute may also be expressed using a subtag of the same name. For example:

    <li value="x">   -->    <li><value>X</value>

This makes it possible to vary the values of attributes using XML expressions, for example:

    <category>
    <pattern>IS * EQUAL TO *</pattern>
    <template>
      <think><set var="star"><star/></set></think>
      <condition var="star">
        <li><value><star index="2"/></value>Yes.</li>
        <li>No.</li>
      </condition>
    </template>
    </category>
---
layout: aiml
title: loop
---

### &lt;loop /&gt;

The *loop element* is used to iterate over a set of list item elements that are contained in a condition block.

#### Usage

To use the loop element, you must have a list item element with a value, and a second one that has no specified value. The loop element will be a child of the second list item, signifying that each time the second item is returned by the condition block, a loop occurs.

This means that you can modify a variable (like a predicate) when the second condition is met. If the value of the new predicate matches that of the first list item, then the loop will break.

    <category>
    <pattern>COUNT TO <set>number</set></pattern>
    <template>
      <think><set name="count">0</set></think>
      <condition name="count">
        <li><value><star/></value></li>
        <li>
          <set name="count">
            <map><name>successor</name><get name="count"/></map>
          </set>
          <loop/>
        </li>
      </condition>
    </template>
    </category>

>**Input:** Count to 6  
**Output:** 1 2 3 4 5 6

This example takes advantage of the built in set `number`, which verifies am input word as a number, and the built in map `successor`, which maps integers to their successive integers.

Before the condition block, the `count` predicate is initialized with the value `0`. If the user input was `Count to 0`, then the first list item will be returned (echoing the number found in the input).

Otherwise, the second item will be returned, and the `count` predicate is reset as the successive integer to the one found in the input. The loop element will run the condition again, and will continue to return the second list item until the predicate count matches the value of `<star />`.
---
layout: aiml
title: lowercase
---

### &lt;lowercase&gt;

The *lowercase element* transforms all letters in its contents to lowercase.

#### Usage

    <category>
      <pattern>A B C</pattern>
      <template><lowercase><input/></lowercase></template>
    </category>

>**Input:** A B C  
**Output:** a b c
---
layout: aiml
title: map
---

### &lt;map&gt;

The *map element* is used to reference a `.map` file, which attempts to match the map element's contents to one of its own properties, returning the property's value. Maps are data structures that provide key-value pairs.

#### Built-in Maps

Pandorabots have some built-in maps that are not visible in the list of bot files:

    <map name="successor">     -- maps any number n to n+1
    <map name="predecessor">   -- maps any number to n-1
    <map name="plural">        -- (attempts to) find the plural form of a singular noun (English only).
    <map name="singular">      -- (attempts to) find the singular forms of a plural noun (English only).
    
#### Attributes

`name` (required)  
Specifies the name of the `.map` file to match contents against.

#### Usage

This example uses [state2capital.map](https://github.com/pandorabots/rosie/blob/master/lib/maps/state2capital.map) and [state.set](https://github.com/pandorabots/rosie/blob/master/lib/sets/state.set), both from the Rosie chatbot repository.

    <category>
    <pattern>WHAT IS THE CAPITAL OF <set>state</set></pattern>
    <template>
      <map name="state2capital"><star /></map> is the capital of <star />
    </template>
    </category>

>**Input:** What is the capital of California?  
**Output:** Sacramento is the capital of California

This category shows how maps and sets can be used in conjunction with each other to create "facts" in your bot's knowledge base. The `state.set` file is called in the pattern to verify that the user's input actually contained a state. If the wildcard contents does exist in the set file, it is then passed in as an input to `state2capital.map`. If it matches any of the keys in the map file, then the map element will return as associated value.

Like sets, we can include a "default" category when the wildcard contents does not match an item in the map.

    <category>
    <pattern>WHAT IS THE CAPITAL OF *</pattern>
    <template>I don't know the capital of <star/>.</template>
    </category>
    
>**Input**: What is the capital of Pennsyltucky?  
**Output**: I don't know the capital of Pennsyltucky.  

Map files are simple string array, such as: 

    [[“Texas”, "Austin"],[“California”, "Sacramento"]]  
---
layout: aiml
title: normalize
---

### &lt;normalize&gt;

The *normalize element* attempts to match the contents within the tags against the name of the properties found in ‘normal.substitution’.  If a match if found, the *normalize element* will replace the matching elements with the properties value.  

The properties found in the ‘normal.substitution’ file are used to modify every input that the bot may receive.

#### Usage

For when one is working with non-normalized information like information found in the *input element* as an example.  We can see this by trying to return this tag with and without the *normalize element*:

    <category>
    <pattern>THIS IS JOHN S</pattern>
    <template><input/></template>
    </category>

>**Input:** This is John’s.  
**Output:** This is John’s.

This output can be changed to be reflect a normalized input by using the normalize element. 

    <category>
    <pattern>THIS IS JOHN S</pattern>
    <template><normalize><input/></normalize></template>
    </category>

>**Input:** This is John’s.  
**Output:** This is John s

This can be helpful in scenarios where one is trying to train a bot with the *learn element*.

---
layout: aiml
title: pattern
---

### &lt;pattern&gt;

The *pattern element* is the block within each category that defines a linguistic pattern against which the user's input can be matched. The pattern may contain letters, numbers, spaces, and a number of other symbols including *wildcards*. 

The bot will search through all of its categories to form a match with the user input. 

#### Capitalization
AIML matching does not differentiate between capital and lowercase letters (i.e. if the client said either "hi" or "HI", the bot would match this category. Using all caps in the pattern is used to make the code more readable.

#### Normalization
Keep in mind, that the pre-processor strips the input of all punctuation, and other normalization substitutions. Therefore, as in the usage examples, do not include any periods, question marks etc. in the pattern tag. Also, you should include the normalized input, for instance "WHAT IS" rather than "WHAT'S".

#### Usage

  ---
layout: aiml
title: request
---

### &lt;request /&gt;

The *request element* returns the user's input specified by its historical index value.

#### Attributes

`index`
Specifies the historical index of the user's input to recall. `index="0"` refers to the current input.

#### Usage

    <category>
    <pattern>WHAT DID I JUST SAY</pattern>
    <template><request index="1" /></template>
    </category>

>**Input:** Hi  
**Output:** Hi there!  
**Input:** What did I just say?  
**Output:** Hi
---
layout: aiml
title: response
---

### &lt;response /&gt;

The *response element* returns the bot's response specified by its historical index value.

#### Attributes

`index`
Specifies the historical index of the bot response to recall. `index="0"` refers to the current response.

#### Usage

    <category>
    <pattern>WHAT DID YOU JUST SAY</pattern>
    <template><response index="1" /></template>
    </category>

>**Input:** Hi  
**Output:** Hi there!  
**Input:** What did you just say?  
**Output:** Hi there!
---
layout: aiml
title: rest
---

### &lt;rest&gt;

The *rest element* is a list processing tag that returns the contents of the element while omitting the first word.

#### Usage

    <category>
    <pattern>REST *</pattern>
    <template><rest><star /></rest></template>
    </category>

>**Input:** Rest A B C D  
**Output:** B C D
---
layout: aiml
title: sentence
---

### &lt;sentence&gt;

The *sentence element* capitalizes the first word of its contents, as if the contents were the beginning of a sentence.

#### Usage

    <category>
      <pattern>A B C</pattern>
      <template><sentence><input/></template>
    </category>

>**Input:** a b c  
**Output:** A b c
---
layout: aiml
title: set
---

### &lt;set&gt;
The *set element* is used differently depending upon if it is in the pattern or the template.

### SET USED IN PATTERN

In a category's pattern, the *set element* is used to access values in a bot's set file, which is a list of unique text strings. For example, a set file called "colors" might include a list such as:  
red  
orange  
yellow  
green  
blue  
indigo  
...

We can use sets to dramatically reduce our overall number of categories. Consider the following conversation:  
**Human:** Is green a color?  
**Bot:** Yes, green is a color.  
**Human:** Is blue a color?  
**Bot:** Yes, blue is a color.  
**Human:** is peanut butter a color?  
**Bot:** No, peanut butter is not a color.  
Imagine how many categories would be needed to cover every color in the spectrum!

Instead of giving each color its own category, we can create a set that contains all the colors, and write a single category that checks to see if the user's input contained one of those colors. This category will only be matched IF the user's input does, in fact, contain one of the colors in the set. Otherwise, the category will not be matched. The set functions like a wildcard. It captures one or more words found in the user's input.

#### Built-in Sets

Pandorabots have some build-in sets that are not visible in the list of bot files.

    <set>number</set>     -- matches any natural number
    
    
#### Usage
    <category>
    <pattern>IS <set>colors</set> A COLOR</pattern>
    <template>Yes, <star /> is a color.</template>
    </category>
    
    <category>
    <pattern>IS * A COLOR</pattern>
    <template>No, <star /> is not a color.</template>
    </category>
    
If the input contained a string not found in the set, then that pattern would not have formed a match. Because of this, we can provide a default answer using a * wildcard. The second category above matches if the input contains a string not found in the set.

**NOTE:** Sets take precedence over * and ^ wildcards, but can be overridden by _ # and an exact word match. The input captured by the `<set>` tags can be echoed using `<star/>`, just like a wildcard as shown in the usage example.  Set files are simple string array, such as:

    [["red"],["orange"],["yellow"],["green"],["blue"],["indigo"]]

Note that currently on the Pandorabots platform, set files cannot be dynamically updated using AIML. You will have to build this feature in your application using our bot development APIs (i.e. retrieve file, upload file, compile bot).

---

### SET USED IN TEMPLATE 

In a category's template, the *set element* is used to set a predicate variable. Predicates are not hardcoded like properties, and can be initialized during a conversation. This means that input from the user can be echoed in the value of a predicate.

#### Attributes

`name` (required)
The name attribute specifies a name for the predicate you will set. The predicate can then be recalled under the same name using the get element. If you are setting a local variable rather than a predicate, use the `var` attribute instead.

#### Usage

    <category>
    <pattern>MY NAME IS *</pattern>
    <template>
      Nice to meet you, <set name="username"><star />.</set>
    </template>
    </category>
    
    <category>
    <pattern>WHAT IS MY NAME</pattern>
    <template>Your name is <get name="username" />.</template>
    </category>

**Input:** My name is Daniel.  
**Output:** Nice to meet you, Daniel.  
**Input:** What is my name?  
**Output:** Your name is Daniel.  

Note that there is no way to remove a predicate once it has been set to a value. You can overwrite it to a blank value such as:

    <set name="username"></set>
---
layout: aiml
title: size
---

### &lt;size /&gt;

The *size element* returns the number of category blocks contained in the current bot.

#### Usage

    <category>
      <pattern>TEST SIZE</pattern>
      <template><size/></template>
    </category>

If your bot has 1000 categories:

>**Input:** test size  
**Output:** 1000
---
layout: aiml
title: sr
---

### &lt;sr /&gt;

The *sr element* is shorthand for `<srai><star /></srai>`. Because this is one of the most often-used combinations of elements, AIML allows you to write as a shortened version.

#### Usage

Use anywhere you'd like to reduce an input with a single wildcard to the wildcard contents. For example, the two following patterns are the same, in practice:

    <category>
      <pattern>FAVORITE *</pattern>
      <template><srai><star/></srai></template>
    </category>

    <category>
      <pattern>FAVORITE *</pattern>
      <template><sr/></template>
    </category>
---
layout: aiml
title: srai
---

### &lt;srai&gt;

The *srai element* allows your bot to recursively call categories after transforming the user's input. So you can define a template that calls another category. The acronym "srai" has no official meaning, but is sometimes defined as *symbolic reduction* or *symbolic recursion*.

This has a wide range of uses:  
* Simplifying an input using fewer words
* Remove unnecessary words from the input (reduction)
* Linking many synonymous inputs to the same template
* Correcting spelling errors on the part of the client
* Replacing colloquial expressions with ordinary English


#### Usage

##### Reductions

The most typical use case of the srai element is to "reduce" an input by removing unecessary words, or by translating the input in to a shorter, more concise version.

    <category>
    <pattern>HELLO GOOD DAY</pattern>
    <template><srai>HI</srai></template>
    </category>
    
    <category>
    <pattern>BONJOUR</pattern>
    <template><srai>HI</srai></template>
    </category>
    
    <category>
    <pattern>GUTEN TAG</pattern>
    <template><srai>HI</srai></template>
    </category>
    
    <category>
    <pattern>HI</pattern>
    <template>Hello there!</template>
    </category>             

In the case that the user's input is "Hello good day," "Bonjour," or "Guten Tag," the first three categories will recurse, and give the bot a new input "HI". This will then match the fourth category, returning its response to the user.

    <category>
    <pattern>I SEE NOW THAT YOU ARE *</pattern>
    <template><srai>YOU ARE <star/></srai></template>
    </category>
    
    <category>
    <pattern>YOU ARE A ROBOT</pattern>
    <template>Yes I am!</template>
    </category>
    
Removing unnecessary words from the input is another way to develop reductions. Reductions make writing AIML and adding to your bot a much more enjoyable process! The more reductions you have, the better your bot will be at providing relevants responses.

##### Synonyms

Synonyms can be addressed using `<srai>`.

    <category>
    <pattern> _ DAD *</pattern>
    <template><srai><star/> FATHER <star index="2"/></srai></template>
    </category>
    
Anytime the user input contains the word "dad", the bot will replace it with "father" and recurse using the new input. The benefit to this technique is to reduce categories. For instance, Thesaurus.com lists 52 synonyms for the word "good". To account for this, you would need 52 additional categories for every one that contains the word "good". If your bot has 100 patterns that contain the word "good", that is 5200 additional categories you would have to write. Using the synonyms technique, you can reduce the number to just 52. You can reduce that down to just 1 by using a [set](set.md) of synonyms!

NOTE: once a word has been defined as a synonym, you cannot use it in patterns. The leading underscore ensures that the bot translates the synonym before doing anything else.

##### Corrections, Colloquialisms

People are bad at spelling and typing, which may cause your bot to fail when trying to find a match. You can use `<srai>` to account for common spelling mistakes, or colloquialisms, such as the following:

    <category>
    <pattern>HOW DO I SING UP</pattern>
    <template><srai>HOW DO I SIGN UP</srai></template>
    </category>
    
    <category>
    <pattern>HOW R U</pattern>
    <template><srai>HOW ARE YOU</srai></template>
    </category>

Note, spelling errors and synonyms can also be handling using [normalization](http://docs.pandorabots.com/tutorials/substitutions-and-sentence-splitting/). 

##### Returning Text and Recursing

The previous examples of `<srai>` returned no text of their own. Your template, however, can return both text and `<srai>` tags.

    <category>
    <pattern>HOWDY</pattern>
    <template><srai>HI</srai> Are you a cowboy?</template>
    </category>

This would return a response "Hello there! Are you a cowboy?" if a client inputs "Howdy".

##### Recursively Building a Complex Response

Another use case of the srai element is to provide a recursive response to build a more complex response based on elements within the user's input.  For example, you have a bot named "Buddy":

User: You can say that again Buddy!  
Bot: Once more? "that".  

Your bot may not have a specific response to the pattern "YOU CAN SAY THAT AGAIN BUDDY". Instead you can build a response to the user input from partial phrase categories:


In step 1, the patterns with "_" match first based on AIML 2.0 wildcard priorities (from highest to lowest), for example:  
`# AGAIN > _ AGAIN > THAT  AGAIN >  ^ AGAIN > * AGAIN`

Whatever matches either wild-card symbol becomes the value of <star/>.


<table class="table table-striped table-bordered table-condensed">
    <tr><th>Step</th><th>Normalized Input</th><th>Matching Pattern</th><th>Template</th><th>Response</th></tr>
    <tr><td>1</td><td>YOU CAN SAY THAT AGAIN BUDDY</td><td>_ &lt;bot name="name" /&gt;</td><td>&lt;sr /&gt;</td><td></td></tr>
    <tr><td>2</td><td>YOU CAN SAY THAT AGAIN</td><td>_ AGAIN</td><td>Once more? &lt;sr /&gt;</td><td>Once more?</td></tr>
    <tr><td>3</td><td>YOU CAN SAY THAT</td><td>YOU CAN *</td><td>&lt;sr /&gt;</td><td>Once more?</td></tr>
    <tr><td>4</td><td>SAY THAT</td><td>SAY *</td><td>"&lt;person /&gt;".</td><td>Once more? "that".</td></tr>
</table>

Steps 1 through 3 illustrate the common AIML templates that use the abbreviated ` <sr/>` tag. Remember, &lt;sr/&gt; = &lt;srai&gt;&lt;star/&gt;&lt;/srai&gt; See [AIML Reference](http://docs.pandorabots.com/aiml/sr/) for details.

The categories with the patterns "_ &lt;bot name="name" /&gt;" and "YOU CAN *" simply reduce the sentence to whatever matches the wildcard, as illustrated by steps 1 and 3.

Combining the `<sr/>` with an ordinary text response, as step 2 with the pattern "_ AGAIN". The phrase "Once more?" becomes part of any reply ending in "AGAIN".

The category in step 4 with "SAY *" is a default that often produces logically correct but amusing dialogue:

User: Say Hello in Swedish.  
Bot: "Hello in Swedish."  

or as in this case:  

User: Say that.  
Bot: "that."  

Using the `<person/>` tag in this examples allows for the transforming of any pronouns. (See [AIML reference](http://docs.pandorabots.com/aiml/person/) for more details).

User: Say you are a fish again.  
Bot: Once more?  "I am a fish".  

In this particular case, you might not want pronoun transformation; it's just included as an example for illustration.

Why reduce a complex sentence structure to simpler forms? These 4 categories can respond to a large number of inputs, not just the example, and can make a bot's response seem more human-like.
---
layout: aiml
title: sraix
---

### &lt;sraix &gt;

The *sraix element* allows a bot to call categories that exist within another bot, and return response as if it was its own. This allows the creation of many bots, each with a specific purpose, that may connect with each other to form a sort of bot network.

#### Attributes

`bot` (required)  
Specifies the bot to call out to, defined by the `botid`. On the Pandorabots Playground, the `botid` is equivalent to `username/botname`. On the Developer Portal, it is defined as `app_id/botname`.

#### Usage

Imagine a user named "djf" with two bots, "olimpia" and "alice". You could forward inputs from olimpia to alice, and return alice's response to the user conversing with olimpia:

    <!-- from bot djf/olimpia -->
    <category>
      <pattern>WHAT IS FOO</pattern>
      <template><sraix bot="djf/alice"><input/></sraix></template>
    </category>

    <!-- from bot djf/alice -->
    <category>
      <pattern>WHAT IS FOO</pattern>
      <template>Foo is bar.</template>
    </category>

So when talking to djf/olimpia, the following is possible:

>**Input:** What is foo?  
**Output:** Foo is bar.  
---
layout: aiml
title: star
---

### &lt;star /&gt;

The *star element* is used to echo portions of the user's input that were captured by wildcards.

#### Attributes

`index`
Specifies which wildcard to echo (used when multiple wildcard are present). If no index is specified, defaults to 0.

#### Usage

    <category>
    <pattern>MY FAVORITE * IS *</pattern>
    <template>Your favorite <star /> is <star index="2" /></template>
    </category>

>**Input:** My favorite color is blue  
**Output:** Your favorite color is blue
---
layout: aiml
title: template
---

### &lt;template&gt;

The *template element* is the portion of category that defines its return value. It can contain a variety of other elements: some which return text directly to the user, and some which cause recursion and trigger new categories. Every category must contain a template block.

#### Usage

    <category>
    <pattern>HI</pattern>
    <template>Hello there!</template>
    </category>
---
layout: aiml
title: that
---

### &lt;that&gt;

The *that element* is an optional child of the category element that is used to establish the context of the pattern. The bot is able to remember the last sentence it has said, and is defined as the value of "that".

If a category contains a *that element*, the pattern can only be matched if the last sentence of the bot's previous response matches the contents of `that`. In a sense, the *that element* binds a pattern to the immediate context of the conversation.

This is very useful for contextualizing common, simple user inputs such as "yes" or "no."

This allows you to have many duplicate patterns that, depending on the previous response, will trigger different templates.

The *that element* follows all the rules of the pattern element: The previous sentence given by your bot will be stripped of punctuation when read by a category referencing it with `<that>` tags. The new category will also ignore differences in capitalization/non-capitalized letters, and will expect any normalization you have specified in normal.substitution file.

For these reasons, we recommend you write the contents of the `<that>` tags like patterns: no punctuation, all capital letters, and normalized. If you are having trouble getting your `<that>` to work, usually it is one of those three items being amiss in your `<that>` tag.

Also note:  
* `<that>` tags can contain wildcards!
* Values for *that* variables are only within the scope of an active conversation. After some amount of idle time, the bot flushes context from memory.


#### Usage

    <category>
    <pattern>I LIKE COFFEE</pattern>
    <template>Do you take cream or sugar in your coffee?</template>
    </category>
    
    <category>
    <pattern>YES</pattern>
    <that>DO YOU TAKE CREAM OR SUGAR IN YOUR COFFEE</that>
    <template>I do too.</template>
    </category>
    
    <category>
    <pattern>NO</pattern>
    <that>DO YOU TAKE CREAM OR SUGAR IN YOUR COFFEE</that>
    <template>Really? I have a hard time drinking black coffee.</template>
    </category>

In the above example, we have accounted a possible conversation timeline, where the user initiates the conversation, and the bot responds by asking the user a yes or no question. The problem, however, is that there area near infinite number of questions the user may answer with "yes" or "no", so how does the bot know the context of the user's answer? Because the second and third categories contain that blocks, they are both bound to a particular context. These categories will not be matched unless the bot's previous response matches "DO YOU TAKE CREAM OR SUGAR IN YOUR COFFEE".

In this example below, it shows how to use the normalized version in your *that element*, assuming that you have the normal.substitution file normalizing *don't* to *do not*

    <category>
    <pattern>I LIKE TEA</pattern>
    <template>It's a civilized drink. Don't you agree?</template>
    </category>
    
    <category>
    <pattern>I DO</pattern>
    <that>DO NOT YOU AGREE</that>
    <template>My favorite is Lady Grey!</template>
    </category>
    
Tip: Remember when crafting your `<that>` tag, use only the _last_ sentence of your bot's response! That is why the `that` tag in the category above only has the normalized "DO NOT YOU AGREE" and does not include the previous sentence of "IT IS A CIVILIZED DRINK".
---
layout: aiml
title: thatstar
---

### &lt;thatstar /&gt;

The *thatstar element* is used to echo wildcard contents found inside of `<that>` tags.

#### Attributes

`index`
Specifies the index of the wildcard to echo. If no index is specified, defaults to 0.

#### Usage


    <category>
    <pattern>I LIKE IT TOO</pattern>
    <that>I LIKE *</that>
    <template>What do you like best about <thatstar /></template>
    </category>

>**Input:** ...  
**Output:** I like coffee.  
**Input:** I like it too.  
**Output:** What do you like best about coffee?

This type of category is useful for dealing with pronoun resolution (*anaphora*). If the user inputs the word "it", you can implement a that element and a thatstar element to keep a reference to the original noun in question.
---
layout: aiml
title: think
---

### &lt;think&gt;

The *think element* allows your bot to set predicates without actually displaying the contents of a set element to the user. This is sometimes referred to as "silently" setting a predicate.

#### Usage

Consider this example, which sets a predicate, but does so in a way that the contents of the set element is actually returned to the user as part of the template:

    <category>
    <pattern>MY NAME IS *</pattern>
    <template>
      Nice to meet you, <set name="name"><star /></set>
      </template>
      </category>

>**Input:** My name is Daniel  
**Output:** Nice to meet you, Daniel

You can use the think tag to set the `name` predicate, without actually repeating the value of the predicate to the user:

    <category>
    <pattern>MY NAME IS *</pattern>
    <template>
      <think><set name="name"><star /></set></think>
      I will remember your name.
    </template>
    </category>

>**Input:** My name is Daniel  
**Output:** I will remember your name
---
layout: aiml
title: topic
---

### &lt;topic&gt;

The *topic element* allows you to contextualize categories according to the value of a built-in 
predicate named `"topic"`. Like the *that element*, topic binds a pattern to a particular context. 
This allows you to store a certain context for longer than just 1 interaction.

The *topic element* is unique to most AIML elements in that it appears outside of category blocks. 
You can wrap a number of categories within a *topic element* to bind all of those categories. 
These categories can only be matched if the topic has been set to a certain value. This can be 
used to write duplicate patterns whose templates vary depending on the context of the conversation

It should also be noted that the predicate name "topic" is reserved for this purpose.

#### Attributes

`name` (required)
Refers to a possible value of the topic predicate.

#### Usage

    <category>
    <pattern>LET US TALK ABOUT *</pattern>
    <template>
      OK, I like <set name="topic"><star /></set>
    </template>
    </category>
    
    <topic name="coffee">
    
    <category>
    <pattern>I DRINK IT PLAIN</pattern>
    <template>I prefer mine with cream and sugar</template>
    </category>
    
    </topic>

    <topic name="tea">

    <category>
    <pattern>I DRINK IT PLAIN</pattern>
    <template>I prefer mine with honey and lemon</template>
    </category>

    </topic>

>**Input:** Let us talk about coffee  
**Output:** OK, I like coffee  
**Input:** I drink it plain  
**Output:** I prefer mine with cream and sugar  
**Input:** Let us talk about tea  
**Output:** OK, I like tea  
**Input:** I drink it plain  
**Output:** I prefer mine with honey and lemon

This rudimentary example shows how setting the topic can also assist in contextualizing an input. If the user says something like "I drink it plain," the bot must have some way of knowing what "it" refers to in order to provide a relevent answer. This is illustrated in the above example via the different things one might add to coffee or tea. Depending on the value of the topic predicate, the bot will know which set of beverage additions to respond with.

If you set a topic with no value, the value will be "unknown" based on bot property default-get.

    <set name="topic"></set>     --  topic = "unknown" 
    
Values for topic variables are only within the scope of an active conversation.
---
layout: aiml
title: topicstar
---
### &lt;topicstar&gt;

The *topicstar element* will either return the current topic if used outside of a *topic element* or the *wildcard element* when inside a *topic element*.  The *topicstar element* can also use index like the *star element* can, though this will return as the default case for empty predicates if no wildcards are present.

#### Usage

This is useful for knowing what your wildcards are actually containing or if you interested in what your topic is outside of your *topic element*. 

    <category>
    <pattern>I WOULD LIKE MILK</pattern>
    <template>Ok.<think><set name=”topic”>milk</set></think> You want <topicstar/></template>
    </category>

>**Input:** I would like milk.  
**Output:** Ok. You want MILK

As a reminder the topicstar element only takes what is inside the wildcard in the topic element’s name.

    <category>
    <pattern>I WOULD LIKE MILK</pattern>
    <template>Ok. <think><set name=”topic”>beverages milk</set></think></template>
    </category>
    
    <topic name=”beverages *”>
    <category>
    <pattern>WHAT DO I WANT</pattern>
    <template><topicstar/></template>
    </category>
    </topic>

>**Input:** I would like milk.  
**Output:** Ok.  
**Input:** What do I want?  
**Output:** MILK

---
layout: aiml
title: uppercase
---

### &lt;uppercase&gt;

The *uppercase element* transforms all letters in its contents to uppercase.

#### Usage

    <category>
      <pattern>A B C</pattern>
      <template><uppercase><input/></uppercase></template>
    </category>

>**Input:** a b c  
**Output:** A B C
