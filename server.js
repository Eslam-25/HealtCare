const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(express.static('./dist'));

app.get('/*', (req, res) => res.sendFile('index.html', {root: 'dist/'}));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})