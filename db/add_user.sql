INSERT INTO loser_user (username, hash)
VALUES ($1, $2);

SELECT * FROM loser_user WHERE username = $1;