const express = require('express');
const app = express();

app.get('/fibonacci/:n', (req, res) => {
    const n = req.params.n;
    let fibonacci = [];
    let a = 0, b = 1;
    while (fibonacci.length < n) {
        let c = a + b;
        if (c % 2 !== 0) {
            fibonacci.push(c);
        }
        a = b;
        b = c;
    }
    res.send(fibonacci.reverse().join(" "));
});

app.listen(5000, () => {
    console.log('Fibonacci API Running 5000!');
});
