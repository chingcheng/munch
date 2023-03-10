# Jason Dai

# Week 18

### (Fri) 3/17/2023

### (Thur) 3/16/2023

### (Wed) 3/15/2023

### (Tue) 3/14/2023

### (Mon) 3/13/2023

# Week 17

### (Fri) 3/10/2023

### (Thur) 3/9/2023

- Continued to work on light mode and dark mode as well as other stylistic components

### (Wed) 3/8/2023

- Fixed all errors in the console, and successfully deployed
- Fixed all broken images while deployed
- Worked on README
- Began Light Mode and Dark Mode (stretch)

### (Tue) 3/7/2023

- Finished unit testing
- Cleaned up errors in the console
- Worked on more front-end styling
- Worked on README

### (Mon) 3/6/2023

- Worked on unit test and merging to main as well as resolving merge conflicts
- Did some styling during idle time(pipeline waiting to pass)

# Week 16

### (Fri) 3/3/2023

- Linted some of the code
- Worked on UI/UX components

### (Thur) 3/2/2023

- Successfully edited a munch
- Had account information pre-populate
- Filtered munches to only display ones that users created on the home page
- Attached a username associated to each munch

### (Wed) 3/1/2023

- We protected some of our endpoints
- Continued to edit and build front-end components (detail view, edit munch, login, logout, and accounts)

### (Tue) 2/28/2023

- Kennedy and Jason successfully got all munches to display on the home page
- Ching and Tyler were able to get a detailed view of a single munch to display
- Matthew successfully updated a munch while having the previous data populate so that users can see what they are updated

### (Mon) 2/27/2023

- Kennedy and Tyler finished the endpoints for updating and deleting an account
- Matthew, Ching and I completed frontend authentication. We are able to log in and sign up
- Matthew and I worked on creating a munch in the evening and successfully got it to work!
- Matthew implemented a star rating system to represent the integer rating
- I was able to allow users to upload their own photo rather than a URL

# Week 15

### (Fri) 2/24/2023

- Tyler and Kennedy completed backend authentication!!
- Ching, Matthew, and I worked on frontend authentication
- We were under the impression that front-end auth was dependent on back-end auth, so we worked on our landing, login, and signup page.
- Landing, login, and sign-up pages are almost complete

### (Thu) 2/23/2023

- Completed endpoints!!
- Checked to see that docker and endpoints were working on each group member's computer
- Had issues with updating a specific comment, but got it resolved!
- Began Frontend and Backend Authentication
- Created Login and SignUp Forms and stylized them

### (Wed) 2/22/2023

- As a group, we connected our munches queries and routers to the database
- Created functions for the routers and queries for all munch endpoints
- Created a foreign key relationship for comments to attach a comment to a specific munch

### (Tue) 2/21/2023

- Completed issues and assigned them to members of the group
- Started creating endpoints

# Week 14

### (Thu) 2/16/2023

- Tore down individual services and combined them into a single monolith
- Successfully ran and automated migrations for the database
- Created multiple tables (accounts, munches, and comments) in a single database
- Revised Docker YML file to reflect monolith changes
- Deleted the relational database file and added an image to the YML file

### (Wed) 2/15/2023

- Created and merged our first merge request
- Created tables for accounts, munches, and comments
- Ran migrations for each microservice in separate branches to check that each table was connected to the database

### (Tue) 2/14/2023

- Identified specific components that could benefit from being developed as individual microservices
- Revised docker compose file to build PostgreSQL and enable access in Docker
- Modified requirements.txt file to integrate FastAPI services for PostgreSQL usage
- Tried to establish a connection pool for database access- Expanded docker compose file with new volume and service, including pgAdmin installation for managing PostgreSQL servers
- Acquired the skill to generate a YAMLfile from scratch
