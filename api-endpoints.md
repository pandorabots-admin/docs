# API Endpoints

---

### **GET/bot/{app\_id}**

### _List of bots_

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

### _Create a bot_

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

### _Delete a bot_

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

### _List of bot files_

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

### _Upload a bot file \(AIML, set, substitution, map\)_

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

### _Upload a bot file \(pdefaults, properties\)_

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

### _Delete a bot file \(AIML, set, map, substitution\)_

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

### _Delete a bot file \(pdefaults, properties\)_

#### Implementation Notes

Delete pdefaults or properties bot file.

For malformed file-kind, a 404 error is returned. For invalid botname, a 412 error is returned.

```

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

**Retrieve a bot file \(AIML, set, map, substitution\)**

### **GET/bot/{app\_id}/{botname}/{file-kind}**

**Retrieve a bot file \(pdefaults, properties\)**

### **GET/bot/{app\_id}/{botname}/verify**

**Compile a bot**

### **POST/talk/{app\_id}/{botname}**

**Talk to a bot**

### **POST/talk/{app\_id}/{botname}**

**Debug a bot conversation**

### **POST/atalk/{app\_id}/{botname}**

**Anonymous Talk**

