steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE munches
            ADD COLUMN user_username VARCHAR(50) NOT NULL
            REFERENCES users(username)
            ON DELETE CASCADE
        """,
        # "Down" SQL statement
        """
        DROP TABLE munches;
        """
    ]

]
