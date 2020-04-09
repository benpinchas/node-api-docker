const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('hello world, third edition'));

const PORT = 3000;
app.listen(PORT, () => {
	console.log('app is listening at port:' + PORT);
});
