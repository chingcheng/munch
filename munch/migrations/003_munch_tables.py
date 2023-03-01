steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE munches
            ADD COLUMN user_id INTEGER NOT NULL REFERENCES users(id)
        """,
        # "Down" SQL statement
        """
        DROP TABLE munches;
        """
    ]

]
