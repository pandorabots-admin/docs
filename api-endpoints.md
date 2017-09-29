# API Endpoints

---

### **GET/bot/{app\_id}**

###### _List of bots_

### Implementation Notes

Retrieve a list of your application's bots. Response returns JSON object with info for each bot.

Returns a 401 error code for invalid app\_ID or user\_key, or if applicable, invalid referrer.

```
curl -v  -X GET 'https://aiaas.pandorabots.com/bot/APP_ID?user_key=USER_KEY'
```

#### Parameters

| Parameter | Value | Description | Parameter Type | Data Type |
| :--- | :--- | :--- | :--- | :--- |
| app\_id | \(required\) | **Your Application ID** | path | string |
| user\_key | \(required\) | **Your application's user key.** | query | string |

---

### **PUT/bot/{app\_id}/{botname}**

###### _Create a bot_

#### Implementation Notes

Create a new instance of a bot on the Pandorabots server.

If there is already a bot under the same app\_id and botname, a 409 error is returned. Invalid botname will return a 400 error.

Creating more bots than your plan allows or using an invalid app\_id or user\_key \(or if applicable referrer filter\) returns a 401 error.

```
curl -v  -X PUT 'https://aiaas.pandorabots.com/bot/APP_ID/BOTNAME?user_key=USER_KEY'
```

#### Parameters

| Parameter | Value | Description | Parameter Type | Data Type |
| :--- | :--- | :--- | :--- | :--- |
| app\_id | \(required\) | **Your Application ID** | path | string |
| botname | \(required\) | **Must be unique from all the other bots you have created under this app\_id. Can only be numbers and lowercase letters, and must be between 3 and 64 characters long.** | path | string |
| user\_key | \(required\) | **Your application's user key.** | query | string |

---

### **DELETE/bot/{app\_id}/{botname}**

###### _Delete a bot_

#### Implementation Notes

Delete a bot on the Pandorabots server.

Deleting a bot that does not exist returns a 412 error. Invalid botname will return a 400 error. Invalid app\_id, user\_key, or referrer filter will return a 401 error.

```
curl -v  -X DELETE 'https://aiaas.pandorabots.com/bot/APP_ID/BOTNAME?user_key=USER_KEY'
```

#### Parameters

| Parameter | Value | Description | Parameter Type | Data Type |
| :--- | :--- | :--- | :--- | :--- |
| app\_id | \(required\) | **Your Application ID** | path | string |
| botname | \(required\) | **Name of the bot to delete.** | path | string |
| user\_key | \(required\) | **Your application's user key.** | query | string |

---

### **GET/bot/{app\_id}/{botname}**

###### _List of bot files_

#### Implementation Notes

Retrieve a list of a bot's files. Returns a JSON object with each bot file associated with bot specified.

Returns a 404 error code for bot not found. Returns a 401 error code for invalid app\_ID, user\_key, or referrer filter.

The`return=zip`option may not behave as expected using Active Docs 1.2

```
curl -v  -X GET 'https://aiaas.pandorabots.com/bot/APP_ID/BOTNAME?user_key=USER_KEY'
```

#### Parameters

| Parameter | Value | Description | Parameter Type | Data Type |
| :--- | :--- | :--- | :--- | :--- |
| app\_id | \(required\) | **Your Application ID** | path | string |
| botname | \(required\) | **The name of the bot.** | path | string |
| return |  | If set to zip, a zip file with all bot files will be returned. | query | string |
| user\_key | \(required\) | **Your application's user key.** | query | string |

---

### **PUT/bot/{app\_id}/{botname}/{file-kind}/{filename}**

###### _Upload a bot file \(AIML, set, substitution, map\)_

#### Implementation Notes

Upload bot personality files to your bot. Files must be named with only lowercase letters and numbers with one of the following extensions:

**AIML: **Extention - .aiml, file-kind - file

**Sets: **Extension - .set, file-kind - set

**Maps: **Extension - .map, file-kind - map

**Substitutions: **Extension - .substitution, file-kind - substitution

The system will overwrite existing files with the file being uploaded.

If the request is malformed because the file name is invalid or malformed JSON for non-AIML files, a 400 error is returned. For malformed file-kind, a 404 error is returned. For invalid file or botname, a 412 error is returned.

If Active Doc spec is not working with this API, please use the following curl command examples:

```
curl -v -X PUT 'https://aiaas.pandorabots.com/bot/APP_ID/BOTNAME/file/foobot.aiml?user_key=USER_KEY'
  --data-binary @/home/foo/foobot.aiml
```

```
curl -v -X PUT 'https://aiaas.pandorabots.com/bot/APP_ID/BOTNAME/set/colors?user_key=USER_KEY'
  --data-binary @/home/foo/colors.set
```

#### Parameters

| Parameter | Value | Description | Parameter Type | Data Type |
| :--- | :--- | :--- | :--- | :--- |
| app\_id | \(required\) | **Your Application ID** | path | string |
| botname | \(required\) | **Your bot's name** | path | string |
| file-kind | \(required\) | **Specify the type of file being uploaded: file \(for AIML files\), map, substitution, set** | path | string |
| filename | \(required\) | **Filename to upload, must be named with only lowercase letters and numbers. Note: for non-AIML files, do not include the file extension in the path.** | path | string |
| content | Parameter content type: application/xml | **Type or Paste in file contents.** | body | string |
| user\_key | \(required\) | **Your application's user key.** | query | string |

---

### **PUT/bot/{app\_id}/{botname}/{file-kind}**

###### _Upload a bot file \(pdefaults, properties\)_

#### Implementation Notes

Upload bot personality files to your bot. Files must be named with only lowercase letters and numbers with one of the following extensions:

**Properties: **Extension - .properties, file-kind - properties, No filename required in path

**Predicate defaults: **Extension - .pdefaults, file-kind - pdefaults, No filename required in path

The system will overwrite existing files with the file being uploaded.

For malformed JSON in non-AIML files, a 400 error is returned. For malformed file-kind, a 404 error is returned. For invalid file or botname, a 412 error is returned.

If Active Doc spec is not working with this API, please use the following curl command examples:

```
curl -v -X PUT 'https://aiaas.pandorabots.com/bot/APP_ID/BOTNAME/properties?user_key=USER_KEY'
  --data-binary @/home/foo/foobot.properties
```

#### Parameters

| Parameter | Value | Description | Parameter Type | Data Type |
| :--- | :--- | :--- | :--- | :--- |
| app\_id | \(required\) | **Your Application ID** | path | string |
| botname | \(required\) | **Your bot's name** | path | string |
| file-kind | \(required\) | **Specify the type of file being uploaded: pdefaults, properties** | path | string |
| content | Parameter content type: application/xml | **Type or Paste in file contents.** | body | string |
| user\_key | \(required\) | **Your application's user key.** | query | string |

---

### **DELETE/bot/{app\_id}/{botname}/{file-kind}/{filename}**

###### _Delete a bot file \(AIML, set, map, substitution\)_

#### Implementation Notes

Delete an AIML, set, map or substitution bot file

For malformed file-kind, a 404 error is returned. For invalid file or botname, a 412 error is returned.

```
curl -v -X DELETE 'https://aiaas.pandorabots.com/bot/APP_ID/BOTNAME/FILE-KIND/FILENAME?user_key=USER_KEY'
```

#### Parameters

| Parameter | Value | Description | Parameter Type | Data Type |
| :--- | :--- | :--- | :--- | :--- |
| app\_id | \(required\) | **Your Application ID** | path | string |
| botname | \(required\) | **Name of the bot.** | path | string |
| file-kind | \(required\) | **Specify the type of file being deleted: file \(for AIML files\), map, substitution, set** | path | string |
| filename | \(required\) | **Filename to delete. Note: for non-AIML files, do not include the file extension in the path.** | path | string |
| user\_key | \(required\) | **Your application's user key.** | query | string |

---

### **DELETE/bot/{app\_id}/{botname}/{file-kind}**

###### _Delete a bot file \(pdefaults, properties\)_

#### Implementation Notes

Delete pdefaults or properties bot file.

For malformed file-kind, a 404 error is returned. For invalid botname, a 412 error is returned.

```
curl -v -X DELETE 'https://aiaas.pandorabots.com/bot/APP_ID/BOTNAME/FILE-KIND?user_key=USER_KEY'
```

#### Parameters

| Parameter | Value | Description | Parameter Type | Data Type |
| :--- | :--- | :--- | :--- | :--- |
| app\_id | \(required\) | **Your Application ID** | path | string |
| botname | \(required\) | **Name of the bot.** | path | string |
| file-kind | \(required\) | **Specify the type of file being deleted: pdefaults, properties** | path | string |
| user\_key | \(required\) | **Your application's user key.** | query | string |

---

### **GET/bot/{app\_id}/{botname}/{file-kind}/{filename}**

###### _Retrieve a bot file \(AIML, set, map, substitution\)_

#### Implementation Notes

Retrieve an AIML, set, map or substitution bot file.

For malformed file-kind, a 404 error is returned. For invalid filename or botname, a 400 error is returned. For unknown bot or file, a 412 error is returned.

```
curl -v -X GET 'https://aiaas.pandorabots.com/bot/APP_ID/BOTNAME/FILE-KIND/FILENAME?user_key=USER_KEY'
```

#### Parameters

| Parameter | Value | Description | Parameter Type | Data Type |
| :--- | :--- | :--- | :--- | :--- |
| app\_id | \(required\) | **Your Application ID** | path | string |
| botname | \(required\) | **Name of the bot.** | path | string |
| file-kind | \(required\) | **Specify the type of file being retrieved: file \(for AIML files\), map, substitution, set** | path | string |
| filename | \(required\) | **Filename to retrieve. Note: for non-AIML files, do not include the file extension in the path.** | path | string |
| user\_key | \(required\) | **Your application's user key.** | query | string |

---

### **GET/bot/{app\_id}/{botname}/{file-kind}**

###### _Retrieve a bot file \(pdefaults, properties\)_

#### Implementation Notes

Retrieve pdefaults or properties bot file.

For malformed file-kind, a 404 error is returned. For invalid botname, a 400 error is returned. For unknown bot or file, a 412 error is returned.

```
curl -v -X GET 'https://aiaas.pandorabots.com/bot/APP_ID/BOTNAME/FILE-KIND?user_key=USER_KEY'
```

#### Parameters

| Parameter | Value | Description | Parameter Type | Data Type |
| :--- | :--- | :--- | :--- | :--- |
| app\_id | \(required\) | **Your Application ID** | path | string |
| botname | \(required\) | **Name of the bot.** | path | string |
| file-kind | \(required\) | **Specify the type of file being retrieved: pdefaults, properties** | path | string |
| user\_key | \(required\) | **Your application's user key.** | query | string |

### **GET/bot/{app\_id}/{botname}/verify**

###### _Compile a bot_

#### Implementation Notes

A bot personality is created by uploading AIML and other file types to Pandorabots. The files must compile correctly in order for the bot to run. By issuing a call to this API, Pandorabots will compile the bot, updating any changes that have been made to the files.

Compiling the bot makes its most recent version available for talk. A 400 error means that we were unable to compile your bot \(you should check your files for syntax issues\) or the botname was not found.

You can see any thrown errors in the results field of the returned JSON object:

```
curl -v  -X GET 'https://aiaas.pandorabots.com/bot/APP_ID/BOTNAME/verify?user_key=USER_KEY'
```

#### Parameters

| Parameter | Value | Description | Parameter Type | Data Type |
| :--- | :--- | :--- | :--- | :--- |
| app\_id | \(required\) | **Your Application ID** | path | string |
| botname | \(required\) | **Your bot's name** | path | string |
| user\_key | \(required\) | **Your application's user key.** | query | string |

---

### **POST/talk/{app\_id}/{botname}**

###### _Talk to a bot_

#### Implementation Notes

Start or continue a conversation with the bot using the Talk API. Pandorabots will return a new session ID if not included in the call. Use the session ID returned to group interactions together. If you do not provide a client name, Pandorabots will assume client is your application and all predicates and variable information will be associated with your application. Predicates assigned to clientname only persist during an active conversation and are flushed after a certain idle period.

NOTE: If you send multiple sentences to your bot in a single input, the API response will include multiple bot responses.

See Anonymous Talk API for details on how you can maintain persistent predicates for your end-users.

Malformed requests such as exceeding size of input or invalid clientname returns 400 error code. Error code 412 is returned if the bot is not compiled or does not exist. Error code 429 is returned if your application has reached maximum plan API call limit.

The response array will contain one element \(response\) for each sentence you input to the bot. You can configure which characters delimit a new sentence in the input by modifying the sentence-splitters property in your bot's property file.

```
curl -v  -X POST 'https://aiaas.pandorabots.com/talk/APP_ID/BOTNAME?user_key=USER_KEY&input=INPUT'
```

#### Parameters

| Parameter | Value | Description | Parameter Type | Data Type |
| :--- | :--- | :--- | :--- | :--- |
| app\_id | \(required\) | **Your Application ID** | path | string |
| botname | \(required\) | **The name of the bot. Format required is 3-64 characters in length and only numbers or lower-case letters \[0-9\]\[a-z\]** | path | string |
| input | \(required\) | **Message to be sent to the bot. This can contain multiple sentences. Currently the limit is 500 characters.** | query | string |
| client\_name |  | Identifies your application's end user. You can assign each of your end users a unique client\_name. This will allow you to set predicates and other variable information that is specific to an individual. Format required is 3-64 characters in length and only numbers or lower-case letters \[0-9\]\[a-z\] | query | string |
| sessionid |  | Session ID generated by Pandorabots. This allows the application to group individual conversations into a collection as needed. If not included in the call, Pandorabots will issue a new session ID. \(4-byte integer type\) | query | string |
| recent |  | If true, the system will not signal an error if the bot is uncompiled, and will instead look for a previous version of the bot that is available. | query | string |
| user\_key | \(required\) | **Your application's user key.** | query | string |

### **POST/talk/{app\_id}/{botname}**

**Debug a bot conversation**

### **POST/atalk/{app\_id}/{botname}**

**Anonymous Talk**

