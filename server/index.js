const express = require('express');
const app = express();
const PORT = process.env.PORT || 5173

app.listen(PORT, () => {
    console.log('Server listening on Port: 5173');
})

app.use(express.static("dist"));

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

app.get('/api/SebasPortfolio', (req, res) => {
    res.send(SebasPortfolio);
})
