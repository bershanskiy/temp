import mysql from 'mysql';
import { init } from './src/fakeData.js';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'testtask',
});

connection.connect();

function insertStory({id, image, title, date, fulldescription, text, likes, category}) {
    return new Promise((res, rej) => {
    connection.query('INSERT INTO Stories (id, image, title, date, fulldescription, text, likes, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [id, image, title, date, fulldescription, text, likes, category],
      (error) => {
        if (error)
            rej(error)
        else
            res();
    });
    });
}

function insertCategory({id, title}) {
  return new Promise((res, rej) => {
  connection.query('INSERT INTO Categories (id, title) VALUES (?, ?)', [id, title], (error) => {
      if (error)
          rej(error)
      else
          res();
  });
  });
}


const {stories, categories} = init();

const ps = [];
for (const story of stories) {
  ps.push(insertStory(story));
}

for (const category of categories) {
  ps.push(insertCategory(category));
}

Promise.all(ps).then(() => {
    console.log('DB ready');
    connection.end();
});
