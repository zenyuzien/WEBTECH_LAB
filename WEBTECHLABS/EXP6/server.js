
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'));

app.get('/api/message', (req, res) => {
    const message = req.query.message || 'No message provided';
    res.json({ message });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
