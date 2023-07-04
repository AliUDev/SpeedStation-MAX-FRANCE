const db = {
  username: "HaiderAbbas",
  password: "UGZNQIacz76LDFfh",
  database: "transporter",
  cluster: "cluster0",
};

const uri = `mongodb+srv://${db.username}:${db.password}@${db.cluster}.7smpdm2.mongodb.net/${db.database}?retryWrites=true&w=majority`;

module.exports = uri;
