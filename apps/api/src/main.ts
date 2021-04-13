/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import * as sqlite3 from 'sqlite3';
import * as express from 'express';
import { addTodoRoutes } from './app/referrals';

const app = express();

app.use(express.json());
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const db = new sqlite3.Database('./db/referrals.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    db.run('CREATE TABLE referrals( \
          id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
          givenname NVARCHAR(20)  NOT NULL,\
          surname NVARCHAR(20)  NOT NULL,\
          email NVARCHAR(20),\
          phone NVARCHAR(20),\
          homename NVARCHAR(20),\
          street NVARCHAR(20),\
          suburb NVARCHAR(20),\
          state NVARCHAR(20),\
          postcode NVARCHAR(20),\
          country NVARCHAR(20)\
    )', (err) => {
        if (err) {
            console.log("Table already exists.");
        }
    });
  }
  console.log('Connected to the database.');
});

addTodoRoutes(app, db);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);

process.on('SIGINT', () => {
  console.log('quit');
  db.close();
  server.close();
});
