# Kennedy Cassiday

# Week 18

### (Fri) 3/17/2023

### (Thur) 3/16/2023

### (Wed) 3/15/2023

### (Tue) 3/14/2023

### (Mon) 3/13/2023

# Week 17

### (Fri) 3/10/2023

### (Thur) 3/9/2023

Today, all that we have left is merging our journals and the README into the main
branch. I have been waiting to add ghi photos to the README until the last pieces
of styling were done. Ching, Tyler, and I spent the morning updating our tables,
and adding a username to each munch on the bunch page. We also worked for a while
on refactoring our React code, but ended up deleting that branch because things
got too messy.

### (Wed) 3/8/2023

Today, I finished up the README in the morning and then worked with the team for
the rest of the day cleaning up console error messages and getting the project
polished! We had a couple super frustrating error messages and it took us pretty
much the whole afternoon to get them taken care of. However, it was motivating
to see our deployed project looking good!

### (Tue) 3/7/2023

Today, I was able to merge my unit test from Friday into the main branch. In the
morning I worked on cleaning up a 'no routes found' error that has been hanging
around for almost the entirety of the project. I finally figured out it was due
to having nested <Routes> in our App.js file. After I took those out, the errors
disappeared. I then worked on creating our project's README for the rest of the
day. It always suprises me how long it takes to write a detailed README/import the
images/write out the API/etc.

### (Mon) 3/6/2023

Today, (after the exam) we all worked on unit tests. I wrote a unit test for get
all munches. For practice I also wrote one for get all accounts and create a munch.
It was fun to be able to get them all functioning properly.

# Week 16

### (Fri) 3/3/2023

Today, Tyler and I pair programmed (he drove all day) and worked on getting usernames into the url
when going from a munch detail page to another user's page. This means, when
someone goes from the main feed to a single munches detail page, and then clicks
the username that is listed on that detail page, it links to a page that lists
all of that user's munches and the url has the correct username in it. After lunch
Ching joined us to work on the user page (the landing page for when someone clicks on
the username link). We had to figure out how to get the username out of the url and
use it to get the matching account id and then display all the munches related to
only that id. It took us quite a while. After that was completed we moved on to
trying to get the account id to display in the url when accessing an accounts page.
We could not get that working before the end of the day.

### (Thur) 3/2/2023

Today, I created a page to display a feed of all munches (from all users).
I worked with Jason for the first part of the day on a function to allow us
to filter munches by the user they were created by. We finished that up right
before lunch with the help of a SEIR. After lunch I split off and worked with
Tyler on updating the munch detail page to get the munch id and use that to get
the user id and display the username associated with the user id on the munch
detail. We did that, and wrapped the username in a link (which will eventually
link to the munch page for that particular user). Then we worked on creating a
page to display the munches associated with a user. We got stuck trying to get
the user id and put it in the url, but will continue working on it tomorrow.
After evening attendance we worked as a team to merge several branches into main.
We had a ton of linting issues and spent hours on this. It was rough.

### (Wed) 3/1/2023

Today, I started by working with Ching, Jason, and Tyler on protecting our
endpoints. We announced this as a blocker at standup, but ended up waiting
hours for assistance, which really held us up. We worked on this all the way
up to lunch.After lunch Jason and I went back to working on the home page.
We got our munches all linked to the correct detail page and ended up fixing
some errors on the detail page and moving the edit/delete buttons arround.
We also protected the endpoints for the home page, create page, and edit page.
After attendance I reviewed the front-end auth to prepare for our task tomorrow,
which is to get the user info from the token and use it to only display munches
belonging to that user.

### (Tue) 2/28/2023

Today, we started by working as a group on creating a Munch. We decided to
collectively switch over to using Beekeeper, rather than pgAdmin (pgAdmin was
slow and difficult to use). Beekeeper is SO much better! Tyler, Ching, and I
split off and updated our Munches table to include city and state (rather than
just having a blanket 'location' field). After lunch, Jason and I pair programmed
and worked on the home page for Munch. We were able to get all of our munches to
populate on the page and added a working nav bar. We may go back and attempt to
move the nav bar to display vertically on the lefthand side of the page if time
allows. After evening attendance I reviewed the JWTdown Auth materials in Learn,
and worked on protecting our endpoints.

### (Mon) 2/27/2023

Tyler and I pair programmed again today. We worked on the update and delete
endpoints for accounts. We finished the delete endpoint very quickly.
Unfortunately, we got hung up on the update endpoint until late in the afternoon.
We were trying to allow for the user to update each field associated with their
account, including the password. When we were able to get help from a SEIR, they
told us that we should not allow for the user to update their password, because
it was too complicated and should be a stretch goal. Once we omitted the update
password piece, we were able to enable the updating of the rest of the account
fields without issue. We finished up just before evening attendance. After
attendance we spent some time with the team planning for the next day.

# Week 15

### (Fri) 2/24/2023

Worked with Tyler on backend authorization for the full day. We did end up
completing the backend authorization, but spent many hours on the bug mentioned
in Thursday's journal log. We discovered that in our table, we weren't allowing
for enough characters in our hashed password (which is why it worked when we
flipped bio and hashed password - bio had much more room). Once complete, we
added, committed, and pushed our changes. Ching reviewed and merged our work
branch to main. We didn't initially create a work branch off of the issue, so I
had to pull the work branch into a branch that I created off of the issue today.
Will do this properly moving forward. Exhausted and ready to rest and come back
refreshed on Monday!

### (Thu) 2/23/2023

We started the day by working as a group to finish the comments endpoints.
We ran into an issue with being able to update a comment by id, but were able to
fix it and successfully completed all comment endpoints (able to create, update,
and delete a comment tied to a specific munch).
We then split up to work on Auth. Tyler and I worked on backend authorization
for the remainder of the day. By the end of the day, we were able to create a
user in our database, but the hashed password and our 'bio' field were flipped.
The password was being stored under the bio field. Hopefully we can resolve
in the morning!

### (Wed) 2/22/2023

Worked as a group the entirety of this day:

- successfully connected to the database
- finished munch endpoints
- comments endpoints approx 80% finished
- updated tables to enable a foreign key relationship between munches
  and corresponding comments

### (Tue) 2/21/2023

Worked as a group the entirety of this day:

- added issues to Gitlab, a few assigned out for endpoints (although we ended up
  doing them as a group and merging into a shared dev branch)
- worked on creating endpoints, made some progress on the munches endpoints

# Week 14

### (Thu) 2/16/2023

Worked as a group the entirety of this day:

- Tore down all of our previously created services
- Created a monolith
- Re-created tables and ran migrations
- Revised docker yaml file
- Confirmed migrations as on pgAdmin

### (Wed) 2/15/2023

Worked as a group the entirety of this day:

- Created our tables for each microservice (users, munches, comments)
- Ran migrations for each microservice and confirmed that the tables were
  properly appearing in our database.

### (Tue) 2/14/2023

Worked as a group the entirety of this day:

- Mapped out our microservices and databases
- Updated our docker yaml file and requirements.txt
