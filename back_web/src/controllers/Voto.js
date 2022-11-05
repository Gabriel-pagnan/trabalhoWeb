const  {pool}  = require('../database/database')
const express = require('express');
express.urlencoded({extended: false})

async function store(req,res){
    const {id, estado, resposta} = req.body;

    try {
        const query = await pool.query(
            `INSERT INTO "Voto" VALUES (${id}, '${estado}', '${resposta}')`
        )
        res.status(200).json('Adicionado com sucesso!');
        return query;
    } catch (e) {
        return res.status(400).json(e);
    };
};

async function index(req, res){
    const query = `SELECT * FROM "Voto"`;

    await pool.query(query)
        .then((response)=> res.json(response.rows))
    return 
}

async function count(req, res){
    try {
        const countS = await pool.query(`SELECT COUNT(*) FROM "Voto" WHERE "Resposta" = 'sim'`)
        const countN = await pool.query(`SELECT COUNT(*) FROM "Voto" WHERE "Resposta" = 'nao'`)
        return res.json(["Sim: " + countS.rows[0].count, "Não: " + countN.rows[0].count])
    } catch (e) {
        console.log(e)
    }
}

async function updat(req, res){
    const {id} = req.params;
    const { estado, resposta} = req.body;
    try {
        const query = await pool.query(
            `UPDATE "Voto" SET ("Estado", "Resposta") = ('${estado}', '${resposta}') 
            WHERE "ID" = ${id}`
        );
        res.json('atualizado com sucesso');
        return query
    } catch (e) {
        console.log(e)
    }
}
async function del(req, res){
    const {id} = req.params;
    try {
        const query = await pool.query(`DELETE FROM "Voto" WHERE "ID" = ${parseInt(id)}`);
        res.json('Deletado com sucesso');
        return query
    } catch (e) {
        console.log(e)
    }
}

module.exports = {store, index, count, updat, del};    