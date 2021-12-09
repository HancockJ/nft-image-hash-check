const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: "Jack", lastName: "Hancock"},
        {id: 2, firstName: "Jim", lastName: "Bean"},
        {id: 3, firstName: "John", lastName: "Doe"},
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));