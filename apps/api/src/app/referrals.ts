import { Express } from 'express';
import { Referral, GET_REFERALL_API, CREATE_REFERALL_API, DB_NAME } from '@myapp/data';
import { communicateService } from './utility';

export function addTodoRoutes(app: Express, db: any ) {
  app.get(GET_REFERALL_API, (req, resp) => {
    db.all(`SELECT * FROM ${DB_NAME}`, [], (err, rows) => {
      if (err) {
        resp.status(400).json({"error":err.message});
        return;
      }
      resp.status(200).json(rows);
    });
  });

  app.post(CREATE_REFERALL_API, (req, resp, next) => {
    const ref = req.body as Referral;
    if (ref && ref.givenname && ref.surname) {
      db.run(`INSERT INTO ${DB_NAME} (givenname, surname, email, phone,  homename,
          street, suburb, state, postcode, country) VALUES (?,?,?,?,?,?,?,?,?,?)`,
        [
          ref.givenname, ref.surname, ref.email, ref.phone, ref.homename,
          ref.street, ref.suburb, ref.state, ref.postcode, ref.country
        ],
        function (err) {
          if (err) {
            console.log(err.message);
            resp.status(400).json({ "error": err.message })
            return;
          }
          resp.status(201).json(ref);
          next(true);
        }
      );
      return;
    }
    resp.status(400).json({ "error": 'invalid payload' })
  }, communicateService);
}