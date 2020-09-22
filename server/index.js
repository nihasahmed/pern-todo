const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());


//routes
app.post("/todo", async(req, res) => {
    try {
        const { desc } = req.body;
        const newtodo = await pool.query('INSERT INTO todo("desc") VALUES ($1) RETURNING *', [ desc ]);
        res.json(newtodo.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
});
app.get("/todo", async(req, res) => {
    try {
        const newtodo = await pool.query('SELECT * FROM todo');
        res.json(newtodo.rows);
    } catch(err) {
        console.error(err.message);
    }
});
app.get("/todo/:id", async(req, res) => {
    try {
        const { id }= req.params;
        const newtodo = await pool.query('SELECT * FROM todo WHERE id = $1',[id]);
        res.json(newtodo.rows);
    } catch(err) {
        console.error(err.message);
    }
});
app.put("/todo/:id", async(req, res) => {
    try {
        const { id }= req.params;
        const { desc } = req.body;
        const newtodo = await pool.query('UPDATE todo SET "desc"=$1 WHERE id = $2 RETURNING *',[desc, id]);
        res.json(newtodo.rows);
    } catch(err) {
        console.error(err.message);
    }
});
app.delete("/todo/:id", async(req, res) => {
    try {
        const { id }= req.params;
        const newtodo = await pool.query('DELETE FROM todo WHERE id = $1',[id]);
        res.json("Todo deleted");
    } catch(err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("app has started on port 5000");
})