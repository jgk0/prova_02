var mysql = require('mysql');
const convert = require('./convert');
const values = convert.json_to_array;
const fs = require('fs');
const senha = fs.readFileSync('C:/Users/João Gabriel/Desktop/Pessoal/senha mysql.txt', 'utf8');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: '3306',
    password: senha,
    database: 'jogos_olimpicos'
})

connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("conexão efetuada com sucesso!");
        var query = "INSERT INTO esportes(id,modalidade,tipo,distancia,sexo,local) VALUES ?";
        connection.query(query, [values], function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log('Foi inserido %s linhas',
                    result.affectedRows);
                    
            }
        })

    }
})

