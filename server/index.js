const express = require('express');
const app = express();
const PORT = process.env.PORT || 5151

app.get('/api/SebasPortfolio', (req, res) => {
    res.send(SebasPortfolio);
})

app.listen(PORT, () => {
    console.log('Server listening on Port: 5151');
})

const SebasPortfolio = [
    {
        name: "Laptop",
        price: 500,
    },
    {
        name: "Desktop",
        price: 700,
    },
];
