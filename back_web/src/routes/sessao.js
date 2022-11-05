const sessaoControler = require('../controllers/Sessao');
const {Router} = require('express');
const sessao = new Router()

sessao.get('/select', sessaoControler.index);
sessao.get('/respostasessao', sessaoControler.count);
sessao.post('/sessao', sessaoControler.store);
sessao.put('/update/:id', sessaoControler.updat);
sessao.delete('/delete/:id', sessaoControler.delet);

module.exports = sessao