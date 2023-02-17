steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE users (
            id SERIAL PRIMARY KEY NOT NULL,
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            username VARCHAR(25) NOT NULL UNIQUE,
            password VARCHAR(25) NOT NULL,
            bio TEXT
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE users;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE munches (
            id SERIAL PRIMARY KEY NOT NULL,
            location VARCHAR(100) NOT NULL,
            rating INTEGER CHECK (rating >= 0 AND rating <=5) NOT NULL,
            review TEXT NOT NULL,
            photo TEXT NOT NULL,
            tag BOOLEAN,
            user_id INTEGER NOT NULL REFERENCES users(id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE munches;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE comments (
            id SERIAL PRIMARY KEY NOT NULL,
            comment TEXT NOT NULL,
            munch_id INTEGER NOT NULL REFERENCES munches(id),
            user_id INTEGER NOT NULL REFERENCES users(id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE comments;
        """
    ],

]
