steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE munches
            DROP COLUMN user_id
        """,
        # "Down" SQL statement
        """
        DROP TABLE munches;
        """
    ]

]
