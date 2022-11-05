const  {pool}  = require('../database/database')
const express = require('express');
express.urlencoded({extended: false})

async function store(req,res){
    const {id, nome, estado, descricao, tipo, opcao1} = req.body;

    try {
        const query = await pool.query(
            `INSERT INTO "Sessao" VALUES (
                ${id},
                '${nome}',
                '${estado}',
                '${descricao}',
                '${tipo}',
                '${opcao1}')`
        )
        res.status(200).json('cadastrado com sucesso')
        return query;
    } catch (e) {
        return res.status(400).json(e);
    };
};

async function index(req, res){
    const query = `SELECT * FROM "Sessao"`;

    await pool.query(query)
        .then((response)=> res.json(response.rows))
    return 
}

async function count(req, res){
    try {
        const countS = await pool.query(`SELECT COUNT(*) FROM "Sessao" WHERE "Opcao1" = 'sim'`)
        const countN = await pool.query(`SELECT COUNT(*) FROM "Sessao" WHERE "Opcao1" = 'nao'`)
        return res.json(["Sim: " + countS.rows[0].count, "Não: " + countN.rows[0].count])
    } catch (e) {
        console.log(e)
    }
}
async function updat(req, res){
    const {id} = req.params;
    const {nome, estado, descricao, tipo, opcao1} = req.body;
    try {
        const query = await pool.query(
            `UPDATE "Sessao" SET ("Nome", "Estado", "Descricao", "Tipo", "Opcao1") = 
            ('${nome}', '${estado}', '${descricao}', '${tipo}', '${opcao1}') 
            WHERE "ID" = ${id}`
        );
        res.json('atualizado com sucesso');
        return query
    } catch (e) {
        console.log(e)
    }
}
async function delet(req, res){
    const {id} = req.params;
    try {
        const query = await pool.query(`DELETE FROM "Sessao" WHERE "ID" = ${parseInt(id)}`);
        res.json('deletado com sucesso');
        return query
    } catch (e) {
        console.log(e)
    }
}
module.exports = {store, index, count, updat, delet};    