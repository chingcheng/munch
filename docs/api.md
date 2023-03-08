# APIs

## Munches

![Create Munch](api/create-munch.png)
This action creates a munch tied to a specific user and stores it within the database.
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
This action gets all munches stored within the database.
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
This action gets the single munch tied to the input id.
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
This action updates the single munch tied to the input id.
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
This action deletes the single munch tied to the input id.
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
