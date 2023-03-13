steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE comments
            ADD COLUMN user_id INTEGER NOT NULL
            REFERENCES users(id) ON DELETE CASCADE,
            ADD COLUMN user_username VARCHAR(50) NOT NULL
            REFERENCES users(username) ON DELETE CASCADE;
        """,
        # "Down" SQL statement
        """
        DROP TABLE comments;
        """
    ]

]
