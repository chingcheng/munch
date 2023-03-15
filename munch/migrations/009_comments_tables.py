steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE comments
            ADD COLUMN munch_id INTEGER NOT NULL
            REFERENCES munches(id) ON DELETE CASCADE
        """,
        # "Down" SQL statement
        """
        DROP TABLE comments;
        """
    ]

]
