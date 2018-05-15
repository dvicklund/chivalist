BEGIN;

CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  first_name varchar(256),
  last_name varchar(256)
);

CREATE TABLE IF NOT EXISTS reports (
  id serial PRIMARY KEY,
  title varchar(256),
  body text,
  user_id integer REFERENCES users
);

COMMIT;
