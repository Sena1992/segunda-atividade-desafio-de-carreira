const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/funcaoSegundoGrau', function(req, res){

	let {a, b, c} = req.query;

	if (!a){
		return res.status(400).send('O valor de "a" deve ser informado!');
	}else if (a == 0){
		return res.status(400).send('O valor de "a" deve ser diferente de 0, pois trata-se de uma função do 2° grau!');
	}else if (!b){
		return res.status(400).send('O valor de "b" deve ser informado!');
	}else if (!c){
		return res.status(400).send('O valor de "c" deve ser informado!');
	};

	let delta = b**2 - 4*a*c;

	let xLinha = (-b + Math.sqrt(delta))/2*a;
	let xLinha2 = (-b - Math.sqrt(delta))/2*a;

	return res.send(`O valor de x¹ é: ${xLinha},
	e x² é: ${xLinha2}`);
});


app.listen(3000, (req, res) => {
	console.log("Servidor Iniciado!");
});