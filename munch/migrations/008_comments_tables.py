steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE comments
            DROP COLUMN munch_id
        """,
        # "Down" SQL statement
        """
        DROP TABLE comments;
        """
    ]

]
