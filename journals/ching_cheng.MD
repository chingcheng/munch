# Ching Cheng

## Week 17

---

#### Thursday 3-9-2023

- Added user_username to the munches table, a foreign key to the users table.
- This allowed us to easily populate and show the username of each munch on the munch bunch page.
- After adding the new column to the munches table, I added user_username to each of the queries that required it.
- Had trouble posting a munch on the frontend at first, although it worked on the backend.
- We realized that we were missing the line in the munches routers post function that matched the account_data's username to the munch's username.

#### Wednesday 3-8-2023

- Worked as a team to get rid of errors in the console for the frontend
- Fixed the home page and user page to use === instead of includes, this ensures that each page only shows the munches whose id matches exactly that of the user id.
- Fixed the issue of the token inside of Nav.js being null, this was because the Nav component was outside of the AuthProvider in App.js.
- After we moved the Nav component inside of the AuthProvider, the token was logging correctly and we were able to render the correct navbar based on if the user was logged in or not.

#### Tuesday 3-7-2023

- Tyler and I worked to get the edit and delete munch buttons to show only when the munch belongs to the logged-in user
- worked on getting the navbar to change based on if the user is logged in or logged out
- for some reason, the token from useAuthContext is always null inside of Nav.js
- so I am doing a fetch call to /token to get the token, but the issue is that we have to refresh the page after logging in or out to see the correct navbar

#### Monday 3-6-2023

- Worked on unit tests as a group, I was able to get a unit test running for get one account
- fixed merging issues together to get everyone the working code onto main

---

---

## Week 16

---

#### Friday 3-2-2023

- I added ON DELETE CASCADE to the munches tables so that users with munches would be able to delete their account.
- I found out that you need to first do "DROP COLUMN user_id" and then add a new column back in with the ON DELETE CASCADE specifier
- merged into main with updated accounts routers and queries code that includes protected endpoints

#### Thursday 3-1-2023

- Pair programmed with Tyler the first half of the day:
- we added a get_one function to the account queries which allowed us to prepopulate the fields in edit user
- we are now able to update account information on the frontend with prepopulated fields
- however, we still need to confirm password in order to update the account
- pair programmed with Jason and Matthew for the rest of the day:
- we were able to filter munches by the user_id that matches the id of the logged in user for the home page
- we also learned that you can look in your ghi docker container to see the linting errors instead of pushing

#### Wednesday 2-29-2023

- Pair programmed with Tyler today
- added user_id to the munches table and made new migrations
- created the log out component and integrated the log out button onto the nav bar
- created edit user component on a page and got it working to update user profile information, but it was not prepopulating the data.
- figured out how to attach the user_id to a specific munch when creating a munch with setState
- figured out how to attach the id to the account when updating an account with setState

#### Tuesday 2-28-2023

- Kennedy, Tyler, and I made new tables and made new migrations to include city and state in the database.
- We also added city and state to the queries on the backend, tested the functionality to ensure that it works.
- Tyler and I worked on the detail view of a munch of the frontend
- we were able to get a detail view of a single munch to display
- we worked on styling the detail page with CSS and bootstrap!

#### Monday 2-27-2023

- completed frontend authentication, with functioning signup and login components

---

---

## Week 15

---

#### Friday 2-24-2023

- matthew, jason, i worked on creating the landing page for munch
- created css file to style the landing page which includes buttons for the login and sign up components
- kennedy and tyler completed backend authentication

#### Thursday 2-23-2023

- completed endpoints for munches and comments
- got mock data responding for munches and comments
- had issues updating a specific comment, but got it resolved
- tyler and kennedy are working on authentication backend
- matthew, jason, and i are working on authentication frontend

#### Wednesday 2-22-2023

- as a group, we connected our munches queries and routers to the database
- created functions for the routers and queries to: get all munches, create a munch, get a munch, update a munch, and delete a munch
- created functions for the routers and queries to: create a comment
- created a foreign key relationship in our comments table to create a comment attached to a specific munch_id

#### Tuesday 2-21-2023

- completed issues on gitlab
- created basic endpoints for get_all_munches, create_munch, and update_munch
- got mock data responding for create_munch
- accessed localhost:8010/docs to check that endpoints are showing
- created pool.py inside of queries to store the pool connection
- created an endpoints branch and merged conflicts
- the group as a whole created basic endpoints for everything

---

---

## Week 14

---

#### Thursday 2-16-2023

- tore down microservices (accounts, munches, comments) and combined them into a single monolith
- revised docker-compose.yaml file to reflect changes
- combined tables into one database (users, munches, comments)
- connected to pg-admin and checked that our tables were up

#### Wednesday 2-15-2023

- created and merged our first merge request
- create the first tables for accounts, munches, and comments
- ran migrations for each microservice and checked that each table was up in the database

#### Tuesday 2-14-2023

- included postgres-data and pg-admin volumes
- established our databases as accounts, munches, and comments
- updated docker-compose.yaml to create PostgreSQL and establish our database access it via Docker
- updated requirements.txt file to add FastAPI services to use PostgreSQL
- created a connection pool to connect to the database

---

---
