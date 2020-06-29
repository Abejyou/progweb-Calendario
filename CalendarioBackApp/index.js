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

router.get('/eventospormes', (req, res) => {
  const params = req.query;
  const sqlQuery = `
            SELECT * FROM evento 
            JOIN usuario_evento ON evento.id = usuario_evento.id_evento
            WHERE ((MONTH(data_inicio) = ${params.mes} AND YEAR(data_inicio) = ${params.ano})
            OR    (MONTH(data_fim) =  ${params.mes} AND YEAR(data_fim) = ${params.ano}))
            AND usuario_evento.id_usuario = ${params.usuario} `;
  execQuery(sqlQuery, res, results => res.json(results));

});

router.get('/eventospordia', (req, res) => {
  const params = req.query;
  const sqlQuery = `
                      SELECT * FROM evento  
                      JOIN usuario_evento ON usuario_evento.id_evento = evento.id
                      WHERE '${params.dia}' BETWEEN DATE(data_inicio) AND  DATE(data_fim)
                      AND usuario_evento.id_usuario = ${params.usuario}
                   `;

  execQuery(sqlQuery, res, results => res.json(results));
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

router.post('/cadastro', (req, res) => {
  execQuery("SELECT * FROM usuario WHERE usuario.email LIKE '" + req.query.emailcadastro + "'", res, (data) => {
    if (!data) {
      execQuery("INSERT usuario (nome, email, senha)" +
        " VALUES('" + req.query.nomecadastro + "', '" + req.query.emailcadastro + "', '" + req.query.senhacadastro + "')", res, (results) => {
          res.json(results);
          res.status(200);
        });
    } else {
      console.log("Email já cadastrado.");
    }
  });
})

router.post('/login', (req, res) => {
  var params = req.query;
  const teste = `SELECT * FROM usuario WHERE usuario.email LIKE '${params.emaillogin}' AND usuario.senha LIKE '${params.senhalogin}'`
  execQuery(teste, res, results => {
    if (results){
      res.json({ message: 'Logado!' })
    }
    else{
      res.json({error: 'Não foi possivel logar.'})
    }
  
  });


})


app.listen(config.serverPort, function () {
  console.log('http://localhost:' + config.serverPort);
});
