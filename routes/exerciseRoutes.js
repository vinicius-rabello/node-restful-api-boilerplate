const express = require("express");
const router = express.Router();
const pool = require("../db/db");

// GET: Obter todos os exercícios
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM exercises");
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Obter um único exercício
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM exercises WHERE id = $1", [id]);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Criar um novo exercício
router.post("/", async (req, res) => {
  const { name, muscle_group, description, difficulty } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO exercises (name, muscle_group, description, difficulty) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, muscle_group, description, difficulty]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT: Atualizar um exercício existente
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, muscle_group, description, difficulty } = req.body;

  try {
    const result = await pool.query(
      "UPDATE exercises SET name = $2, muscle_group = $3, description = $4, difficulty = $5 WHERE id = $1 RETURNING *",
      [id, name, muscle_group, description, difficulty]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Exercise not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE: Remover um exercício
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM exercises WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Exercise not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;