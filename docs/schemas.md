# Schemas

## Users Tables

| Users           | Type                         |
| --------------- | :--------------------------- |
| id              | SERIAL PRIMARY KEY NOT NULL  |
| first_name      | VARCHAR(50) NOT NULL         |
| last_name       | VARCHAR(50) NOT NULL         |
| email           | VARCHAR(100) NOT NULL UNIQUE |
| username        | VARCHAR(50) NOT NULL UNIQUE  |
| hashed_password | VARCHAR(250) NOT NULL        |
| bio             | bio                          |

## Munches Tables
