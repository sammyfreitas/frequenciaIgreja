const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const db = new sqlite3.Database('./database.db');

db.run(`CREATE TABLE IF NOT EXISTS membros (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 nome TEXT,
 cargo TEXT,
 faltas INTEGER DEFAULT 0
)`);

app.get('/membros', (req,res)=>{
 db.all('SELECT * FROM membros',[],(e,r)=>res.json(r));
});

app.post('/membros',(req,res)=>{
 const {nome,cargo}=req.body;
 db.run('INSERT INTO membros(nome,cargo) VALUES (?,?)',[nome,cargo]);
 res.json({ok:true});
});

app.post('/falta',(req,res)=>{
 const {id}=req.body;
 db.run('UPDATE membros SET faltas = faltas + 1 WHERE id=?',[id]);
 res.json({ok:true});
});

app.listen(3000,()=>console.log('Servidor em http://localhost:3000'));