const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({ status: 'ok', service: 'Web Service', ts: new Date().toISOString() }));
app.get('/health', (req, res) => res.status(200).send('healthy'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
