import mysql from "mysql2";

// Création de la connexion MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // ton utilisateur MySQL
  password: "",       // ton mot de passe MySQL
  database: "site_vitrine" // ta base de donnée
});

// Connexion
db.connect((err) => {
  if (err) {
    console.error("❌ Erreur de connexion à MySQL :", err);
  } else {
    console.log("✅ Connecté à MySQL");
  }
});

export default db;
