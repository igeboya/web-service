const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({ status: 'ok', service: 'BNB Chain Utility', ts: new Date().toISOString() }));
app.get('/health', (req, res) => res.status(200).send('healthy'));
app.get('/price', async (req, res) => {
  try {
    const r = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT');
    const j = await r.json();
    res.json({ symbol: 'BNB/USDT', price: j.price });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
