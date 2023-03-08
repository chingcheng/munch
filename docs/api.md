# APIs

## Munches

![Create Munch](api/create-munch.png)
<br>
<br>
JSON Request Body:

`{
  "location": "string",
  "rating": 0,
  "review": "string",
  "photo": "string",
  "tag": true,
  "city": "string",
  "state": "string",
  "user_id": "string"
}`
<br>
<br>
Returns (Status Code 200):

`{
  "id": 0,
  "location": "string",
  "rating": 0,
  "review": "string",
  "photo": "string",
  "tag": true,
  "city": "string",
  "state": "string",
  "user_id": "string"
}`
<br>
<br>
![Get All Munches](api/get-all-munches.png)
<br>
<br>
Returns (Status Code 200):

`[
  {
    "id": 0,
    "location": "string",
    "rating": 0,
    "review": "string",
    "photo": "string",
    "tag": true,
    "city": "string",
    "state": "string",
    "user_id": "string"
  }
]`
<br>
<br>
![Get One Munch](api/get-one-munch.png)
<br>
<br>
Returns (Status Code 200):

`{
  "id": 0,
  "location": "string",
  "rating": 0,
  "review": "string",
  "photo": "string",
  "tag": true,
  "city": "string",
  "state": "string",
  "user_id": "string"
}`
<br>
<br>
![Update Munch](api/update-munch.png)
<br>
<br>
JSON Request Body:

`{
  "location": "string",
  "rating": 0,
  "review": "string",
  "photo": "string",
  "tag": true,
  "city": "string",
  "state": "string",
  "user_id": "string"
}`
<br>
<br>
Returns (Status Code 200):

`{
  "id": 0,
  "location": "string",
  "rating": 0,
  "review": "string",
  "photo": "string",
  "tag": true,
  "city": "string",
  "state": "string",
  "user_id": "string"
}`
<br>
<br>
![Delete Munch](api/delete-munch.png)
<br>
<br>
Returns (Status Code 200):

`true`

## Accounts

![Create Account](api/create-account.png)

![Get All Accounts](api/get-all-accounts.png)

![Get One Account](api/get-one-account.png)

![Update Account](api/update-account.png)

![Delete Account](api/delete-account.png)
