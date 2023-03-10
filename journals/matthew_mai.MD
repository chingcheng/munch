# Matthew Mai

---

# Week 18

### (Fri) 3/17/2023

### (Thur) 3/16/2023

### (Wed) 3/15/2023

### (Tue) 3/14/2023

### (Mon) 3/13/2023

# Week 17

### (Fri) 3/10/2023

### (Thur) 3/9/2023

- Started to implement light/dark mode

### (Wed) 3/8/2023

- Successfully moved past CORS issue and successfully deployed munch
- Cleaned up and debugged red console errors
- Included unit test stage in gitlab-ci yaml file
- Continued to work on stlistic aspects of the app

### (Tue) 3/7/2023

- Continued to work on deployment
- Completed unit test
- Made additional implementations to the munch dockerfile
- Changed some environment variables inside of CapRover
- Worked on UX/UI

### (Mon) 3/6/2023

- Successfully connected the database late in the evening
- Wrote a passing unit test for posting a munch
- Helped debug and clean up code on frontend components

# Week 16

### (Fri) 3/3/2023

- Attempted to move past Part II of deployment
- Continued to fix linting issues

### (Thur) 3/2/2023

- Successfully edited a munch
- Filtered munches to only display ones that users created on the home page
- Continued to work through errors on deployment part 2

### (Wed) 3/1/2023

- Edited the update a munch form
- Finished Part 1 of Deployment
- Worked on Part 2 of Deployment, I believe I was able to get the backend service deployed.
- Helped team mates with debugging as issues arised and had time to share

### (Tue) 2/28/2023

- Team split up frontend components, Jason and Kennedy worked on the home page, Tyler and Ching worked on a detail view of a specific munch, and I worked on the update a munch form
- Essentially finished update a munch form
- Successfully updated a munch while having the previous data populate so that users can see what they are updating

### (Mon) 2/27/2023

- Kennedy and Tyler finished the endpoints for updating and deleting an account
- Jason, Ching and I completed frontend authentication. We are able to log in and sign up
- Jason and I worked on creating a munch in the evening and successfully got it to work!
- Implemented a star rating system to represent the integer rating

# Week 15

### (Fri) 2/24/2023

- Tyler and Kennedy completed backend authentication
- Ching, Jason, and I worked on frontend authentication
- We were under the impression that front-end auth was dependent on back-end auth, so we worked on our landing, login, and signup page.
- Landing, login, and sign-up pages are almost complete

### (Thu) 2/23/2023

- Finished endpoints
- Checked each endpoint to make sure they were working on the FastAPI docs and inside of the database
- Starting to work on front end authentication

### (Wed) 2/22/2023

- As a group, we connected our munches queries and routers to the database
- Created functions for the routers and queries to: get all munches, create a munch, get a munch, update a munch, and delete a munch
- Created functions for the routers and queries to: create a comment
- Created a foreign key relationship in our comments table to create a comment attached to a specific munch_id

### (Tue) 2/21/2023

- Completed issues to gitlab
- Created a skeleton model for the delete munch endpoint. Incredibly bare bones to see that it's showing on the FastAPI docs
- Assisted Ching in programming the create, get, and put munch endpoints
- Created a pool directory and file inside of queries and moved pool from main

# Week 14

### (Thu) 2/16/2023

- Tore down our multiple microservices and combined them into one service(monolith)
- Created tables and successfully ran migrations under the munch service
- Deleted the relational database because we are now only working with one database
- Revised Docker YML file to reflect monolith changes

### (Wed) 2/15/2023

- Created first issue and merge request
- Created tables for accounts, munches, and comments
- Created multiple microservice and successfully ran migrations

### (Tue) 2/14/2023

- Created/walked through our first Issue as a team on Gitlab
- Defined the microservices
- Updated docker-compose.yaml to create a PostgreSQL database and access it via Docker
- Included volumes to the docker-compose.yaml
- Updated requirements.txt to include FastAPI services to use PostgreSQL
- Attempted and created a connection pool to connect to the database
- Learned how to construct a YAML file from scratch
