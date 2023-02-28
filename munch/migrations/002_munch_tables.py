steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE munches
            ADD COLUMN city TEXT NOT NULL,
            ADD COLUMN state TEXT NOT NULL
        """,
        # "Down" SQL statement
        """
        DROP TABLE munches;
        """
    ]

]
