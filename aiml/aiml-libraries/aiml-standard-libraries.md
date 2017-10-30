# AIML Standard Library {#aiml-standard-library}

The following are standard library AIML categories \(Github repo: [aimlstandardlibrary.aiml](http://github.com/pandorabots/aiml-utilities)\). These include some math, boolean and string operations, and other basic operations that can be used for more complex AIML programming involving SRAI handling of end-user input. Some of these are base operations used by other operations.

In Syntax column, replace {} with actual values. See Example column for input/output result examples.

| Operation | Syntax | Description | Example |
| :--- | :--- | :--- | :--- |
| False | XFALSE {input} | Returns FALSE for any input. | **INPUT: **XFALSE true **OUTPUT: **FALSE  **INPUT: **XFALSE hello there **OUTPUT: **FALSE |
| True | XTRUE {input} | Returns TRUE for any input. | **INPUT: **XTRUE false **OUTPUT: **TRUE  **INPUT: **XTRUE hello there **OUTPUT: **TRUE |
| Number | XNUMBER {input} | Returns the input if it is a number. Otherwise, it will return your bot's UDC response. Limited to positive numbers only. | **INPUT: **XNUMBER 3 **OUTPUT: **3  **INPUT: **XNUMBER hello there **OUTPUT: **I don't have an answer for that. |
| String | XSTRING {input} | Returns the input as a normalized string. | **INPUT: **XSTRING yum@goodeats.com **OUTPUT: **yum at goodeats dot com  **INPUT: **XSTRING Hello there. **OUTPUT: **Hello there |
| True if True | XISTRUE {input} | Returns TRUE if the input string is true. | **INPUT: **XISTRUE true **OUTPUT: **TRUE  **INPUT: **XISTRUE 6 **OUTPUT: **FALSE |
| True if False | XISFALSE {input} | Returns TRUE if the input string is false. | **INPUT: **XISFALSE true **OUTPUT: **FALSE  **INPUT: **XISFALSE false **OUTPUT: **TRUE |
| True if Number | XISNUMBER {input} | Returns TRUE if the input string is a number, and FALSE if it is not. Limited to positive integers only. | **INPUT: **XISNUMBER 236 **OUTPUT: **TRUE  **INPUT: **XISNUMBER telegram **OUTPUT: **FALSE |
| Check Data Type \(Number, String, Boolean\) | XTYPEOF {input} | Returns datatypes XNUMBER, XSTRING, or XBOOL depending upon the type. Limited to positive integers only. | **INPUT: **XTYPEOF true **OUTPUT: **XBOOL  **INPUT: **XTYPEOF Now is the time **OUTPUT: **XSTRING  **INPUT: **XTYPEOF 34235 **OUTPUT: **XNUMBER |
| Addition | XADD {number} XS {number} | Returns sum of two numbers. Limited to positive integers only. | **INPUT: **XADD 45 XS 132 **OUTPUT: **177  **INPUT: **XADD 1 XS 1 **OUTPUT: **2 |
| Subtraction | XSUB {number} XS {number} | Returns difference of two numbers. Limited to positive integers only. Returns 0 if result would be negative. | **INPUT: **XADD 67 XS 1 **OUTPUT: **66  **INPUT: **XADD 45 XS 132 **OUTPUT: **0 |
| Multiplication | XMUL {number} XS {number} | Returns product of two numbers. Limited to positive integers only. | **INPUT: **XMUL 3 XS 5 **OUTPUT: **15  **INPUT: **XMUL 0 XS 5 **OUTPUT: **0 |
| Division | XDIV {number} XS {number} | Returns the quotient of two numbers. Limited to positive integer values. The decimal value will be truncated \(rounded down\). Returns infinite if trying to divide by zero. | **INPUT: **XDIV 11 XS 3 **OUTPUT: **3  **INPUT: **XDIV 4 XS 0 **OUTPUT: **infinite |
| Modulo operation | XMOD {number} XS {number} | Returns the remainder after division of one number by another. Limited to positive integer values. | **INPUT: **XMOD 11 XS 3 **OUTPUT: **2  **INPUT: **XMOD 10 xs 5 **OUTPUT: **0 |
| Less than | XLT {number} XS {number} | Returns TRUE if first number is less than second number. Otherwise, returns FALSE. Limited to positive integer values. | **INPUT: **xlt 88 xs 123 **OUTPUT: **TRUE  **INPUT: **XLT 10 XS 3 **OUTPUT: **FALSE |
| Greater than | XGT {number} XS {number} | Returns TRUE if first number is greater than second number. Otherwise, returns FALSE. Limited to positive integer values. | **INPUT: **xgt 88 xs 88 **OUTPUT: **FALSE  **INPUT: **XGT 10 XS 3 **OUTPUT: **TRUE |
| Less than or Equal to | XLE {number} XS {number} | Returns TRUE if first number is less than or equal to second number. Otherwise, returns FALSE. Limited to positive integer values. | **INPUT: **XLE 44 XS 44 **OUTPUT: **TRUE  **INPUT: **XLE 5 XS 2 **OUTPUT: **FALSE |
| Greater than or Equal to | XGE {number} XS {number} | Returns TRUE if first number is greater than or equal to second number. Otherwise, returns FALSE. Limited to positive integer values. | **INPUT: **XGE 3 XS 3 **OUTPUT:**TRUE  **INPUT: **XGE 23 XS 582 **OUTPUT: **FALSE |
| String Concatenation | XADD {string} XS {string} | Returns combination of two strings. | **INPUT: **XADD Betty XS Boop **OUTPUT: **BettyBoop |
| String Equals | XEQ {string} XS {string} | Returns TRUE if first string is the same as second string. Otherwise, returns FALSE. Capitalization is not considered. | **INPUT: **XEQ john XS John **OUTPUT: **TRUE  **INPUT: **XEQ fish XS fishing **OUTPUT: **FALSE |
| String Not Equal | XNE {string} XS {string} | Returns TRUE if first string is not the same as second string. Otherwise, returns FALSE. Capitalization is not considered. | **INPUT: **XNE john XS John **OUTPUT: **FALSE  **INPUT: **XNE fish XS fishing **OUTPUT: **TRUE |
| NOT operation | XNOT {input} | Returns TRUE if input is false, and vice versa. If input is not boolean, returns FALSE. | **INPUT: **XNOT true **OUTPUT: **FALSE  **INPUT: **XNOT false **OUTPUT: **TRUE |
| Count characters | XLENGTH {string} | Returns number of characters in the string. Note that space characters are not counted, if there are more than one word in the string. | **INPUT: **XLENGTH hello **OUTPUT: **5  **INPUT: **XLENGTH hello there **OUTPUT: **10 |
| Random Number | XRANDOM | Returns a random single digit number, 0-9 inclusive. | **INPUT: **XRANDOM **OUTPUT: **9 |
| Extract substring | XSUBSTRING {input} XS {number} | Returns a substring from the input starting after the first N characters. | **INPUT: **XSUBSTRING rosemary XS 4 **OUTPUT: **mary |
| Maximum Number | XMAX {number} {number} ... {number} | Returns the maximum value from a list of numbers. Limited to positive integer numbers. | **INPUT: **XMAX 10 3 7 2 **OUTPUT:**10  **INPUT: **XMAX 10 10 **OUTPUT:**10 |
| First word | XCAR {sentence} | Returns the first word of a string. Limited to a single sentence. | **INPUT: **XCAR How are you? **OUTPUT: **How |
| Remaining words after first | XCDR {sentence} | Returns the remainder of the words after stripping out the first word. Limited to a single sentence. | **INPUT: **XCDR How are you? **OUTPUT: **are you |
| Concatenate strings | XIMPLODE {input1} {input2} .. | Returns a string with input strings combined. Limited to a single sentence. | **INPUT: **XIMPLODE hello there stranger **OUTPUT: **hellotherestranger |
| Reverse words | XREVERSE {string} | Returns a string with words in reverse order. | **INPUT: **XREVERSE parkbench picnic **OUTPUT: **picnic parkbench  **INPUT: **XREVERSE one two three **OUTPUT:** three two one |
| NULL | XBLACKHOLE {input} | Returns nothing back in bot response | **INPUT: **XBLACKHOLE **OUTPUT:** |
| Output string N times | XLOOP {string} XS {number} | Returns string value concatenated multiple times. Note: does not work if string includes sentence splitting characters. | **INPUT: **XLOOP bot XS 4 **OUTPUT: **botbotbotbot  **INPUT: **XLOOP I like you XS 2 **OUTPUT: **I like youI like you |
| Word Count | XCOUNT {string} | Returns number of words in input string. Words are delimited by space and special characters that have been normalized. | **INPUT: **XCOUNT now is the time **OUTPUT: **4  **INPUT: **XCOUNT My email is cup@me.com **OUTPUT: **8 |



