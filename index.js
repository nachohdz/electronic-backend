const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;

app.use(cors());

app.get('/resistencias', (req, res) => {
    res.json(RESISTENCIAS);
});

const RESISTENCIAS = [
    {
        label: 'Red',
        resistance: 2,
        multiplier: 100,
        tolerance: 2
    },
    {
        label: 'Brown',
        resistance: 1,
        multiplier: 10,
        tolerance: 1
    },
    {
        label: 'Black',
        resistance: 0,
        multiplier: 1,
        tolerance: 0
    },
    {
        label: 'Orange',
        resistance: 3,
        multiplier: 1000,
        tolerance: 3
    },
    {
        label: 'Yellow',
        resistance: 4,
        multiplier: 10000,
        tolerance: 4
    },
    {
        label: 'Green',
        resistance: 5,
        multiplier: 100000,
        tolerance: 0.5
    },
    {
        label: 'Blue',
        resistance: 6,
        multiplier: 1000000,
        tolerance: 0.25
    },
    {
        label: 'Violet',
        resistance: 7,
        multiplier: 10000000,
        tolerance: 0.1
    },
    {
        label: 'Gray',
        resistance: 8,
        multiplier: 100000000,
        tolerance: 0.05
    },
    {
        label: 'White',
        resistance: 9,
        multiplier: 1000000000,
        tolerance: 10
    },
    {
        label: 'Gold',
        resistance: 0,
        multiplier: 0.1,
        tolerance: 5
    },
    {
        label: 'Silver',
        resistance: 0,
        multiplier: 0.01,
        tolerance: 10
    },
    {
        label: 'None',
        resistance: -1,
        multiplier: 1,
        tolerance: 20
    },
];

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});