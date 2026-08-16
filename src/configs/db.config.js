
module.exports = {
    DB_NAME: process.env.DB_NAME || "mba_2_0",
    DB_URL: process.env.MONGO_URI || process.env.DB_URL || "mongodb://127.0.0.1:27017",
};