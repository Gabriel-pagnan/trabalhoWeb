const votoControler = require('../controllers/Voto');
const {Router} = require('express');
const voto = new Router()

voto.get('/selecaovoto', votoControler.index);
voto.get('/respostavoto', votoControler.count)
voto.post('/voto', votoControler.store);
voto.put('/updatevoto/:id', votoControler.updat);
voto.delete('/deletevoto/:id', votoControler.del);

module.exports = voto;