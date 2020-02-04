const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

	res.send('Hello All!');

});

app.get('/bonk', (req, res) => {
	res.set('X-full-stack', 'bois');
	res.status(418);
	res.send('I prefer coffee');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));