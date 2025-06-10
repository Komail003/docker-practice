const { Pool } = require("pg");
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

module.exports = {
  initializeDB: () => {
    pool
      .connect()
      .then(() => console.log("Connected to PostgreSQL"))
      .catch((err) => console.error("DB Connection Error", err));
  },
  query: (text, params) => pool.query(text, params),
};
