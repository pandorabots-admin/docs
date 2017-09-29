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
| app\_id |  | **Your Application ID** | path | string |
| user\_key |  | **Your application's user key.** | query | string |

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
| app\_id |  | **Your Application ID** | path | string |
| botname |  | **Must be unique from all the other bots you have created under this app\_id. Can only be numbers and lowercase letters, and must be between 3 and 64 characters long.** | path | string |
| user\_key |  | **Your application's user key.** | query | string |

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
| app\_id |  | **Your Application ID** | path | string |
| botname |  | **Name of the bot to delete.** | path | string |
| user\_key |  | **Your application's user key.** | query | string |

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
| app\_id |  | **Your Application ID** | path | string |
| botname |  | **The name of the bot.** | path | string |
| return |  | If set to zip, a zip file with all bot files will be returned. | query | string |
| user\_key |  | **Your application's user key.** | query | string |

---

### **PUT/bot/{app\_id}/{botname}/{file-kind}/{filename}**

**Upload a bot file \(AIML, set, substitution, map\)**

### **PUT/bot/{app\_id}/{botname}/{file-kind}**

**Upload a bot file \(pdefaults, properties\)**

### **DELETE/bot/{app\_id}/{botname}/{file-kind}/{filename}**

**Delete a bot file \(AIML, set, map, substitution\)**

### **DELETE/bot/{app\_id}/{botname}/{file-kind}**

**Delete a bot file \(pdefaults, properties\)**

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

