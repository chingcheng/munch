# Tyler Herman

# Week 17

### (Thur) 3/9/2023

I originally worked with Alex on figuring out how the props are working in React
as I was trying to get usernames attached to the all munches page. We eventually
found a work around and Ching added username as a foreign key to the tables. We
then worked on getting the frontend working better. I had a chance to work on
some bootstrap, which is frustrating a bit, but once it is figured out it is very
satisfying. I think the project is looking good and I am excited that the stress
is lessening as we get closer to presenting and submitting the project.

### (Wed) 3/8/2023

Today we worked as a team to debug issues and get final touches put on views
in the application. Matthew thankfully realized that our nav bar was not nested
in our AuthProvider wrapper, which solved all the issues we had with our nav
bar. We worked on filtering views of the nav bar. We also realized that by using
the includes function that our filtering of id's was not working. It was
comnplicated by the fact that our user_id for our munches is a string. Was glad
to figure all of it out. We also worked on cleaning up the console, which went
smoother than I imagined.

### (Tue) 3/7/2023

Today I worked for a long time trying to get my unit tests to run for post and put
for account creating and update. I worked with a SEIR for a bit, got one 200
response, then was unable to get it again, even when I command z'd back to that
point. I decided to scrap that and shortly after got a get all accounts unit
test to function and pass. Then Ching and I worked successfully on hiding edit
and delete buttons while looking at other users' pages then worked on getting
login/logout and signup buttons to hide in the navbar depending on the state.
We struggled though, because our token would not load in the navbar to grab
an authentication state. Hopefully we can get it worked out tomorrow.

### (Mon) 3/6/2023

Over the weekend I was able to work on getting the accounts urls working. I was
unable to get useParams to work but worked around it by creating a view account
page then using an edit button on the page to get the url to function properly.
We started working on unit tests today. I was the only one unable to get mine to
work. I was also the only one attempting a put/post method... I spent a lot of
time workign and debugging but was unable to get it to work. Hopeuflly I can
get it working tomorrow.

# Week 16

### (Fri) 3/3/2023

Today we worked on creating a profile view for each user. We ended up having
to create a new get all accounts function then work on filtering in the front
end. It was actually fun to figure it out and get the view to update after we
were done. Kennedy, Ching and I got stuck trying to figure out how to get
the urls to respond dynamically in the same way we got it to work with the
account views. Something that we will have to continue to work on in the next
week. Feeling proud of the progress we have made as a team this week.

### (Thur) 3/2/2023

Finally got the edit account information to prepopulate (we were missing a "get"
function in the backend... I'm really enjoying the backend more and error chasin
Realized when debugging as a team that our delete account function was not working
because we did not have a ON DELETE CASCADE in our database. Worked on getting
the databases to communicate to get a username on each munch, now working on being
able to get a filtered view of each users account by either their username or ID.
There is so much information online about it, but realizing not much of it works
the way we need it to. Hopefully can get it working tomorrow.

### (Wed) 3/1/2023

Worked more on protected endpoints today, expanding it to our backend functions.
Then started worked on logout and editing an account. It was difficult getting
the account edit to work as we had to work around getting the password without
editing the password. We ended up having someone confirm the password. We
got it working successfully but were unable to get things prepopulated and all
fields were required.

### (Tue) 2/28/2023

Worked with Ching today on creating a detail view of the page. Learned about
using the useParams hook for uploading a page based on the ID. Then we worked
on the front end of the page, which was very helpful in helping me learn
Bootstrap and some CSS. We successfully got it working then tried working on
protecting the end points at the end of the day. I'm very confused about how to
protect the endpoints and how to tie each munch to a token and user... Hopefully
we can figure it out tomorrow.

### (Mon) 2/27/2023

Worked on updating and deleting an account today. Kennedy and I spent most of
the day working on it, struggling to figure out how to change a password and
keep it hashed. We posted in help me understand, but did not get a response for
three hours. When we finally got SEIRs to help, they said that we did not need
to include password updates as it is something new and too difficult and that it
should be added as a stretch goal. I felt like we have wasted a lot of time on
this project, because the expectations were not explained appropriately.

# Week 15

### (Fri) 2/24/2023

Worked with Kennedy to finish backend authentication. It took us three hours
to figure out that we had set our password VARCHAR to 25 and it was causing errors.
I thought that was set to the input, but because the hashed password is longer
than 25 characters it was throwing errors... So we got it finished then merged
everything to the main branch. We also did not realize there was a way to tie
the issues to the branches we were working on, so we started tying them directly
to the issues and will continue to do so as we move forward.

### (Thu) 2/23/2023

Worked as a team to finish the comments database and endpoints. Realizing that
FastAPI has some quirks and things aren't always responding well in the order
that we'd expect. This was compounded when I split off with Kennedy to tackle
the backend authentication. We ended up getting a lot of work done, however at
the end of the day we could get all of the data to show up, just not in the right
field. This was after hours of playing around with the order of things in the
accounts files... Hopefully we will be able to debug it tomorrow and keep moving
forward.

### (Wed) 2/22/2023

We worked as a team to setup connections to the databases for our comments
and munches services. We ran into a couple of syntax errors that set us back,
though while looking through the errors and with help of the SEIRs we ended up
learning and answering questions regarding foreign keys and relations through
the tables with different requests. I think we are going to need more foreign
keys to get everything running correctly in the future. Tomorrow we'll finish up
the database connections then work on authentication, which sounds like quite the
challenge.

### (Tue) 2/21/2023

Worked on setting up endpoints today. Worked with Jason and Kennedy to get
accounts and comments endpoints together. We split up then all worked on
merging at the end, I learned a lot about how to manage the conflicts, pull
the new data from the repository and merge it. Also watched the video on
connecting to the database, I'm excited to get it working tomorrow.

# Week 14

### (Thu) 2/16/2023

Attempted to have databases in multiple microservices communicate. After
attempting multiple avenues, the instructors indicated that we would need to
create a monolith. We then deleted the other microservices and put all of the
tables under one database. It took a little time to debug the attempt of fastapi
to make more databases and some syntax issues. We then were able to migrate and
checked our progress in pgadmin. I learned a lot today about how the yaml file
creates the app and how the databases are stored within docker.

### (Wed) 2/15/2023

Spent 4 hours trying to figure out migrations. Once we started over we
finished most of it in 20 minutesthen spent another hour figuring out the failed
pipeline. Starting to realize that this will be a part of the job sometimes.

### (Tue) 2/14/2023

Today we worked as a team to delineate microservices and databases. Then we created our first issue and updated our docker-compose.yaml file to get our project started. I used Live Share for the first time and setup a yaml file from scratch with my team. Doing it with a group of five made it a lot easier. Looking forward to getting everything up and running so we can get some tangible results.
