const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
	new Date;
	const currentTimestamp = Date.now()
	console.log(`new request received at ${currentTimestamp}`);
	return res.json({ timestamp: currentTimestamp });
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`listenning at http://localhost:${PORT}`);
});
