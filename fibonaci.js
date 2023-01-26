const express = require('express');
const app = express();
const port = 3000

app.get('/fibonacci', (req, res) => {
   
    let nilai = req.query.nilai;
    let fibonacci = [];
    let a = 0, b = 1;
    while (fibonacci.length < nilai) {
        let c = a + b;
        if (c % 2 !== 0) {
            fibonacci.push(c);
        }
        a = b;
        b = c;
    }
    res.send({data:fibonacci.reverse().join(" ")});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})