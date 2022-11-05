const express = require('express');
const cors = require('cors');

const sessaoRouter = require('./src/routes/Sessao');
const votoRouter = require('./src/routes/voto');

const app = express();
app.use(express.json());
app.use(express.Router());
app.use(express.urlencoded({extended: false}))

const whiteList = [
    'http://localhost:3000',
  ];
  
  const corsOptions = {
    origin(origin, callback) {
      if (whiteList.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };
app.use(cors(corsOptions));

//cadastro sessao
app.post('/sessao', sessaoRouter);
app.get('/select', sessaoRouter);
app.get('/respostasessao', sessaoRouter);
app.put('/update/:id', sessaoRouter);
app.delete('/delete/:id', sessaoRouter);


//votacao
app.post('/voto', votoRouter);
app.get('/selecaovoto', votoRouter);
app.get('/respostavoto', votoRouter);
app.put('/updatevoto/:id', votoRouter);
app.delete('/deletevoto/:id', votoRouter);


module.exports = app;