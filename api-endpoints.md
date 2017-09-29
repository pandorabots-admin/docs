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

**Create a bot**

### **DELETE/bot/{app\_id}/{botname}**

**Delete a bot**

### **GET/bot/{app\_id}/{botname}**

**List of bot files**

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

