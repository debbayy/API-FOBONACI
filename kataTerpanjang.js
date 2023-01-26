const express = require('express')
const app = express()
const port = 3000

app.get('/longestword', (req, res) => {
    let string2 = req.query.string2;
    let currentWord = 1;
    let longestWord = 0;

    // console.log(charCodeAt,"ini apaan")
    let i = 0;
    while (i < string2.length - 1) {
        console.log(string2.charCodeAt(i) + 1 === string2.charCodeAt(i + 1),"ini nilainya jika sama ")
        if (string2.charCodeAt(i) + 1 === string2.charCodeAt(i + 1)) {
            // currentWord++;
            console.log(currentWord++,"ini gimana hitungga")
        } else {
            if (currentWord > longestWord) {
                longestWord = currentWord;
            }
            currentWord = 1;
        }
        i++;
    }
    if (currentWord > longestWord) {
        longestWord = currentWord;
    }
    res.send({longestWord: longestWord});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})