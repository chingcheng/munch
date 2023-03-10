# Schemas

## Users Table

| Users           | Type                         |
| --------------- | :--------------------------- |
| id              | SERIAL PRIMARY KEY NOT NULL  |
| first_name      | VARCHAR(50) NOT NULL         |
| last_name       | VARCHAR(50) NOT NULL         |
| email           | VARCHAR(100) NOT NULL UNIQUE |
| username        | VARCHAR(50) NOT NULL UNIQUE  |
| hashed_password | VARCHAR(250) NOT NULL        |
| bio             | TEXT                         |

## Munches Table

| Munches       | Type                                                         |
| ------------- | :----------------------------------------------------------- |
| id            | SERIAL PRIMARY KEY NOT NULL                                  |
| location      | VARCHAR(100) NOT NULL                                        |
| rating        | INTEGER NOT NULL                                             |
| review        | TEXT NOT NULL                                                |
| photo         | TEXT NOT NULL                                                |
| tag           | BOOLEAN                                                      |
| city          | TEXT NOT NULL                                                |
| state         | TEXT NOT NULL                                                |
| user_id       | INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE      |
| user_username | STRING NOT NULL REFERENCES users(username) ON DELETE CASCADE |
