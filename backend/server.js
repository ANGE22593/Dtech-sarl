// Import des modules
import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",     // mets ton utilisateur MySQL
  password: "",     // mets ton mot de passe
  database: "site_vitrine" // mets le nom de ta base
});

// Vérifier la connexion
db.connect((err) => {
  if (err) {
    console.error("❌ Erreur de connexion MySQL :", err);
  } else {
    console.log("✅ Connecté à la base de données MySQL");
  }
});

// ===============================
// ROUTES POUR LA TABLE CONTACTS
// ===============================

// Ajouter un contact
app.post("/api/contacts", (req, res) => {
  const { nom, email, telephone, message } = req.body;
  const sql = "INSERT INTO contacts (nom, email, telephone, message, date_envoi) VALUES (?, ?, ?, ?, NOW())";
  db.query(sql, [nom, email, telephone, message], (err, result) => {
    if (err) {
      console.error("❌ Erreur lors de l'insertion :", err);
      res.status(500).json({ error: "Erreur serveur" });
    } else {
      res.status(201).json({ message: "✅ Contact enregistré avec succès !" });
    }
  });
});

// Récupérer tous les contacts
app.get("/api/contacts", (req, res) => {
  const sql = "SELECT * FROM contacts ORDER BY date_envoi DESC";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Erreur lors de la récupération :", err);
      res.status(500).json({ error: "Erreur serveur" });
    } else {
      res.json(results);
    }
  });
});

// ===============================
// ROUTES POUR LA TABLE DEMANDES
// ===============================

// Ajouter une demande
app.post("/api/demandes", (req, res) => {
  const { nom, email, telephone, sujet, description } = req.body;
  const sql = "INSERT INTO demandes (nom, email, telephone, sujet, description, date_envoi) VALUES (?, ?, ?, ?, ?, NOW())";
  db.query(sql, [nom, email, telephone, sujet, description], (err, result) => {
    if (err) {
      console.error("❌ Erreur lors de l'insertion :", err);
      res.status(500).json({ error: "Erreur serveur" });
    } else {
      res.status(201).json({ message: "✅ Demande enregistrée avec succès !" });
    }
  });
});

// Récupérer toutes les demandes
app.get("/api/demandes", (req, res) => {
  const sql = "SELECT * FROM demandes ORDER BY date_envoi DESC";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Erreur lors de la récupération :", err);
      res.status(500).json({ error: "Erreur serveur" });
    } else {
      res.json(results);
    }
  });
});

// ===============================
// LANCER LE SERVEUR
// ===============================
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
