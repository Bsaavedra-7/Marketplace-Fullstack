import express, { json } from "express"
import cors from "cors"
import { pool } from "./db.js"

const app = express()

app.use(cors())
app.use(json())

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()")
    res.json(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).send("DB error")
  }
})


app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching products");
  }
});



app.listen(5000, () => {
  console.log("Server running on port 5000")
})