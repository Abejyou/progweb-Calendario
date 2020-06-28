const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
const router = express.Router();
const mysql = require('mysql');
const config = require('./config/config');

function execQuery(query, res, callback) {
  const config = require('./config/config');

  const connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
  });

  connection.connect(function (err) {
    if (err) return console.log(err);
    console.log('conectou!');
  });

  connection.query(query, function (error, results, fields) {
    if (error) {
      res.json(error);
    }
    else {
      callback(results);
    }
    connection.end();
  });
}

router.get('/', (req, res) => res.json({ message: 'Server Funcionando!' }));
app.use('/', router);

router.get('/usuario', (req, res) => {
  execQuery('SELECT * FROM usuario', res, (results) => {
    res.json(results);
  });
});
router.get('/evento', (req, res) => {
  execQuery('SELECT E.*, N.id as notificacao_id, N.data_notificacao as notificacao_data_notificacao ' +
    'FROM evento E LEFT JOIN notificacao N ON N.id_evento = E.id', res, (data) => {
      var results = {};
      data.forEach((element, index, array) => {
        var current = element.id;
        if (!results[current]) {
          results[current] = {};
          results[current].notificacao = new Array();
          results[current].notificacao.push({});
          for (var key in element) {
            if (/^notificacao/.test(key)) {
              results[current].notificacao[0][key.replace('notificacao_', '')] = element[key];
            } else {
              results[current][key] = element[key];
            }
          }
        } else {
          var length = results[current].notificacao.length;
          results[current].notificacao.push({});
          for (var key in element) {
            if (/^notificacao/.test(key)) {
              results[current].notificacao[length][key.replace('notificacao_', '')] = element[key];
            }
          }
        }
      });
      res.json(results);
    });
});
router.post('/evento', (req, res) => {
  var params = req.query;
  if (params.id) {
    execQuery("UPDATE evento SET " +
      "titulo_evento = '" + params.tituloEvento + "', " +
      "local_evento = '" + params.localEvento + "', " +
      "data_inicio   = '" + params.dataInicio + "', " +
      "data_fim = '" + params.dataFim + "' " +
      "WHERE id = " + params.id, res, (results) => {
        res.json(results);
      });
  } else {
    execQuery("INSERT evento (titulo_evento, local_evento, data_inicio, data_fim) " +
      "VALUES('" + params.tituloEvento + "', '" + params.localEvento + "', '" + params.dataInicio + "', '" + params.dataFim + "')", res, (results) => {
        res.json(results);
      });
  }
});

router.get('/notificacao', (req, res) => {
  execQuery('SELECT * FROM notificacao', res, (results) => {
    res.json(results);
  });
});
router.post('/notificacao', (req, res) => {
  var params = req.query;
  if (params.id) {
    execQuery("UPDATE notificacao SET " +
      "tipo_notificacao = '" + params.tipoNotificacao + "', " +
      "tipo_intervalo_tempo = '" + params.tipoIntervaloTempo + "', " +
      "quantidade_tempo = " + params.quantidadeTempo + ", " +
      "hora_notificacao = '" + params.horaNotificacao + "' " +
      "WHERE id = " + params.id, res, (results) => {
        res.json(results);
      });
  } else {
    execQuery("INSERT notificacao (id_evento, tipo_notificacao, tipo_intervalo_tempo, quantidade_tempo, hora_notificacao) " +
      "VALUES(" + params.idEvento + ", '" + params.tipoNotificacao + "', '" + params.tipoIntervaloTempo + "', " + params.quantidadeTempo + ", '" + params.horaNotificacao + "')", res, (results) => {
        res.json(results);
      });
  }
});

app.listen(config.serverPort, function () {
  console.log('http://localhost:' + config.serverPort);
});
