const mongoose = require('mongoose');

const connectToDB = () => {
  const connectionString = process.env.CONNECTION_STRING;
  if (!connectionString) {
    console.error('connection string not defined');

    process.exit(1);
  }

  const db = mongoose.connection;
  db.on('connected', () => {
    console.log(`DB connected, ${connectionString}`);
  });

  db.on('error', (error) => {
    console.error(error.message);
    process.exit(2);
  });

  db.on('disconnected', () => {
    console.log('db connection lost');
  });

  return mongoose.connect(connectionString);
};

module.exports = connectToDB;
