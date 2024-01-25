const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'fullcycle',
});

app.get('/', (req, res) => {
  const currentTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
  connection.query(
    'INSERT INTO people(name) VALUES("Visitante ' + currentTime + '")',
    (err) => {
      if (err) throw err;

      connection.query('SELECT name FROM people', (err, result) => {
        if (err) throw err;

        let html = '<h1>Full Cycle Rocks!</h1>';
        html += '<ul>';
        for (let row of result) {
          html += `<li>${row.name}</li>`;
        }
        html += '</ul>';

        res.send(html);
      });
    }
  );
});

app.listen(3000, () => {
  console.log('Node app is running on port 3000');
});
